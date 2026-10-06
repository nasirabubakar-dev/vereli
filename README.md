# VERELI

A modern, responsive restaurant website built as a fictional portfolio project.

VERELI showcases a clean interface, menu browsing, a shopping cart, and a simple WhatsApp ordering flow, built with a maintainable React architecture.

## Features

- **Home:** hero section, featured dishes, why-choose-us section, gallery preview, and call-to-action sections
- **Menu:** categorized dishes with descriptions, prices, and images
- **Cart:** add, remove, increase and decrease quantities, clear cart, automatic item count and subtotal, with state shared across the app
- **Ordering:** dedicated order page with cart summary and WhatsApp ordering
- **Gallery:** responsive image gallery
- **Contact:** phone, email, directions, and WhatsApp links
- **Navigation:** React Router, active link states, scroll-to-top, mobile menu, 404 page, and page-specific document titles
- **Responsive:** works on mobile, tablet, laptop, and desktop

## Tech Stack

- React 18
- Vite
- React Router
- Lucide React
- JavaScript, HTML5, CSS3
- ESLint (with React Hooks and React Refresh rules)

## Project Structure

```text
src/
├── assets/
├── components/
│   ├── CTA.jsx
│   ├── FeaturedMenu.jsx
│   ├── Footer.jsx
│   ├── Navbar.jsx
│   ├── PageHeader.jsx
│   ├── ScrollToTop.jsx
│   ├── SocialIcons.jsx
│   └── WhyChooseUs.jsx
├── context/
│   └── CartContext.jsx
├── hooks/
│   ├── useDocumentTitle.js
│   └── useReveal.js
├── pages/
│   ├── About.jsx
│   ├── Contact.jsx
│   ├── Gallery.jsx
│   ├── Home.jsx
│   ├── Menu.jsx
│   ├── NotFound.jsx
│   ├── Order.jsx
│   └── pages.css
├── App.jsx
├── data.js
├── index.css
└── main.jsx
```

## Getting Started

**Prerequisites:** Node.js and npm

```bash
git clone <repository-url>
cd Vereli
npm install
npm run dev
```

The app runs at the local URL Vite prints in the terminal.

## Architecture

- **Context:** `CartContext` manages cart items, quantities, item count, and subtotal across the app.
- **Data:** `data.js` centralizes menu items, gallery images, testimonials, restaurant info, and contact links, keeping content separate from components.

## Portfolio Notice

VERELI is a fictional restaurant created for portfolio and demonstration purposes. All restaurant information, team members, testimonials, contact details, and ordering information are placeholders. It does not represent a real business.

This project was built with AI assistance, followed by manual review, testing, customization, and debugging.

## License

Created for portfolio and demonstration purposes.