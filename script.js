/* ==========================================================================
   KARDIÁ STORE - JAVASCRIPT LOGIC (SPA NAVEGABILIDADE & INTERATIVIDADE)
   ========================================================================== */

// Configurações do WhatsApp Kardiá
const WHATSAPP_NUM = "5511963339981";

// ==========================================================================
// BANCO DE DADOS DE PRODUTOS (FÁCIL ATUALIZAÇÃO / ADICIONAR NOVAS PEÇAS AQUI)
// ==========================================================================
const PRODUCTS_DATABASE = {
    "sacred-heart": {
        id: "sacred-heart",
        title: "Moletom Heavyweight \"Sacred Heart\"",
        category: "moletons",
        badge: "Raro / Limited",
        description: "Desenvolvido em algodão de ultra-densidade 600GSM (Heavyweight Cotton). Apresenta modelagem boxy com ombros caídos e caimento rígido premium. Estampa gótica em silkscreen de alto relevo nas costas, com detalhes ornamentados bordados em fio de prata esterlina nos punhos. Capuz forrado duplo e sem cordões para uma silhueta limpa e minimalista.",
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
    "gothic-rose": {
        id: "gothic-rose",
        title: "Camiseta Washed \"Gothic Rose\"",
        category: "camisetas",
        badge: "Vintage Wash",
        description: "Produzida com algodão premium de 260GSM submetida a um processo intenso de lavagem estonada ácida (acid wash), conferindo uma textura cinza carvão estonada com visual vintage. Gola alta estruturada com 3cm de largura (Mock Neck) feita de ribana reforçada de elastano. Estampa frontal artística de rosa gótica estilizada feita em técnica de corrosão.",
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
        badge: "Gothic Eyewear",
        description: "Óculos com design shield esportivo/trap robusto. Armação moldada em acetato de celulose injetado preto-piano polido manualmente. Hastes largas com encaixes de cruzes e rosas góticas esculpidas em liga metálica prateada. Lentes em policarbonato escurecido total com proteção UV400 completa contra raios solares.",
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
        title: "Corrente Gothic Chain \"Kardiá\"",
        category: "acessorios",
        badge: "Joalheria Premium",
        description: "Corrente estilo elo grumet achatado duplo feita em aço inoxidável cirúrgico 316L, livre de oxidação e hipoalergênico. Pingente circular maciço dupla face esculpido à mão contendo de um lado a rosa Kardiá em relevo com acabamento envelhecido escurecido e do outro a cruz maltesa gótica. Fecho gaveta personalizado com trava dupla de segurança.",
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

// Tamanho selecionado no produto atual
let selectedProductSizeValue = "";

// ==========================================================================
// ROTEAMENTO SPA (HASH NAVIGATION)
// ==========================================================================
const landingPage = document.getElementById('landing-page');
const productPage = document.getElementById('product-page');

function route() {
    const hash = window.location.hash;
    
    if (hash.startsWith('#produto-')) {
        const productId = hash.replace('#produto-', '');
        showProductPage(productId);
    } else {
        showLandingPage();
        
        // Trata navegação de âncora suave ao voltar do produto para a landing
        if (hash && hash !== '#') {
            const targetEl = document.querySelector(hash);
            if (targetEl) {
                setTimeout(() => {
                    targetEl.scrollIntoView({ behavior: 'smooth' });
                }, 200);
            }
        }
    }
}

window.addEventListener('hashchange', route);
window.addEventListener('load', route);

// Renderiza e Exibe a Página Dedicada
function showProductPage(productId) {
    const product = PRODUCTS_DATABASE[productId];
    if (!product) {
        window.location.hash = ''; // Redireciona se ID for inválido
        return;
    }

    // Reseta o tamanho selecionado anterior
    selectedProductSizeValue = "";

    // Injeta o HTML estruturado de alto padrão gótico Chrome Hearts
    productPage.innerHTML = `
        <div class="product-page-container container">
            <div class="product-page-header">
                <a href="#" class="back-to-catalog-btn"><i class="fa-solid fa-arrow-left"></i> Voltar ao Catálogo</a>
            </div>
            <div class="product-page-content">
                
                <!-- Coluna Esquerda: Galeria de Mídia Interativa -->
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

                <!-- Coluna Direita: Informações de Alto Padrão -->
                <div class="product-info-column">
                    <span class="detail-badge ${product.badge.includes('Rara') || product.badge.includes('Limited') ? 'rare' : ''}">${product.badge}</span>
                    <h1 class="detail-title">${product.title}</h1>
                    <p class="detail-stock-status"><i class="fa-solid fa-circle-check"></i> DISPONÍVEL SOB CONSULTA</p>
                    
                    <div class="detail-section">
                        <h3 class="detail-section-title">Selecione o Tamanho</h3>
                        <div class="size-selector">
                            ${['P', 'M', 'G', 'GG', 'XG'].map(size => `
                                <button class="size-btn" onclick="selectProductSize('${size}', this)">${size}</button>
                            `).join('')}
                        </div>
                    </div>

                    <div class="detail-section">
                        <h3 class="detail-section-title">A Alma da Peça</h3>
                        <p class="detail-description">${product.description}</p>
                    </div>

                    <div class="detail-section">
                        <h3 class="detail-section-title">Especificações Técnicas</h3>
                        <table class="specs-table">
                            <tbody>
                                <tr>
                                    <td>Material</td>
                                    <td>${product.specs.material}</td>
                                </tr>
                                <tr>
                                    <td>Costura</td>
                                    <td>${product.specs.stitch}</td>
                                </tr>
                                <tr>
                                    <td>Origem</td>
                                    <td>${product.specs.origin}</td>
                                </tr>
                                <tr>
                                    <td>Caimento</td>
                                    <td>${product.specs.fit}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div class="detail-section">
                        <h3 class="detail-section-title">Cuidados de Conservação</h3>
                        <p class="detail-care-instructions">${product.care}</p>
                    </div>

                    <!-- Botão WhatsApp Gerado com Tamanho e Nome do Produto -->
                    <button class="detail-whatsapp-btn" onclick="solicitarImportacaoWhatsApp('${product.title}')">
                        Solicitar Importação via WhatsApp <i class="fa-brands fa-whatsapp"></i>
                    </button>

                    <div class="detail-safety-badges">
                        <div class="safety-badge-item">
                            <i class="fa-solid fa-shield-halved"></i>
                            <span>Autenticidade Garantida</span>
                        </div>
                        <div class="safety-badge-item">
                            <i class="fa-solid fa-truck-fast"></i>
                            <span>Importação Blindada</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Oculta a Landing Page e exibe a Página de Produto com transições
    landingPage.classList.add('hidden');
    productPage.classList.remove('hidden');

    // Sobe o scroll suavemente ao topo
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showLandingPage() {
    productPage.classList.add('hidden');
    landingPage.classList.remove('hidden');
}

// Funções de Interação da Página de Produto (Globalmente Acessíveis)
window.changeDetailImage = function(imgSrc, element) {
    const mainImg = document.getElementById('detail-main-img');
    if (mainImg) {
        mainImg.style.opacity = '0';
        setTimeout(() => {
            mainImg.src = imgSrc;
            mainImg.style.opacity = '1';
        }, 150);
    }
    
    const thumbs = document.querySelectorAll('.thumb-item');
    thumbs.forEach(t => t.classList.remove('active'));
    element.classList.add('active');
};

window.selectProductSize = function(size, element) {
    selectedProductSizeValue = size;
    const buttons = document.querySelectorAll('.size-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    element.classList.add('active');
};

window.solicitarImportacaoWhatsApp = function(nomeProduto) {
    if (!selectedProductSizeValue) {
        alert("Por favor, selecione um tamanho (P, M, G, GG, XG) antes de solicitar a importação da peça!");
        return;
    }
    const mensagem = `Salve! Vi o "${nomeProduto}" no tamanho ${selectedProductSizeValue} no site da Kardiá e gostaria de consultar a disponibilidade de importação e os valores. Como funciona o processo?`;
    const url = `https://wa.me/${WHATSAPP_NUM}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
};


// ==========================================================================
// OUTROS REDIRECIONAMENTOS DE WHATSAPP DA LANDING PAGE
// ==========================================================================
window.contatoServicoWhatsApp = function(nomeServico) {
    const mensagem = `Salve! Tenho interesse no serviço de "${nomeServico}" da Kardiá. Gostaria de entender melhor como funciona e solicitar um orçamento personalizado.`;
    const url = `https://wa.me/${WHATSAPP_NUM}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
};

window.contatoGeralWhatsApp = function() {
    const mensagem = `Salve! Entrei no site de importação da Kardiá e gostaria de iniciar uma curadoria de roupas exclusivas.`;
    const url = `https://wa.me/${WHATSAPP_NUM}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
};


// ==========================================================================
// INTERAÇÕES GERAIS DE EVENTOS (LANDING PAGE)
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Menu Mobile com Scroll Lock
    const mobileToggle = document.getElementById('mobile-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            document.body.classList.toggle('menu-active');
            
            const icon = mobileToggle.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.className = 'fa-solid fa-xmark';
            } else {
                icon.className = 'fa-solid fa-bars-staggered';
            }
        });

        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                document.body.classList.remove('menu-active');
                mobileToggle.querySelector('i').className = 'fa-solid fa-bars-staggered';
            });
        });
    }

    // 2. Efeito Scroll do Header
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 3. PARALLAX DA ROSA
    const rose = document.getElementById('hero-rose');
    const roseWrapper = document.querySelector('.hero-rose-wrapper');

    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        if (rose && !landingPage.classList.contains('hidden')) {
            rose.style.transform = `rotate(${scrolled * 0.1}deg) translateY(${scrolled * 0.08}px) scale(${1 - (scrolled * 0.0003)})`;
        }
    });

    // 4. 3D Tilt da Rosa Apenas para Dispositivos Desktop com suporte Hover
    if (window.matchMedia('(hover: hover)').matches) {
        if (roseWrapper && rose) {
            roseWrapper.addEventListener('mousemove', (e) => {
                if (landingPage.classList.contains('hidden')) return;

                const rect = roseWrapper.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                
                const tiltX = (y / (rect.height / 2)) * -12;
                const tiltY = (x / (rect.width / 2)) * 12;
                
                const scrolled = window.pageYOffset;
                rose.style.transform = `rotate(${scrolled * 0.1}deg) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(1.04)`;
                rose.style.boxShadow = `${-tiltY * 1.5}px ${tiltX * 1.5}px 30px rgba(158, 0, 24, 0.45)`;
            });

            roseWrapper.addEventListener('mouseleave', () => {
                const scrolled = window.pageYOffset;
                rose.style.transform = `rotate(${scrolled * 0.1}deg) rotateX(0deg) rotateY(0deg) scale(1)`;
                rose.style.boxShadow = `0 0 50px rgba(0,0,0,0.9)`;
            });
        }
    }

    // 5. FILTROS DINÂMICOS DO CATÁLOGO
    const filterButtons = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const category = button.getAttribute('data-category');

            productCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                
                if (category === 'all' || cardCategory === category) {
                    card.style.display = 'flex';
                    card.style.opacity = '0';
                    setTimeout(() => {
                        card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
                        card.style.opacity = '1';
                    }, 50);
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // 6. ACORDEON FAQ INTERATIVO
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            faqItems.forEach(faq => faq.classList.remove('active'));
            
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

    // 7. BALÃO DE WHATSAPP PÓS 3 SEGUNDOS
    const waBubble = document.getElementById('wa-bubble');
    const waBubbleClose = document.getElementById('wa-bubble-close');

    setTimeout(() => {
        if (waBubble) {
            waBubble.classList.add('show');
        }
    }, 3000);

    if (waBubbleClose && waBubble) {
        waBubbleClose.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            waBubble.classList.remove('show');
        });
    }

});
