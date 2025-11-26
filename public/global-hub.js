// global-hub.js
(function () {
  // Same presets as settings page
  const TAB_PRESETS = {
    default: {
      title: "Scramjet Hub",
      favicon: "favicon.webp",
    },
    gdocs: {
      title: "Untitled document - Google Docs",
      favicon: "https://ssl.gstatic.com/docs/doclist/images/drive_icon_16.png",
    },
    gclass: {
      title: "Classes",
      favicon: "https://ssl.gstatic.com/classroom/favicon.png",
    },
    gdrive: {
      title: "My Drive - Google Drive",
      favicon: "https://ssl.gstatic.com/docs/doclist/images/drive_16.png",
    },
    khan: {
      title: "Dashboard | Khan Academy",
      favicon: "https://cdn.kastatic.org/images/favicon.ico",
    },
  };

  function getFaviconLinks() {
    const links = Array.from(
      document.querySelectorAll(
        'link[rel="icon"], link[rel="shortcut icon"]'
      )
    );
    if (links.length > 0) return links;

    const link = document.createElement("link");
    link.rel = "icon";
    document.head.appendChild(link);
    return [link];
  }

  function applySavedTabCloak() {
    const mode = localStorage.getItem("sjTabMode") || "preset";
    const presetKey = localStorage.getItem("sjTabPreset") || "default";
    const savedTitle = localStorage.getItem("sjTabTitle") || "";
    const savedFav = localStorage.getItem("sjTabFavicon") || "";

    let finalTitle = document.title || "Scramjet Hub";
    let finalFav = null;

    if (mode === "custom") {
      if (savedTitle) finalTitle = savedTitle;
      if (savedFav) finalFav = savedFav;
    } else {
      const p = TAB_PRESETS[presetKey] || TAB_PRESETS.default;
      finalTitle = p.title;
      finalFav = p.favicon;
    }

    document.title = finalTitle;

    if (finalFav) {
      const links = getFaviconLinks();
      links.forEach((l) => (l.href = finalFav));
    }
  }

  function applySavedTheme() {
    const mode = localStorage.getItem("sjTheme") || "dark";
    if (mode === "light") {
      document.body.classList.add("theme-light");
    } else {
      document.body.classList.remove("theme-light");
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    applySavedTheme();
    applySavedTabCloak();
  });
})();
