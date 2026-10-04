// Rivellair Official Web Experience
import { BRAND_INFO, PRODUCTS, BOTANICAL_INGREDIENTS, REVIEWS } from './products-data.js';

// Application State
const state = {
  cart: [],
  activeCategory: 'all',
  discountPercent: 0,
  activeQuizStep: 1,
  quizAnswers: {}
};

// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  loadCartFromStorage();
  renderProducts();
  renderBotanicals();
  renderReviews();
  setupEventListeners();
  updateCartUI();
});

// Price Formatter (Strictly adhering to catalog prices)
function formatPrice(priceINR) {
  if (priceINR === null || priceINR === undefined) {
    return 'Catalog Item';
  }
  return `₹${priceINR.toLocaleString('en-IN')}`;
}

// ==========================================================================
// Product Rendering & Filtering
// ==========================================================================
function renderProducts() {
  const perfumesGrid = document.getElementById('perfumesGrid');
  const catalogGrid = document.getElementById('catalogGrid');

  // 1. Render Perfume / Scent Spotlight (from Brand Philosophy)
  if (perfumesGrid) {
    const perfumes = PRODUCTS.filter(p => p.category === 'perfume');
    perfumesGrid.innerHTML = perfumes.map(perfume => createPerfumeSpotlightCardHTML(perfume)).join('');
  }

  // 2. Render Official Catalog Products (Filterable)
  if (catalogGrid) {
    const filtered = state.activeCategory === 'all'
      ? PRODUCTS
      : PRODUCTS.filter(p => p.category === state.activeCategory);

    catalogGrid.innerHTML = filtered.map(product => createCatalogProductCardHTML(product)).join('');
  }

  attachCardEvents();
}

function createPerfumeSpotlightCardHTML(p) {
  return `
    <article class="perfume-card" data-id="${p.id}" style="grid-column: 1 / -1; max-width: 900px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1.2fr; gap: 0;">
      <div class="product-img-wrap" style="aspect-ratio: auto; min-height: 400px;">
        <span class="card-badge">Signature Scent Focus</span>
        <img src="${p.image}" alt="${p.name} - ${p.tagline}" loading="lazy" style="height: 100%; object-fit: cover;">
      </div>
      <div class="product-body" style="padding: 36px;">
        <span class="product-concentration">${p.concentration} • Brand Debut</span>
        <h3 class="product-name" style="font-size: 2rem;">${p.name}</h3>
        <p class="product-tagline" style="color: var(--color-terracotta); font-size: 1rem; margin-bottom: 16px;">${p.tagline}</p>
        <p style="font-size: 0.92rem; color: var(--color-charcoal); line-height: 1.7; margin-bottom: 20px;">
          ${p.description}
        </p>

        <div style="background: var(--color-parchment); border: 1px solid var(--color-border); padding: 16px; border-radius: var(--radius-xs); margin-bottom: 24px; font-size: 0.8rem;">
          <div style="margin-bottom: 6px;"><strong>Top Notes:</strong> ${p.pyramid.top}</div>
          <div style="margin-bottom: 6px;"><strong>Heart Notes:</strong> ${p.pyramid.heart}</div>
          <div><strong>Base Notes:</strong> ${p.pyramid.base}</div>
        </div>

        <div class="product-footer" style="padding-top: 16px; border-top: 1px solid var(--color-border);">
          <div>
            <span style="font-size: 0.85rem; font-weight: 600; color: var(--color-terracotta); display: block;">Upcoming Launch</span>
            <span class="product-volume">${p.volume} • In Development</span>
          </div>
          <button class="btn-luxury btn-primary btn-sm" onclick="window.RivellairApp.openQuickView('${p.id}')">
            Explore Fragrance Details
          </button>
        </div>
      </div>
    </article>
  `;
}

function createCatalogProductCardHTML(p) {
  const hasPrice = p.priceINR !== null && p.priceINR !== undefined;
  
  const priceDisplay = hasPrice
    ? `<span class="product-price">MRP ${formatPrice(p.priceINR)}</span>`
    : `<span style="font-size: 0.82rem; font-weight: 600; color: var(--color-stone);">Inquire in Catalog</span>`;

  const actionButton = hasPrice
    ? `<button class="btn-luxury btn-primary btn-sm" data-action="add-to-cart" data-id="${p.id}">Add to Bag</button>`
    : `<button class="btn-luxury btn-outline btn-sm" data-action="quickview" data-id="${p.id}">View Details</button>`;

  return `
    <article class="perfume-card catalog-product-card" data-id="${p.id}">
      <div class="product-img-wrap">
        <span class="card-badge">${p.badge}</span>
        <img src="${p.image}" alt="${p.name}" loading="lazy">
        <div class="product-quick-actions">
          <button class="quick-view-btn" data-action="quickview" data-id="${p.id}">Full Catalog Details</button>
        </div>
      </div>
      <div class="product-body">
        <span class="product-concentration">${p.category.toUpperCase()} • ${p.catalogPage}</span>
        <h3 class="product-name" style="font-size: 1.25rem;">${p.name}</h3>
        <p class="product-tagline">${p.tagline}</p>

        <div class="product-footer">
          <div>
            ${priceDisplay}
            <span class="product-volume">${p.volume}</span>
          </div>
          ${actionButton}
        </div>
      </div>
    </article>
  `;
}

function attachCardEvents() {
  // Add to cart buttons
  document.querySelectorAll('[data-action="add-to-cart"]').forEach(btn => {
    btn.onclick = () => {
      const id = btn.dataset.id;
      addToCart(id);
    };
  });

  // Quick view triggers
  document.querySelectorAll('[data-action="quickview"]').forEach(btn => {
    btn.onclick = () => {
      const id = btn.dataset.id;
      openQuickView(id);
    };
  });
}

// ==========================================================================
// Cart State Management (Only for items with official prices)
// ==========================================================================
function addToCart(productId, qty = 1) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product || product.priceINR === null) return;

  const existing = state.cart.find(item => item.id === productId);
  if (existing) {
    existing.qty += qty;
  } else {
    state.cart.push({
      id: product.id,
      name: product.name,
      priceINR: product.priceINR,
      image: product.image,
      volume: product.volume,
      category: product.category,
      qty: qty
    });
  }

  saveCartToStorage();
  updateCartUI();
  openCartDrawer();
  showToast(`Added "${product.name}" to your bag`);
}

function updateCartQty(productId, delta) {
  const item = state.cart.find(i => i.id === productId);
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) {
    state.cart = state.cart.filter(i => i.id !== productId);
  }

  saveCartToStorage();
  updateCartUI();
}

function removeCartItem(productId) {
  state.cart = state.cart.filter(i => i.id !== productId);
  saveCartToStorage();
  updateCartUI();
  showToast('Item removed from bag');
}

function updateCartUI() {
  const cartCounters = document.querySelectorAll('.cart-counter');
  const cartItemsWrap = document.getElementById('cartItemsWrap');
  const subtotalEl = document.getElementById('cartSubtotalVal');

  const totalCount = state.cart.reduce((sum, item) => sum + item.qty, 0);
  cartCounters.forEach(c => c.textContent = totalCount);

  let rawSubtotal = state.cart.reduce((sum, item) => sum + (item.priceINR * item.qty), 0);
  let finalSubtotal = rawSubtotal;

  if (state.discountPercent > 0) {
    finalSubtotal = Math.round(rawSubtotal * (1 - state.discountPercent / 100));
  }

  if (subtotalEl) {
    subtotalEl.textContent = formatPrice(finalSubtotal);
  }

  // Render items
  if (cartItemsWrap) {
    if (state.cart.length === 0) {
      cartItemsWrap.innerHTML = `
        <div class="cart-empty-state">
          <p style="font-family: var(--font-serif); font-size: 1.2rem; margin-bottom: 8px;">Your Bag Is Empty</p>
          <p style="font-size: 0.85rem; margin-bottom: 20px;">Explore our catalog items with official pricing (Purifine Shampoo, Keratin Treatment, Keratin Shampoo & Conditioner).</p>
          <button class="btn-luxury btn-primary btn-sm" onclick="document.getElementById('catalog-section').scrollIntoView({behavior: 'smooth'}); closeCartDrawer();">
            Explore Products
          </button>
        </div>
      `;
    } else {
      cartItemsWrap.innerHTML = state.cart.map(item => `
        <div class="cart-item">
          <img src="${item.image}" alt="${item.name}" class="cart-item-img">
          <div class="cart-item-info">
            <h4>${item.name}</h4>
            <div class="cart-item-meta">${item.volume}</div>
            <div class="cart-qty-ctrl">
              <button class="qty-btn" onclick="window.RivellairApp.updateQty('${item.id}', -1)">-</button>
              <span class="qty-val">${item.qty}</span>
              <button class="qty-btn" onclick="window.RivellairApp.updateQty('${item.id}', 1)">+</button>
            </div>
          </div>
          <div>
            <div class="cart-item-price">${formatPrice(item.priceINR * item.qty)}</div>
            <button class="cart-item-remove" onclick="window.RivellairApp.removeItem('${item.id}')">Remove</button>
          </div>
        </div>
      `).join('');
    }
  }
}

function saveCartToStorage() {
  try {
    localStorage.setItem('rivellair_cart', JSON.stringify(state.cart));
  } catch (e) {
    console.warn('Storage unavailable', e);
  }
}

function loadCartFromStorage() {
  try {
    const saved = localStorage.getItem('rivellair_cart');
    if (saved) state.cart = JSON.parse(saved);
  } catch (e) {
    state.cart = [];
  }
}

// Drawer Controls
function openCartDrawer() {
  document.getElementById('cartDrawerOverlay')?.classList.add('active');
  document.getElementById('cartDrawer')?.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeCartDrawer() {
  document.getElementById('cartDrawerOverlay')?.classList.remove('active');
  document.getElementById('cartDrawer')?.classList.remove('active');
  document.body.style.overflow = '';
}

// ==========================================================================
// Quick View Modal
// ==========================================================================
function openQuickView(productId) {
  const p = PRODUCTS.find(item => item.id === productId);
  if (!p) return;

  const modalContent = document.getElementById('quickViewContent');
  if (!modalContent) return;

  let extraDetailsHTML = '';
  if (p.pyramid) {
    extraDetailsHTML = `
      <div style="background: var(--color-parchment); padding: 16px; border-radius: var(--radius-xs); margin: 16px 0; font-size: 0.8rem;">
        <p style="font-weight: 600; color: var(--color-terracotta); margin-bottom: 6px;">✦ Olfactory Composition</p>
        <p style="margin-bottom: 4px;"><strong>Top:</strong> ${p.pyramid.top}</p>
        <p style="margin-bottom: 4px;"><strong>Heart:</strong> ${p.pyramid.heart}</p>
        <p style="margin-bottom: 4px;"><strong>Base:</strong> ${p.pyramid.base}</p>
        <p style="margin-top: 8px; font-size: 0.75rem; color: var(--color-stone);">
          <strong>Concentration:</strong> ${p.concentration} | <strong>Status:</strong> ${p.metrics.longevity}
        </p>
      </div>
    `;
  } else if (p.benefits) {
    extraDetailsHTML = `
      <div style="background: var(--color-parchment); padding: 16px; border-radius: var(--radius-xs); margin: 16px 0; font-size: 0.8rem;">
        <p style="font-weight: 600; color: var(--color-terracotta); margin-bottom: 6px;">✦ Catalog Stated Benefits</p>
        <ul style="padding-left: 18px; list-style: disc; color: var(--color-charcoal); line-height: 1.5;">
          ${p.benefits.map(b => `<li style="margin-bottom: 4px;">${b}</li>`).join('')}
        </ul>
        <p style="margin-top: 10px; font-size: 0.75rem;"><strong>How To Use:</strong> ${p.howToUse}</p>
      </div>
    `;
  }

  const hasPrice = p.priceINR !== null && p.priceINR !== undefined;
  const bottomAction = hasPrice
    ? `<button class="btn-luxury btn-primary" onclick="window.RivellairApp.addToCart('${p.id}'); window.RivellairApp.closeModal('quickViewModal');">Add to Bag</button>`
    : `<button class="btn-luxury btn-outline" onclick="window.RivellairApp.openModal('flipbookModal'); window.RivellairApp.closeModal('quickViewModal');">Open Catalog Flipbook</button>`;

  const priceFooter = hasPrice
    ? `<div style="font-family: var(--font-serif); font-size: 1.6rem; font-weight: 600;">MRP ${formatPrice(p.priceINR)}</div>
       <div style="font-size: 0.75rem; color: var(--color-stone);">${p.volume} • Catalog ${p.catalogPage}</div>`
    : `<div style="font-family: var(--font-serif); font-size: 1.2rem; font-weight: 600; color: var(--color-stone);">Official Catalog Item</div>
       <div style="font-size: 0.75rem; color: var(--color-stone);">Contact for Salon Orders • ${p.catalogPage}</div>`;

  modalContent.innerHTML = `
    <div class="quick-view-grid">
      <div class="quick-view-media">
        <img src="${p.image}" alt="${p.name}">
      </div>
      <div class="quick-view-details">
        <span class="sub-heading" style="margin-bottom: 4px;">${p.category.toUpperCase()} • ${p.catalogPage}</span>
        <h2 style="font-size: 1.8rem; margin-bottom: 8px;">${p.name}</h2>
        <p style="font-style: italic; color: var(--color-terracotta); margin-bottom: 16px;">${p.tagline}</p>
        <p style="font-size: 0.9rem; color: var(--color-stone); line-height: 1.6; margin-bottom: 16px;">${p.description}</p>
        
        ${extraDetailsHTML}

        <div style="margin-top: auto; display: flex; align-items: center; justify-content: space-between; gap: 16px; padding-top: 20px; border-top: 1px solid var(--color-border);">
          <div>
            ${priceFooter}
          </div>
          ${bottomAction}
        </div>
      </div>
    </div>
  `;

  openModal('quickViewModal');
}

// ==========================================================================
// Botanical Ingredients & Reviews
// ==========================================================================
function renderBotanicals() {
  const container = document.getElementById('botanicalsGrid');
  if (!container) return;

  container.innerHTML = BOTANICAL_INGREDIENTS.map(item => `
    <div class="ingredient-card">
      <span class="ingredient-category">${item.category}</span>
      <h3 class="ingredient-title">${item.name}</h3>
      <p class="ingredient-origin">Category: ${item.origin}</p>
      <p class="ingredient-scent"><strong>Profile:</strong> ${item.scent}</p>
      <p class="ingredient-benefit">${item.benefit}</p>
    </div>
  `).join('');
}

function renderReviews() {
  const container = document.getElementById('reviewsGrid');
  if (!container) return;

  container.innerHTML = REVIEWS.map(r => `
    <div class="review-card">
      <div class="review-stars">★ ★ ★ ★ ★</div>
      <p class="review-quote">"${r.quote}"</p>
      <div class="review-author-meta">
        <h4 class="review-author-name">${r.author}</h4>
        <p class="review-author-role">${r.role} • ${r.city}</p>
        <span class="review-product-tag">${r.product}</span>
      </div>
    </div>
  `).join('');
}

// ==========================================================================
// Modals & General UI Controls
// ==========================================================================
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function showToast(message) {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span>🌿</span><span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

// ==========================================================================
// Setup Global Event Listeners
// ==========================================================================
function setupEventListeners() {
  // Mobile Nav Toggle
  const mobileToggle = document.getElementById('mobileNavToggle');
  const navLinks = document.getElementById('navLinks');
  if (mobileToggle && navLinks) {
    mobileToggle.onclick = () => navLinks.classList.toggle('active');
  }

  // Header Scroll Effect
  window.addEventListener('scroll', () => {
    const header = document.querySelector('.main-header');
    if (header) {
      header.classList.toggle('scrolled', window.scrollY > 20);
    }
  });

  // Cart Drawer open/close
  document.getElementById('openCartBtn')?.addEventListener('click', openCartDrawer);
  document.getElementById('closeCartBtn')?.addEventListener('click', closeCartDrawer);
  document.getElementById('cartDrawerOverlay')?.addEventListener('click', closeCartDrawer);

  // Close modals on overlay click or close button
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        overlay.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  });

  document.querySelectorAll('.modal-close-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const modal = btn.closest('.modal-overlay');
      if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  });

  // Category Tabs filter
  document.querySelectorAll('.tab-btn').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      state.activeCategory = tab.dataset.category;
      renderProducts();
    });
  });

  // Checkout Simulator
  document.getElementById('checkoutBtn')?.addEventListener('click', () => {
    if (state.cart.length === 0) {
      showToast('Please add items to your bag before checkout');
      return;
    }
    showToast('Connecting to secure order processing for rivellair.com...');
    setTimeout(() => {
      alert('Order initiated! In production, this completes via your secure gateway on rivellair.com.');
    }, 600);
  });

  // Newsletter Form
  document.getElementById('newsletterForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const emailInput = document.getElementById('newsletterEmail');
    if (emailInput && emailInput.value) {
      showToast('Welcome to the Rivellair circle. We have recorded your interest!');
      emailInput.value = '';
    }
  });

  // Heyzine Catalog Modal Triggers
  document.querySelectorAll('[data-open="flipbookModal"]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      openModal('flipbookModal');
    });
  });
}

// Global Exports
window.RivellairApp = {
  addToCart,
  updateQty: updateCartQty,
  removeItem: removeCartItem,
  openCartDrawer,
  closeCartDrawer,
  openQuickView,
  openModal,
  closeModal
};
