// global-hub.js
// Shared settings: tab cloaking + accent color + global theme/background across all pages.

(function () {
  const ACCENT_KEY = "s0laceAccent";
  const CLOAK_KEY = "s0laceTabCloak";

  const THEME_KEY = "s0laceTheme";
  const BG_MODE_KEY = "s0laceBgMode";
  const BG_URL_KEY = "s0laceBgUrl";
  const MEDIA_CACHE_KEY = "s0laceMediaCache";

  const STAR_GIF = "https://i.ibb.co/3mJFWyY/starfield-loop.gif";

  const ACCENTS = {
    green: {
      accent: "#00ff7f",
      soft: "rgba(0, 255, 127, 0.12)",
    },
    violet: {
      accent: "#a855f7",
      soft: "rgba(168, 85, 247, 0.12)",
    },
    amber: {
      accent: "#fbbf24",
      soft: "rgba(251, 191, 36, 0.12)",
    },
    white: {
      accent: "#ffffff",
      soft: "rgba(255, 255, 255, 0.18)",
    },
  };

  function setCssVar(name, value) {
    document.documentElement.style.setProperty(name, value);
  }

  // ---------- ACCENT THEME ----------

  function applyAccent(accentKey, save = true) {
    const preset = ACCENTS[accentKey] || ACCENTS.green;
    setCssVar("--accent", preset.accent);
    setCssVar("--accent-soft", preset.soft);
    if (save) {
      try {
        localStorage.setItem(ACCENT_KEY, accentKey);
      } catch (_) {}
    }
  }

  function loadAccent() {
    let stored;
    try {
      stored = localStorage.getItem(ACCENT_KEY);
    } catch (_) {
      stored = null;
    }
    if (!stored || !ACCENTS[stored]) stored = "green";
    applyAccent(stored, false);
    return stored;
  }

  // ---------- TAB CLOAKING ----------

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

    const title = cfg.title || document.title;
    const iconHref = cfg.iconHref || "";

    document.title = title;

    if (iconHref) {
      const link = getOrCreateFaviconLink();
      link.href = iconHref;
    }

    if (save) {
      try {
        localStorage.setItem(
          CLOAK_KEY,
          JSON.stringify({
            enabled: true,
            title,
            iconHref,
          })
        );
      } catch (_) {}
    }
  }

  function clearTabCloak(save = true) {
    const originalTitle = document.documentElement.getAttribute(
      "data-original-title"
    );
    if (originalTitle) document.title = originalTitle;

    if (save) {
      try {
        localStorage.removeItem(CLOAK_KEY);
      } catch (_) {}
    }
  }

  function loadTabCloak() {
    let raw;
    try {
      raw = localStorage.getItem(CLOAK_KEY);
    } catch (_) {
      raw = null;
    }
    if (!raw) return null;

    try {
      const parsed = JSON.parse(raw);
      if (!parsed || !parsed.enabled) return null;
      applyTabCloak(parsed, false);
      return parsed;
    } catch (_) {
      return null;
    }
  }

  // ---------- THEME (dark/light/baby/xmas) ----------

  function applyTheme(theme, save = true) {
    const t = theme || "dark";
    document.documentElement.setAttribute("data-theme", t);
    if (save) {
      try {
        localStorage.setItem(THEME_KEY, t);
      } catch (_) {}
    }
  }

  function loadTheme() {
    let stored;
    try {
      stored = localStorage.getItem(THEME_KEY);
    } catch (_) {
      stored = null;
    }
    if (!stored) stored = "dark";
    applyTheme(stored, false);
    return stored;
  }

  // ---------- BACKGROUND (default / gif / custom) ----------

  function applyBackground(mode, url, save = true) {
    const body = document.body;
    const m = mode || "default";

    // reset inline overrides
    body.style.backgroundImage = "";
    body.style.backgroundSize = "";
    body.style.backgroundAttachment = "";

    if (m === "gif-stars") {
      body.style.backgroundImage = `url("${STAR_GIF}")`;
      body.style.backgroundSize = "cover";
      body.style.backgroundAttachment = "fixed";
    } else if (m === "custom" && url) {
      body.style.backgroundImage = `url("${url}")`;
      body.style.backgroundSize = "cover";
      body.style.backgroundAttachment = "fixed";
    }

    if (save) {
      try {
        localStorage.setItem(BG_MODE_KEY, m);
        if (m === "custom" && url) {
          localStorage.setItem(BG_URL_KEY, url);
        } else {
          localStorage.removeItem(BG_URL_KEY);
        }
      } catch (_) {}
    }
  }

  function loadBackground() {
    let mode, url;
    try {
      mode = localStorage.getItem(BG_MODE_KEY) || "default";
      url = localStorage.getItem(BG_URL_KEY) || "";
    } catch (_) {
      mode = "default";
      url = "";
    }
    applyBackground(mode, url, false);
    return { mode, url };
  }

  // ---------- LOAD ON EVERY PAGE ----------

  function bootstrap() {
    if (!document.documentElement.getAttribute("data-original-title")) {
      document.documentElement.setAttribute(
        "data-original-title",
        document.title
      );
    }

    const activeAccent = loadAccent();
    const activeTheme = loadTheme();
    const bgState = loadBackground();
    loadTabCloak();

    const evt = new CustomEvent("s0lace:settingsLoaded", {
      detail: {
        accent: activeAccent,
        theme: activeTheme,
        bgMode: bgState.mode,
        bgUrl: bgState.url,
      },
    });
    window.dispatchEvent(evt);
  }

  document.addEventListener("DOMContentLoaded", bootstrap);

  // expose helpers for settings.html
  window.S0LACE = {
    applyAccent,
    applyTabCloak,
    clearTabCloak,
    loadAccent,
    applyTheme,
    loadTheme,
    applyBackground,
    loadBackground,
    MEDIA_CACHE_KEY, // if you want to use it elsewhere
  };
})();
