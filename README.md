# Restrofe — Quick-Commerce General Shop, Cafe & Daily Thalis

A modern, mobile-first quick commerce web application for a general shop and cafe with daily rotating thali meal plans, built with **Swiggy & Zepto-inspired UI** and typography (`16px/1.55 "Lexend", system-ui, sans-serif`).

---

## 🌐 Links
- 🚀 **Live Production (Vercel):** [https://restrofe-six.vercel.app](https://restrofe-six.vercel.app)
- 🐙 **GitHub Repository:** [https://github.com/vikashkumar1221/restrofe](https://github.com/vikashkumar1221/restrofe)

---

## ✨ Key Features

### 1. Swiggy / Zepto-Inspired Mobile App UI
- **10-Min Flash Header**: Quick-commerce top bar with live store status, search bar, and cart bag counter.
- **Swiggy Brand Colors**: Iconic orange (`#FC8019`), pure veg indicators (`#0F8A65`), and floating `ADD` buttons.
- **Anti-Overflow & Mobile Clamping**: Strict 2-line title clamps and responsive flex containers prevent text spilling on any screen size.
- **Horizontal Category Story Rail**: Fast switching between Thalis, Cold Coffee, Shakes, Fresh Juices, Biscuits & Snacks.
- **Compact "Today's Special Thali" Promo Card**: Shows today's rotating lunch & dinner menu without bulky hero space.
- **2-Column Mobile Catalog Grid**: Sleek cards with floating quantity controls (`+` / `−`).
- **Bottom Navigation Bar & Floating Cart Pill**: Quick navigation across Home, Menu, Search, and Cart.

### 2. Barcode Scanning & Open Food Facts API
- **Live Camera Barcode Scanner**: Scan barcodes on biscuit packets, snacks, or drinks using device camera (`EAN-13`, `EAN-8`, `UPC-A`, `Code-128`).
- **Manual Barcode Lookup**: Type barcode or tap quick test sample pills (Britannia Bourbon, Parle-G, Good Day, Coca-Cola, etc.).
- **Automatic Data Autofill**: Grabs product title, brand, net weight / serving unit, ingredients, and auto-detects category.
- **Product Image Manager**:
  - API Images gallery from Open Food Facts.
  - Camera snap with client-side canvas compression.
  - Device photo upload.

### 3. Rotating 7-Day Thali Meal Planner
- Day-by-day Lunch & Dinner menus (Monday to Sunday).
- Configurable dishes (main gravy, dry sabzi, rotis, rice, dessert, and chef's note).
- 100% Pure Veg badge.

### 4. Admin Planning Room
- Accessible via Admin icon in header.
- **Credentials:**
  - **Login:** `admin`
  - **Password:** `admin123`
- Manage catalog inventory, toggle stock, edit prices, update thali schedules, and reset defaults.

### 5. WhatsApp Checkout
- Drawer slide-up modal with auto-calculated total and free packaging.
- 1-Click WhatsApp order generator formatted with order breakdown and address.

---

## 🎨 Design & Typography Specifications
- **Font:** `16px/1.55 "Lexend", system-ui, sans-serif`
- **Primary Color:** `#FC8019` (Swiggy Orange)
- **Veg Green:** `#0F8A65` / `#1BA672`
- **Dark Neutral:** `#282C3F`
