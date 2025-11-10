// Variáveis globais
let cart = [];
let cartCount = 0;
let currentTestimonial = 0;

// Dados dos produtos organizados por marca
const products = {
    nike: [
        { id: 1, name: "Dunk Panda", brand: "Nike", price: 599.90, image: "./img/dunkpanda.png", category: "nike" },
        { id: 2, name: "Nike Air Force 1 '07", brand: "Nike", price: 699.90, originalPrice: null, discount: null, image: "./img/airforce.png", category: "nike" },
        { id: 3, name: "Dunk Grey", brand: "Nike", price: 1099.90, originalPrice: null, discount: null, image: "./img/dunkgrey.png", category: "nike" },
        { id: 4, name: "Nike Air Force 1 Black '07", brand: "Nike", price: 1299.90, originalPrice: null, discount: null, image: "./img/airforceblack.png", category: "nike" },
        { id: 5, name: "Nike Air Force 1 Shadow '07", brand: "Nike", price: 1299.90, originalPrice: null, discount: null, image: "./img/airforceshadow.png", category: "nike" },
        { id: 6, name: "Nike Air Force 1 Panda '07", brand: "Nike", price: 899.90, originalPrice: null, discount: null, image: "./img/airforcezebra.png", category: "nike" }
    ],
    jordan: [
        { id: 7, name: "Air Jordan 1 High", brand: "Jordan", price: 1199.90, originalPrice: null, discount: null, image: "./img/jordanhigh.png", category: "jordan" },
        { id: 8, name: "Air Jordan 4 OG ", brand: "Jordan", price: 999.90, originalPrice: null, discount: null, image: "./img/jordan4.png", category: "jordan" },
        { id: 9, name: "Air Jordan 1 Retro", brand: "Jordan", price: 999.90, originalPrice: null, discount: null, image: "./img/jordanhighretro.png", category: "jordan" },
        { id: 10, name: "Air Jordan Low", brand: "Jordan", price: 1099.90, originalPrice: null, discount: null, image: "./img/jordanlow.png", category: "jordan" },
        { id: 11, name: "Air Jordan Low", brand: "Jordan", price: 1299.90, originalPrice: null, discount: null, image: "./img/jordanlowpanda.png", category: "jordan" },
        { id: 12, name: "Air Jordan Low", brand: "Jordan", price: 1399.90, originalPrice: null, discount: null, image: "./img/jordanlow2.png", category: "jordan" }
    ],
    adidas: [
        { id: 13, name: "Yeezy Boost 350 Bone", brand: "Adidas", price: 689.90, originalPrice: null, discount: null, image: "./img/yeezybone.png", category: "adidas" },
        { id: 14, name: "Yeezy Boost 350 Onyx", brand: "Adidas", price: 689.90, originalPrice: null, discount: null, image: "./img/yeezyonyx.png", category: "adidas" },
        { id: 16, name: "Yeezy 700 Static", brand: "Adidas", price: 1111.90, originalPrice: null, discount: null, image: "./img/yeezysatic.png", category: "adidas" },
        { id: 17, name: "Adidas Campus 00s Black", brand: "Adidas", price: 1699.90, originalPrice: 1999.90, discount: null, image: "./img/campus.png", category: "adidas" },
        { id: 18, name: "Tênis Adidas X Bad Bunny Forum Preto", brand: "Adidas", price: 1111.90, originalPrice: null, discount: null, image: "./img/badbunny.png", category: "adidas" }
    ],
    newBalance: [
        { id: 19, name: "New Balance 9060 Black", brand: "New Balance", price: 899.90, originalPrice: null, discount: null, image: "./img/newbalanceblack.png", category: "newBalance" },
        { id: 20, name: "New Balance 9060 Cream Blue", brand: "New Balance", price: 899.90, originalPrice: null, discount: null, image: "./img/newbalance.png", category: "newBalance" },
        { id: 21, name: "New Balance 9060 Cream", brand: "New Balance", price: 899.90, originalPrice: null, discount: null, image:"./img/newbalancecream.png", category: "newBalance" },
        { id: 22, name: "New Balance 9060 White", brand: "New Balance", price: 899.90, originalPrice: null, discount: null, image:"./img/newbalancewhite.png", category: "newBalance" }
    ]
    /* Seção de grifes comentada
    grifes: [
        { id: 25, name: "On x LOEWE Cloudtilt 'Sand'", brand: "On Running", price: 1599.90, originalPrice: 2199.90, discount: 27, image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", category: "grifes" },
        { id: 26, name: "Cloudsurfer Max 'Asphalt'", brand: "On Running", price: 1099.90, originalPrice: 1399.90, discount: 21, image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", category: "grifes" },
        { id: 27, name: "Asics Gel NYC", brand: "Asics", price: 899.90, originalPrice: 1199.90, discount: 25, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", category: "grifes" },
        { id: 28, name: "Asics SuperBlast", brand: "Asics", price: 1099.90, originalPrice: 1399.90, discount: 21, image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", category: "grifes" },
        { id: 29, name: "Puma RS-X", brand: "Puma", price: 699.90, originalPrice: null, discount: null, image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", category: "grifes" },
        { id: 30, name: "Vans Old Skool", brand: "Vans", price: 499.90, originalPrice: null, discount: null, image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", category: "grifes" }
    ]
    */
};

// DOM Elements
const mobileMenu = document.getElementById('mobileMenu');
const cartSidebar = document.getElementById('cartSidebar');
const cartCountElement = document.getElementById('cartCount');
const cartItemsContainer = document.getElementById('cartItems');
const productModal = document.getElementById('productModal');
const authModal = document.getElementById('authModal');
const profileModal = document.getElementById('profileModal');

// WhatsApp Configuration
const WHATSAPP_NUMBER = "41995136233";
const WHATSAPP_MESSAGE_PREFIX = "Olá! Gostaria de comprar os seguintes produtos da Miquestyle:\n\n";
// Detecta API automaticamente (mesma rede). Ex.: http(s)://HOST:4000
const API_BASE = `${location.protocol}//${location.hostname}:4000`;

// Inicialização quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    initializeEventListeners();
    loadProducts();
    loadCartFromStorage();
    updateCartCount();
    startTestimonialSlider();
    setupAuth();
    updateAuthState();
    setupPasswordToggle();
});

function initializeEventListeners() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const closeMenuBtn = document.querySelector('.close-menu');
    if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    if (closeMenuBtn) closeMenuBtn.addEventListener('click', closeMobileMenu);

    const cartBtn = document.getElementById('cartBtn');
    const closeCartBtn = document.querySelector('.close-cart');
    if (cartBtn) cartBtn.addEventListener('click', toggleCartSidebar);
    if (closeCartBtn) closeCartBtn.addEventListener('click', closeCartSidebar);

    const checkoutWhatsAppBtn = document.getElementById('checkoutWhatsApp');
    if (checkoutWhatsAppBtn) checkoutWhatsAppBtn.addEventListener('click', checkoutViaWhatsApp);

    const closeModalBtn = document.querySelector('.close-modal');
    if (closeModalBtn) closeModalBtn.addEventListener('click', closeProductModal);
}

// Carregar produtos
function loadProducts() {
    loadProductSection('nikeProducts', products.nike);
    loadProductSection('jordanProducts', products.jordan);
    loadProductSection('adidasProducts', products.adidas);
    loadProductSection('newBalanceProducts', products.newBalance);
    // Seção grifes comentada - produtos não disponíveis
    // if (products.grifes) {
    //     loadProductSection('grifesProducts', products.grifes);
    // }
}

function loadProductSection(containerId, productList) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = '';
    productList.forEach(product => container.appendChild(createProductCard(product)));
}

// Função para calcular parcelamento com juros de 4,5% ao mês
function calculateInstallment(price, installments = 12, interestRate = 0.045) {
    // Fórmula: PMT = PV * (r * (1 + r)^n) / ((1 + r)^n - 1)
    // Onde: PV = valor presente, r = taxa de juros, n = número de parcelas
    const r = interestRate; // 4,5% = 0.045
    const n = installments;
    const pv = price;
    
    const numerator = r * Math.pow(1 + r, n);
    const denominator = Math.pow(1 + r, n) - 1;
    const pmt = pv * (numerator / denominator);
    
    return pmt;
}

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.onclick = () => openProductModal(product);

    const discountBadge = product.discount ? `<div class="product-badge">-${product.discount}%</div>` : '';
    const originalPrice = product.originalPrice ? `<span class="original-price">R$ ${product.originalPrice.toFixed(2).replace('.', ',')}</span>` : '';
    const installmentValue = calculateInstallment(product.price, 12, 0.045);
    const installments = `Até 12x de R$ ${installmentValue.toFixed(2).replace('.', ',')}`;

    card.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${product.name}">
            ${discountBadge}
        </div>
        <div class="product-info">
            <h3>${product.name}</h3>
            <p class="product-brand">${product.brand}</p>
            <div class="product-price">
                <span class="promotional-price">R$ ${product.price.toFixed(2).replace('.', ',')}</span>
                ${originalPrice}
            </div>
            <div class="installments">${installments}</div>
            <button class="add-to-cart" onclick="event.stopPropagation(); addToCart(${product.id})">Adicionar ao Carrinho</button>
        </div>`;
    return card;
}

// Mobile Menu
function toggleMobileMenu() {
    if (!mobileMenu) return;
    mobileMenu.classList.toggle('active');
    document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : 'auto';
}
function closeMobileMenu() {
    if (!mobileMenu) return;
    mobileMenu.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Carrinho
function toggleCartSidebar() {
    if (!cartSidebar) return;
    cartSidebar.classList.toggle('active');
    document.body.style.overflow = cartSidebar.classList.contains('active') ? 'hidden' : 'auto';
    updateCartDisplay();
}
function closeCartSidebar() {
    if (!cartSidebar) return;
    cartSidebar.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function addToCart(productId) {
    const product = findProductById(productId);
    if (!product) return;
    const existing = cart.find(i => i.id === product.id);
    if (existing) existing.quantity += 1; else cart.push({ ...product, quantity: 1 });
    cartCount = cart.reduce((t, i) => t + i.quantity, 0);
    updateCartCount();
    updateCartDisplay();
    saveCartToStorage();
    showNotification(`${product.name} adicionado ao carrinho!`);
}

function removeFromCart(productId) {
    cart = cart.filter(i => i.id !== productId);
    cartCount = cart.reduce((t, i) => t + i.quantity, 0);
    updateCartCount();
    updateCartDisplay();
    saveCartToStorage();
    showNotification('Produto removido do carrinho!');
}

function updateQuantity(productId, newQuantity) {
    const item = cart.find(i => i.id === productId);
    if (!item) return;
    item.quantity = Math.max(1, newQuantity);
    cartCount = cart.reduce((t, i) => t + i.quantity, 0);
    updateCartCount();
    updateCartDisplay();
    saveCartToStorage();
}

function updateCartCount() {
    if (!cartCountElement) return;
    cartCountElement.textContent = cartCount;
    cartCountElement.style.display = cartCount > 0 ? 'flex' : 'none';
}

function updateCartDisplay() {
    if (!cartItemsContainer) return;
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="empty-cart">Seu carrinho está vazio</p>';
        const cartTotalElement = document.getElementById('cartTotal');
        if (cartTotalElement) cartTotalElement.textContent = '0,00';
        return;
    }
    let html = '';
    let total = 0;
    cart.forEach(item => {
        const subtotal = item.price * item.quantity;
        total += subtotal;
        html += `
            <div class="cart-item">
                <div class="cart-item-image-container">
                    <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                </div>
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <p class="cart-item-brand">${item.brand}</p>
                    <div class="cart-item-price">R$ ${item.price.toFixed(2).replace('.', ',')}</div>
                    <div class="cart-item-controls">
                        <button onclick="updateQuantity(${item.id}, ${item.quantity - 1})" class="quantity-btn">-</button>
                        <span class="quantity">${item.quantity}</span>
                        <button onclick="updateQuantity(${item.id}, ${item.quantity + 1})" class="quantity-btn">+</button>
                        <button onclick="removeFromCart(${item.id})" class="remove-btn">Remover</button>
                    </div>
                </div>
            </div>`;
    });
    cartItemsContainer.innerHTML = html;
    const cartTotalElement = document.getElementById('cartTotal');
    if (cartTotalElement) cartTotalElement.textContent = total.toFixed(2).replace('.', ',');
}

// WhatsApp
function checkoutViaWhatsApp() {
    if (cart.length === 0) return showNotification('Seu carrinho está vazio!');
    let message = WHATSAPP_MESSAGE_PREFIX;
    let total = 0;
    cart.forEach((item, idx) => {
        const sub = item.price * item.quantity;
        total += sub;
        message += `${idx + 1}. ${item.name} (${item.brand})\n`;
        message += `   Quantidade: ${item.quantity}\n`;
        message += `   Preço unitário: R$ ${item.price.toFixed(2).replace('.', ',')}\n\n`;
    });
    message += `TOTAL: R$ ${total.toFixed(2).replace('.', ',')}`;
    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
    closeCartSidebar();
}

function buyNowViaWhatsApp(product) {
    let message = `Olá! Gostaria de comprar este produto da Miquestyle:\n\n`;
    message += `${product.name} (${product.brand})\n`;
    message += `Preço: R$ ${product.price.toFixed(2).replace('.', ',')}\n`;
    if (product.originalPrice) {
        message += `Preço original: R$ ${product.originalPrice.toFixed(2).replace('.', ',')}\n`;
        message += `Desconto: ${product.discount}%\n`;
    }
    message += `\nFrete: GRATIS para todo o Brasil\n`;
    message += `Pagamento: PIX (5% desconto) ou ate 12x com juros de 4,5% ao mes\n\n`;
    message += `Informe tamanho, endereco e forma de pagamento. Obrigado!`;
    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
    closeProductModal();
}

// Modal
function openProductModal(product) {
    const modal = document.getElementById('productModal');
    if (!modal) return;
    document.getElementById('modalProductImage').src = product.image;
    document.getElementById('modalProductImage').alt = product.name;
    document.getElementById('modalProductName').textContent = product.name;
    document.getElementById('modalProductBrand').textContent = product.brand;
    document.getElementById('modalProductPrice').textContent = `R$ ${product.price.toFixed(2).replace('.', ',')}`;
    const original = document.getElementById('modalProductOriginalPrice');
    if (product.originalPrice) {
        original.textContent = `R$ ${product.originalPrice.toFixed(2).replace('.', ',')}`;
        original.style.display = 'inline';
    } else {
        original.style.display = 'none';
    }
    const modalInstallmentValue = calculateInstallment(product.price, 12, 0.045);
    document.getElementById('modalProductInstallments').textContent = `Até 12x de R$ ${modalInstallmentValue.toFixed(2).replace('.', ',')}`;
    const addToCartModal = document.getElementById('addToCartModal');
    const buyNowWhatsApp = document.getElementById('buyNowWhatsApp');
    addToCartModal.onclick = () => { addToCart(product.id); closeProductModal(); };
    buyNowWhatsApp.onclick = () => buyNowViaWhatsApp(product);
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}
function closeProductModal() {
    const modal = document.getElementById('productModal');
    if (!modal) return;
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Testimonials (safe no-op if seção não existe)
function startTestimonialSlider() {
    const items = document.querySelectorAll('.testimonial-item');
    if (!items || items.length === 0) return; // nada para animar
    let index = 0;
    setInterval(() => {
        items.forEach(el => el.classList.remove('active'));
        index = (index + 1) % items.length;
        items[index].classList.add('active');
    }, 5000);
}

// Auth UI + API
// Flag para garantir que o event listener só seja adicionado uma vez
let authClickHandlerAdded = false;

function setupAuth() {
    const closeAuth = document.getElementById('closeAuthModal');
    if (closeAuth) closeAuth.addEventListener('click', () => closeAuthModal());

    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    if (loginForm) loginForm.addEventListener('submit', handleLogin);
    if (registerForm) registerForm.addEventListener('submit', handleRegister);

    const closeProfile = document.getElementById('closeProfileModal');
    if (closeProfile) closeProfile.addEventListener('click', closeProfileModal);
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) logoutBtn.addEventListener('click', logout);


    // Forgot Password
    const forgotPasswordLink = document.getElementById('forgotPasswordLink');
    const forgotPasswordModal = document.getElementById('forgotPasswordModal');
    const closeForgotPasswordModal = document.getElementById('closeForgotPasswordModal');
    const forgotPasswordForm = document.getElementById('forgotPasswordForm');
    const backToLoginLink = document.getElementById('backToLoginLink');

    if (forgotPasswordLink) {
        forgotPasswordLink.addEventListener('click', (e) => {
            e.preventDefault();
            if (authModal) authModal.classList.remove('active');
            if (forgotPasswordModal) {
                forgotPasswordModal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    }

    if (closeForgotPasswordModal) {
        closeForgotPasswordModal.addEventListener('click', () => closeForgotPasswordModalFunc());
    }

    if (backToLoginLink) {
        backToLoginLink.addEventListener('click', (e) => {
            e.preventDefault();
            closeForgotPasswordModalFunc();
            if (authModal) {
                authModal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    }

    if (forgotPasswordForm) {
        forgotPasswordForm.addEventListener('submit', handleForgotPassword);
    }

    // Reset Password
    const resetPasswordModal = document.getElementById('resetPasswordModal');
    const closeResetPasswordModal = document.getElementById('closeResetPasswordModal');
    const resetPasswordForm = document.getElementById('resetPasswordForm');

    if (closeResetPasswordModal) {
        closeResetPasswordModal.addEventListener('click', () => closeResetPasswordModalFunc());
    }

    if (resetPasswordForm) {
        resetPasswordForm.addEventListener('submit', handleResetPassword);
    }

    // Verificar se há token na URL
    checkResetTokenInURL();

    // Delegação: funciona mesmo se o ID do botão mudar após login
    // Adicionar apenas uma vez
    if (!authClickHandlerAdded) {
        authClickHandlerAdded = true;
        document.addEventListener('click', (e) => {
            // Verificar se o clique foi no botão ou em algum elemento dentro dele
            let button = null;
            
            // Primeiro, verificar se o elemento clicado é o próprio botão
            if (e.target.id === 'openAuthModal' || e.target.id === 'openProfileModal') {
                button = e.target;
            }
            // Se não, procurar pelo closest com ID
            else if (e.target.closest('#openAuthModal')) {
                button = e.target.closest('#openAuthModal');
            }
            else if (e.target.closest('#openProfileModal')) {
                button = e.target.closest('#openProfileModal');
            }
            // Se ainda não encontrou, verificar se está dentro de um botão com classe auth-btn
            else if (e.target.closest('.auth-btn')) {
                button = e.target.closest('.auth-btn');
                // Verificar o ID atual do botão
                if (button.id !== 'openAuthModal' && button.id !== 'openProfileModal') {
                    // Se o botão tem classe auth-btn mas não tem ID correto, buscar pelo ID atual
                    const currentId = button.id;
                    if (!currentId || currentId === '') {
                        // Se não tem ID, verificar pelo texto
                        const btnText = button.textContent.trim();
                        if (btnText === 'Perfil') {
                            button.id = 'openProfileModal';
                        } else if (btnText === 'Entrar') {
                            button.id = 'openAuthModal';
                        }
                    }
                }
            }
            
            if (!button) return;
            
            // Garantir que o botão tem um ID válido
            if (!button.id || (button.id !== 'openAuthModal' && button.id !== 'openProfileModal')) {
                const btnText = button.textContent.trim();
                if (btnText === 'Perfil') {
                    button.id = 'openProfileModal';
                } else if (btnText === 'Entrar') {
                    button.id = 'openAuthModal';
                } else {
                    return; // Não é o botão correto
                }
            }
            
            console.log('Botão de auth/perfil clicado:', button.id, button);
            e.preventDefault();
            e.stopPropagation();
            
            // Abrir modal de login
            if (button.id === 'openAuthModal') {
                console.log('Abrindo modal de login');
                if (authModal) { 
                    authModal.classList.add('active'); 
                    document.body.style.overflow = 'hidden'; 
                }
            }
            // Abrir modal de perfil
            else if (button.id === 'openProfileModal') {
                console.log('Abrindo modal de perfil');
                openProfile();
            }
        });
    }
}

function closeForgotPasswordModalFunc() {
    const modal = document.getElementById('forgotPasswordModal');
    if (!modal) return;
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
    const form = document.getElementById('forgotPasswordForm');
    if (form) form.reset();
    const errBox = document.getElementById('forgotPasswordError');
    const succBox = document.getElementById('forgotPasswordSuccess');
    if (errBox) { errBox.style.display = 'none'; errBox.textContent = ''; }
    if (succBox) { succBox.style.display = 'none'; succBox.textContent = ''; }
}

function closeResetPasswordModalFunc() {
    const modal = document.getElementById('resetPasswordModal');
    if (!modal) return;
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
    const form = document.getElementById('resetPasswordForm');
    if (form) form.reset();
    const errBox = document.getElementById('resetPasswordError');
    if (errBox) { errBox.style.display = 'none'; errBox.textContent = ''; }
    // Remover token da URL
    if (window.history && window.history.pushState) {
        window.history.pushState({}, document.title, window.location.pathname);
    }
}

async function handleForgotPassword(e) {
    e.preventDefault();
    const email = document.getElementById('forgotPasswordEmail').value.trim();
    const errBox = document.getElementById('forgotPasswordError');
    const succBox = document.getElementById('forgotPasswordSuccess');
    
    if (errBox) { errBox.style.display = 'none'; errBox.textContent = ''; }
    if (succBox) { succBox.style.display = 'none'; succBox.textContent = ''; }

    try {
        const res = await fetch(`${API_BASE}/auth/forgot-password`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email })
        });
        
        // Verificar se a resposta é JSON
        const contentType = res.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
            throw new Error('API não está respondendo. Verifique se o servidor está rodando na porta 4000.');
        }
        
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || 'Erro ao processar');
        
        if (succBox) {
            succBox.textContent = data.message || 'Se o email existir, você receberá um link de redefinição';
            succBox.style.display = 'block';
        }
        showNotification('Link de redefinição enviado! Verifique seu email.');
    } catch (err) {
        let msg = err.message || 'Erro ao enviar link';
        // Tratar erros específicos
        if (err.message.includes('Failed to fetch') || err.message.includes('NetworkError')) {
            msg = 'Não foi possível conectar à API. Verifique se o servidor está rodando na porta 4000.';
        } else if (err.message.includes('Unexpected token')) {
            msg = 'API não está respondendo corretamente. Verifique se o servidor backend está rodando.';
        }
        if (errBox) {
            errBox.textContent = msg;
            errBox.style.display = 'block';
        }
        showNotification(msg);
    }
}

async function handleResetPassword(e) {
    e.preventDefault();
    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const errBox = document.getElementById('resetPasswordError');

    if (errBox) { errBox.style.display = 'none'; errBox.textContent = ''; }

    if (newPassword !== confirmPassword) {
        const msg = 'As senhas não coincidem';
        if (errBox) {
            errBox.textContent = msg;
            errBox.style.display = 'block';
        }
        return;
    }

    // Pegar token da URL ou do localStorage
    const urlParams = new URLSearchParams(window.location.search);
    let token = urlParams.get('token');
    if (!token) {
        token = localStorage.getItem('resetToken');
    }

    if (!token) {
        const msg = 'Token inválido. Solicite um novo link de redefinição.';
        if (errBox) {
            errBox.textContent = msg;
            errBox.style.display = 'block';
        }
        return;
    }

    try {
        const res = await fetch(`${API_BASE}/auth/reset-password`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ token, password: newPassword })
        });
        
        // Verificar se a resposta é JSON
        const contentType = res.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
            throw new Error('API não está respondendo. Verifique se o servidor está rodando na porta 4000.');
        }
        
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || 'Erro ao redefinir senha');
        
        showNotification('Senha redefinida com sucesso!');
        localStorage.removeItem('resetToken');
        closeResetPasswordModalFunc();
        
        // Abrir modal de login
        setTimeout(() => {
            if (authModal) {
                authModal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        }, 1000);
    } catch (err) {
        let msg = err.message || 'Erro ao redefinir senha';
        // Tratar erros específicos
        if (err.message.includes('Failed to fetch') || err.message.includes('NetworkError')) {
            msg = 'Não foi possível conectar à API. Verifique se o servidor está rodando na porta 4000.';
        } else if (err.message.includes('Unexpected token')) {
            msg = 'API não está respondendo corretamente. Verifique se o servidor backend está rodando.';
        }
        if (errBox) {
            errBox.textContent = msg;
            errBox.style.display = 'block';
        }
        showNotification(msg);
    }
}

function checkResetTokenInURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');
    if (token) {
        localStorage.setItem('resetToken', token);
        const resetPasswordModal = document.getElementById('resetPasswordModal');
        if (resetPasswordModal) {
            resetPasswordModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }
}

// Password Toggle Functionality
function setupPasswordToggle() {
    // Usar delegação de eventos para funcionar com elementos criados dinamicamente
    document.addEventListener('click', (e) => {
        if (e.target.closest('.toggle-password')) {
            const button = e.target.closest('.toggle-password');
            const targetId = button.getAttribute('data-target');
            const passwordInput = document.getElementById(targetId);
            
            if (!passwordInput) return;
            
            const icon = button.querySelector('i');
            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
                if (icon) {
                    icon.classList.remove('fa-eye');
                    icon.classList.add('fa-eye-slash');
                }
            } else {
                passwordInput.type = 'password';
                if (icon) {
                    icon.classList.remove('fa-eye-slash');
                    icon.classList.add('fa-eye');
                }
            }
        }
    });
}

function closeAuthModal() {
    if (!authModal) return;
    authModal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

async function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value;
    const errBox = document.getElementById('loginError');
    
    if (errBox) {
        errBox.style.display = 'none';
        errBox.textContent = '';
    }
    
    try {
        const res = await fetch(`${API_BASE}/auth/login`, { 
            method: 'POST', 
            headers: { 'Content-Type': 'application/json' }, 
            body: JSON.stringify({ email, password }) 
        });
        
        // Verificar se a resposta é JSON
        const contentType = res.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
            throw new Error('API não está respondendo. Verifique se o servidor está rodando na porta 4000.');
        }
        
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || 'Erro ao entrar');
        
        localStorage.setItem('miquestyleToken', data.token);
        localStorage.setItem('miquestyleUser', JSON.stringify(data.user));
        showNotification(`Bem-vindo(a), ${data.user.name}!`);
        closeAuthModal();
        updateAuthState();
    } catch (err) {
        let msg = err.message || 'Erro ao fazer login';
        if (err.message.includes('Failed to fetch') || err.message.includes('NetworkError')) {
            msg = 'Não foi possível conectar à API. Verifique se o servidor está rodando na porta 4000.';
        }
        showNotification(msg);
        if (errBox) { 
            errBox.textContent = msg; 
            errBox.style.display = 'block'; 
        }
    }
}

async function handleRegister(e) {
    e.preventDefault();
    const name = document.getElementById('regName').value.trim();
    const email = document.getElementById('regEmail').value.trim();
    const password = document.getElementById('regPassword').value;
    try {
        const res = await fetch(`${API_BASE}/auth/register`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name, email, password }) });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || 'Erro ao cadastrar');
        localStorage.setItem('miquestyleToken', data.token);
        localStorage.setItem('miquestyleUser', JSON.stringify(data.user));
        showNotification('Conta criada com sucesso!');
        closeAuthModal();
        updateAuthState();
    } catch (err) {
        showNotification(err.message);
        const errBox = document.getElementById('registerError');
        if (errBox) { errBox.textContent = err.message; errBox.style.display = 'block'; }
    }
}

function updateAuthState() {
    const userJson = localStorage.getItem('miquestyleUser');
    // Buscar o botão por qualquer um dos IDs possíveis
    let btn = document.getElementById('openAuthModal') || document.getElementById('openProfileModal');
    if (!btn) {
        console.error('Botão de auth não encontrado!');
        return;
    }
    
    console.log('Atualizando estado do botão de auth. Usuário logado:', !!userJson);
    
    if (userJson) {
        const user = JSON.parse(userJson);
        btn.textContent = `Perfil`;
        btn.classList.add('auth-btn');
        btn.id = 'openProfileModal';
        console.log('Botão atualizado para Perfil, ID:', btn.id);
    } else {
        btn.textContent = 'Entrar';
        btn.classList.remove('auth-btn');
        btn.id = 'openAuthModal';
        console.log('Botão atualizado para Entrar, ID:', btn.id);
    }
}

async function openProfile() {
    console.log('openProfile chamado');
    const token = localStorage.getItem('miquestyleToken');
    const userJson = localStorage.getItem('miquestyleUser');
    
    if (!token || !userJson) { 
        console.log('Sem token ou dados do usuário, redirecionando para login');
        showNotification('Faça login para acessar o perfil'); 
        // Redirecionar para o modal de login
        if (authModal) {
            authModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
        return; 
    }
    
    // Abrir modal imediatamente com dados do localStorage
    if (!profileModal) {
        console.error('Modal de perfil não encontrado!');
        showNotification('Erro ao abrir perfil');
        return;
    }
    
    try {
        // Carregar dados do localStorage primeiro para exibir rapidamente
        const user = JSON.parse(userJson);
        const nameEl = document.getElementById('profName');
        const emailEl = document.getElementById('profEmail');
        if (nameEl) nameEl.textContent = user.name;
        if (emailEl) emailEl.textContent = user.email;
        
        // Abrir modal
        profileModal.classList.add('active'); 
        document.body.style.overflow = 'hidden';
        console.log('Modal de perfil aberto com dados do localStorage');
        
        // Tentar atualizar dados da API em background (silenciosamente)
        // Não mostrar erros se a API não estiver disponível
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 5000);
        
        fetch(`${API_BASE}/auth/me`, { 
            headers: { Authorization: `Bearer ${token}` },
            signal: controller.signal
        })
        .then(async (res) => {
            clearTimeout(timeoutId);
            if (res.ok) {
                const contentType = res.headers.get('content-type');
                if (contentType && contentType.includes('application/json')) {
                    const data = await res.json();
                    // Atualizar dados se a API responder
                    if (nameEl) nameEl.textContent = data.user.name;
                    if (emailEl) emailEl.textContent = data.user.email;
                    // Atualizar localStorage
                    localStorage.setItem('miquestyleUser', JSON.stringify(data.user));
                    console.log('Dados do perfil atualizados da API');
                }
            } else if (res.status === 401) {
                // Token inválido - limpar e fechar modal
                localStorage.removeItem('miquestyleToken');
                localStorage.removeItem('miquestyleUser');
                updateAuthState();
                closeProfileModal();
                showNotification('Sua sessão expirou. Faça login novamente.');
                if (authModal) {
                    authModal.classList.add('active');
                    document.body.style.overflow = 'hidden';
                }
            }
        })
        .catch((apiErr) => {
            clearTimeout(timeoutId);
            // Erro na API - silenciosamente ignorar e manter dados do localStorage
            // Não mostrar notificação de erro - os dados do localStorage já estão sendo usados
            console.log('API não disponível, usando dados salvos do localStorage');
        });
    } catch (parseErr) {
        console.error('Erro ao parsear dados do usuário:', parseErr);
        showNotification('Erro ao carregar perfil');
        closeProfileModal();
    }
}

function closeProfileModal() {
    if (!profileModal) return;
    profileModal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function logout() {
    localStorage.removeItem('miquestyleToken');
    localStorage.removeItem('miquestyleUser');
    closeProfileModal();
    updateAuthState();
    showNotification('Você saiu da sua conta.');
}

// Utilitários
function findProductById(id) {
    for (const key in products) {
        const found = products[key].find(p => p.id === id);
        if (found) return found;
    }
    return null;
}

function showNotification(message) {
    const n = document.getElementById('notification');
    const t = document.getElementById('notificationText');
    if (!n || !t) return;
    
    // Garantir que está oculta antes de mostrar
    n.classList.remove('show');
    
    // Pequeno delay para garantir que a transição funcione
    setTimeout(() => {
        t.textContent = message;
        n.classList.add('show');
        
        // Ocultar após 3 segundos
        const timeoutId = setTimeout(() => {
            n.classList.remove('show');
        }, 3000);
        
        // Fechar ao clicar - remove o timeout se clicado antes
        n.onclick = () => {
            clearTimeout(timeoutId);
            n.classList.remove('show');
        };
    }, 10);
}

// Local Storage
function saveCartToStorage() { localStorage.setItem('miquestyleCart', JSON.stringify(cart)); }
function loadCartFromStorage() {
    const saved = localStorage.getItem('miquestyleCart');
    if (saved) {
        cart = JSON.parse(saved);
        cartCount = cart.reduce((t, i) => t + i.quantity, 0);
    }
}

// Expose
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateQuantity = updateQuantity;
window.openProductModal = openProductModal;
window.closeProductModal = closeProductModal;
window.checkoutViaWhatsApp = checkoutViaWhatsApp;
window.buyNowViaWhatsApp = buyNowViaWhatsApp;
