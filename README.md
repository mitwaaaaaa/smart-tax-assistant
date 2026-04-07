# 🧾 Smart Tax Filing Assistant

A modern, mobile-first **income tax filing prototype** built as a UX case study. The app simulates a complete end-to-end tax return filing flow — from OTP login to document upload, AI-powered extraction, tax summary review, and successful submission — all within a polished, fintech-grade interface.

> **Live Demo →** _[Add your Vercel URL here]_

---

## ✨ Features

| Feature | Description |
|---|---|
| 🔐 **OTP Login Flow** | Simulated Aadhaar-based mobile OTP authentication with loading states |
| 📊 **Smart Dashboard** | Personalized overview with filing status, action alerts, and past return history |
| 📄 **Document Upload** | Drag-and-drop Form 16 upload with animated progress bar and AI extraction simulation |
| 🧮 **Tax Summary** | Auto-calculated breakdown with Old vs. New regime comparison toggle |
| ✅ **Submit & Confirm** | Review screen with consent flow and animated confirmation |
| 🎉 **Success Receipt** | Celebratory confirmation with acknowledgement number, timeline, and share/download actions |

## 📱 User Flow

```
Login (OTP) → Dashboard → Upload Form 16 → Tax Summary → Submit Return → Success 🎉
```

Each screen transition uses **Framer Motion** page animations for a fluid, app-like experience.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| [React 19](https://react.dev) | UI framework |
| [Vite 8](https://vitejs.dev) | Build tool & dev server |
| [TailwindCSS 3](https://tailwindcss.com) | Utility-first styling |
| [Framer Motion](https://www.framer.com/motion/) | Page transitions & micro-animations |
| [Lucide React](https://lucide.dev) | Icon system |
| [React Router v7](https://reactrouter.com) | Client-side routing |

---

## 📂 Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── MobileFrame.jsx      # iPhone-style device frame wrapper
│   │   └── PageTransition.jsx   # Framer Motion page transition wrapper
│   └── ui/
│       ├── Button.jsx           # Reusable button component
│       ├── Card.jsx             # Reusable card component
│       └── Input.jsx            # Reusable input component
├── context/
│   └── AppContext.jsx           # Global state (user, tax data, uploads)
├── pages/
│   ├── Login.jsx                # OTP-based authentication
│   ├── Dashboard.jsx            # Home screen with filing status
│   ├── UploadDocs.jsx           # Form 16 upload with progress
│   ├── TaxSummary.jsx           # Income & deduction breakdown
│   ├── SubmitReturn.jsx         # Final review & consent
│   └── Success.jsx              # Filing confirmation receipt
├── App.jsx                      # Root component with routing
├── main.jsx                     # Entry point with AppProvider
└── index.css                    # Global styles & Tailwind directives
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm v9+

### Installation

```bash
# Clone the repository
git clone https://github.com/mitwaaaaaa/smart-tax-assistant.git
cd smart-tax-assistant

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
npm run preview   # Preview the production build locally
```

---

## 🎨 Design System

The app uses a carefully curated **fintech color palette** designed to feel secure and trustworthy:

| Token | Color | Usage |
|---|---|---|
| `primary` | `#0F766E` (Teal) | CTAs, brand identity, focus states |
| `secondary` | `#10B981` (Emerald) | Success states, positive indicators |
| `alert` | `#E11D48` (Rose) | Errors, warnings, destructive actions |
| `background` | `#F8FAFC` (Slate 50) | Page backgrounds |
| `textMain` | `#1E293B` (Slate 800) | Headings, body text |
| `textMuted` | `#64748B` (Slate 500) | Secondary text, captions |

**Typography:** [Inter](https://fonts.google.com/specimen/Inter) — clean, highly legible, designed for screens.

---

## 🌐 Deployment

This project is optimized for deployment on **[Vercel](https://vercel.com)**:

1. Push your code to GitHub
2. Import the repository on [vercel.com/new](https://vercel.com/new)
3. Vercel auto-detects Vite — click **Deploy**
4. Your app is live! ✅

Every push to `main` triggers an automatic redeployment.

---

## 📌 UX Case Study Context

This prototype was built as part of a **UI/UX case study** exploring how to simplify income tax filing for first-time filers in India.

**Problem:** Tax filing is intimidating — complex forms, jargon-heavy language, and fear of making mistakes lead to procrastination and reliance on costly CAs.

**Solution:** A guided, step-by-step mobile experience that uses document intelligence to auto-fill returns, provides clear regime comparisons, and builds user confidence through progressive disclosure and real-time feedback.

**Target Users:** Salaried professionals (22–35 yrs) filing returns for the first time.

---

## 📄 License

This project is for educational and portfolio purposes.

---

<p align="center">
  Designed & built with ❤️ by <a href="https://github.com/mitwaaaaaa">mitwaaaaaa</a>
</p>
