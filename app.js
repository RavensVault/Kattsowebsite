const navItems = [
  ["Accueil", "index.html", "accueil"],
  ["Lore & avatar", "lore.html", "lore"],
  ["Valeurs", "valeurs.html", "valeurs"],
  ["Projets", "projets.html", "projets"],
  ["Réseaux", "reseaux.html", "reseaux"]
];

const page = document.body.dataset.page || "accueil";
const header = document.querySelector("[data-site-header]");
const footer = document.querySelector("[data-site-footer]");

if (header) {
  const links = navItems.map(([label, href, id]) => {
    const current = page === id ? ' aria-current="page" class="nav-link is-current"' : ' class="nav-link"';
    return '<a href="' + href + '"' + current + '>' + label + '</a>';
  }).join("");
  header.className = "site-header";
  header.innerHTML =
    '<div class="header-inner">' +
      '<a class="brand" href="index.html" aria-label="Kattso, accueil">' +
        '<img src="assets/ravensvault-logo.png" alt="" width="52" height="52">' +
        '<span class="brand-type"><strong>KATTSO</strong><small>un projet Ravensvault</small></span>' +
      '</a>' +
      '<button class="menu-toggle" type="button" aria-expanded="false" aria-controls="site-navigation"><span></span><span></span><span></span><span class="visually-hidden">Ouvrir le menu</span></button>' +
      '<nav class="site-nav" id="site-navigation" aria-label="Navigation principale">' + links + '<a class="nav-contact" href="mailto:contact@ravensvault.eu">Me contacter <span aria-hidden="true">↗</span></a></nav>' +
    '</div>';
  const toggle = header.querySelector(".menu-toggle");
  const nav = header.querySelector(".site-nav");
  toggle.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!expanded));
    nav.classList.toggle("is-open", !expanded);
    toggle.classList.toggle("is-open", !expanded);
  });
  nav.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      nav.classList.remove("is-open");
      toggle.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });
}

if (footer) {
  footer.className = "site-footer";
  footer.innerHTML =
    '<div class="footer-main">' +
      '<div class="footer-brand"><a class="footer-logo" href="index.html"><img src="assets/ravensvault-logo.png" alt="Logo Ravensvault" width="78" height="78"></a><div><p class="footer-overline">UN PROJET VTUBER</p><p class="footer-name">La tanière de Kattso</p><p class="footer-tagline">Une porte entrouverte, à son propre rythme.</p></div></div>' +
      '<div class="footer-contact"><span class="footer-overline">LE COURRIER EST OUVERT</span><a href="mailto:contact@ravensvault.eu">contact@ravensvault.eu <span aria-hidden="true">↗</span></a></div>' +
      '<div class="footer-navigation"><span class="footer-overline">EN UN CLIN D’ŒIL</span><div><a href="lore.html">Lore & avatar</a><a href="valeurs.html">Valeurs</a><a href="projets.html">Projets</a><a href="reseaux.html">Réseaux</a></div></div>' +
    '</div>' +
    '<div class="footer-bottom"><span>© <span data-year></span> Kattso · Projet personnel non lucratif</span><div class="footer-legal"><a href="mentions-belgique.html">Mentions légales</a></div><a class="back-top" href="#top">Retour en haut ↑</a></div>';
  footer.querySelector("[data-year]").textContent = new Date().getFullYear();
  const backToTop = footer.querySelector(".back-top");
  if (backToTop) {
    backToTop.addEventListener("click", (event) => {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
}
