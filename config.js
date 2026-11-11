// Ajoute ici les liens publics de tes fiches de store.
// Laisse une chaîne vide tant qu'un lien n'est pas disponible.
const STORE_URLS = {
  chrome: "https://chromewebstore.google.com/detail/ifiehalekikjoaikjfmdhnnnflgbolcf?utm_source=item-share-cb",
  firefox: "https://addons.mozilla.org/firefox/addon/bloquons-l-extrême-droite/"
};

function configureStoreButton(id, url, readyLabel, pendingLabel) {
  const button = document.getElementById(id);
  if (!button) return false;

  if (url && /^https?:\/\//i.test(url)) {
    button.href = url;
    button.textContent = readyLabel;
    button.classList.remove("is-disabled");
    button.removeAttribute("aria-disabled");
    return true;
  }

  button.href = "#";
  button.textContent = pendingLabel;
  button.classList.add("is-disabled");
  button.setAttribute("aria-disabled", "true");
  button.removeAttribute("target");
  return false;
}

const chromeReady = configureStoreButton(
  "chromeButton",
  STORE_URLS.chrome,
  "Installer sur Chrome",
  "Chrome — bientôt disponible"
);

const firefoxReady = configureStoreButton(
  "firefoxButton",
  STORE_URLS.firefox,
  "Installer sur Firefox",
  "Firefox — bientôt disponible"
);

const notice = document.getElementById("storeNotice");
if (notice) notice.hidden = chromeReady || firefoxReady;
