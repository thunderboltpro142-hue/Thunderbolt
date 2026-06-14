/* THUNDERBOLT — menu mobile + bascule de langue FR/EN */

var I18N = {
  fr: {
    "nav.home": "Accueil",
    "nav.contact": "Contact",
    "nav.shop": "Boutique",
    "foot.note": "© 2026 Thunderbolt — <span class=\"store\">thunderbolt.store</span> · Brodé en France",
    "title.home": "Thunderbolt — Plus qu'une casquette, une identité",
    "title.prod": "La Casquette — Thunderbolt",
    "title.contact": "Contact — Thunderbolt",
    // Accueil
    "home.eyebrow": "<span class=\"dot\"></span>Atelier · Brodé en France",
    "home.h1": "Plus qu'une casquette,<br><span class=\"grad-text\">une identité.</span>",
    "home.lede": "Une pièce sobre et reconnaissable, brodée fil par fil et pensée pour être portée tous les jours.",
    "home.cta1": "Découvrir la casquette",
    "home.cta2": "Nous écrire",
    "home.trust": "<b>Qualité</b> — <b>Brodé</b> — <b>Made in France</b>",
    "feat.eyebrow": "<span class=\"dot\"></span>Le souci du détail",
    "feat1.t": "Qualité",
    "feat1.p": "Coton épais et finitions soignées, pour une casquette qui tient dans le temps.",
    "feat2.t": "Brodé",
    "feat2.p": "Le logo éclair est brodé fil par fil — relief et tenue, jamais un simple imprimé.",
    "feat3.t": "Made in France",
    "feat3.p": "Brodée en France, dans une démarche locale et maîtrisée de bout en bout.",
    "brand.eyebrow": "<span class=\"dot\"></span>La marque",
    "brand.h2": "Sobre, brodée,<br>faite pour durer.",
    "brand.p": "Pas de surenchère. Une pièce essentielle, soignée dans le moindre détail, qui devient vite la casquette que l'on porte partout.",
    "brand.cta": "Voir la casquette",
    // Produit
    "prod.eyebrow": "<span class=\"dot\"></span>Édition · Brodé en France",
    "prod.h1": "La Casquette<br>Thunderbolt",
    "prod.price": "30 €",
    "prod.priceMeta": "+ 5 € de livraison",
    "prod.priceTotal": "<b>35 €</b> livré · taille unique réglable",
    "prod.desc": "Casquette blanche, logo éclair brodé fil par fil. Sobre, reconnaissable, conçue pour être portée tous les jours.",
    "spec1": "Coton épais, finitions soignées",
    "spec2": "Logo éclair brodé, pas imprimé",
    "spec3": "Réglable — taille unique",
    "spec4": "Brodé en France",
    "prod.buy": "Acheter — 35 € livré",
    "prod.ship": "Paiement sécurisé · Carte, Apple&nbsp;Pay &amp; Google&nbsp;Pay<br>Adresse renseignée au paiement · Expédié sous 3–5 jours ouvrés",
    // Contact
    "contact.eyebrow": "<span class=\"dot\"></span>Contact",
    "contact.h1": "Une question&nbsp;?<br>Écris-nous.",
    "contact.p": "Casquette, commande, idée de collab — on répond vite.",
    "label.name": "Nom",
    "label.email": "Email",
    "label.message": "Message",
    "contact.send": "Envoyer le message"
  },
  en: {
    "nav.home": "Home",
    "nav.contact": "Contact",
    "nav.shop": "Shop",
    "foot.note": "© 2026 Thunderbolt — <span class=\"store\">thunderbolt.store</span> · Embroidered in France",
    "title.home": "Thunderbolt — More than a cap, an identity",
    "title.prod": "The Cap — Thunderbolt",
    "title.contact": "Contact — Thunderbolt",
    // Home
    "home.eyebrow": "<span class=\"dot\"></span>Workshop · Embroidered in France",
    "home.h1": "More than a cap,<br><span class=\"grad-text\">an identity.</span>",
    "home.lede": "A clean, recognizable piece, embroidered thread by thread and made to be worn every day.",
    "home.cta1": "Discover the cap",
    "home.cta2": "Get in touch",
    "home.trust": "<b>Quality</b> — <b>Embroidered</b> — <b>Made in France</b>",
    "feat.eyebrow": "<span class=\"dot\"></span>Attention to detail",
    "feat1.t": "Quality",
    "feat1.p": "Thick cotton and careful finishing, for a cap that lasts.",
    "feat2.t": "Embroidered",
    "feat2.p": "The bolt logo is embroidered thread by thread — texture and durability, never a simple print.",
    "feat3.t": "Made in France",
    "feat3.p": "Embroidered in France, with a local, fully controlled approach.",
    "brand.eyebrow": "<span class=\"dot\"></span>The brand",
    "brand.h2": "Clean, embroidered,<br>made to last.",
    "brand.p": "No excess. An essential piece, refined down to the last detail, that quickly becomes the cap you wear everywhere.",
    "brand.cta": "See the cap",
    // Product
    "prod.eyebrow": "<span class=\"dot\"></span>Edition · Embroidered in France",
    "prod.h1": "The Thunderbolt<br>Cap",
    "prod.price": "€30",
    "prod.priceMeta": "+ €5 shipping",
    "prod.priceTotal": "<b>€35</b> delivered · one adjustable size",
    "prod.desc": "White cap, bolt logo embroidered thread by thread. Clean, recognizable, made to be worn every day.",
    "spec1": "Thick cotton, careful finishing",
    "spec2": "Embroidered bolt logo, not printed",
    "spec3": "Adjustable — one size",
    "spec4": "Embroidered in France",
    "prod.buy": "Buy — €35 delivered",
    "prod.ship": "Secure payment · Card, Apple&nbsp;Pay &amp; Google&nbsp;Pay<br>Address entered at checkout · Shipped within 3–5 business days",
    // Contact
    "contact.eyebrow": "<span class=\"dot\"></span>Contact",
    "contact.h1": "A question?<br>Write to us.",
    "contact.p": "Cap, order, collab idea — we reply fast.",
    "label.name": "Name",
    "label.email": "Email",
    "label.message": "Message",
    "contact.send": "Send message"
  }
};

function getLang() {
  try { return localStorage.getItem("tb_lang") || "fr"; } catch (e) { return "fr"; }
}
function saveLang(l) {
  try { localStorage.setItem("tb_lang", l); } catch (e) {}
}

function applyLang(lang) {
  var dict = I18N[lang] || I18N.fr;
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(function (el) {
    var k = el.getAttribute("data-i18n");
    if (dict[k] != null) el.innerHTML = dict[k];
  });
  var tkey = document.body.getAttribute("data-title");
  if (tkey && dict[tkey]) document.title = dict[tkey];
  document.querySelectorAll(".lang button").forEach(function (b) {
    var on = b.getAttribute("data-lang") === lang;
    b.classList.toggle("active", on);
    b.setAttribute("aria-pressed", on ? "true" : "false");
  });
  saveLang(lang);
}

document.addEventListener("DOMContentLoaded", function () {
  // Menu mobile
  var burger = document.querySelector(".burger");
  var links = document.querySelector(".nav-links");
  if (burger && links) {
    burger.addEventListener("click", function () {
      links.classList.toggle("open");
      burger.setAttribute("aria-expanded", links.classList.contains("open") ? "true" : "false");
    });
  }
  // Apparition au scroll
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("in"); });
  }

  // Bascule de langue
  document.querySelectorAll(".lang button").forEach(function (b) {
    b.addEventListener("click", function () { applyLang(b.getAttribute("data-lang")); });
  });
  applyLang(getLang());
});
