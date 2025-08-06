# OnlyBrands MVP - Landing Page

The future of influencer marketing with reverse bidding platform.

## 🚀 Quick Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. File Structure

Make sure your project has this structure:

```
onlybrands-mvp/
├── app/
│   ├── layout.tsx                    # Root layout
│   ├── page.tsx                      # Landing page  
│   ├── loading.tsx                   # Loading component
│   ├── error.tsx                     # Error component
│   └── not-found.tsx                 # 404 page
├── components/
│   ├── ui/                           # Base UI components
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   ├── label.tsx
│   │   ├── textarea.tsx
│   │   ├── card.tsx
│   │   ├── tabs.tsx
│   │   └── alert.tsx
│   └── landing/                      # Landing page components
│       ├── Header.tsx
│       ├── Hero.tsx
│       ├── HeroDemo.tsx
│       ├── ProblemSection.tsx
│       ├── ProblemCard.tsx
│       ├── SolutionSection.tsx
│       ├── SolutionDemo.tsx
│       ├── MarketSection.tsx
│       ├── MarketStatCard.tsx
│       ├── FAQSection.tsx
│       ├── FAQItem.tsx
│       ├── FinalCTA.tsx
│       ├── Modal.tsx
│       ├── ContactForm.tsx
│       ├── EarlyAccessForm.tsx
│       ├── InvestmentForm.tsx
│       ├── Logo.tsx
│       ├── Navigation.tsx
│       ├── NavLink.tsx
│       ├── SecondaryButton.tsx
│       ├── StatDisplay.tsx
│       ├── MobileMenuToggle.tsx
│       ├── MobileNavigation.tsx
│       ├── CTAButton.tsx
│       └── DemoFrame.tsx
├── lib/
│   └── utils.ts                      # Utility functions
├── styles/
│   └── globals.css                   # Global styles
├── tailwind.config.js                # Tailwind configuration
├── next.config.js                    # Next.js configuration
├── tsconfig.json                     # TypeScript configuration
├── postcss.config.js                 # PostCSS configuration
├── .eslintrc.json                    # ESLint configuration
├── package.json                      # Dependencies
└── .env.example                      # Environment template
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the landing page.

## ✨ Features

### Landing Page Sections
- **Header** - Navigation with mobile menu
- **Hero** - Main value proposition with demo
- **Problem** - Current market issues
- **Solution** - OnlyBrands reverse bidding
- **Market** - Industry statistics
- **FAQ** - Common questions
- **Final CTA** - Contact forms

### Modal Forms
- **Contact Form** - General inquiries
- **Early Access Form** - Beta signup
- **Investment Form** - Investor inquiries

### Design System
- **Dark Theme** - Professional OnlyBrands styling
- **Responsive** - Mobile-first design
- **Animations** - Smooth fade-in effects
- **Typography** - Inter font with custom logo font

## 🎨 Customization

### Colors
All colors are defined in `styles/globals.css` as CSS custom properties:
- `--brand-primary: #00B8E6` (OnlyBrands blue)
- `--surface-primary: #000000` (Dark background)
- `--text-primary: #ffffff` (White text)

### Components
Each landing section is a separate component in `components/landing/` for easy customization.

### Forms
Modal forms simulate API calls. Replace the mock API calls with real endpoints:

```typescript
// In ContactForm.tsx, EarlyAccessForm.tsx, InvestmentForm.tsx
const response = await fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(requestData)
});
```

## 📱 Responsive Design

- **Desktop**: Full grid layouts
- **Tablet**: Stacked sections
- **Mobile**: Single column with hamburger menu

## 🔧 Build Commands

```bash
# Development
npm run dev

# Production build
npm run build
npm start

# Linting
npm run lint

# Type checking
npm run type-check
```

## 🚀 Deployment

Ready to deploy to:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **Railway**
- **Any static hosting**

```bash
# Vercel deployment
npx vercel

# Build for static export (if needed)
npm run build
```

## 📊 Performance

- **Fast Loading** - Optimized images and fonts
- **SEO Ready** - Meta tags and structured data
- **Accessible** - WCAG compliant components
- **Mobile Optimized** - Touch-friendly interactions

---

Built with Next.js 14, TypeScript, and Tailwind CSS 🚀
