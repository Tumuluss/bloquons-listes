// Liens publics vers les stores.
// Laisse une chaîne vide tant qu'un lien n'est pas disponible.
const STORE_URLS = {
  chrome: "https://chromewebstore.google.com/detail/ifiehalekikjoaikjfmdhnnnflgbolcf?utm_source=item-share-cb",
  firefox: "https://addons.mozilla.org/firefox/addon/bloquons-l-extrême-droite/"
};

function configureStoreButtons() {
  const lang = document.documentElement.lang || "fr";

  const configs = [
    {
      id: "chromeButton",
      url: STORE_URLS.chrome,
      readyKey: "chromeInstall",
      pendingKey: "chromeSoon"
    },
    {
      id: "firefoxButton",
      url: STORE_URLS.firefox,
      readyKey: "firefoxInstall",
      pendingKey: "firefoxSoon"
    }
  ];

  let anyReady = false;

  for (const config of configs) {
    const button = document.getElementById(config.id);
    if (!button) continue;

    if (config.url && /^https?:\/\//i.test(config.url)) {
      button.href = config.url;
      button.textContent = t(config.readyKey, lang);
      button.classList.remove("is-disabled");
      button.removeAttribute("aria-disabled");
      button.target = "_blank";
      anyReady = true;
    } else {
      button.href = "#";
      button.textContent = t(config.pendingKey, lang);
      button.classList.add("is-disabled");
      button.setAttribute("aria-disabled", "true");
      button.removeAttribute("target");
    }
  }

  const notice = document.getElementById("storeNotice");
  if (notice) notice.hidden = anyReady;
}

document.addEventListener("DOMContentLoaded", configureStoreButtons);
window.addEventListener("bloquons-language-change", configureStoreButtons);
