# Restrofe — General Shop, Cafe & Daily Thalis Website

A modern, responsive web application for a general shop and cafe with daily rotating thali meal plans, built with the **NeevStep vivid purple aesthetic** and typography (`16px/1.55 "Lexend", system-ui, sans-serif`).

---

## 🌐 Live Production URL (Vercel)
🚀 **[https://restrofe-six.vercel.app](https://restrofe-six.vercel.app)**

## 💻 Local URL
- **[http://localhost:3000](http://localhost:3000)** (or open `index.html` directly)

---

## ✨ Features

### 1. Customer Storefront
- **Top Announcement Bar**: Live store hours and daily special notices.
- **Hero Banner**: Highlights store items + auto-detects today's day of the week (Monday–Sunday) to display today's rotating thali meal with a direct "Add Today's Thali" button.
- **Category Filter Tabs**:
  - 🍱 *Daily Thalis & Meals*
  - ☕ *Cold Coffee & Frappes*
  - 🥤 *Shakes & Smoothies*
  - 🧃 *Fresh Cold-Pressed Juices*
  - 🍪 *Biscuits & Packaged Snacks* (Bourbon, Oreo, Dark Fantasy, Good Day, Parle-G, etc.)
  - 🛒 *General Store Items*
- **Real-Time Search & Sorting**: Instant search across title, description, and category with price / name sorting.
- **Interactive 7-Day Thali Schedule Viewer**:
  - Monday to Sunday tabs.
  - Shows exact day-by-day Lunch & Dinner menus (Main Gravy, Dry Sabzi, Dal, Breads & Rice, Desserts, and Chef's note).
- **Slide-out Cart Drawer**:
  - Quantity counter (`+` / `-`), auto-calculated subtotal and free packaging badge.
  - **One-Click WhatsApp Order Placement**: Automatically formats the order with customer details, item quantities, and total into a WhatsApp message link to the store.

### 2. Admin Planning Room (Matches the uploaded theme)
- **Login screen**: Inspired by the NeevStep layout:
  - Vivid violet/purple background (`#5640FA`)
  - Clean white card with soft shadows & rounded corners
  - Default credentials:
    - **Login:** `admin`
    - **Password:** `admin123`
  - Error banner styled exactly like the screenshot for invalid logins.
- **Admin Control Center**:
  1. **⚡ Smart Barcode Scanner & Open Food Facts API Autofill**:
     - **Live Camera Barcode Scanner**: Scan barcodes on biscuit packets, snacks, or drinks using the device camera (`EAN-13`, `EAN-8`, `UPC-A`, `Code-128`).
     - **Manual Barcode Lookup**: Type barcode number directly or tap quick test sample pills (🍫 Britannia Bourbon, 🍪 Parle-G, 🧈 Good Day, 🍟 Balaji Pataka, 🌰 Nutella, 🥤 Coca-Cola).
     - **Automatic Data Autofill**: Grabs product title, brand, net weight / serving unit, ingredients, and auto-detects category (Biscuits, Coffee, Juices, Shakes, General).
     - **Product Image Manager**:
       - **API Images**: Displays gallery of front, ingredients, and packaging photos from Open Food Facts for 1-click selection.
       - **Capture New Photo**: Directly capture a fresh photo with camera (`capture="environment"`).
       - **Upload from Device**: Select any photo from phone gallery or files (compressed automatically for fast storage).
       - **Live Image Preview**: Real-time preview with source indicator tag.
  2. **Add / Edit Product**: Customize price, special badge (e.g. Bestseller), description, and stock availability toggle.
  3. **Weekly Thali Day-Wise Meal Planner**:
     - Choose any day from Monday through Sunday.
     - Customize Lunch & Dinner dishes (Main gravy, dry sabzi, dal, rotis/rice, sweets, price per plate, and special chef notes).
     - Saves instantly to `localStorage` and updates both the hero banner and 7-day schedule.
  4. **Inventory Management Table**:
     - Search items, toggle stock status with one click, edit existing products, or delete items.
  5. **Reset Defaults**: Button to easily restore the catalog and 7-day schedule to starter data.

---

## 🎨 Design & Typography Specifications
- **Font:** `16px/1.55 "Lexend", system-ui, sans-serif`
- **Primary Color:** `#543bf4` / `#5640FA` (NeevStep vibrant purple)
- **Cards & Inputs:** Soft rounded borders (`border-radius: 12px` to `24px`), crisp borders, and clean shadows.
