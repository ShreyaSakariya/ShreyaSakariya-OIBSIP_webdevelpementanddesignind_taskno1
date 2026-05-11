# 🚀 NexaFlow — AI-Powered Workflow Automation Landing Page

A modern, premium landing page built using **HTML**, **CSS**, and **JavaScript** as part of **Level 1 Internship — Task 1**. This project demonstrates foundational web development skills including layout design, responsive styling, animations, and interactive UI elements.

---

## 📸 Preview

Open `index.html` in any modern browser to view the landing page.

---

## 📂 Project Structure

```
TASK_1/
├── index.html      # Main HTML file (page structure & content)
├── style.css       # Complete CSS styling (design system, layout, animations)
├── script.js       # JavaScript (interactivity, scroll effects, animations)
└── README.md       # Project documentation (this file)
```

---

## ✨ Features Implemented

### 🧭 Navigation Bar
- Fixed/sticky navbar that stays at the top on scroll
- **Glassmorphism effect** — background blur activates on scroll
- Smooth scroll navigation links with active state highlighting
- Responsive mobile hamburger menu button
- Logo with gradient icon styling

### 🎯 Hero Section
- Large headline with **gradient text** effect
- Animated floating **gradient orbs** in the background
- Subtle **grid overlay** pattern
- Announcement badge with live pulse dot
- Dual call-to-action buttons (primary + outline)
- Animated statistics counter (50K+ Users, 99.9% Uptime, 10M+ Tasks)
- **Dashboard mockup** with:
  - Browser-style window chrome (dots)
  - Sidebar navigation
  - Mini stat cards with color coding
  - Animated bar chart

### 🏢 Trusted Brands Section
- Horizontal strip of company logos
- Hover opacity transitions
- Uppercase styled typography

### ⚡ Features Section (6 Cards)
- **3-column responsive grid** layout
- Each card includes: icon, title, description, and learn-more link
- Color-coded icon backgrounds (purple, blue, teal, orange, pink, green)
- **Hover effects**: lift animation, border glow, top accent bar reveal
- Scroll-triggered **fade-in animations** with staggered delays

### 📋 How It Works Section (3 Steps)
- Three-step process: Connect → Build → Launch
- Step number watermark in the background
- Animated illustrations per step:
  - **Step 1**: Pulsing connected nodes
  - **Step 2**: Floating building blocks with arrow
  - **Step 3**: Floating rocket with gradient trail
- Card hover lift effect

### 💬 Testimonials Section
- 3 testimonial cards with **star ratings**
- Featured/highlighted card with gradient border & glow
- Avatar initials with gradient backgrounds
- Author name and designation
- Hover lift animation

### 💰 Pricing Section (3 Tiers)
- **Starter** ($0/mo), **Pro** ($29/mo), **Enterprise** ($99/mo)
- "Most Popular" badge on the Pro plan
- Feature list with ✓ check marks and ✕ disabled items
- Popular card is slightly scaled up with glow effect
- Full-width CTA button per plan

### 📧 Call-to-Action (CTA) Section
- Vibrant gradient background (purple → blue → cyan)
- Email input field with glassmorphism styling
- Form validation with visual feedback:
  - Success: button turns green with checkmark
  - Error: red border with placeholder message
- Decorative blurred orbs

### 📎 Footer
- **5-column grid**: Brand info + 4 link groups (Product, Company, Resources, Legal)
- Social media icon links with hover effects
- Footer links with hover slide animation
- Bottom bar with copyright and tagline
- Responsive stacking on mobile

---

## 🎨 Design & Styling Techniques

| Technique | Description |
|-----------|-------------|
| **CSS Custom Properties** | Full design token system (`--primary`, `--bg-dark`, `--radius-md`, etc.) |
| **Dark Theme** | Deep navy/dark backgrounds with vibrant purple & cyan accents |
| **Gradient Text** | `background-clip: text` for eye-catching headings |
| **Glassmorphism** | `backdrop-filter: blur()` on navbar and CTA input |
| **CSS Grid** | Used for features, steps, testimonials, pricing, and footer layouts |
| **Flexbox** | Navigation, hero content, stats, buttons, and author cards |
| **Box Shadows & Glows** | Multiple layered shadows for depth and purple glow effects |
| **Border & Hover States** | Subtle borders that intensify on hover with color changes |
| **CSS Animations** | `@keyframes` for floating orbs, pulsing dots, bouncing arrows, rocket |
| **Transitions** | Smooth `transform`, `opacity`, `color`, and `border` transitions |
| **Responsive Design** | 3 breakpoints: 1024px (tablet), 768px (mobile), 480px (small mobile) |
| **clamp()** | Fluid typography that scales between viewport sizes |
| **Scroll Padding** | `scroll-padding-top` for proper section anchoring under fixed navbar |

---

## 🛠️ Tools & Technologies Used

| Tool / Technology | Purpose |
|-------------------|---------|
| **HTML5** | Semantic page structure (`<nav>`, `<header>`, `<section>`, `<footer>`) |
| **CSS3** | Styling, layout, animations, responsive design |
| **Vanilla JavaScript** | DOM manipulation, event handling, scroll effects |
| **Google Fonts (Inter)** | Modern, clean typography |
| **Intersection Observer API** | Scroll-triggered reveal animations |
| **CSS Custom Properties** | Centralized design token management |
| **VS Code / Gemini IDE** | Code editor used for development |
| **Google Chrome** | Browser used for testing and debugging |

---

## 🧠 Key Concepts Demonstrated

- **Semantic HTML**: Proper use of `<nav>`, `<header>`, `<section>`, `<footer>`, `<h1>`-`<h4>`, `<ul>`, `<li>`, `<a>`, `<input>`, `<button>`
- **CSS Columns & Grid Layouts**: Multi-column grids for features, pricing, and footer
- **Section Division**: Clear separation of content into logical sections
- **Padding & Spacing**: Consistent use of spacing variables for visual harmony
- **Color Palette**: Curated dark mode palette with purple/cyan gradient accents
- **No Overlapping Elements**: Careful use of `z-index`, `position`, and `overflow`
- **Accessibility**: `aria-label` on buttons, proper heading hierarchy, keyboard-friendly links
- **SEO**: Meta description, `<title>` tag, semantic HTML, single `<h1>`

---

## 📱 Responsive Breakpoints

| Breakpoint | Target Device | Layout Changes |
|------------|---------------|----------------|
| `> 1024px` | Desktop | Full 3-column grids, 5-column footer |
| `≤ 1024px` | Tablet | 2-column grids, 2-column footer |
| `≤ 768px` | Mobile | Single column, stacked CTAs, hamburger menu |
| `≤ 480px` | Small Mobile | Vertical stats, simplified mockup sidebar |

---

## 🚀 How to Run

1. **Clone or download** this `TASK_1` folder
2. Open `index.html` in any modern web browser (Chrome, Firefox, Edge, Safari)
3. No build tools, dependencies, or server required — it's pure HTML/CSS/JS!

---

## 📝 Author

**Yash V Patel**
Level 1 Internship — Task 1: Landing Page

---

> *This project was built to demonstrate core web development skills including HTML structure, CSS styling, responsive layouts, and JavaScript interactivity.*
