/*
 * MASSA STUDIO — Cardápio digital demonstrativo
 * Edite CONFIG.whatsapp para ativar o pedido via WhatsApp.
 * Digite apenas DDI + DDD + telefone, sem espaços: ex. 5511999999999.
 */
const CONFIG = {
  whatsapp: "",
  currency: "BRL",
  brand: "Massa Studio",
};

const SIZE_OPTIONS = [
  { id: "kids", label: "Kids", subtitle: "Uma vontade", price: 19.9 },
  { id: "individual", label: "Individual", subtitle: "Meu momento", price: 29.9 },
  { id: "dupla", label: "Para 2", subtitle: "Pra compartilhar", price: 52.9 },
  { id: "familia", label: "Família", subtitle: "Todo mundo junto", price: 79.9 },
];
const PASTA_OPTIONS = [
  { id: "penne", label: "Penne", emoji: "◈" },
  { id: "espaguete", label: "Espaguete", emoji: "≈" },
  { id: "talharim", label: "Talharim", emoji: "≋" },
  { id: "nhoque", label: "Nhoque", emoji: "◌" },
  { id: "gravata", label: "Gravata", emoji: "✣" },
  { id: "fusilli", label: "Fusilli", emoji: "〰" },
];
const SAUCE_OPTIONS = [
  { id: "sugo", label: "Ao sugo", subtitle: "Clássico", price: 0 },
  { id: "branco", label: "Molho branco", subtitle: "+ R$ 3,00", price: 3 },
  { id: "bolonhesa", label: "Bolonhesa", subtitle: "+ R$ 5,00", price: 5 },
  { id: "pesto", label: "Pesto", subtitle: "+ R$ 6,00", price: 6 },
  { id: "queijos", label: "Quatro queijos", subtitle: "+ R$ 7,00", price: 7 },
  { id: "frango", label: "Frango cremoso", subtitle: "+ R$ 5,00", price: 5 },
];
const EXTRA_OPTIONS = [
  { id: "parmesao", label: "Parmesão", price: 4.5 },
  { id: "tomate", label: "Tomate-cereja", price: 4 },
  { id: "frango", label: "Frango desfiado", price: 8 },
  { id: "azeitona", label: "Azeitonas", price: 3.5 },
  { id: "cogumelos", label: "Cogumelos", price: 7 },
  { id: "bacon", label: "Bacon crocante", price: 6 },
];

/* Troque descrições, valores e fotos para adaptar a outro negócio. */
const MENU = [
  { id: "p1", category: "Massas", name: "Penne della Casa", description: "Penne, molho de tomate artesanal, manjericão e parmesão.", price: 36.9, tag: "Mais amado", image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=750&q=80&fit=crop" },
  { id: "p2", category: "Massas", name: "Nhoque di Nonna", description: "Nhoque macio com molho bolonhesa de cozimento lento.", price: 42.9, tag: "Conforto", image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=750&q=80&fit=crop" },
  { id: "p3", category: "Massas", name: "Fettuccine Cremoso", description: "Fettuccine com creme de queijos e toque de pimenta-do-reino.", price: 43.9, tag: "Especial", image: "https://images.unsplash.com/photo-1556761223-4c4282c73f77?w=750&q=80&fit=crop" },
  { id: "p4", category: "Massas", name: "Lasanha da Casa", description: "Camadas de massa, molho da casa, queijo gratinado e carinho.", price: 44.9, tag: "Clássico", image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=750&q=80&fit=crop" },
  { id: "a1", category: "Acompanhamentos", name: "Focaccia da Casa", description: "Pão de fermentação lenta, azeite aromático e alecrim.", price: 14.9, tag: "Pra acompanhar", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=750&q=80&fit=crop" },
  { id: "a2", category: "Acompanhamentos", name: "Pão de Alho", description: "Crosta dourada, manteiga de alho e ervas frescas.", price: 12.9, tag: "Quentinho", image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=750&q=80&fit=crop" },
  { id: "b1", category: "Bebidas", name: "Limonada Siciliana", description: "Limão-siciliano, água gelada e hortelã fresca. 400 ml.", price: 13.9, tag: "Refrescante", image: "https://images.unsplash.com/photo-1513558161293-cdaf765edfd4?w=750&q=80&fit=crop" },
  { id: "b2", category: "Bebidas", name: "Suco de Morango", description: "Morangos batidos na hora, na medida certa. 400 ml.", price: 14.9, tag: "Natural", image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=750&q=80&fit=crop" },
  { id: "b3", category: "Bebidas", name: "Refrigerante Gelado", description: "Refrigerante em lata bem gelado. 350 ml.", price: 7.9, tag: "Combina demais", image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=750&q=80&fit=crop" },
  { id: "d1", category: "Sobremesas", name: "Tiramisù no Pote", description: "Creme aveludado, café e cacau. Uma colherada de felicidade.", price: 19.9, tag: "Doce favorito", image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=750&q=80&fit=crop" },
  { id: "d2", category: "Sobremesas", name: "Brownie da Casa", description: "Chocolate intenso, casquinha delicada e centro macio.", price: 17.9, tag: "Feito com amor", image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=750&q=80&fit=crop" },
];

const PRODUCT_STORIES = {
  p1: "O encontro da simplicidade italiana com o frescor do manjericão. Um clássico que faz qualquer pausa virar uma boa lembrança.",
  p2: "Macio como comida de domingo, com molho encorpado e sabor de casa. É conforto servido em cada garfada.",
  p3: "Para quem ama cremosidade: massa delicada, molho envolvente e um toque final de personalidade.",
  p4: "Camadas generosas, queijo gratinado e aquele momento em que a primeira garfada já diz tudo.",
  a1: "Por fora, uma casquinha dourada. Por dentro, maciez e perfume de alecrim. A companhia perfeita para o molho.",
  a2: "Quentinho, crocante e aromático. Ideal para acompanhar a massa até a última gota de molho.",
  b1: "Cítrica e fresca, para equilibrar sabores intensos e deixar a refeição ainda mais especial.",
  b2: "Uma pausa doce e refrescante, com sabor de fruta de verdade.",
  b3: "Bem gelado, borbulhante e pronto para acompanhar cada garfada.",
  d1: "Creme, café e cacau em camadas que encerram a refeição com um pequeno espetáculo.",
  d2: "Casquinha fina e centro macio: um final de chocolate para lembrar depois.",
};

const $ = (selector) => document.querySelector(selector);
const money = (value) => new Intl.NumberFormat("pt-BR", { style: "currency", currency: CONFIG.currency }).format(value);
const textSafe = (value) => String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#39;");
const getOption = (array, id) => array.find((item) => item.id === id);

let selection = { size: "individual", pasta: "penne", sauce: "sugo", extras: [] };
let activeCategory = "Todos";
let cart = [];

try {
  const stored = JSON.parse(localStorage.getItem("massa-studio-cart") || "[]");
  if (Array.isArray(stored)) {
    cart = stored.filter((item) => item && typeof item.name === "string" && Number.isFinite(item.price) && item.price >= 0 && Number.isInteger(item.qty) && item.qty > 0 && item.qty <= 99).slice(0, 50);
  }
} catch (_) { cart = []; }

function saveCart() {
  try { localStorage.setItem("massa-studio-cart", JSON.stringify(cart)); } catch (_) { /* Navegador sem armazenamento */ }
}

function customPrice() {
  const base = getOption(SIZE_OPTIONS, selection.size)?.price || 0;
  const sauce = getOption(SAUCE_OPTIONS, selection.sauce)?.price || 0;
  const extras = selection.extras.reduce((sum, id) => sum + (getOption(EXTRA_OPTIONS, id)?.price || 0), 0);
  return Math.round((base + sauce + extras) * 100) / 100;
}

function renderBuilder() {
  $("#size-options").innerHTML = SIZE_OPTIONS.map((option) => `
    <button type="button" class="option-btn ${selection.size === option.id ? "selected" : ""}" data-group="size" data-id="${option.id}" aria-pressed="${selection.size === option.id}">
      <span class="option-title">${option.label}</span><span class="option-note">${money(option.price)}</span>
    </button>`).join("");
  $("#pasta-options").innerHTML = PASTA_OPTIONS.map((option) => `
    <button type="button" class="option-btn ${selection.pasta === option.id ? "selected" : ""}" data-group="pasta" data-id="${option.id}" aria-pressed="${selection.pasta === option.id}">
      <span class="option-title">${option.emoji} &nbsp;${option.label}</span><span class="option-note">À sua escolha</span>
    </button>`).join("");
  $("#sauce-options").innerHTML = SAUCE_OPTIONS.map((option) => `
    <button type="button" class="option-btn ${selection.sauce === option.id ? "selected" : ""}" data-group="sauce" data-id="${option.id}" aria-pressed="${selection.sauce === option.id}">
      <span class="option-title">${option.label}</span><span class="option-note">${option.subtitle}</span>
    </button>`).join("");
  $("#extra-options").innerHTML = EXTRA_OPTIONS.map((option) => `
    <button type="button" class="option-btn extra-btn ${selection.extras.includes(option.id) ? "selected" : ""}" data-group="extras" data-id="${option.id}" aria-pressed="${selection.extras.includes(option.id)}">
      <span class="option-title"><span class="extra-check">${selection.extras.includes(option.id) ? "☑" : "□"}</span>${option.label}</span><span class="option-note">+ ${money(option.price)}</span>
    </button>`).join("");
  const names = [getOption(SIZE_OPTIONS, selection.size)?.label, getOption(PASTA_OPTIONS, selection.pasta)?.label, getOption(SAUCE_OPTIONS, selection.sauce)?.label];
  $("#preview-description").textContent = `${names.join(" · ")}${selection.extras.length ? ` · ${selection.extras.length} adicional(is)` : ""}`;
  $("#preview-price").textContent = money(customPrice());
}

function addToCart(item) {
  const match = cart.find((line) => line.key === item.key);
  if (match) match.qty = Math.min(99, match.qty + 1);
  else cart.push({ ...item, qty: 1 });
  saveCart();
  renderCart();
  const trigger = $("#open-cart");
  trigger.classList.remove("bag-bounce");
  void trigger.offsetWidth;
  trigger.classList.add("bag-bounce");
  toast("Adicionado à sua sacola ✳");
}

function renderMenu() {
  const categories = ["Todos", "Massas", "Acompanhamentos", "Bebidas", "Sobremesas"];
  $("#menu-tabs").innerHTML = categories.map((category) => `<button type="button" class="tab-btn" data-category="${category}" aria-pressed="${category === activeCategory}">${category}</button>`).join("");
  const shown = activeCategory === "Todos" ? MENU : MENU.filter((item) => item.category === activeCategory);
  $("#menu-grid").innerHTML = shown.map((item) => `<article class="menu-card">
    <button type="button" class="card-photo card-photo-button" data-detail="${item.id}" aria-label="Ampliar foto de ${textSafe(item.name)} e conhecer o prato"><img loading="lazy" src="${item.image}" alt="${textSafe(item.name)}" /><span class="card-tag">${textSafe(item.tag)}</span><span class="photo-expand-hint">TOQUE PARA DESCOBRIR ↗</span></button>
    <div class="card-body"><h3 class="card-title">${textSafe(item.name)}</h3><p class="card-description">${textSafe(item.description)}</p>
    <div class="card-bottom"><strong>${money(item.price)}</strong><button class="card-add" type="button" data-add="${item.id}" aria-label="Adicionar ${textSafe(item.name)} à sacola">+ Adicionar</button></div></div>
  </article>`).join("");
}

function cartSubtotal() { return cart.reduce((sum, item) => sum + item.price * item.qty, 0); }

function renderCart() {
  const count = cart.reduce((sum, item) => sum + item.qty, 0);
  $("#cart-count").textContent = count;
  $("#cart-total").textContent = money(cartSubtotal());
  $("#checkout").disabled = !count;
  $("#checkout").style.opacity = count ? "1" : ".5";
  $("#cart-items").innerHTML = !cart.length
    ? `<div class="empty-cart"><span class="empty-icon">🍝</span><strong>Sua sacola está vazia.</strong><p>Que tal começar com uma massa especial?</p></div>`
    : cart.map((item, index) => `<div class="cart-line"><div><h3>${textSafe(item.name)}</h3><small>${textSafe(item.details || "Feito com carinho")}</small><strong>${money(item.price * item.qty)}</strong></div><div class="qty-control"><button type="button" data-change="-1" data-index="${index}" aria-label="Diminuir quantidade de ${textSafe(item.name)}">−</button><span>${item.qty}</span><button type="button" data-change="1" data-index="${index}" aria-label="Aumentar quantidade de ${textSafe(item.name)}">+</button></div></div>`).join("");
}

function openCart() {
  $("#drawer-backdrop").hidden = false;
  $("#cart-drawer").classList.add("open");
  $("#cart-drawer").setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  $("#close-cart").focus();
}
function closeCart() {
  $("#cart-drawer").classList.remove("open");
  $("#cart-drawer").setAttribute("aria-hidden", "true");
  $("#drawer-backdrop").hidden = true;
  document.body.style.overflow = "";
  $("#open-cart").focus();
}

let toastTimer;
function toast(message) {
  const element = $("#toast");
  element.textContent = message;
  element.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => element.classList.remove("show"), 3500);
}

function orderMessage() {
  const lines = [`Olá! Gostaria de fazer um pedido no ${CONFIG.brand}:`, ""];
  cart.forEach((item) => {
    lines.push(`• ${item.qty}x ${item.name} — ${money(item.price * item.qty)}`);
    if (item.details) lines.push(`  ${item.details}`);
  });
  lines.push("", `Subtotal: ${money(cartSubtotal())}`);
  const note = $("#order-note").value.trim();
  if (note) lines.push(`Observações: ${note}`);
  lines.push("", "Por favor, informe a taxa e o prazo de entrega. Obrigada!");
  return lines.join("\n");
}

async function checkout() {
  if (!cart.length) return;
  const message = orderMessage();
  const phone = CONFIG.whatsapp.replace(/\D/g, "");
  if (phone.length >= 12 && phone.length <= 15) {
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
    toast("Pedido preparado para o WhatsApp. Confira antes de enviar.");
    return;
  }
  try {
    await navigator.clipboard.writeText(message);
    toast("Resumo copiado! Ative o WhatsApp no arquivo app.js.");
  } catch (_) {
    window.prompt("Copie o resumo do pedido:", message);
    toast("Demo: configure o WhatsApp no app.js para enviar.");
  }
}

document.addEventListener("click", (event) => {
  const option = event.target.closest("[data-group]");
  if (option) {
    const { group, id } = option.dataset;
    if (group === "extras") selection.extras = selection.extras.includes(id) ? selection.extras.filter((part) => part !== id) : [...selection.extras, id];
    else selection[group] = id;
    renderBuilder();
    const previewImage = $(".preview-image img");
    previewImage.classList.remove("preview-refresh");
    void previewImage.offsetWidth;
    previewImage.classList.add("preview-refresh");
    const total = $("#preview-price");
    total.classList.remove("price-flash");
    void total.offsetWidth;
    total.classList.add("price-flash");
    return;
  }
  const filter = event.target.closest("[data-category]");
  if (filter) { activeCategory = filter.dataset.category; renderMenu(); registerMotion(); return; }
  const detail = event.target.closest("[data-detail]");
  if (detail) { openProduct(detail.dataset.detail); return; }
  const offerAdd = event.target.closest("[data-offer-add]");
  if (offerAdd) { addOfferItem(offerAdd.dataset.offerAdd); return; }
  const add = event.target.closest("[data-add]");
  if (add) {
    const item = MENU.find((product) => product.id === add.dataset.add);
    if (item) chooseMenuProduct(item);
    return;
  }
  const change = event.target.closest("[data-change]");
  if (change) {
    const index = Number(change.dataset.index);
    const item = cart[index];
    if (!item) return;
    item.qty += Number(change.dataset.change);
    if (item.qty <= 0) cart.splice(index, 1);
    if (item.qty > 99) item.qty = 99;
    saveCart(); renderCart();
  }
});

$("#add-custom").addEventListener("click", () => {
  const size = getOption(SIZE_OPTIONS, selection.size).label;
  const pasta = getOption(PASTA_OPTIONS, selection.pasta).label;
  const sauce = getOption(SAUCE_OPTIONS, selection.sauce).label;
  const extras = selection.extras.map((id) => getOption(EXTRA_OPTIONS, id).label);
  addToCart({ key: `custom:${selection.size}:${selection.pasta}:${selection.sauce}:${[...selection.extras].sort().join(",")}`, name: `${pasta} personalizado · ${size}`, details: `${sauce}${extras.length ? " · " + extras.join(", ") : ""}`, price: customPrice() });
  openOffer("pair");
});
$("#open-cart").addEventListener("click", openCart);
$("#close-cart").addEventListener("click", closeCart);
$("#drawer-backdrop").addEventListener("click", closeCart);
$("#checkout").addEventListener("click", checkout);
document.addEventListener("keydown", (event) => { if (event.key === "Escape" && $("#cart-drawer").classList.contains("open")) closeCart(); });

let activeProductId = null;
let activeOfferStage = "pair";

function openProduct(id) {
  const item = MENU.find((product) => product.id === id);
  if (!item) return;
  activeProductId = id;
  $("#detail-photo").src = item.image.replace("w=750", "w=1300");
  $("#detail-photo").alt = item.name;
  $("#detail-title").textContent = item.name;
  $("#detail-description").textContent = item.description;
  $("#detail-story").textContent = PRODUCT_STORIES[item.id] || "Cada detalhe pensado para transformar um prato em uma boa experiência.";
  $("#detail-price").textContent = money(item.price);
  $("#detail-hint").textContent = "Toque na imagem mais uma vez para descobrir o segredo deste prato ↻";
  $("#flip-product").classList.remove("is-flipped");
  $("#flip-product").setAttribute("aria-label", "Virar foto para conhecer o prato");
  $("#product-backdrop").hidden = false;
  $("#product-detail").hidden = false;
  $("#product-detail").setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-active");
  requestAnimationFrame(() => $("#product-detail").classList.add("open"));
  $("#close-product").focus();
}

function closeProduct() {
  $("#product-detail").classList.remove("open");
  $("#product-detail").hidden = true;
  $("#product-detail").setAttribute("aria-hidden", "true");
  $("#product-backdrop").hidden = true;
  document.body.classList.remove("modal-active");
}

function flipProduct() {
  const flipped = $("#flip-product").classList.toggle("is-flipped");
  $("#flip-product").setAttribute("aria-label", flipped ? "Voltar para a fotografia do prato" : "Virar foto para conhecer o prato");
  $("#detail-hint").textContent = flipped ? "Toque novamente para ver a fotografia ↻" : "Toque novamente para descobrir o segredo deste prato ↻";
}

function chooseMenuProduct(item) {
  addToCart({ key: item.id, name: item.name, price: item.price, details: item.description });
  if (item.category === "Massas" || item.category === "Acompanhamentos") openOffer("pair");
  else if (item.category === "Bebidas") openOffer("dessert");
  else openCart();
}

function openOffer(stage) {
  activeOfferStage = stage;
  const pairing = stage === "pair";
  $("#offer-running-total").textContent = money(cartSubtotal());
  $("#offer-title").textContent = pairing ? "Seu prato merece companhia." : "E pra fechar com chave de ouro?";
  $("#offer-description").textContent = pairing ? "Um brinde gelado e um pão quentinho entram em cena. Quer acrescentar?" : "A sobremesa é o último ato. Escolha se quiser.";
  const ids = pairing ? ["b3", "a1"] : ["d1", "d2"];
  $("#offer-grid").innerHTML = ids.map((id, i) => {
    const item = MENU.find((p) => p.id === id);
    const added = cart.some((line) => line.key === id);
    return `<article class="offer-card" style="--stagger:${i * 135}ms"><div class="offer-photo"><img src="${item.image}" alt="${textSafe(item.name)}" /><span>${pairing ? i === 0 ? "UM BRINDE?" : "PRA MERGULHAR NO MOLHO" : "DOCE FINAL"}</span></div><div class="offer-card-copy"><h3>${textSafe(item.name)}</h3><p>${textSafe(item.description)}</p><div><strong>${money(item.price)}</strong><button type="button" data-offer-add="${id}" ${added ? "disabled" : ""}>${added ? "Na sacola ✓" : "+ Quero também"}</button></div></div></article>`;
  }).join("");
  $("#offer-backdrop").hidden = false;
  $("#offer-panel").hidden = false;
  $("#offer-panel").setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-active");
  $("#offer-panel").classList.remove("open");
  requestAnimationFrame(() => $("#offer-panel").classList.add("open"));
  $("#close-offer").focus();
}

function closeOffer() {
  $("#offer-panel").classList.remove("open");
  $("#offer-panel").hidden = true;
  $("#offer-panel").setAttribute("aria-hidden", "true");
  $("#offer-backdrop").hidden = true;
  document.body.classList.remove("modal-active");
}

function addOfferItem(id) {
  const item = MENU.find((product) => product.id === id);
  if (!item) return;
  addToCart({ key: item.id, name: item.name, price: item.price, details: item.description });
  if (item.category === "Bebidas") openOffer("dessert");
  else if (activeOfferStage === "dessert") { closeOffer(); openCart(); }
  else openOffer("pair");
}

$("#flip-product").addEventListener("click", flipProduct);
$("#close-product").addEventListener("click", closeProduct);
$("#product-backdrop").addEventListener("click", closeProduct);
$("#detail-add").addEventListener("click", () => {
  const item = MENU.find((product) => product.id === activeProductId);
  closeProduct();
  if (item) chooseMenuProduct(item);
});
$("#close-offer").addEventListener("click", closeOffer);
$("#offer-backdrop").addEventListener("click", closeOffer);
$("#offer-continue").addEventListener("click", () => { closeOffer(); openCart(); });
document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  if (!$("#product-detail").hidden) closeProduct();
  else if (!$("#offer-panel").hidden) closeOffer();
});

renderBuilder();
renderMenu();
renderCart();

/* Abertura: fotos chegam à frente uma por vez, depois ocupam seus lugares. */
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function startCinematicOpening(force = false) {
  const intro = $("#cinema-intro");
  if (reducedMotion || !intro) return;
  let seen = false;
  try { seen = sessionStorage.getItem("massa-studio-intro-seen") === "1"; } catch (_) { /* navegação privada */ }
  if (seen && !force) return;

  intro.classList.remove("finished");
  const featured = ["p1", "p2", "p3", "p4", "b3", "a1"].map((id) => MENU.find((item) => item.id === id));
  $("#intro-showcase").innerHTML = featured.map((item, i) => `<article class="intro-product" style="--order:${i}"><img src="${item.image.replace("w=750", "w=500")}" alt="" /><span>${textSafe(item.name)}</span></article>`).join("");
  intro.hidden = false;
  document.body.classList.add("cinema-active");
  const cards = [...document.querySelectorAll(".intro-product")];
  let complete = false;
  let timer;
  const finish = () => {
    if (complete) return;
    complete = true;
    clearTimeout(timer);
    intro.classList.add("finished");
    document.body.classList.remove("cinema-active");
    try { sessionStorage.setItem("massa-studio-intro-seen", "1"); } catch (_) { /* navegação privada */ }
    window.setTimeout(() => {
      intro.hidden = true;
      $("#cardapio").scrollIntoView({ behavior: "auto", block: "start" });
    }, 800);
  };
  $("#skip-intro").onclick = finish;
  timer = window.setTimeout(finish, 5650);

  const centerX = innerWidth / 2;
  const centerY = innerHeight / 2;
  cards.forEach((card, index) => {
    const rect = card.getBoundingClientRect();
    const dx = centerX - rect.left - rect.width / 2;
    const dy = centerY - rect.top - rect.height / 2;
    const scale = innerWidth < 700 ? 2.1 : 2.8;
    if (!card.animate) { card.style.opacity = "1"; return; }
    const animation = card.animate([
      { offset: 0, opacity: 0, transform: `translate(${dx}px, ${dy}px) scale(${scale * 1.55}) rotate(-9deg)`, filter: "blur(18px)" },
      { offset: .35, opacity: 1, transform: `translate(${dx}px, ${dy}px) scale(${scale}) rotate(5deg)`, filter: "blur(0px)" },
      { offset: .6, opacity: 1, transform: `translate(${dx * .24}px, ${dy * .24}px) scale(1.25) rotate(-3deg)` },
      { offset: 1, opacity: 1, transform: "translate(0, 0) scale(1) rotate(0deg)" }
    ], { duration: 1080, delay: 320 + index * 560, easing: "cubic-bezier(.17,.85,.18,1)", fill: "forwards" });
    animation.finished.then(() => { card.style.opacity = "1"; animation.cancel(); }).catch(() => {});
  });
}

function startHeroCarousel() {
  const slides = [...document.querySelectorAll(".hero-slide")];
  if (reducedMotion || slides.length < 2) return;
  let current = 0;
  window.setInterval(() => {
    slides[current].classList.remove("is-active");
    slides[current].setAttribute("aria-hidden", "true");
    current = (current + 1) % slides.length;
    slides[current].classList.add("is-active");
    slides[current].setAttribute("aria-hidden", "false");
    $("#frame-current").textContent = String(current + 1).padStart(2, "0");
  }, 6200);
}

let revealObserver;
function registerMotion() {
  if (reducedMotion || !("IntersectionObserver" in window)) return;
  if (!revealObserver) revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    });
  }, { threshold: .06, rootMargin: "0px 0px -24px 0px" });
  document.querySelectorAll(".section-heading, .builder-layout, .menu-card, .how-copy, .how-steps > div, .promise-strip > div").forEach((element) => {
    if (element.dataset.revealRegistered) return;
    element.dataset.revealRegistered = "1";
    element.classList.add("reveal");
    revealObserver.observe(element);
  });
}

document.documentElement.classList.add("motion-ready");
$("#replay-intro").addEventListener("click", () => startCinematicOpening(true));
startCinematicOpening();
startHeroCarousel();
registerMotion();
