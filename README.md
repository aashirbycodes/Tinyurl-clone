# TinyURL Clone (Frontend Only)

React + Vite + Tailwind CSS + React Router. Koi backend ya database nahi.

## Run
```
npm install
npm run dev
```
Browser mein http://localhost:5173 kholo.

## Routes (src/main.jsx)
| Path | Page |
|------|------|
| `/` | Home |
| `/plans` | Plans |
| `/domains` | Domains |
| `/login` | Log In |
| `/signup` | Sign Up |

## Structure
```
src/
  main.jsx            -> routing yahan hai
  pages/              -> Home, Plans, Domains, Login, Signup, NotFound
  components/
    layout/           -> Layout, Navbar, Footer, ScrollToTop
    common/           -> Ph, Logo, Btn, Band, Faq, Cta, Toggle
    home/             -> Hero, QR, PlansInclude, OneStop, Stats
    plans/            -> PricingCards, PlanCard, Slider, FeatureBreakdown, Cell
    domains/          -> DomainsHero, HowBranded, BrandRows
    auth/             -> AuthForm, AuthSidePanel
  data/               -> FAQs, plans table, cards ka data
  hooks/useGo.js      -> go('plans') jaisa navigation helper
  utils/              -> validate, format
```

Pictures ki jagah `Ph` placeholder hai (components/common/Ph.jsx). Apni image lagane ke liye `<Ph ... />` ko `<img src="..." />` se replace karo.
