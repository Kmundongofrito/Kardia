/* ==========================================================================
   KARDIÁ STORE — JAVASCRIPT LOGIC
   SPA Navigation | Cart System | Sidebar | WhatsApp Integration
   ========================================================================== */

const WHATSAPP_NUM = "5511963339981";

// ==========================================================================
// BANCO DE DADOS DE PRODUTOS
// ==========================================================================
const PRODUCTS_DATABASE = {
    "sacred-heart": {
        id: "sacred-heart",
        title: "Moletom Heavyweight \"Sacred Heart\"",
        category: "moletons",
        badge: "Raro / Limited",
        price: null,
        description: "Desenvolvido em algodão de ultra-densidade 600GSM (Heavyweight Cotton). Apresenta modelagem boxy com ombros caídos e caimento rígido premium. Estampa exclusiva em silkscreen de alto relevo nas costas, com detalhes ornamentados bordados em fio de prata esterlina nos punhos. Capuz forrado duplo e sem cordões para uma silhueta limpa e minimalista.",
        images: [
            "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1554568218-0f1715e72254?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80"
        ],
        specs: {
            material: "100% Algodão Heavyweight 600GSM",
            stitch: "Ponto duplo reforçado com linha industrial",
            origin: "Los Angeles, USA (Importação Assistida)",
            fit: "Oversized / Boxy Crop"
        },
        care: "Lavar do avesso em ciclo delicado e água fria. Secar à sombra. Não passar ferro diretamente sobre a estampa em relevo."
    },
    "drill-obsidian": {
        id: "drill-obsidian",
        title: "Calça Cargo Modular \"Drill Obsidian\"",
        category: "calcas",
        badge: "Tactical Drop",
        price: null,
        description: "Confeccionada em sarja de alta gramatura impermeabilizada com resina sintética. Bolsos cargo utilitários tridimensionais com fechos magnéticos. Possui fitas e tiras utilitárias ajustáveis nas pernas e zíperes metálicos YKK nos tornozelos, permitindo ajustar a silhueta de reta para ajustada (tapered). Detalhes cromados e fivelas de engate rápido estilo militar.",
        images: [
            "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1517462964-21fdcec3f25b?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?auto=format&fit=crop&w=800&q=80"
        ],
        specs: {
            material: "98% Algodão, 2% Elastano (Sarja Resinada 420GSM)",
            stitch: "Costuras de reforço travadas nos pontos de estresse",
            origin: "Londres, UK (Importação Assistida)",
            fit: "Cargo Modular (Reta / Tapered Ajustável)"
        },
        care: "Lavar à mão ou em ciclo seco. Não utilizar alvejantes à base de cloro. Secar à sombra para preservar a resina protetora."
    },
    "vintage-rose": {
        id: "vintage-rose",
        title: "Camiseta Washed \"Vintage Rose\"",
        category: "camisetas",
        badge: "Vintage Wash",
        price: null,
        description: "Produzida com algodão premium de 260GSM submetida a um processo intenso de lavagem estonada ácida (acid wash), conferindo uma textura cinza carvão estonada com visual vintage. Gola alta estruturada com 3cm de largura (Mock Neck) feita de ribana reforçada de elastano. Estampa frontal artística de rosa exclusiva estilizada feita em técnica de corrosão.",
        images: [
            "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80"
        ],
        specs: {
            material: "100% Algodão Penteado 260GSM (Acid Wash)",
            stitch: "Gola de 3cm mock neck e bainha invisível",
            origin: "Tóquio, Japão (Importação Assistida)",
            fit: "Oversized Streetwear Fit"
        },
        care: "Lavar separadamente nas primeiras lavagens. Secar naturalmente. Passar ferro em temperatura morna (evitar estampa)."
    },
    "silver-bullet": {
        id: "silver-bullet",
        title: "Jaqueta Puffer \"Kardiá Silver Bullet\"",
        category: "jaquetas",
        badge: "Refletiva 3M / Rara",
        price: null,
        description: "Jaqueta acolchoada de gomos largos volumosos preenchida com isolamento sintético de alta retenção térmica. Tecido externo em nylon ripstop prateado refletivo 3M: sob iluminação normal, exibe um tom cinza prateado fosco metálico; sob flashes de luz ou faróis, reflete luz de forma intensa. Ajustes elásticos ocultos e capuz ergonômico embutido.",
        images: [
            "https://images.unsplash.com/photo-1544923246-77307dd654cb?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1604649155671-3a8309192429?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80"
        ],
        specs: {
            material: "100% Poliéster Ripstop com Película Refletiva 3M",
            stitch: "Gomos costurados eletronicamente para distribuição uniforme",
            origin: "Seoul, Coreia do Sul (Importação Assistida)",
            fit: "Puffer Volumosa / Standard Crop"
        },
        care: "Limpar apenas com pano úmido e sabão neutro. Não colocar na máquina de lavar para preservar a refletividade 3M."
    },
    "eclipse": {
        id: "eclipse",
        title: "Óculos Trap Shield \"Eclipse\"",
        category: "acessorios",
        badge: "Shield Eyewear",
        price: null,
        description: "Óculos com design shield esportivo/trap robusto. Armação moldada em acetato de celulose injetado preto-piano polido manualmente. Hastes largas com encaixes de cruzes e rosas exclusivas esculpidas em liga metálica prateada. Lentes em policarbonato escurecido total com proteção UV400 completa contra raios solares.",
        images: [
            "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=800&q=80"
        ],
        specs: {
            material: "Armação de Acetato Injetado, Detalhes Prateados em Liga de Zinco",
            stitch: "Dobradiças de 5 pinos em aço inoxidável",
            origin: "Milão, Itália (Importação Assistida)",
            fit: "Shield Unissex Robusto"
        },
        care: "Limpar com lenço de microfibra macio. Guardar sempre no estojo de couro rígido Kardiá para evitar riscos."
    },
    "sterling-chain": {
        id: "sterling-chain",
        title: "Corrente Sterling Chain \"Kardiá\"",
        category: "acessorios",
        badge: "Joalheria Premium",
        price: null,
        description: "Corrente estilo elo grumet achatado duplo feita em aço inoxidável cirúrgico 316L, livre de oxidação e hipoalergênico. Pingente circular maciço dupla face esculpido à mão contendo de um lado a rosa Kardiá em relevo com acabamento envelhecido escurecido e do outro a cruz maltesa esculpida. Fecho gaveta personalizado com trava dupla de segurança.",
        images: [
            "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1611085583191-a3b1a3a355db?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&w=800&q=80"
        ],
        specs: {
            material: "Aço Inoxidável Cirúrgico 316L (Com Gravação Envelhecida)",
            stitch: "Fecho usinado a laser com trava de mola tripla",
            origin: "Tóquio, Japão (Importação Assistida)",
            fit: "Comprimento: 55cm | Espessura: 8mm"
        },
        care: "Livre para uso diário. Pode ser exposto à água do mar ou piscina sem risco de escurecer ou perder o brilho prateado."
    }
};

// ==========================================================================
// ESTADO DO CARRINHO
// ==========================================================================
let cart = [];
let selectedProductSizeValue = "";

function getCartCount() {
    return cart.reduce((sum, item) => sum + item.qty, 0);
}

function updateCartBadge() {
    const count = getCartCount();
    const badge = document.getElementById('cart-badge');
    if (badge) {
        badge.textContent = count;
        badge.style.display = count > 0 ? 'flex' : 'none';
    }
}

function addToCart(productId, size) {
    const product = PRODUCTS_DATABASE[productId];
    if (!product) return;
    const existing = cart.find(i => i.id === productId && i.size === size);
    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({
            id: productId,
            title: product.title,
            badge: product.badge,
            size: size,
            qty: 1,
            img: product.images[0]
        });
    }
    updateCartBadge();
    showCartToast(product.title);
}

function removeFromCart(productId, size) {
    cart = cart.filter(i => !(i.id === productId && i.size === size));
    updateCartBadge();
    renderCartPage();
}

function changeQty(productId, size, delta) {
    const item = cart.find(i => i.id === productId && i.size === size);
    if (item) {
        item.qty = Math.max(1, item.qty + delta);
        renderCartPage();
        updateCartBadge();
    }
}

function showCartToast(title) {
    let toast = document.getElementById('cart-toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'cart-toast';
        toast.className = 'cart-toast';
        document.body.appendChild(toast);
    }
    toast.innerHTML = `<i class="fa-solid fa-bag-shopping"></i> <strong>Adicionado ao carrinho!</strong><br><span>${title}</span>`;
    toast.classList.add('show');
    clearTimeout(toast._timer);
    toast._timer = setTimeout(() => toast.classList.remove('show'), 3000);
}

// ==========================================================================
// ROTEAMENTO SPA (HASH NAVIGATION)
// ==========================================================================
const landingPage = document.getElementById('landing-page');
const productPage = document.getElementById('product-page');
const cartPage = document.getElementById('cart-page');

function route() {
    const hash = window.location.hash;

    if (hash === '#carrinho') {
        showCartPage();
    } else if (hash.startsWith('#produto-')) {
        const productId = hash.replace('#produto-', '');
        showProductPage(productId);
    } else {
        showLandingPage();
        if (hash && hash !== '#') {
            const targetEl = document.querySelector(hash);
            if (targetEl) {
                setTimeout(() => targetEl.scrollIntoView({ behavior: 'smooth' }), 200);
            }
        }
    }
}

window.addEventListener('hashchange', route);
window.addEventListener('load', route);

function showLandingPage() {
    if (productPage) productPage.classList.add('hidden');
    if (cartPage) cartPage.classList.add('hidden');
    if (landingPage) landingPage.classList.remove('hidden');
    updateCartBadge();
}

// ==========================================================================
// PÁGINA DE PRODUTO (SPA VIEW)
// ==========================================================================
function showProductPage(productId) {
    const product = PRODUCTS_DATABASE[productId];
    if (!product) { window.location.hash = ''; return; }

    selectedProductSizeValue = "";

    productPage.innerHTML = `
        <div class="product-page-container container">
            <div class="product-page-header">
                <a href="#" class="back-to-catalog-btn"><i class="fa-solid fa-arrow-left"></i> Voltar ao Catálogo</a>
            </div>
            <div class="product-page-content">

                <!-- Galeria de Mídia -->
                <div class="product-gallery-column">
                    <div class="main-image-wrapper">
                        <img id="detail-main-img" src="${product.images[0]}" alt="${product.title}">
                    </div>
                    <div class="thumbnails-row">
                        ${product.images.map((img, idx) => `
                            <div class="thumb-item ${idx === 0 ? 'active' : ''}" onclick="changeDetailImage('${img}', this)">
                                <img src="${img}" alt="Visualização ${idx + 1}">
                            </div>
                        `).join('')}
                    </div>
                </div>

                <!-- Informações do Produto -->
                <div class="product-info-column">
                    <span class="detail-badge ${product.badge.includes('Rara') || product.badge.includes('Limited') ? 'rare' : ''}">${product.badge}</span>
                    <h1 class="detail-title">${product.title}</h1>
                    <p class="detail-stock-status"><i class="fa-solid fa-circle-check"></i> DISPONÍVEL SOB CONSULTA</p>

                    <div class="detail-section">
                        <h3 class="detail-section-title">Selecione o Tamanho</h3>
                        <div class="size-selector" id="size-selector-${product.id}">
                            ${['P', 'M', 'G', 'GG', 'XG'].map(size => `
                                <button class="size-btn" onclick="selectProductSize('${size}', this)">${size}</button>
                            `).join('')}
                        </div>
                        <p class="size-hint" id="size-hint">Selecione um tamanho para adicionar ao carrinho</p>
                    </div>

                    <div class="detail-section">
                        <h3 class="detail-section-title">A Alma da Peça</h3>
                        <p class="detail-description">${product.description}</p>
                    </div>

                    <div class="detail-section">
                        <h3 class="detail-section-title">Especificações Técnicas</h3>
                        <table class="specs-table">
                            <tbody>
                                <tr><td>Material</td><td>${product.specs.material}</td></tr>
                                <tr><td>Costura</td><td>${product.specs.stitch}</td></tr>
                                <tr><td>Origem</td><td>${product.specs.origin}</td></tr>
                                <tr><td>Caimento</td><td>${product.specs.fit}</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="detail-section">
                        <h3 class="detail-section-title">Cuidados de Conservação</h3>
                        <p class="detail-care-instructions">${product.care}</p>
                    </div>

                    <!-- Botões de Ação -->
                    <div class="detail-actions">
                        <button class="detail-buy-btn" id="btn-buy-${product.id}" onclick="handleAddToCart('${product.id}')">
                            <i class="fa-solid fa-bag-shopping"></i> Adicionar ao Carrinho
                        </button>
                        <button class="detail-checkout-btn" onclick="handleBuyNow('${product.id}')">
                            <i class="fa-solid fa-bolt"></i> Comprar Agora
                        </button>
                        <a href="https://wa.me/${WHATSAPP_NUM}?text=${encodeURIComponent('Salve! Vi o "' + product.title + '" no site da Kardia e gostaria de consultar a disponibilidade de importacao. Como funciona o processo?')}" target="_blank" rel="noopener noreferrer" class="detail-whatsapp-btn">
                            <i class="fa-brands fa-whatsapp"></i> Consultar via WhatsApp
                        </a>
                    </div>

                    <div class="detail-safety-badges">
                        <div class="safety-badge-item"><i class="fa-solid fa-shield-halved"></i><span>Procedência Verificada</span></div>
                        <div class="safety-badge-item"><i class="fa-solid fa-truck-fast"></i><span>Importação Blindada</span></div>
                    </div>
                </div>
            </div>
        </div>
    `;

    if (landingPage) landingPage.classList.add('hidden');
    if (cartPage) cartPage.classList.add('hidden');
    productPage.classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Funções de interação da página de produto
window.changeDetailImage = function(imgSrc, element) {
    const mainImg = document.getElementById('detail-main-img');
    if (mainImg) {
        mainImg.style.opacity = '0';
        setTimeout(() => { mainImg.src = imgSrc; mainImg.style.opacity = '1'; }, 150);
    }
    document.querySelectorAll('.thumb-item').forEach(t => t.classList.remove('active'));
    element.classList.add('active');
};

window.selectProductSize = function(size, element) {
    selectedProductSizeValue = size;
    document.querySelectorAll('.size-btn').forEach(btn => btn.classList.remove('active'));
    element.classList.add('active');
    const hint = document.getElementById('size-hint');
    if (hint) { hint.textContent = `Tamanho ${size} selecionado ✓`; hint.style.color = '#25d366'; }
    
    // Atualiza dinamicamente o link do WhatsApp para conter o tamanho selecionado
    const waBtn = document.querySelector('.detail-whatsapp-btn');
    if (waBtn) {
        const hash = window.location.hash;
        const productId = hash.replace('#produto-', '');
        const product = PRODUCTS_DATABASE[productId];
        if (product) {
            const sizeInfo = ` no tamanho ${size}`;
            const mensagem = `Salve! Vi o "${product.title}"${sizeInfo} no site da Kardiá e gostaria de consultar a disponibilidade de importação. Como funciona o processo?`;
            waBtn.href = `https://wa.me/${WHATSAPP_NUM}?text=${encodeURIComponent(mensagem)}`;
        }
    }
};

window.handleAddToCart = function(productId) {
    if (!selectedProductSizeValue) {
        const hint = document.getElementById('size-hint');
        if (hint) { hint.textContent = '⚠ Selecione um tamanho primeiro!'; hint.style.color = '#ff1a3d'; }
        document.querySelectorAll('.size-btn').forEach(btn => {
            btn.style.borderColor = '#ff1a3d';
            setTimeout(() => btn.style.borderColor = '', 1500);
        });
        return;
    }
    addToCart(productId, selectedProductSizeValue);
};

/* Comprar diretamente da página de detalhe — valida tamanho e vai ao carrinho */
window.handleBuyNow = function(productId) {
    if (!selectedProductSizeValue) {
        const hint = document.getElementById('size-hint');
        if (hint) { hint.textContent = '⚠ Selecione um tamanho para comprar!'; hint.style.color = '#ff1a3d'; }
        document.querySelectorAll('.size-btn').forEach(btn => {
            btn.style.borderColor = '#ff1a3d';
            setTimeout(() => btn.style.borderColor = '', 1500);
        });
        return;
    }
    addToCart(productId, selectedProductSizeValue);
    window.location.hash = '#carrinho';
};

/* Comprar rápido a partir do card do catálogo — tamanho padrão M */
window.handleQuickBuy = function(event, productId) {
    event.preventDefault();
    event.stopPropagation();
    addToCart(productId, 'M');
    window.location.hash = '#carrinho';
};

/* Função removida — o botão de WhatsApp na página de produto agora
   usa um <a href> nativo para evitar bloqueios de pop-up no celular. */

// ==========================================================================
// PÁGINA DO CARRINHO (SPA VIEW)
// ==========================================================================
function showCartPage() {
    if (landingPage) landingPage.classList.add('hidden');
    if (productPage) productPage.classList.add('hidden');
    if (cartPage) {
        cartPage.classList.remove('hidden');
        renderCartPage();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    updateCartBadge();
}

function getCheckoutWhatsAppUrl() {
    if (cart.length === 0) return '#';
    const itensList = cart.map(i => `• ${i.title} (Tam: ${i.size}, Qtd: ${i.qty})`).join('\n');
    const mensagem = `Salve! Gostaria de finalizar meu pedido na Kardiá:\n\n${itensList}\n\nPode me passar os valores e detalhes do pagamento?`;
    return `https://wa.me/${WHATSAPP_NUM}?text=${encodeURIComponent(mensagem)}`;
}

function renderCartPage() {
    if (!cartPage) return;

    const isEmpty = cart.length === 0;

    cartPage.innerHTML = `
        <div class="cart-page-container container">
            <div class="cart-page-header">
                <a href="#" class="back-to-catalog-btn"><i class="fa-solid fa-arrow-left"></i> Continuar Comprando</a>
                <h1 class="cart-title"><i class="fa-solid fa-bag-shopping"></i> Seu Carrinho</h1>
            </div>

            ${isEmpty ? `
                <div class="cart-empty">
                    <i class="fa-solid fa-bag-shopping"></i>
                    <h2>Carrinho Vazio</h2>
                    <p>Seu carrinho está vazio. Explore o catálogo e adicione peças exclusivas.</p>
                    <a href="#catalogo" class="btn-primary" onclick="showLandingAndScroll('catalogo')">
                        <i class="fa-solid fa-angle-right"></i> Explorar Catálogo
                    </a>
                </div>
            ` : `
                <div class="cart-layout">
                    <!-- Lista de Itens -->
                    <div class="cart-items-column">
                        <h2 class="cart-section-label">Peças Selecionadas (${getCartCount()})</h2>
                        <div class="cart-items-list">
                            ${cart.map(item => `
                                <div class="cart-item" id="cart-item-${item.id}-${item.size}">
                                    <div class="cart-item-img-wrapper">
                                        <img src="${item.img}" alt="${item.title}" class="cart-item-img">
                                    </div>
                                    <div class="cart-item-info">
                                        <span class="cart-item-badge">${item.badge}</span>
                                        <h3 class="cart-item-title">${item.title}</h3>
                                        <p class="cart-item-size">Tamanho: <strong>${item.size}</strong></p>
                                        <p class="cart-item-price">Sob Consulta <i class="fa-solid fa-heart"></i></p>
                                        <div class="cart-qty-control">
                                            <button class="qty-btn" onclick="changeQty('${item.id}','${item.size}',-1)"><i class="fa-solid fa-minus"></i></button>
                                            <span class="qty-value">${item.qty}</span>
                                            <button class="qty-btn" onclick="changeQty('${item.id}','${item.size}',1)"><i class="fa-solid fa-plus"></i></button>
                                            <button class="cart-remove-btn" onclick="removeFromCart('${item.id}','${item.size}')"><i class="fa-solid fa-trash"></i></button>
                                        </div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <!-- Resumo do Pedido -->
                    <div class="cart-summary-column">
                        <div class="cart-summary-box">
                            <h2 class="cart-section-label">Resumo do Pedido</h2>
                            <div class="cart-summary-rows">
                                <div class="cart-summary-row">
                                    <span>Itens (${getCartCount()})</span>
                                    <span>Sob Consulta</span>
                                </div>
                                <div class="cart-summary-row">
                                    <span>Frete Internacional</span>
                                    <span class="cart-highlight">A calcular</span>
                                </div>
                                <div class="cart-summary-row">
                                    <span>Taxas Aduaneiras</span>
                                    <span class="cart-highlight-green">Cobertas pela Kardiá</span>
                                </div>
                                <div class="cart-summary-divider"></div>
                                <div class="cart-summary-row cart-summary-total">
                                    <span>Total</span>
                                    <span>Consultar</span>
                                </div>
                            </div>

                            <a href="${getCheckoutWhatsAppUrl()}" target="_blank" class="cart-checkout-btn">
                                <i class="fa-brands fa-whatsapp"></i> Finalizar Pedido via WhatsApp
                            </a>

                            <div class="cart-secure-badges">
                                <div class="cart-secure-item"><i class="fa-solid fa-lock"></i> Compra Segura</div>
                                <div class="cart-secure-item"><i class="fa-solid fa-shield-halved"></i> Qualidade Garantida</div>
                                <div class="cart-secure-item"><i class="fa-solid fa-rotate-left"></i> Garantia Vitalícia</div>
                            </div>
                        </div>

                        <!-- Método de Pagamento Info -->
                        <div class="cart-payment-box">
                            <h3 class="cart-payment-title"><i class="fa-solid fa-credit-card"></i> Formas de Pagamento</h3>
                            <div class="cart-payment-methods">
                                <div class="payment-method-item"><i class="fa-brands fa-pix"></i> PIX</div>
                                <div class="payment-method-item"><i class="fa-solid fa-credit-card"></i> Cartão de Crédito</div>
                                <div class="payment-method-item"><i class="fa-solid fa-money-bill"></i> Transferência</div>
                                <div class="payment-method-item"><i class="fa-brands fa-bitcoin"></i> Cripto</div>
                            </div>
                            <p class="cart-payment-note">Parcelamento e condições confirmados via WhatsApp com seu curador.</p>
                        </div>
                    </div>
                </div>
            `}
        </div>
    `;
}

window.showLandingAndScroll = function(sectionId) {
    window.location.hash = '#' + sectionId;
};
/* Funções abaixo mantidas como reserva mas não chamadas diretamente —
   todos os botões críticos de WhatsApp usam <a href> nativo. */
window.iniciarCheckoutWhatsApp = function() {
    if (cart.length === 0) return;
    const itensList = cart.map(i => `• ${i.title} (Tam: ${i.size}, Qtd: ${i.qty})`).join('\n');
    const mensagem = `Salve! Gostaria de finalizar meu pedido na Kardiá:\n\n${itensList}\n\nPode me passar os valores e detalhes do pagamento?`;
    const url = `https://wa.me/${WHATSAPP_NUM}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
};

window.removeFromCart = removeFromCart;
window.changeQty = changeQty;

// ==========================================================================
// DOM READY — TODOS OS EVENTOS
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {

    updateCartBadge();

    // ── SIDEBAR RETRÁTIL ──────────────────────────────────────────────────
    const sidebar = document.getElementById('sidebar');
    const sidebarToggle = document.getElementById('sidebar-toggle');
    const sidebarClose = document.getElementById('sidebar-close');
    const sidebarOverlay = document.getElementById('sidebar-overlay');

    function openSidebar() {
        sidebar.classList.add('open');
        sidebarOverlay.classList.add('visible');
        document.body.style.overflow = 'hidden';
    }

    function closeSidebar() {
        sidebar.classList.remove('open');
        sidebarOverlay.classList.remove('visible');
        document.body.style.overflow = '';
    }

    if (sidebarToggle) sidebarToggle.addEventListener('click', openSidebar);
    if (sidebarClose) sidebarClose.addEventListener('click', closeSidebar);
    if (sidebarOverlay) sidebarOverlay.addEventListener('click', closeSidebar);

    // Fechar sidebar ao clicar em link
    document.querySelectorAll('.sidebar-link').forEach(link => {
        link.addEventListener('click', () => {
            closeSidebar();
            // Fechar menu mobile também
            if (navMenu) navMenu.classList.remove('active');
            document.body.classList.remove('menu-active');
            if (mobileToggle) mobileToggle.querySelector('i').className = 'fa-solid fa-bars-staggered';
        });
    });

    // Grupos retráteis dentro da sidebar
    document.querySelectorAll('.sidebar-group-toggle').forEach(toggle => {
        toggle.addEventListener('click', () => {
            const group = toggle.closest('.sidebar-group');
            group.classList.toggle('collapsed');
        });
    });

    // ── MENU MOBILE ───────────────────────────────────────────────────────
    const mobileToggle = document.getElementById('mobile-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            document.body.classList.toggle('menu-active');
            const icon = mobileToggle.querySelector('i');
            icon.className = navMenu.classList.contains('active') ? 'fa-solid fa-xmark' : 'fa-solid fa-bars-staggered';
        });

        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                document.body.classList.remove('menu-active');
                mobileToggle.querySelector('i').className = 'fa-solid fa-bars-staggered';
            });
        });
    }

    // ── SCROLL DO HEADER ──────────────────────────────────────────────────
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (header) header.classList.toggle('scrolled', window.scrollY > 50);
    });

    // ── PARALLAX DA ROSA ──────────────────────────────────────────────────
    const rose = document.getElementById('hero-rose');
    const roseWrapper = document.querySelector('.hero-rose-wrapper');

    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        if (rose && landingPage && !landingPage.classList.contains('hidden')) {
            const scale = Math.max(0.85, 1 - scrolled * 0.0003);
            rose.style.transform = `rotate(${scrolled * 0.08}deg) translateY(${scrolled * 0.06}px) scale(${scale})`;
        }
    });

    if (window.matchMedia('(hover: hover)').matches && roseWrapper && rose) {
        roseWrapper.addEventListener('mousemove', (e) => {
            if (landingPage && landingPage.classList.contains('hidden')) return;
            const rect = roseWrapper.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            const tiltX = (y / (rect.height / 2)) * -12;
            const tiltY = (x / (rect.width / 2)) * 12;
            const scrolled = window.pageYOffset;
            rose.style.transform = `rotate(${scrolled * 0.08}deg) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(1.04)`;
            rose.style.boxShadow = `${-tiltY * 1.5}px ${tiltX * 1.5}px 30px rgba(158,0,24,0.45)`;
        });
        roseWrapper.addEventListener('mouseleave', () => {
            rose.style.transform = `rotate(0deg) rotateX(0deg) rotateY(0deg) scale(1)`;
            rose.style.boxShadow = '0 0 3.125rem rgba(0,0,0,0.9)';
        });
    }

    // ── FILTROS DO CATÁLOGO ───────────────────────────────────────────────
    const filterButtons = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            const category = button.getAttribute('data-category');
            productCards.forEach(card => {
                const match = category === 'all' || card.getAttribute('data-category') === category;
                card.style.display = match ? 'flex' : 'none';
                if (match) {
                    card.style.opacity = '0';
                    setTimeout(() => { card.style.transition = 'opacity 0.4s ease'; card.style.opacity = '1'; }, 50);
                }
            });
        });
    });

    // ── FAQ ACORDEON ──────────────────────────────────────────────────────
    document.querySelectorAll('.faq-item').forEach(item => {
        item.querySelector('.faq-question').addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            document.querySelectorAll('.faq-item').forEach(f => f.classList.remove('active'));
            if (!isActive) item.classList.add('active');
        });
    });

    // ── BALÃO WHATSAPP ────────────────────────────────────────────────────
    const waBubble = document.getElementById('wa-bubble');
    const waBubbleClose = document.getElementById('wa-bubble-close');

    setTimeout(() => { if (waBubble) waBubble.classList.add('show'); }, 3000);

    if (waBubbleClose && waBubble) {
        waBubbleClose.addEventListener('click', (e) => {
            e.preventDefault(); e.stopPropagation();
            waBubble.classList.remove('show');
        });
    }
});
