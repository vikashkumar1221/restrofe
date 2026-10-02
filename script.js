/**
 * Restrofe - General Shop, Cafe & Daily Thalis
 * Core Logic & State Management
 */

// ==========================================
// DEFAULT DATA STORAGE (Fallback & Seed)
// ==========================================

const DEFAULT_PRODUCTS = [
  // Biscuits & Snacks
  {
    id: "p1",
    name: "Britannia Bourbon Chocolate",
    category: "biscuits",
    price: 35,
    unit: "150g pack",
    badge: "Bestseller",
    inStock: true,
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=500&auto=format&fit=crop&q=60",
    desc: "Classic crunchy chocolate biscuits sprinkled with sugar crystals and smooth rich chocolate cream."
  },
  {
    id: "p2",
    name: "Oreo Vanilla Cream Cookies",
    category: "biscuits",
    price: 30,
    unit: "120g pack",
    badge: "Popular",
    inStock: true,
    image: "https://images.unsplash.com/photo-1569864358642-9d1684040f43?w=500&auto=format&fit=crop&q=60",
    desc: "Rich dark cocoa sandwich biscuits loaded with smooth sweet vanilla crème center."
  },
  {
    id: "p3",
    name: "Sunfeast Dark Fantasy Choco Fills",
    category: "biscuits",
    price: 80,
    unit: "300g pack",
    badge: "Luxury",
    inStock: true,
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500&auto=format&fit=crop&q=60",
    desc: "Crisp crust cookie packed with molten molten rich choco lava in every bite."
  },
  {
    id: "p4",
    name: "Britannia Good Day Butter & Cashew",
    category: "biscuits",
    price: 40,
    unit: "200g pack",
    badge: "",
    inStock: true,
    image: "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?w=500&auto=format&fit=crop&q=60",
    desc: "Rich buttery taste baked with crunch of real cashews and smiling texture."
  },
  {
    id: "p5",
    name: "Parle-G Gold Glucose Biscuits",
    category: "biscuits",
    price: 25,
    unit: "250g pack",
    badge: "Everyday Staple",
    inStock: true,
    image: "https://images.unsplash.com/photo-1583338917451-face2751d8d5?w=500&auto=format&fit=crop&q=60",
    desc: "India's beloved tea-time companion, packed with the goodness of wheat and milk."
  },

  // Cold Coffee
  {
    id: "p6",
    name: "Classic Thick Cold Coffee",
    category: "coffee",
    price: 70,
    unit: "350ml glass",
    badge: "Chilled",
    inStock: true,
    image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=500&auto=format&fit=crop&q=60",
    desc: "Double-shot espresso blended with chilled creamy milk, chocolate drizzle, and thick coffee froth."
  },
  {
    id: "p7",
    name: "Hazelnut Choco Frappe",
    category: "coffee",
    price: 95,
    unit: "350ml glass",
    badge: "Barista Special",
    inStock: true,
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=500&auto=format&fit=crop&q=60",
    desc: "Rich roasted hazelnut flavor combined with velvety cold coffee and chocolate chips."
  },
  {
    id: "p8",
    name: "Caramel Iced Latte with Vanilla Scoop",
    category: "coffee",
    price: 110,
    unit: "350ml glass",
    badge: "Sweet & Creamy",
    inStock: true,
    image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=500&auto=format&fit=crop&q=60",
    desc: "Cold brew coffee layered with salted butter caramel swirl and topped with a scoop of vanilla ice cream."
  },

  // Shakes
  {
    id: "p9",
    name: "Belgian Chocolate Thickshake",
    category: "shakes",
    price: 120,
    unit: "400ml jar",
    badge: "Chef's Signature",
    inStock: true,
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500&auto=format&fit=crop&q=60",
    desc: "Dense, heavenly Belgian chocolate shake blended with chocolate ice cream and brownie crumbs."
  },
  {
    id: "p10",
    name: "Alphonso Mango Milkshake",
    category: "shakes",
    price: 95,
    unit: "400ml jar",
    badge: "Seasonal Favorite",
    inStock: true,
    image: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=500&auto=format&fit=crop&q=60",
    desc: "100% natural Alphonso mango pulp blended with rich condensed milk and dry fruits garnish."
  },
  {
    id: "p11",
    name: "Oreo & KitKat Overload Shake",
    category: "shakes",
    price: 130,
    unit: "400ml jar",
    badge: "Loaded",
    inStock: true,
    image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=500&auto=format&fit=crop&q=60",
    desc: "Crushed Oreo biscuits, crisp KitKat wafers, chocolate ganache, and whipped cream top."
  },
  {
    id: "p12",
    name: "Fresh Strawberry Cream Shake",
    category: "shakes",
    price: 90,
    unit: "350ml glass",
    badge: "Fresh",
    inStock: true,
    image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=500&auto=format&fit=crop&q=60",
    desc: "Sweet ripe strawberries blitzed with whole milk and strawberry ice cream scoop."
  },

  // Fresh Juices
  {
    id: "p13",
    name: "Fresh Sweet Lime (Mosambi) Juice",
    category: "juices",
    price: 60,
    unit: "300ml glass",
    badge: "100% Pure",
    inStock: true,
    image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?w=500&auto=format&fit=crop&q=60",
    desc: "Cold pressed Mosambi juice made freshly on order, with a pinch of black salt and roasted cumin."
  },
  {
    id: "p14",
    name: "Watermelon Mint Refresh Cooler",
    category: "juices",
    price: 50,
    unit: "300ml glass",
    badge: "Hydrating",
    inStock: true,
    image: "https://images.unsplash.com/photo-1589733955941-5eeaf752f6dd?w=500&auto=format&fit=crop&q=60",
    desc: "Chilled fresh watermelon juice infused with fresh mint leaves and dash of lemon."
  },
  {
    id: "p15",
    name: "Pure Pomegranate (Anaar) Juice",
    category: "juices",
    price: 90,
    unit: "300ml glass",
    badge: "Nutrient Rich",
    inStock: true,
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format&fit=crop&q=60",
    desc: "Pressed from deep red ruby pomegranate seeds without any added water or preservatives."
  },

  // Thali & Combos
  {
    id: "p16",
    name: "Today's Deluxe Homestyle Thali",
    category: "thali",
    price: 120,
    unit: "1 Full Plate",
    badge: "Today's Menu",
    inStock: true,
    image: "https://images.unsplash.com/photo-1610057099431-d73a1c9d2f2f?w=500&auto=format&fit=crop&q=60",
    desc: "Fresh rotating homestyle thali: 2 Sabzis (Gravy + Dry), Dal Tadka, 4 Hot Rotis, Rice, Raita & Sweet of the day."
  },
  {
    id: "p17",
    name: "Mini Executive Meal Box",
    category: "thali",
    price: 85,
    unit: "1 Box",
    badge: "Quick Meal",
    inStock: true,
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=500&auto=format&fit=crop&q=60",
    desc: "Compact office meal: 1 Special Sabzi, Dal Fry, 3 Phulkas, Jeera Rice, and fresh green salad."
  },

  // General Store
  {
    id: "p18",
    name: "Haldiram's Aloo Bhujia",
    category: "general",
    price: 55,
    unit: "200g pouch",
    badge: "Namkeen",
    inStock: true,
    image: "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=500&auto=format&fit=crop&q=60",
    desc: "Spicy mint flavored crispy potato and gram flour noodles. The ultimate crunchy tea snack."
  }
];

// Sample preset images for quick selection in Admin
const PRESET_IMAGES = [
  { name: "Coffee", url: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=500&auto=format&fit=crop&q=60" },
  { name: "Frappe", url: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=500&auto=format&fit=crop&q=60" },
  { name: "Choco Shake", url: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500&auto=format&fit=crop&q=60" },
  { name: "Fruit Shake", url: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=500&auto=format&fit=crop&q=60" },
  { name: "Juice", url: "https://images.unsplash.com/photo-1613478223719-2ab802602423?w=500&auto=format&fit=crop&q=60" },
  { name: "Watermelon", url: "https://images.unsplash.com/photo-1589733955941-5eeaf752f6dd?w=500&auto=format&fit=crop&q=60" },
  { name: "Cookies", url: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=500&auto=format&fit=crop&q=60" },
  { name: "Thali", url: "https://images.unsplash.com/photo-1610057099431-d73a1c9d2f2f?w=500&auto=format&fit=crop&q=60" }
];

// 7-Day Rotating Weekly Thali Schedule
const DEFAULT_THALI_SCHEDULE = {
  "Monday": {
    name: "Punjabi Rajma & Paneer Feast",
    price: 120,
    lunch: {
      main: "Punjabi Rajma Masala (Slow Cooked)",
      dry: "Aloo Gobhi Adraki",
      dal: "Yellow Moong Dal Tadka",
      breads: "4 Butter Tawa Rotis + Jeera Rice",
      sides: "Boondi Raita, Onion Salad & Gulab Jamun"
    },
    dinner: {
      main: "Paneer Butter Masala",
      dry: "Jeera Aloo Fry",
      dal: "Dal Makhani",
      breads: "4 Soft Phulkas + Steamed Rice",
      sides: "Fresh Curd, Pickle & Moong Dal Halwa"
    },
    specialNote: "Pure Desi Ghee preparation. Free extra gravy on request!"
  },
  "Tuesday": {
    name: "Rajasthani Kadhi & Matar Paneer",
    price: 120,
    lunch: {
      main: "Desi Besan Kadhi Pakoda",
      dry: "Bhindi Do Pyaza",
      dal: "Chana Dal Fry",
      breads: "4 Tawa Rotis + Steamed Basmati Rice",
      sides: "Mix Veg Raita, Green Salad & Bundi Ladoo"
    },
    dinner: {
      main: "Matar Paneer Curry",
      dry: "Baingan Bharta / Aloo Shimla Mirch",
      dal: "Arhar Dal Tadka",
      breads: "4 Phulkas + Peas Pulao",
      sides: "Fresh Curd, Green Mint Chutney & Jalebi"
    },
    specialNote: "Authentic sour curd Kadhi cooked with fenugreek & mustard seeds."
  },
  "Wednesday": {
    name: "Pindi Chhole & Palak Paneer",
    price: 120,
    lunch: {
      main: "Amritsari Pindi Chhole Masala",
      dry: "Aloo Methi Matar",
      dal: "Panchmel Dal",
      breads: "4 Butter Rotis / 2 Bhature + Basmati Rice",
      sides: "Cucumber Raita, Pickled Ginger & Suji Halwa"
    },
    dinner: {
      main: "Lehsuni Palak Paneer",
      dry: "Aloo Gajar Matar",
      dal: "Yellow Dal Fry",
      breads: "4 Soft Phulkas + Jeera Rice",
      sides: "Tadka Curd, Salad & Rasgulla"
    },
    specialNote: "High protein day! Cooked with freshly ground spices."
  },
  "Thursday": {
    name: "Shahi Kadhai Paneer & Dal Tadka",
    price: 120,
    lunch: {
      main: "Kadhai Paneer with Bell Peppers",
      dry: "Tindora / Kundru Masala Fry",
      dal: "Dhabha Style Dal Tadka",
      breads: "4 Butter Rotis + Steamed Rice",
      sides: "Boondi Raita, Sirka Onions & Kheer"
    },
    dinner: {
      main: "Malai Kofta in White Gravy",
      dry: "Jeera Aloo",
      dal: "Moong Dhuli Dal",
      breads: "4 Phulkas + Veg Pulao",
      sides: "Plain Dahi, Papad & Hot Gulab Jamun"
    },
    specialNote: "Thursday Sattvic Special - No onion garlic option also available!"
  },
  "Friday": {
    name: "Kashmiri Dum Aloo & Shahi Paneer",
    price: 120,
    lunch: {
      main: "Kashmiri Dum Aloo in Rich Gravy",
      dry: "Mix Seasonal Vegetable",
      dal: "Yellow Dal with Ghee Tadka",
      breads: "4 Butter Tawa Rotis + Jeera Rice",
      sides: "Pineapple Raita, Salad & Balushahi"
    },
    dinner: {
      main: "Shahi Paneer (Mughlai Style)",
      dry: "Aloo Bhindi Crunchy",
      dal: "Dal Makhani Overnight Simmered",
      breads: "4 Soft Phulkas + Steamed Basmati Rice",
      sides: "Fresh Curd, Green Salad & Gajar Halwa"
    },
    specialNote: "Rich cashew-based royal gravy for dinner."
  },
  "Saturday": {
    name: "Dal Makhani & Khoya Paneer Weekend",
    price: 130,
    lunch: {
      main: "Slow-Cooked Authentic Dal Makhani",
      dry: "Paneer Bhurji / Aloo Gobhi",
      dal: "Punjabi Dal Tadka",
      breads: "4 Butter Rotis / Laccha Paratha + Jeera Rice",
      sides: "Mix Vegetable Raita, Roasted Papad & Rasmalai"
    },
    dinner: {
      main: "Paneer Lababdar",
      dry: "Kaju Curry / Mix Veg",
      dal: "Panchmel Dal",
      breads: "4 Phulkas + Kashmiri Pulao",
      sides: "Fresh Curd, Onion Rings & Malpua"
    },
    specialNote: "Weekend indulgence with rich buttery Dal Makhani & rich dessert."
  },
  "Sunday": {
    name: "Sunday Maharaja Grand Feast",
    price: 140,
    lunch: {
      main: "Special Shahi Paneer Kofta",
      dry: "Kadhai Mushroom / Baby Corn Veg",
      dal: "Royal Dal Bukhara",
      breads: "4 Butter Naan/Rotis + Shahi Veg Biryani Rice",
      sides: "Dahi Vada, Mint Chutney, Papad & Angoori Jamun"
    },
    dinner: {
      main: "Paneer Tikka Butter Masala",
      dry: "Aloo Dum Bhojpuri",
      dal: "Chana Dal Tadka",
      breads: "4 Phulkas + Basmati Pulao",
      sides: "Boondi Raita, Green Salad & Ice Cream Scoop"
    },
    specialNote: "Grand Sunday Feast: Includes complimentary Dahi Vada and Sweet!"
  }
};

// ==========================================
// STATE MANAGEMENT
// ==========================================
class StoreState {
  constructor() {
    this.products = this.loadProducts();
    this.thaliSchedule = this.loadThaliSchedule();
    this.cart = this.loadCart();
    this.activeCategory = "all";
    this.searchQuery = "";
    this.sortBy = "featured";
    this.selectedThaliDay = this.getTodayDayName();
    this.isAdminLoggedIn = sessionStorage.getItem("restrofe_admin_logged") === "true";
  }

  loadProducts() {
    const saved = localStorage.getItem("restrofe_products");
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { console.error(e); }
    }
    localStorage.setItem("restrofe_products", JSON.stringify(DEFAULT_PRODUCTS));
    return DEFAULT_PRODUCTS;
  }

  saveProducts() {
    localStorage.setItem("restrofe_products", JSON.stringify(this.products));
  }

  loadThaliSchedule() {
    const saved = localStorage.getItem("restrofe_thali_schedule");
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { console.error(e); }
    }
    localStorage.setItem("restrofe_thali_schedule", JSON.stringify(DEFAULT_THALI_SCHEDULE));
    return DEFAULT_THALI_SCHEDULE;
  }

  saveThaliSchedule() {
    localStorage.setItem("restrofe_thali_schedule", JSON.stringify(this.thaliSchedule));
  }

  loadCart() {
    const saved = localStorage.getItem("restrofe_cart");
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { console.error(e); }
    }
    return [];
  }

  saveCart() {
    localStorage.setItem("restrofe_cart", JSON.stringify(this.cart));
  }

  getTodayDayName() {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[new Date().getDay()];
  }
}

const state = new StoreState();

// ==========================================
// DOM ELEMENTS
// ==========================================
const DOM = {
  // Navigation & Search
  searchInput: document.getElementById("searchInput"),
  clearSearchBtn: document.getElementById("clearSearchBtn"),
  categoryTabs: document.getElementById("categoryTabs"),
  cartCount: document.getElementById("cartCount"),
  openCartBtn: document.getElementById("openCartBtn"),
  openAdminModalBtn: document.getElementById("openAdminModalBtn"),
  adminBtnText: document.getElementById("adminBtnText"),
  viewTodayThaliBtn: document.getElementById("viewTodayThaliBtn"),

  // Mobile Bottom Navigation & Floating Cart Elements
  mobNavHome: document.getElementById("mobNavHome"),
  mobNavThali: document.getElementById("mobNavThali"),
  mobNavSearch: document.getElementById("mobNavSearch"),
  mobNavCart: document.getElementById("mobNavCart"),
  mobNavAdmin: document.getElementById("mobNavAdmin"),
  mobCartBadge: document.getElementById("mobCartBadge"),
  mobileFloatingCart: document.getElementById("mobileFloatingCart"),
  floatingCartCount: document.getElementById("floatingCartCount"),
  floatingCartPrice: document.getElementById("floatingCartPrice"),
  floatingViewCartBtn: document.getElementById("floatingViewCartBtn"),

  // Hero Section
  heroCurrentDay: document.getElementById("heroCurrentDay"),
  heroThaliTitle: document.getElementById("heroThaliTitle"),
  heroThaliPrice: document.getElementById("heroThaliPrice"),
  heroThaliItemsList: document.getElementById("heroThaliItemsList"),
  heroAddThaliBtn: document.getElementById("heroAddThaliBtn"),
  heroViewWeekBtn: document.getElementById("heroViewWeekBtn"),

  // Thali Schedule Section & Sheet Modal
  thaliScheduleModalBackdrop: document.getElementById("thaliScheduleModalBackdrop"),
  closeThaliScheduleBtn: document.getElementById("closeThaliScheduleBtn"),
  daysTabNav: document.getElementById("daysTabNav"),
  dayThaliDetailCard: document.getElementById("dayThaliDetailCard"),
  adminThaliHint: document.getElementById("adminThaliHint"),
  quickEditThaliBtn: document.getElementById("quickEditThaliBtn"),

  // Products Catalog
  productsGrid: document.getElementById("productsGrid"),
  emptyState: document.getElementById("emptyState"),
  resetFiltersBtn: document.getElementById("resetFiltersBtn"),
  sortSelect: document.getElementById("sortSelect"),
  catalogTitle: document.getElementById("catalogTitle"),
  catalogSubtitle: document.getElementById("catalogSubtitle"),

  // Cart Modal
  cartModalBackdrop: document.getElementById("cartModalBackdrop"),
  closeCartBtn: document.getElementById("closeCartBtn"),
  cartItemsList: document.getElementById("cartItemsList"),
  cartSubtotal: document.getElementById("cartSubtotal"),
  cartTotal: document.getElementById("cartTotal"),
  custName: document.getElementById("custName"),
  custPhone: document.getElementById("custPhone"),
  custNotes: document.getElementById("custNotes"),
  checkoutWhatsappBtn: document.getElementById("checkoutWhatsappBtn"),
  clearCartBtn: document.getElementById("clearCartBtn"),

  // Admin Modal & Dashboard
  adminModalBackdrop: document.getElementById("adminModalBackdrop"),
  adminLoginCard: document.getElementById("adminLoginCard"),
  closeAdminModalBtn: document.getElementById("closeAdminModalBtn"),
  adminLoginForm: document.getElementById("adminLoginForm"),
  adminUsernameInput: document.getElementById("adminUsernameInput"),
  adminPasswordInput: document.getElementById("adminPasswordInput"),
  adminErrorBanner: document.getElementById("adminErrorBanner"),
  adminDashboardContainer: document.getElementById("adminDashboardContainer"),
  closeAdminDashBtn: document.getElementById("closeAdminDashBtn"),
  adminLogoutBtn: document.getElementById("adminLogoutBtn"),
  resetDefaultDataBtn: document.getElementById("resetDefaultDataBtn"),
  dashItemCount: document.getElementById("dashItemCount"),

  // Product Form (Admin)
  productForm: document.getElementById("productForm"),
  editProductId: document.getElementById("editProductId"),
  productFormTitle: document.getElementById("productFormTitle"),
  prodName: document.getElementById("prodName"),
  prodCategory: document.getElementById("prodCategory"),
  prodPrice: document.getElementById("prodPrice"),
  prodUnit: document.getElementById("prodUnit"),
  prodBadge: document.getElementById("prodBadge"),
  prodImage: document.getElementById("prodImage"),
  prodDesc: document.getElementById("prodDesc"),
  prodInStock: document.getElementById("prodInStock"),
  cancelEditProdBtn: document.getElementById("cancelEditProdBtn"),
  openImagePresetsBtn: document.getElementById("openImagePresetsBtn"),
  presetImagesStrip: document.getElementById("presetImagesStrip"),

  // Barcode Scanner & Open Food Facts Elements
  barcodeInput: document.getElementById("barcodeInput"),
  fetchBarcodeBtn: document.getElementById("fetchBarcodeBtn"),
  fetchBtnText: document.getElementById("fetchBtnText"),
  toggleCameraScannerBtn: document.getElementById("toggleCameraScannerBtn"),
  cameraBtnText: document.getElementById("cameraBtnText"),
  cameraViewportContainer: document.getElementById("cameraViewportContainer"),
  closeCameraScannerBtn: document.getElementById("closeCameraScannerBtn"),

  // Product Photo Manager Elements
  captureNewPhotoBtn: document.getElementById("captureNewPhotoBtn"),
  uploadDevicePhotoBtn: document.getElementById("uploadDevicePhotoBtn"),
  cameraFileInput: document.getElementById("cameraFileInput"),
  deviceFileInput: document.getElementById("deviceFileInput"),
  apiImagesSelector: document.getElementById("apiImagesSelector"),
  apiThumbnailsRow: document.getElementById("apiThumbnailsRow"),
  productImagePreview: document.getElementById("productImagePreview"),
  imageSourceTag: document.getElementById("imageSourceTag"),

  // Thali Form (Admin)
  thaliDaySelect: document.getElementById("thaliDaySelect"),
  thaliDayForm: document.getElementById("thaliDayForm"),
  thaliNameForDay: document.getElementById("thaliNameForDay"),
  thaliPriceForDay: document.getElementById("thaliPriceForDay"),
  thaliLunchMain: document.getElementById("thaliLunchMain"),
  thaliLunchDry: document.getElementById("thaliLunchDry"),
  thaliLunchDal: document.getElementById("thaliLunchDal"),
  thaliLunchBreads: document.getElementById("thaliLunchBreads"),
  thaliLunchSides: document.getElementById("thaliLunchSides"),
  thaliDinnerMain: document.getElementById("thaliDinnerMain"),
  thaliDinnerDry: document.getElementById("thaliDinnerDry"),
  thaliDinnerDal: document.getElementById("thaliDinnerDal"),
  thaliDinnerBreads: document.getElementById("thaliDinnerBreads"),
  thaliDinnerSides: document.getElementById("thaliDinnerSides"),
  thaliDaySpecialNote: document.getElementById("thaliDaySpecialNote"),
  saveDayNameBtnText: document.getElementById("saveDayNameBtnText"),

  // Inventory Table (Admin)
  inventoryTableBody: document.getElementById("inventoryTableBody"),
  invSearchInput: document.getElementById("invSearchInput"),

  // Toast
  toastContainer: document.getElementById("toastContainer")
};

// ==========================================
// TOAST NOTIFICATIONS
// ==========================================
function showToast(message, type = "success") {
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  let icon = "fa-circle-check";
  if (type === "info") icon = "fa-circle-info";
  if (type === "error") icon = "fa-circle-xmark";

  toast.innerHTML = `<i class="fa-solid ${icon}"></i> <span>${message}</span>`;
  DOM.toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(10px)";
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

// ==========================================
// RENDER HERO TODAY'S THALI
// ==========================================
function renderHeroThali() {
  const today = state.getTodayDayName();
  const schedule = state.thaliSchedule[today] || state.thaliSchedule["Monday"];

  DOM.heroCurrentDay.textContent = `TODAY'S SPECIAL (${today.toUpperCase()})`;
  DOM.heroThaliTitle.textContent = schedule.name;
  DOM.heroThaliPrice.innerHTML = `₹${schedule.price} <span class="unit">/ full plate</span>`;

  DOM.heroThaliItemsList.innerHTML = `
    <div class="swiggy-thali-chip lunch-chip">
      <span class="chip-badge">LUNCH</span>
      <span class="chip-text">${schedule.lunch.main} • ${schedule.lunch.dry}</span>
    </div>
    <div class="swiggy-thali-chip dinner-chip">
      <span class="chip-badge">DINNER</span>
      <span class="chip-text">${schedule.dinner.main} • ${schedule.dinner.dry}</span>
    </div>
    <div class="swiggy-thali-chip sides-chip">
      <span class="chip-badge">INCLUDED</span>
      <span class="chip-text">4 Butter Rotis, Dal Tadka, Basmati Rice & Sweet</span>
    </div>
  `;

  DOM.heroAddThaliBtn.onclick = () => {
    addToCart({
      id: `thali-today-${today}`,
      name: `${today} Special Thali (${schedule.name})`,
      price: schedule.price,
      unit: "1 Plate",
      image: "https://images.unsplash.com/photo-1610057099431-d73a1c9d2f2f?w=500&auto=format&fit=crop&q=60"
    });
  };
}

// ==========================================
// RENDER 7-DAY THALI SCHEDULE VIEWER (SHEET MODAL)
// ==========================================
function openThaliModal(day = null) {
  if (day) state.selectedThaliDay = day;
  renderThaliSchedule();
  if (DOM.thaliScheduleModalBackdrop) {
    DOM.thaliScheduleModalBackdrop.classList.remove("hidden");
    document.body.classList.add("modal-open");
  }
}

function closeThaliModal() {
  if (DOM.thaliScheduleModalBackdrop) {
    DOM.thaliScheduleModalBackdrop.classList.add("hidden");
    document.body.classList.remove("modal-open");
  }
}

function renderThaliSchedule() {
  if (!DOM.daysTabNav || !DOM.dayThaliDetailCard) return;

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const today = state.getTodayDayName();

  // 1. Day tabs
  DOM.daysTabNav.innerHTML = days.map(day => {
    const isToday = day === today;
    const isActive = day === state.selectedThaliDay;
    return `
      <button class="day-tab-btn ${isActive ? 'active' : ''} ${isToday ? 'is-today' : ''}" data-day="${day}">
        ${isToday ? '<span class="today-indicator">Today</span>' : ''}
        <span class="day-name">${day}</span>
        <span class="day-status">Menu</span>
      </button>
    `;
  }).join("");

  // Attach click listener to day tabs
  DOM.daysTabNav.querySelectorAll(".day-tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      state.selectedThaliDay = btn.getAttribute("data-day");
      renderThaliSchedule();
    });
  });

  // 2. Day detail card - Single column stacked layout (Full width, zero vertical text issues)
  const curDayData = state.thaliSchedule[state.selectedThaliDay] || state.thaliSchedule["Monday"];

  DOM.dayThaliDetailCard.innerHTML = `
    <div class="thali-sheet-content">
      <div class="thali-sheet-day-banner">
        <div class="day-banner-left">
          <h4>${state.selectedThaliDay}'s Thali: ${curDayData.name}</h4>
          <span class="day-pure-veg"><i class="fa-solid fa-circle"></i> 100% Pure Veg Homestyle</span>
        </div>
        <div class="day-banner-price">₹${curDayData.price}</div>
      </div>

      <!-- Vertical Stack of Meals: Lunch on top, Dinner below (NO 2-column squeezing!) -->
      <div class="thali-meals-stack">
        <!-- Lunch Box -->
        <div class="sheet-meal-box lunch">
          <div class="sheet-meal-header">
            <span class="meal-chip lunch-chip"><i class="fa-solid fa-sun"></i> LUNCH</span>
            <span class="meal-timing"><i class="fa-regular fa-clock"></i> 11:30 AM – 3:30 PM</span>
          </div>
          <div class="dish-item-rows">
            <div class="dish-line">
              <span class="dish-label">Main Gravy</span>
              <span class="dish-value">${curDayData.lunch.main}</span>
            </div>
            <div class="dish-line">
              <span class="dish-label">Dry Sabzi</span>
              <span class="dish-value">${curDayData.lunch.dry}</span>
            </div>
            <div class="dish-line">
              <span class="dish-label">Dal</span>
              <span class="dish-value">${curDayData.lunch.dal}</span>
            </div>
            <div class="dish-line">
              <span class="dish-label">Breads & Rice</span>
              <span class="dish-value">${curDayData.lunch.breads}</span>
            </div>
            <div class="dish-line">
              <span class="dish-label">Sides & Sweet</span>
              <span class="dish-value">${curDayData.lunch.sides}</span>
            </div>
          </div>
        </div>

        <!-- Dinner Box -->
        <div class="sheet-meal-box dinner">
          <div class="sheet-meal-header">
            <span class="meal-chip dinner-chip"><i class="fa-solid fa-moon"></i> DINNER</span>
            <span class="meal-timing"><i class="fa-regular fa-clock"></i> 7:00 PM – 10:30 PM</span>
          </div>
          <div class="dish-item-rows">
            <div class="dish-line">
              <span class="dish-label">Main Gravy</span>
              <span class="dish-value">${curDayData.dinner.main}</span>
            </div>
            <div class="dish-line">
              <span class="dish-label">Dry Sabzi</span>
              <span class="dish-value">${curDayData.dinner.dry}</span>
            </div>
            <div class="dish-line">
              <span class="dish-label">Dal</span>
              <span class="dish-value">${curDayData.dinner.dal}</span>
            </div>
            <div class="dish-line">
              <span class="dish-label">Breads & Rice</span>
              <span class="dish-value">${curDayData.dinner.breads}</span>
            </div>
            <div class="dish-line">
              <span class="dish-label">Sides & Sweet</span>
              <span class="dish-value">${curDayData.dinner.sides}</span>
            </div>
          </div>
        </div>

        <!-- Chef's Note -->
        <div class="sheet-chef-note">
          <i class="fa-solid fa-circle-info"></i>
          <div><strong>Chef's Note:</strong> ${curDayData.specialNote || 'Prepared fresh daily with pure desi ghee and mustard oil. 100% hygienic homestyle kitchen.'}</div>
        </div>
      </div>

      <!-- Action Button -->
      <div class="sheet-footer-order-bar">
        <button class="sheet-add-btn" id="orderDayThaliBtn">
          <i class="fa-solid fa-plus"></i> Add ${state.selectedThaliDay}'s Thali (₹${curDayData.price})
        </button>
      </div>
    </div>
  `;

  const orderBtn = document.getElementById("orderDayThaliBtn");
  if (orderBtn) {
    orderBtn.addEventListener("click", () => {
      addToCart({
        id: `thali-${state.selectedThaliDay}`,
        name: `${state.selectedThaliDay} Thali (${curDayData.name})`,
        price: curDayData.price,
        unit: "1 Plate",
        image: "https://images.unsplash.com/photo-1610057099431-d73a1c9d2f2f?w=500&auto=format&fit=crop&q=60"
      });
      closeThaliModal();
    });
  }

  // Admin hint button
  if (state.isAdminLoggedIn && DOM.adminThaliHint) {
    DOM.adminThaliHint.style.display = "block";
    if (DOM.quickEditThaliBtn) {
      DOM.quickEditThaliBtn.onclick = () => {
        closeThaliModal();
        openAdminModal();
        switchAdminTab("tab-thali-planner");
        DOM.thaliDaySelect.value = state.selectedThaliDay;
        loadThaliDayToForm(state.selectedThaliDay);
      };
    }
  } else if (DOM.adminThaliHint) {
    DOM.adminThaliHint.style.display = "none";
  }
}

// ==========================================
// RENDER PRODUCTS GRID
// ==========================================
function renderProducts() {
  let filtered = state.products.filter(item => {
    // Category filter
    const matchesCat = state.activeCategory === "all" || item.category === state.activeCategory;
    // Search filter
    const q = state.searchQuery.toLowerCase().trim();
    const matchesSearch = !q ||
      item.name.toLowerCase().includes(q) ||
      (item.desc && item.desc.toLowerCase().includes(q)) ||
      item.category.toLowerCase().includes(q);

    return matchesCat && matchesSearch;
  });

  // Sorting
  if (state.sortBy === "price-low") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (state.sortBy === "price-high") {
    filtered.sort((a, b) => b.price - a.price);
  } else if (state.sortBy === "name") {
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  }

  // Update Section Title & Subtitle based on category
  const categoryTitles = {
    all: "Store Items & Cafe Menu",
    thali: "🍱 Daily Thalis & Homestyle Meals",
    coffee: "☕ Chilled Cold Coffees & Frappes",
    shakes: "🥤 Thick Gourmet Shakes & Smoothies",
    juices: "🧃 100% Fresh Cold-Pressed Juices",
    biscuits: "🍪 Biscuits, Cookies & Tea Snacks",
    general: "🛒 General Store & Daily Essentials"
  };

  DOM.catalogTitle.textContent = categoryTitles[state.activeCategory] || "Store Items";
  DOM.catalogSubtitle.textContent = `Showing ${filtered.length} available item${filtered.length === 1 ? '' : 's'}`;

  if (filtered.length === 0) {
    DOM.productsGrid.innerHTML = "";
    DOM.emptyState.classList.remove("hidden");
    return;
  }

  DOM.emptyState.classList.add("hidden");

  DOM.productsGrid.innerHTML = filtered.map(item => {
    const cartItem = state.cart.find(c => c.id === item.id);
    const inCartQty = cartItem ? cartItem.qty : 0;

    return `
      <div class="product-card swiggy-card" data-id="${item.id}">
        <div class="card-img-container">
          <img src="${item.image || 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=500&auto=format&fit=crop&q=60'}" 
               alt="${item.name}" 
               loading="lazy"
               onerror="this.src='https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=500&auto=format&fit=crop&q=60'">
          
          <!-- Swiggy Pure Veg Icon -->
          <div class="swiggy-veg-icon" title="100% Pure Veg">
            <span class="veg-dot"></span>
          </div>

          ${item.badge ? `<span class="card-badge">${item.badge}</span>` : ''}

          <!-- Swiggy Floating Action Button -->
          <div class="swiggy-card-action">
            ${!item.inStock ? `
              <span class="status-badge out-of-stock">Out of Stock</span>
            ` : inCartQty > 0 ? `
              <div class="swiggy-qty-control">
                <button onclick="decrementProduct('${item.id}')" title="Reduce" aria-label="Decrease">−</button>
                <span>${inCartQty}</span>
                <button onclick="incrementProduct('${item.id}')" title="Add more" aria-label="Increase">+</button>
              </div>
            ` : `
              <button class="swiggy-add-btn" onclick="quickAddProduct('${item.id}')">
                ADD <span class="plus-icon">+</span>
              </button>
            `}
          </div>
        </div>

        <div class="card-body">
          <h3 class="item-name" title="${item.name}">${item.name}</h3>
          <span class="item-unit">${item.unit || 'Standard pack'}</span>
          <div class="card-bottom-row">
            <span class="card-price">₹${item.price}</span>
            <span class="card-category-tag">${getCategoryName(item.category)}</span>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

function getCategoryName(cat) {
  const map = {
    biscuits: "Biscuits",
    coffee: "Cold Coffee",
    shakes: "Shakes",
    juices: "Fresh Juice",
    thali: "Thali Meal",
    general: "General"
  };
  return map[cat] || "Store Item";
}

// ==========================================
// CART OPERATIONS
// ==========================================
function addToCart(item) {
  const existing = state.cart.find(c => c.id === item.id);
  if (existing) {
    existing.qty += 1;
  } else {
    state.cart.push({
      id: item.id,
      name: item.name,
      price: Number(item.price),
      unit: item.unit,
      image: item.image,
      qty: 1
    });
  }
  state.saveCart();
  updateCartUI();
  showToast(`Added "${item.name}" to cart!`);
}

window.quickAddProduct = function(id) {
  const product = state.products.find(p => p.id === id);
  if (product) addToCart(product);
};

window.incrementProduct = function(id) {
  const item = state.cart.find(c => c.id === id);
  if (item) {
    item.qty += 1;
    state.saveCart();
    updateCartUI();
  }
};

window.decrementProduct = function(id) {
  const item = state.cart.find(c => c.id === id);
  if (item) {
    item.qty -= 1;
    if (item.qty <= 0) {
      state.cart = state.cart.filter(c => c.id !== id);
    }
    state.saveCart();
    updateCartUI();
  }
};

function updateCartUI() {
  const totalCount = state.cart.reduce((sum, item) => sum + item.qty, 0);
  DOM.cartCount.textContent = totalCount;

  // Update mobile bottom nav cart badge
  if (DOM.mobCartBadge) {
    DOM.mobCartBadge.textContent = totalCount;
    if (totalCount > 0) {
      DOM.mobCartBadge.classList.remove("hidden");
    } else {
      DOM.mobCartBadge.classList.add("hidden");
    }
  }

  // Render items in cart drawer
  if (state.cart.length === 0) {
    DOM.cartItemsList.innerHTML = `
      <div style="text-align: center; padding: 40px 10px; color: var(--text-muted);">
        <i class="fa-solid fa-basket-shopping" style="font-size: 40px; color: #cbd5e1; margin-bottom: 12px;"></i>
        <h4 style="color: var(--text-main); font-weight: 700;">Your cart is empty</h4>
        <p style="font-size: 13.5px; margin-top: 4px;">Add tasty biscuits, cold coffee, or today's special thali!</p>
      </div>
    `;
    DOM.cartSubtotal.textContent = "₹0";
    DOM.cartTotal.textContent = "₹0";
    DOM.checkoutWhatsappBtn.disabled = true;
    DOM.checkoutWhatsappBtn.style.opacity = "0.5";

    // Hide mobile floating bar
    if (DOM.mobileFloatingCart) {
      DOM.mobileFloatingCart.classList.add("hidden");
    }

    renderProducts();
    return;
  }

  DOM.checkoutWhatsappBtn.disabled = false;
  DOM.checkoutWhatsappBtn.style.opacity = "1";

  const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  DOM.cartSubtotal.textContent = `₹${subtotal}`;
  DOM.cartTotal.textContent = `₹${subtotal}`;

  // Update mobile floating cart bar
  if (DOM.mobileFloatingCart) {
    DOM.mobileFloatingCart.classList.remove("hidden");
    DOM.floatingCartCount.textContent = `${totalCount} item${totalCount === 1 ? '' : 's'}`;
    DOM.floatingCartPrice.textContent = `₹${subtotal}`;
  }

  DOM.cartItemsList.innerHTML = state.cart.map(item => `
    <div class="cart-item-row">
      <img src="${item.image || 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=500&auto=format&fit=crop&q=60'}" 
           alt="${item.name}" class="cart-item-thumb">
      <div class="cart-item-info">
        <div class="title">${item.name}</div>
        <div class="price">₹${item.price} ${item.unit ? `• ${item.unit}` : ''}</div>
      </div>
      <div class="cart-item-qty">
        <button onclick="decrementProduct('${item.id}')"><i class="fa-solid fa-minus"></i></button>
        <span style="font-weight: 700; font-size: 13px;">${item.qty}</span>
        <button onclick="incrementProduct('${item.id}')"><i class="fa-solid fa-plus"></i></button>
      </div>
    </div>
  `).join("");

  renderProducts();
}

function openCartDrawer() {
  DOM.cartModalBackdrop.classList.remove("hidden");
  updateCartUI();
}

function closeCartDrawer() {
  DOM.cartModalBackdrop.classList.add("hidden");
}

// WhatsApp Order Checkout
function handleWhatsAppCheckout() {
  if (state.cart.length === 0) {
    showToast("Your cart is empty!", "info");
    return;
  }

  const name = DOM.custName.value.trim() || "Customer";
  const phone = DOM.custPhone.value.trim() || "Not specified";
  const notes = DOM.custNotes.value.trim();

  let message = `🛒 *New Order from Restrofe Store*\n`;
  message += `━━━━━━━━━━━━━━━━━━━━━\n`;
  message += `👤 *Customer:* ${name}\n`;
  if (phone !== "Not specified") message += `📞 *Phone:* ${phone}\n`;
  if (notes) message += `📝 *Notes/Address:* ${notes}\n`;
  message += `━━━━━━━━━━━━━━━━━━━━━\n`;
  message += `🛍️ *Items Ordered:*\n`;

  let total = 0;
  state.cart.forEach((item, idx) => {
    const itemTotal = item.price * item.qty;
    total += itemTotal;
    message += `${idx + 1}. ${item.name} x ${item.qty} = ₹${itemTotal}\n`;
  });

  message += `━━━━━━━━━━━━━━━━━━━━━\n`;
  message += `💰 *Total Amount:* ₹${total}\n`;
  message += `🚚 *Delivery/Pickup:* Please confirm available slot.\n`;

  const encoded = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/919876543210?text=${encoded}`;
  window.open(whatsappUrl, "_blank");

  showToast("Opening WhatsApp with your order...", "success");
}

// ==========================================
// ADMIN PORTAL & AUTHENTICATION
// (Matches user screenshot)
// ==========================================
function openAdminModal() {
  DOM.adminModalBackdrop.classList.remove("hidden");
  if (state.isAdminLoggedIn) {
    DOM.adminLoginCard.classList.add("hidden");
    DOM.adminDashboardContainer.classList.remove("hidden");
    refreshAdminDashboard();
  } else {
    DOM.adminLoginCard.classList.remove("hidden");
    DOM.adminDashboardContainer.classList.add("hidden");
    DOM.adminErrorBanner.classList.add("hidden");
  }
}

function closeAdminModal() {
  DOM.adminModalBackdrop.classList.add("hidden");
}

function handleAdminLogin(e) {
  e.preventDefault();
  const username = DOM.adminUsernameInput.value.trim();
  const password = DOM.adminPasswordInput.value.trim();

  // Authentication check (admin / admin123)
  if (username === "admin" && password === "admin123") {
    state.isAdminLoggedIn = true;
    sessionStorage.setItem("restrofe_admin_logged", "true");
    DOM.adminBtnText.textContent = "Admin Center";
    DOM.adminErrorBanner.classList.add("hidden");
    
    // Switch to Dashboard View
    DOM.adminLoginCard.classList.add("hidden");
    DOM.adminDashboardContainer.classList.remove("hidden");
    refreshAdminDashboard();
    renderThaliSchedule();
    showToast("Logged in as Admin successfully!", "success");
  } else {
    DOM.adminErrorBanner.classList.remove("hidden");
  }
}

function handleAdminLogout() {
  state.isAdminLoggedIn = false;
  sessionStorage.removeItem("restrofe_admin_logged");
  DOM.adminBtnText.textContent = "Admin";
  DOM.adminDashboardContainer.classList.add("hidden");
  DOM.adminLoginCard.classList.remove("hidden");
  renderThaliSchedule();
  showToast("Admin logged out", "info");
}

function switchAdminTab(targetTabId) {
  document.querySelectorAll(".dash-tab").forEach(tab => {
    tab.classList.toggle("active", tab.getAttribute("data-tab") === targetTabId);
  });
  document.querySelectorAll(".dash-tab-panel").forEach(panel => {
    panel.classList.toggle("active", panel.id === targetTabId);
  });
}

function refreshAdminDashboard() {
  DOM.dashItemCount.textContent = state.products.length;
  renderInventoryTable();
  loadThaliDayToForm(DOM.thaliDaySelect.value);
  renderPresetImages();
}

// Preset Images render in Admin Form
function renderPresetImages() {
  DOM.presetImagesStrip.innerHTML = PRESET_IMAGES.map(img => `
    <button type="button" class="preset-thumb-btn" title="${img.name}" onclick="selectPresetImage('${img.url}')">
      <img src="${img.url}" alt="${img.name}">
    </button>
  `).join("");
}

window.selectPresetImage = function(url) {
  DOM.prodImage.value = url;
  DOM.presetImagesStrip.classList.add("hidden");
  updateProductImagePreview(url, "Preset Sample");
  showToast("Sample image selected!");
};

// ==========================================
// IMAGE PREVIEW & COMPRESSOR HELPERS
// ==========================================
function updateProductImagePreview(url, sourceText = "Preview") {
  if (DOM.productImagePreview) {
    DOM.productImagePreview.src = url || "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=500&auto=format&fit=crop&q=60";
  }
  if (DOM.imageSourceTag) {
    DOM.imageSourceTag.textContent = sourceText;
  }
}

// Compress camera captures or gallery uploads to preserve localStorage quota
function compressImageFile(file, maxWidth = 800, quality = 0.82) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        let width = img.width;
        let height = img.height;

        if (width > maxWidth) {
          height = Math.round((height * maxWidth) / width);
          width = maxWidth;
        }

        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, width, height);

        const compressedDataUrl = canvas.toDataURL("image/jpeg", quality);
        resolve(compressedDataUrl);
      };
      img.onerror = reject;
      img.src = e.target.result;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

// Play pleasant scan beep feedback
function playScanBeep() {
  try {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(880, audioCtx.currentTime); // A5 note
    gain.gain.setValueAtTime(0.15, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.15);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.15);
  } catch (e) {
    // AudioContext not allowed or unsupported; ignore
  }
}

// ==========================================
// OPEN FOOD FACTS API & BARCODE LOOKUP
// ==========================================
let currentHtml5QrCode = null;

async function lookupBarcodeFromAPI(rawBarcode) {
  const barcode = (rawBarcode || "").trim().replace(/\D/g, "");
  if (!barcode) {
    showToast("Please enter or scan a valid barcode number", "info");
    return;
  }

  // Update button loading state
  if (DOM.fetchBtnText) DOM.fetchBtnText.textContent = "Fetching...";
  if (DOM.fetchBarcodeBtn) {
    DOM.fetchBarcodeBtn.disabled = true;
    DOM.fetchBarcodeBtn.style.opacity = "0.7";
  }

  try {
    // 1. Try Indian mirror of Open Food Facts first (fastest for Indian goods)
    // 2. Fall back to world mirror
    const endpoints = [
      `https://in.openfoodfacts.org/api/v2/product/${barcode}.json`,
      `https://world.openfoodfacts.org/api/v2/product/${barcode}.json`,
      `https://world.openfoodfacts.org/api/v0/product/${barcode}.json`
    ];

    let foundProduct = null;

    for (const url of endpoints) {
      try {
        const res = await fetch(url);
        if (res.ok) {
          const data = await res.json();
          if (data && (data.status === 1 || data.status_verbose === "product found") && data.product) {
            foundProduct = data.product;
            break;
          }
        }
      } catch (err) {
        console.warn(`Attempt failed for ${url}:`, err);
      }
    }

    if (!foundProduct) {
      showToast(`Barcode ${barcode} not found in Open Food Facts. You can enter details manually.`, "info");
      return;
    }

    // Process & Populate Data
    playScanBeep();

    // 1. Product Name & Brand
    const rawName = foundProduct.product_name_en || foundProduct.product_name || foundProduct.generic_name || "Packaged Product";
    const brand = foundProduct.brands || "";
    let finalTitle = rawName;
    if (brand && !rawName.toLowerCase().includes(brand.toLowerCase())) {
      finalTitle = `${brand} ${rawName}`;
    }
    DOM.prodName.value = finalTitle;

    // 2. Net Weight / Unit Size
    const unitSize = foundProduct.quantity || foundProduct.serving_size || foundProduct.net_weight || "";
    if (unitSize) {
      DOM.prodUnit.value = unitSize;
    } else if (!DOM.prodUnit.value) {
      DOM.prodUnit.value = "Pack";
    }

    // 3. Category Detection
    const categoryTags = (foundProduct.categories_tags || []).join(" ").toLowerCase() + " " +
                         (foundProduct.categories || "").toLowerCase() + " " +
                         finalTitle.toLowerCase();

    if (categoryTags.includes("biscuit") || categoryTags.includes("cookie") || categoryTags.includes("cracker") || categoryTags.includes("wafer") || categoryTags.includes("namkeen") || categoryTags.includes("snack")) {
      DOM.prodCategory.value = "biscuits";
    } else if (categoryTags.includes("coffee") || categoryTags.includes("cafe") || categoryTags.includes("espresso") || categoryTags.includes("frappe")) {
      DOM.prodCategory.value = "coffee";
    } else if (categoryTags.includes("shake") || categoryTags.includes("smoothie") || categoryTags.includes("milkshake")) {
      DOM.prodCategory.value = "shakes";
    } else if (categoryTags.includes("juice") || categoryTags.includes("jus") || categoryTags.includes("beverage") || categoryTags.includes("drink")) {
      DOM.prodCategory.value = "juices";
    } else {
      DOM.prodCategory.value = "general";
    }

    // 4. Description & Ingredients
    let descParts = [];
    if (brand) descParts.push(`Brand: ${brand}.`);
    if (foundProduct.ingredients_text_en || foundProduct.ingredients_text) {
      const ing = foundProduct.ingredients_text_en || foundProduct.ingredients_text;
      descParts.push(`Ingredients: ${ing.slice(0, 180)}${ing.length > 180 ? '...' : ''}`);
    } else {
      descParts.push("Hygienically packaged food item sourced fresh.");
    }
    DOM.prodDesc.value = descParts.join(" ");

    // 5. Price suggestion if blank
    if (!DOM.prodPrice.value || Number(DOM.prodPrice.value) <= 0) {
      DOM.prodPrice.value = 35; // Default sensible initial price for snacks
    }

    // 6. Gather all images from API
    const apiImages = [];
    if (foundProduct.image_front_url) apiImages.push({ url: foundProduct.image_front_url, label: "Front" });
    if (foundProduct.image_url && foundProduct.image_url !== foundProduct.image_front_url) {
      apiImages.push({ url: foundProduct.image_url, label: "Full" });
    }
    if (foundProduct.image_ingredients_url) apiImages.push({ url: foundProduct.image_ingredients_url, label: "Ingredients" });
    if (foundProduct.image_packaging_url) apiImages.push({ url: foundProduct.image_packaging_url, label: "Pack" });

    // Render API images strip
    if (apiImages.length > 0) {
      DOM.apiThumbnailsRow.innerHTML = apiImages.map((img, idx) => `
        <button type="button" class="api-thumb-card ${idx === 0 ? 'active' : ''}" onclick="selectApiImage('${img.url}', this)">
          <img src="${img.url}" alt="${img.label}">
          <span class="api-thumb-label">${img.label}</span>
        </button>
      `).join("");

      DOM.apiImagesSelector.classList.remove("hidden");

      // Auto-set the first image
      const primaryImg = apiImages[0].url;
      DOM.prodImage.value = primaryImg;
      updateProductImagePreview(primaryImg, "Open Food Facts");
    } else {
      DOM.apiImagesSelector.classList.add("hidden");
    }

    showToast(`Autofilled: ${finalTitle}!`, "success");

  } catch (error) {
    console.error("Open Food Facts fetch error:", error);
    showToast("Could not reach Food Facts API. Please check your network.", "error");
  } finally {
    if (DOM.fetchBtnText) DOM.fetchBtnText.textContent = "Fetch Info";
    if (DOM.fetchBarcodeBtn) {
      DOM.fetchBarcodeBtn.disabled = false;
      DOM.fetchBarcodeBtn.style.opacity = "1";
    }
  }
}

window.selectApiImage = function(url, el) {
  DOM.prodImage.value = url;
  updateProductImagePreview(url, "Open Food Facts");
  document.querySelectorAll(".api-thumb-card").forEach(c => c.classList.remove("active"));
  if (el) el.classList.add("active");
  showToast("Selected API image!");
};

// ==========================================
// CAMERA BARCODE SCANNER CONTROLLER
// ==========================================
async function startCameraBarcodeScanner() {
  if (typeof Html5Qrcode === "undefined") {
    showToast("Barcode scanner library is loading, please wait a moment...", "info");
    return;
  }

  DOM.cameraViewportContainer.classList.remove("hidden");
  DOM.cameraBtnText.textContent = "Stop Camera";

  if (currentHtml5QrCode) {
    await stopCameraBarcodeScanner();
  }

  try {
    currentHtml5QrCode = new Html5Qrcode("barcodeReader");

    const config = {
      fps: 15,
      qrbox: { width: 280, height: 160 },
      aspectRatio: 1.777778
    };

    await currentHtml5QrCode.start(
      { facingMode: "environment" },
      config,
      (decodedText, decodedResult) => {
        // Success callback
        console.log("Barcode detected:", decodedText, decodedResult);
        DOM.barcodeInput.value = decodedText;
        stopCameraBarcodeScanner();
        showToast(`Scanned: ${decodedText}`);
        lookupBarcodeFromAPI(decodedText);
      },
      (errorMessage) => {
        // Parse error per frame (normal while scanning); no action needed
      }
    );

  } catch (err) {
    console.error("Camera scanner error:", err);
    showToast("Camera access was denied or not available. Please allow camera permissions.", "error");
    DOM.cameraViewportContainer.classList.add("hidden");
    DOM.cameraBtnText.textContent = "Scan with Camera";
    currentHtml5QrCode = null;
  }
}

async function stopCameraBarcodeScanner() {
  if (currentHtml5QrCode) {
    try {
      await currentHtml5QrCode.stop();
      currentHtml5QrCode.clear();
    } catch (e) {
      console.warn("Camera stop error:", e);
    }
    currentHtml5QrCode = null;
  }
  DOM.cameraViewportContainer.classList.add("hidden");
  DOM.cameraBtnText.textContent = "Scan with Camera";
}

// ==========================================
// ADMIN: PRODUCT CRUD
// ==========================================
function handleSaveProduct(e) {
  e.preventDefault();
  const editId = DOM.editProductId.value;

  const productData = {
    id: editId || "p_" + Date.now(),
    name: DOM.prodName.value.trim(),
    category: DOM.prodCategory.value,
    price: Number(DOM.prodPrice.value),
    unit: DOM.prodUnit.value.trim() || "1 unit",
    badge: DOM.prodBadge.value.trim(),
    image: DOM.prodImage.value.trim() || "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=500&auto=format&fit=crop&q=60",
    desc: DOM.prodDesc.value.trim(),
    inStock: DOM.prodInStock.checked
  };

  if (editId) {
    const idx = state.products.findIndex(p => p.id === editId);
    if (idx !== -1) {
      state.products[idx] = productData;
      showToast(`Updated "${productData.name}"!`);
    }
  } else {
    state.products.unshift(productData);
    showToast(`Added new product "${productData.name}"!`);
  }

  state.saveProducts();
  resetProductForm();
  renderProducts();
  refreshAdminDashboard();
}

function resetProductForm() {
  DOM.productForm.reset();
  DOM.editProductId.value = "";
  DOM.prodInStock.checked = true;
  DOM.productFormTitle.innerHTML = `<i class="fa-solid fa-box-open"></i> Add New Product or Beverage`;
  DOM.cancelEditProdBtn.classList.add("hidden");
  document.getElementById("saveProdBtn").innerHTML = `<i class="fa-solid fa-plus"></i> Save Product to Catalog`;

  // Reset API and barcode state
  if (DOM.barcodeInput) DOM.barcodeInput.value = "";
  if (DOM.apiImagesSelector) DOM.apiImagesSelector.classList.add("hidden");
  if (DOM.apiThumbnailsRow) DOM.apiThumbnailsRow.innerHTML = "";
  updateProductImagePreview("https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=500&auto=format&fit=crop&q=60", "Preview");
  stopCameraBarcodeScanner();
}

window.editProductInAdmin = function(id) {
  const p = state.products.find(item => item.id === id);
  if (!p) return;

  DOM.editProductId.value = p.id;
  DOM.prodName.value = p.name;
  DOM.prodCategory.value = p.category;
  DOM.prodPrice.value = p.price;
  DOM.prodUnit.value = p.unit || "";
  DOM.prodBadge.value = p.badge || "";
  DOM.prodImage.value = p.image || "";
  DOM.prodDesc.value = p.desc || "";
  DOM.prodInStock.checked = p.inStock;

  updateProductImagePreview(p.image, "Current Product Photo");

  DOM.productFormTitle.innerHTML = `<i class="fa-solid fa-pen-to-square"></i> Edit: ${p.name}`;
  DOM.cancelEditProdBtn.classList.remove("hidden");
  document.getElementById("saveProdBtn").innerHTML = `<i class="fa-solid fa-check"></i> Update Product`;

  switchAdminTab("tab-add-product");
};

window.deleteProductInAdmin = function(id) {
  const p = state.products.find(item => item.id === id);
  if (!p) return;

  if (confirm(`Are you sure you want to delete "${p.name}"?`)) {
    state.products = state.products.filter(item => item.id !== id);
    state.saveProducts();
    renderProducts();
    refreshAdminDashboard();
    showToast(`Deleted "${p.name}"`, "info");
  }
};

window.toggleProductStock = function(id) {
  const p = state.products.find(item => item.id === id);
  if (p) {
    p.inStock = !p.inStock;
    state.saveProducts();
    renderProducts();
    renderInventoryTable();
    showToast(`${p.name} marked as ${p.inStock ? 'In Stock' : 'Out of Stock'}`);
  }
};

function renderInventoryTable() {
  const q = (DOM.invSearchInput.value || "").toLowerCase().trim();
  const filtered = state.products.filter(p => !q || p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q));

  DOM.inventoryTableBody.innerHTML = filtered.map(p => `
    <tr>
      <td>
        <div class="table-prod-cell">
          <img src="${p.image || 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=500&auto=format&fit=crop&q=60'}" 
               class="table-prod-img" alt="">
          <div>
            <strong>${p.name}</strong>
            ${p.badge ? `<br><small style="color: var(--primary); font-weight: 600;">${p.badge}</small>` : ''}
          </div>
        </div>
      </td>
      <td><span class="card-category-tag" style="position: static;">${getCategoryName(p.category)}</span></td>
      <td><strong>₹${p.price}</strong></td>
      <td>${p.unit || '-'}</td>
      <td>
        <button onclick="toggleProductStock('${p.id}')" class="status-badge ${p.inStock ? 'in-stock' : 'out-of-stock'}">
          ${p.inStock ? 'In Stock' : 'Out of Stock'}
        </button>
      </td>
      <td>
        <div class="action-btns">
          <button class="action-icon-btn" onclick="editProductInAdmin('${p.id}')" title="Edit">
            <i class="fa-solid fa-pencil"></i>
          </button>
          <button class="action-icon-btn delete" onclick="deleteProductInAdmin('${p.id}')" title="Delete">
            <i class="fa-solid fa-trash-can"></i>
          </button>
        </div>
      </td>
    </tr>
  `).join("");
}

// ==========================================
// ADMIN: WEEKLY THALI PLANNER CRUD
// ==========================================
function loadThaliDayToForm(day) {
  const data = state.thaliSchedule[day] || DEFAULT_THALI_SCHEDULE[day] || DEFAULT_THALI_SCHEDULE["Monday"];

  DOM.saveDayNameBtnText.textContent = day;
  DOM.thaliNameForDay.value = data.name || "";
  DOM.thaliPriceForDay.value = data.price || 120;

  DOM.thaliLunchMain.value = data.lunch.main || "";
  DOM.thaliLunchDry.value = data.lunch.dry || "";
  DOM.thaliLunchDal.value = data.lunch.dal || "";
  DOM.thaliLunchBreads.value = data.lunch.breads || "";
  DOM.thaliLunchSides.value = data.lunch.sides || "";

  DOM.thaliDinnerMain.value = data.dinner.main || "";
  DOM.thaliDinnerDry.value = data.dinner.dry || "";
  DOM.thaliDinnerDal.value = data.dinner.dal || "";
  DOM.thaliDinnerBreads.value = data.dinner.breads || "";
  DOM.thaliDinnerSides.value = data.dinner.sides || "";

  DOM.thaliDaySpecialNote.value = data.specialNote || "";
}

function handleSaveThaliDay(e) {
  e.preventDefault();
  const day = DOM.thaliDaySelect.value;

  state.thaliSchedule[day] = {
    name: DOM.thaliNameForDay.value.trim(),
    price: Number(DOM.thaliPriceForDay.value),
    lunch: {
      main: DOM.thaliLunchMain.value.trim(),
      dry: DOM.thaliLunchDry.value.trim(),
      dal: DOM.thaliLunchDal.value.trim(),
      breads: DOM.thaliLunchBreads.value.trim(),
      sides: DOM.thaliLunchSides.value.trim()
    },
    dinner: {
      main: DOM.thaliDinnerMain.value.trim(),
      dry: DOM.thaliDinnerDry.value.trim(),
      dal: DOM.thaliDinnerDal.value.trim(),
      breads: DOM.thaliDinnerBreads.value.trim(),
      sides: DOM.thaliDinnerSides.value.trim()
    },
    specialNote: DOM.thaliDaySpecialNote.value.trim()
  };

  state.saveThaliSchedule();
  renderHeroThali();
  renderThaliSchedule();
  showToast(`Updated menu schedule for ${day}!`, "success");
}

// Reset Default Data Button
function handleResetDefaults() {
  if (confirm("Reset products and thali schedule to default template?")) {
    state.products = [...DEFAULT_PRODUCTS];
    state.thaliSchedule = JSON.parse(JSON.stringify(DEFAULT_THALI_SCHEDULE));
    state.saveProducts();
    state.saveThaliSchedule();
    renderHeroThali();
    renderThaliSchedule();
    renderProducts();
    refreshAdminDashboard();
    showToast("Reset to default catalog & schedule", "info");
  }
}

// ==========================================
// EVENT LISTENERS INITIALIZATION
// ==========================================
function setupEventListeners() {
  // Brand logo click scrolls to top
  document.getElementById("brandLogo").addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Search
  DOM.searchInput.addEventListener("input", (e) => {
    state.searchQuery = e.target.value;
    DOM.clearSearchBtn.classList.toggle("hidden", !e.target.value);
    renderProducts();
  });

  DOM.clearSearchBtn.addEventListener("click", () => {
    DOM.searchInput.value = "";
    state.searchQuery = "";
    DOM.clearSearchBtn.classList.add("hidden");
    renderProducts();
  });

  // Category filter tabs & Zepto rail items
  DOM.categoryTabs.querySelectorAll(".cat-pill, .rail-item").forEach(pill => {
    pill.addEventListener("click", () => {
      DOM.categoryTabs.querySelectorAll(".cat-pill, .rail-item").forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      state.activeCategory = pill.getAttribute("data-category");
      renderProducts();
    });
  });

  // Footer category links
  document.querySelectorAll(".footer-cat-link").forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const cat = link.getAttribute("data-category");
      if (cat === "thali") {
        openThaliModal(state.getTodayDayName());
      } else {
        const matchingBtn = DOM.categoryTabs.querySelector(`[data-category="${cat}"]`);
        if (matchingBtn) matchingBtn.click();
        document.querySelector(".products-section").scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Sort select
  DOM.sortSelect.addEventListener("change", (e) => {
    state.sortBy = e.target.value;
    renderProducts();
  });

  // Reset filter button in empty state
  DOM.resetFiltersBtn.addEventListener("click", () => {
    DOM.searchInput.value = "";
    state.searchQuery = "";
    state.activeCategory = "all";
    DOM.categoryTabs.querySelectorAll(".cat-pill, .rail-item").forEach(p => p.classList.remove("active"));
    const allBtn = DOM.categoryTabs.querySelector('[data-category="all"]');
    if (allBtn) allBtn.classList.add("active");
    renderProducts();
  });

  // Today's Thali View Button in Nav & Hero
  if (DOM.viewTodayThaliBtn) {
    DOM.viewTodayThaliBtn.addEventListener("click", () => {
      openThaliModal(state.getTodayDayName());
    });
  }

  if (DOM.heroViewWeekBtn) {
    DOM.heroViewWeekBtn.addEventListener("click", () => {
      openThaliModal(state.getTodayDayName());
    });
  }

  // Weekly Thali Schedule Modal Controls
  if (DOM.closeThaliScheduleBtn) {
    DOM.closeThaliScheduleBtn.addEventListener("click", closeThaliModal);
  }
  if (DOM.thaliScheduleModalBackdrop) {
    DOM.thaliScheduleModalBackdrop.addEventListener("click", (e) => {
      if (e.target === DOM.thaliScheduleModalBackdrop) closeThaliModal();
    });
  }

  // Cart Drawer
  DOM.openCartBtn.addEventListener("click", openCartDrawer);
  DOM.closeCartBtn.addEventListener("click", closeCartDrawer);
  DOM.cartModalBackdrop.addEventListener("click", (e) => {
    if (e.target === DOM.cartModalBackdrop) closeCartDrawer();
  });

  DOM.checkoutWhatsappBtn.addEventListener("click", handleWhatsAppCheckout);
  DOM.clearCartBtn.addEventListener("click", () => {
    if (confirm("Are you sure you want to empty your cart?")) {
      state.cart = [];
      state.saveCart();
      updateCartUI();
      showToast("Cart cleared");
    }
  });

  // Admin Modal & Triggers
  DOM.openAdminModalBtn.addEventListener("click", openAdminModal);
  document.getElementById("footerAdminBtn").addEventListener("click", openAdminModal);
  DOM.closeAdminModalBtn.addEventListener("click", closeAdminModal);
  DOM.closeAdminDashBtn.addEventListener("click", closeAdminModal);
  DOM.adminModalBackdrop.addEventListener("click", (e) => {
    if (e.target === DOM.adminModalBackdrop) closeAdminModal();
  });

  // Admin Login & Logout
  DOM.adminLoginForm.addEventListener("submit", handleAdminLogin);
  DOM.adminLogoutBtn.addEventListener("click", handleAdminLogout);
  DOM.resetDefaultDataBtn.addEventListener("click", handleResetDefaults);

  // Admin Tabs
  document.querySelectorAll(".dash-tab").forEach(tab => {
    tab.addEventListener("click", () => {
      switchAdminTab(tab.getAttribute("data-tab"));
    });
  });

  // Admin Product Form
  DOM.productForm.addEventListener("submit", handleSaveProduct);
  DOM.cancelEditProdBtn.addEventListener("click", resetProductForm);
  DOM.openImagePresetsBtn.addEventListener("click", () => {
    DOM.presetImagesStrip.classList.toggle("hidden");
  });

  // Admin Thali Form
  DOM.thaliDaySelect.addEventListener("change", (e) => {
    loadThaliDayToForm(e.target.value);
  });
  DOM.thaliDayForm.addEventListener("submit", handleSaveThaliDay);

  // Inventory search
  DOM.invSearchInput.addEventListener("input", renderInventoryTable);

  // ==========================================
  // BARCODE & PHOTO MANAGER LISTENERS
  // ==========================================
  if (DOM.fetchBarcodeBtn) {
    DOM.fetchBarcodeBtn.addEventListener("click", () => {
      lookupBarcodeFromAPI(DOM.barcodeInput.value);
    });
  }

  if (DOM.barcodeInput) {
    DOM.barcodeInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        lookupBarcodeFromAPI(DOM.barcodeInput.value);
      }
    });
  }

  if (DOM.toggleCameraScannerBtn) {
    DOM.toggleCameraScannerBtn.addEventListener("click", () => {
      if (DOM.cameraViewportContainer.classList.contains("hidden")) {
        startCameraBarcodeScanner();
      } else {
        stopCameraBarcodeScanner();
      }
    });
  }

  if (DOM.closeCameraScannerBtn) {
    DOM.closeCameraScannerBtn.addEventListener("click", stopCameraBarcodeScanner);
  }

  // Quick test barcode pills
  document.querySelectorAll(".sample-barcode-pill").forEach(pill => {
    pill.addEventListener("click", () => {
      const code = pill.getAttribute("data-barcode");
      DOM.barcodeInput.value = code;
      lookupBarcodeFromAPI(code);
    });
  });

  // Photo actions: Capture New Photo with Camera
  if (DOM.captureNewPhotoBtn && DOM.cameraFileInput) {
    DOM.captureNewPhotoBtn.addEventListener("click", () => {
      DOM.cameraFileInput.click();
    });
  }

  // Photo actions: Upload from Device Files
  if (DOM.uploadDevicePhotoBtn && DOM.deviceFileInput) {
    DOM.uploadDevicePhotoBtn.addEventListener("click", () => {
      DOM.deviceFileInput.click();
    });
  }

  const handlePhotoFileSelected = async (fileInput, sourceText) => {
    if (fileInput.files && fileInput.files[0]) {
      const file = fileInput.files[0];
      try {
        showToast("Processing photo...", "info");
        const compressedData = await compressImageFile(file, 900, 0.82);
        DOM.prodImage.value = compressedData;
        updateProductImagePreview(compressedData, sourceText);
        showToast("Photo loaded successfully!");
      } catch (err) {
        console.error("Photo processing error:", err);
        showToast("Could not process photo", "error");
      }
    }
  };

  if (DOM.cameraFileInput) {
    DOM.cameraFileInput.addEventListener("change", () => {
      handlePhotoFileSelected(DOM.cameraFileInput, "Camera Photo");
    });
  }

  if (DOM.deviceFileInput) {
    DOM.deviceFileInput.addEventListener("change", () => {
      handlePhotoFileSelected(DOM.deviceFileInput, "Device Photo");
    });
  }

  if (DOM.prodImage) {
    DOM.prodImage.addEventListener("input", (e) => {
      updateProductImagePreview(e.target.value.trim(), "URL Link");
    });
  }

  // ==========================================
  // MOBILE NAVIGATION & FLOATING CART LISTENERS
  // ==========================================
  function setActiveMobNav(activeId) {
    document.querySelectorAll(".mob-nav-item").forEach(item => {
      item.classList.toggle("active", item.id === activeId);
    });
  }

  if (DOM.mobNavHome) {
    DOM.mobNavHome.addEventListener("click", () => {
      setActiveMobNav("mobNavHome");
      state.activeCategory = "all";
      DOM.categoryTabs.querySelectorAll(".cat-pill").forEach(p => p.classList.remove("active"));
      DOM.categoryTabs.querySelector('[data-category="all"]').classList.add("active");
      renderProducts();
      document.querySelector(".products-section").scrollIntoView({ behavior: "smooth" });
    });
  }

  if (DOM.mobNavThali) {
    DOM.mobNavThali.addEventListener("click", () => {
      setActiveMobNav("mobNavThali");
      openThaliModal(state.getTodayDayName());
    });
  }

  if (DOM.mobNavSearch) {
    DOM.mobNavSearch.addEventListener("click", () => {
      setActiveMobNav("mobNavSearch");
      DOM.searchInput.focus();
      DOM.searchInput.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  }

  if (DOM.mobNavCart) {
    DOM.mobNavCart.addEventListener("click", () => {
      openCartDrawer();
    });
  }

  if (DOM.mobNavAdmin) {
    DOM.mobNavAdmin.addEventListener("click", () => {
      openAdminModal();
    });
  }

  if (DOM.floatingViewCartBtn) {
    DOM.floatingViewCartBtn.addEventListener("click", () => {
      openCartDrawer();
    });
  }
}

// ==========================================
// BOOTSTRAP APP
// ==========================================
function initApp() {
  if (state.isAdminLoggedIn) {
    DOM.adminBtnText.textContent = "Admin Center";
  }
  setupEventListeners();
  renderHeroThali();
  renderThaliSchedule();
  renderProducts();
  updateCartUI();
}

// Start on DOM ready
document.addEventListener("DOMContentLoaded", initApp);
