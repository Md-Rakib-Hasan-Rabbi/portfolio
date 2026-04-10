# Rakib Hasan — Portfolio

A modern, animated portfolio built with **Next.js 15**, **TypeScript**, and pure CSS animations.

## 🚀 Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Add your photo
Copy your photo (JPEG/PNG/WebP) to the `public/` folder and name it `rakib.jpg`:
```
public/
  rakib.jpg   ← your photo here
```

> **Tip:** If you have a HEIC photo, convert it:
> - **Mac**: Right-click → Quick Actions → Convert Image → JPEG
> - **iPhone**: In Settings → Camera → Formats → Most Compatible (saves as JPEG going forward)
> - **Online**: Use [heictojpg.com](https://heictojpg.com)

### 3. Run the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for production
```bash
npm run build
npm start
```

## 📁 Project Structure

```
src/
  app/
    page.tsx          ← Main page
    layout.tsx        ← Root layout & metadata
    globals.css       ← Design tokens, keyframes, utilities
  components/
    Navbar.tsx        ← Fixed navigation with scroll effect
    Hero.tsx          ← Hero section with typewriter, photo, stats
    Skills.tsx        ← Animated skill bars + tech pills
    Projects.tsx      ← Project cards with hover effects
    About.tsx         ← About section with timeline card
    Contact.tsx       ← Contact with email copy button
    Footer.tsx        ← Footer
    ScrollReveal.tsx  ← Intersection Observer for scroll animations
public/
  rakib.jpg           ← Your profile photo (replace this!)
```

## ✏️ Customization

### Update personal info
- **Email**: `src/components/Contact.tsx` → find `kraakib53@gmail.com`
- **LinkedIn**: `src/components/Contact.tsx` and `src/components/About.tsx`
- **GitHub**: Search for `Md-Rakib-Hasan-Rabbi` across components

### Add/remove projects
Edit the `projects` array in `src/components/Projects.tsx`.

### Update skills/levels
Edit `skillGroups` in `src/components/Skills.tsx`.

### Change colors
Edit CSS variables in `src/app/globals.css`:
```css
:root {
  --accent: #7c6aff;   /* purple - primary accent */
  --accent2: #00e5a0;  /* green - secondary */
  --accent3: #ff6b6b;  /* red/coral - tertiary */
}
```

## 🌐 Deployment

### Vercel (recommended — free)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload the .next folder or connect your GitHub repo
```

## 🎨 Features
- Typewriter role animation in hero
- Floating photo with orbit ring animation
- Count-up stats animation on scroll
- Animated skill progress bars
- Project cards with per-card accent colors & hover effects
- Scroll-reveal animations (fade up, left, right)
- Email copy-to-clipboard in contact section
- Responsive design
- Moving grid background

---

Built with Next.js · TypeScript · CSS Animations
