// global-hub.js
// S0LACE central settings manager — accents, themes, backgrounds,
// tab cloak, about:blank launcher, anti-close, panic button, xmas decorations.

(function () {
  const ACCENT_KEY = "s0laceAccent";
  const CLOAK_KEY = "s0laceTabCloak";

  const THEME_KEY = "s0laceTheme";
  const BG_MODE_KEY = "s0laceBgMode";
  const BG_URL_KEY = "s0laceBgUrl";
  const MEDIA_CACHE_KEY = "s0laceMediaCache";

  const ABOUTBLANK_KEY = "s0laceAboutBlank";
  const ANTICLOSE_KEY = "s0laceAntiClose";
  const PANIC_KEY = "s0lacePanicConfig";

  const STAR_GIF = "https://i.ibb.co/3mJFWyY/starfield-loop.gif";

  const ACCENTS = {
    green: { accent: "#00ff7f", soft: "rgba(0,255,127,0.12)" },
    violet: { accent: "#a855f7", soft: "rgba(168,85,247,0.12)" },
    amber: { accent: "#fbbf24", soft: "rgba(251,191,36,0.12)" },
    white: { accent: "#ffffff", soft: "rgba(255,255,255,0.18)" },
  };

  // ---------- UTIL ----------
  function setCssVar(name, value) {
    document.documentElement.style.setProperty(name, value);
  }

  // ---------- ACCENT ----------
  function applyAccent(accentKey, save = true) {
    const preset = ACCENTS[accentKey] || ACCENTS.green;
    setCssVar("--accent", preset.accent);
    setCssVar("--accent-soft", preset.soft);

    if (save) localStorage.setItem(ACCENT_KEY, accentKey);
  }

  function loadAccent() {
    const stored = localStorage.getItem(ACCENT_KEY);
    const key = stored && ACCENTS[stored] ? stored : "green";
    applyAccent(key, false);
    return key;
  }

  // ---------- TAB CLOAK ----------
  function getOrCreateFaviconLink() {
    let link =
      document.querySelector('link[rel="shortcut icon"]') ||
      document.querySelector('link[rel="icon"]');
    if (!link) {
      link = document.createElement("link");
      link.rel = "shortcut icon";
      document.head.appendChild(link);
    }
    return link;
  }

  function applyTabCloak(cfg, save = true) {
    if (!cfg || !cfg.enabled) return;

    document.title = cfg.title || document.title;

    if (cfg.iconHref) {
      const link = getOrCreateFaviconLink();
      link.href = cfg.iconHref;
    }

    if (save) localStorage.setItem(CLOAK_KEY, JSON.stringify(cfg));
  }

  function clearTabCloak(save = true) {
    const original = document.documentElement.getAttribute("data-original-title");
    if (original) document.title = original;

    if (save) localStorage.removeItem(CLOAK_KEY);
  }

  function loadTabCloak() {
    const raw = localStorage.getItem(CLOAK_KEY);
    if (!raw) return;
    try {
      const cfg = JSON.parse(raw);
      if (cfg.enabled) applyTabCloak(cfg, false);
    } catch (_) {}
  }

  // ---------- THEME ----------
  function applyTheme(theme, save = true) {
    document.documentElement.setAttribute("data-theme", theme);
    if (save) localStorage.setItem(THEME_KEY, theme);
  }

  function loadTheme() {
    let t = localStorage.getItem(THEME_KEY);
    if (!t) t = "dark";

    // AUTO-XMAS (Dec 1–31)
    const now = new Date();
    const isDecember = now.getMonth() === 11;
    if (isDecember && t !== "xmas") {
      t = "xmas";
      localStorage.setItem(THEME_KEY, "xmas");
    }

    applyTheme(t, false);
    return t;
  }

  // ---------- BACKGROUND ----------
  function applyBackground(mode, url, save = true) {
    const body = document.body;
    body.style.backgroundImage = "";
    body.style.backgroundSize = "";
    body.style.backgroundAttachment = "";

    if (mode === "gif-stars") {
      body.style.backgroundImage = `url("${STAR_GIF}")`;
      body.style.backgroundSize = "cover";
      body.style.backgroundAttachment = "fixed";
    } else if (mode === "custom" && url) {
      body.style.backgroundImage = `url("${url}")`;
      body.style.backgroundSize = "cover";
      body.style.backgroundAttachment = "fixed";
    }

    if (save) {
      localStorage.setItem(BG_MODE_KEY, mode);
      if (mode === "custom") localStorage.setItem(BG_URL_KEY, url || "");
      else localStorage.removeItem(BG_URL_KEY);
    }
  }

  function loadBackground() {
    const mode = localStorage.getItem(BG_MODE_KEY) || "default";
    const url = localStorage.getItem(BG_URL_KEY) || "";
    applyBackground(mode, url, false);
    return { mode, url };
  }

  // ---------- PANIC BUTTON ----------
  function applyPanicConfig(cfg, save = true) {
    if (save) localStorage.setItem(PANIC_KEY, JSON.stringify(cfg));
  }

  function loadPanicConfig() {
    const raw = localStorage.getItem(PANIC_KEY);
    if (!raw) return null;

    try {
      return JSON.parse(raw);
    } catch (_) {
      return null;
    }
  }

  // ---------- ABOUT:BLANK LAUNCH ----------
  function launchIntoAboutBlankIfEnabled() {
    const enabled = localStorage.getItem(ABOUTBLANK_KEY) === "1";
    if (!enabled) return;

    // Prevent infinite loops
    if (window.top !== window.self) return;

    const url = window.location.href;
    const win = window.open("about:blank", "_blank");

    if (!win) return; // popup blocked

    win.document.write(`<iframe src="${url}" style="border:0;position:fixed;inset:0;width:100vw;height:100vh;"></iframe>`);
    win.document.close();
    window.location.replace("https://google.com"); // hide opener
  }

  // ---------- ANTI-CLOSE ----------
  function installAntiCloseIfEnabled() {
    const enabled = localStorage.getItem(ANTICLOSE_KEY) === "1";
    if (!enabled) return;

    window.onbeforeunload = () =>
      "Are you sure you want to close this page?";
  }

  // ---------- XMAS DECORATIONS ----------
  function addXmasDecorIfNeeded(theme) {
    if (theme !== "xmas") return;

    const snow = document.createElement("div");
    snow.className = "xmas-snow";
    document.body.appendChild(snow);

    const garland = document.createElement("div");
    garland.className = "xmas-garland";
    document.body.appendChild(garland);
  }

  // ---------- BOOTSTRAP ----------
  function bootstrap() {
    document.documentElement.setAttribute("data-original-title", document.title);

    launchIntoAboutBlankIfEnabled();
    installAntiCloseIfEnabled();

    const accent = loadAccent();
    const theme = loadTheme();
    const bg = loadBackground();
    addXmasDecorIfNeeded(theme);
    loadTabCloak();

    const evt = new CustomEvent("s0lace:settingsLoaded", {
      detail: { accent, theme, bgMode: bg.mode, bgUrl: bg.url },
    });
    window.dispatchEvent(evt);
  }

  document.addEventListener("DOMContentLoaded", bootstrap);

  // expose
  window.S0LACE = {
    applyAccent,
    applyTabCloak,
    clearTabCloak,
    applyTheme,
    applyBackground,
    applyPanicConfig,
  };
})();
