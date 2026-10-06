# VERELI

A modern, responsive restaurant website built as a **portfolio and client demonstration project**.

VERELI is a fictional restaurant brand created to demonstrate how a modern restaurant website can look and function in a real-world business setting.

The project showcases a polished user experience, menu browsing, shopping cart functionality, WhatsApp ordering, responsive design, and maintainable React architecture.

It can also be used as a **client demo** to showcase restaurant website design and development capabilities.

---

## Project Status

**Completed and ready for deployment.**

The project has been tested for:

- Core functionality
- Navigation
- Shopping cart behavior
- Responsive layouts
- ESLint validation
- Production build
- Production preview

---

## Features

- **Home:** Hero section, featured dishes, why-choose-us section, gallery preview, testimonials, and call-to-action sections
- **About:** Restaurant story, information, team section, and brand presentation
- **Menu:** Categorized dishes with descriptions, prices, and images
- **Cart:** Add, remove, increase and decrease quantities, clear cart, automatic item count and subtotal, with state shared across the app
- **Ordering:** Dedicated order page with cart summary and WhatsApp ordering
- **Gallery:** Responsive restaurant image gallery
- **Contact:** Phone, email, directions, and WhatsApp links
- **Navigation:** React Router, active link states, scroll-to-top behavior, mobile menu, 404 page, and page-specific document titles
- **Responsive:** Designed for mobile, tablet, laptop, and desktop screens

---

## Tech Stack

### Frontend

- React 18
- JavaScript
- HTML5
- CSS3

### Tools & Libraries

- Vite
- React Router
- Lucide React
- ESLint
- React Hooks ESLint rules
- React Refresh

---

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

---

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm

Check your installed versions:

```bash
node -v
npm -v
```

### Installation

Clone the repository:

```bash
git clone https://github.com/nasirabubakar-dev/vereli.git
```

Move into the project directory:

```bash
cd vereli
```

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Vite will provide a local URL in the terminal.

---

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run ESLint |

---

## Production Build

Create an optimized production build with:

```bash
npm run build
```

The production files are generated inside:

```text
dist/
```

---

## Production Preview

After creating the production build, preview it locally with:

```bash
npm run preview
```

Vite will provide a local URL where the production build can be tested.

---

## Code Quality

ESLint is configured to check the project for common JavaScript and React issues.

Run:

```bash
npm run lint
```

The project currently passes ESLint without errors or warnings.

---

## Architecture

VERELI uses a component-based React architecture with shared state managed through React Context.

### Components

Reusable interface elements are separated into the `components/` directory.

Examples include:

- Navbar
- Footer
- CTA sections
- Featured menu
- Page headers
- Social icons
- Why-choose-us sections

### Context

`CartContext.jsx` manages shopping cart state across the application.

It handles:

- Cart items
- Adding items
- Removing items
- Updating quantities
- Clearing the cart
- Total item count
- Cart subtotal

This allows different pages and components to access and update the cart without passing state manually through multiple component levels.

### Data

Restaurant content is centralized in `data.js`.

This includes:

- Menu items
- Gallery images
- Testimonials
- Restaurant information
- Team information
- Contact links
- External links

Keeping content separate from UI components makes the project easier to maintain and update.

### Hooks

Reusable logic is separated into custom hooks such as:

- `useDocumentTitle.js`
- `useReveal.js`

These hooks help keep component code cleaner by separating reusable behavior from presentation.

---

## Responsive Design

VERELI is designed to provide a consistent experience across different screen sizes.

### Desktop

- Full navigation
- Multi-column layouts
- Expanded gallery sections
- Larger visual elements

### Mobile

- Responsive navigation
- Full-screen mobile menu
- Stacked layouts
- Mobile-friendly buttons
- Responsive typography
- Touch-friendly interactions

The layout adapts across:

- Mobile phones
- Tablets
- Laptops
- Desktop screens

---

## Design Direction

VERELI follows a modern, warm, and premium restaurant aesthetic.

The design focuses on:

- Elegant typography
- Restaurant photography
- Clear visual hierarchy
- Spacious layouts
- Strong calls to action
- Consistent spacing
- Responsive interactions
- Premium visual presentation

The goal is to demonstrate how a restaurant business could present itself through a modern digital experience.

---

## Testing

The project has been manually tested for:

- Page navigation
- Mobile navigation
- Cart functionality
- Quantity updates
- Cart removal
- Cart clearing
- Order flow
- WhatsApp ordering links
- Responsive layouts
- External links
- Production build
- Production preview
- ESLint validation

---

## Client Demo

VERELI is also intended to function as a **client demonstration project**.

It demonstrates the type of restaurant website that can be customized for a real business, including:

- Custom branding
- Restaurant information
- Menu and pricing
- Food photography
- Gallery
- Contact information
- WhatsApp ordering
- Responsive layouts
- Business-specific calls to action

The current implementation uses fictional content and placeholder business information.

For an actual client project, the content, branding, contact details, menu, imagery, and business requirements would be replaced with the client's real information.

---

## Portfolio Notice

VERELI is a **fictional restaurant website created for portfolio and client demonstration purposes**.

The following information is fictional or placeholder content:

- Restaurant information
- Team members
- Customer testimonials
- Contact details
- Ordering information
- Business information

VERELI does not represent an actual restaurant and does not claim affiliation with a real-world business.

The project is intended to demonstrate web development and design capabilities rather than represent an existing business.

---

## Development Note

This project was developed with AI assistance.

AI-assisted development was used during parts of the project creation process, followed by manual review, testing, customization, debugging, and preparation for deployment.

---

## Future Improvements

The current version intentionally focuses on the frontend experience.

Potential future improvements include:

- Backend integration
- Database integration
- Authentication
- Customer accounts
- Online payments
- Restaurant administration dashboard
- Order management
- Real-time order tracking
- Reservation system
- CMS integration

These features are outside the scope of the current portfolio and client demonstration version.

---

## License

Created for portfolio and client demonstration purposes.

This project should not be presented as the official website of a real restaurant or business.
