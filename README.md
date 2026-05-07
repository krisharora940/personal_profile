# Krish Arora - Portfolio Website

A premium, research-minded portfolio website for Krish Arora, showcasing AI/ML projects, trading systems research, and technical work.

## 🎨 Design Philosophy

- **Premium, Restrained, Technical** - Bloomberg/research dashboard aesthetic, not retail-finance flashy
- **Dark/Light/System Theme** - Smooth theme switching with localStorage persistence
- **Premium Craftsmanship** - Glass morphism effects, magnetic hover states, smooth animations
- **Generous Typography** - Large, readable typography with proper spacing
- **Minimal Noise** - Focus on content and clarity

## 📁 Project Structure

```
/
├── public/
│   ├── index.html              # Homepage (hero, featured work, research snapshot, skills)
│   ├── output.css              # Compiled Tailwind CSS
│   ├── pages/
│   │   ├── about.html          # Full About page
│   │   └── research.html       # Research and reading page
│   ├── projects/
│   │   └── trading-ml.html     # Trading ML Research case study
│   └── src/
│       ├── css/
│       │   └── main.css        # Base styles with theme variables and premium effects
│       └── js/
│           └── theme.js        # Theme management system
├── tailwind.config.js          # Tailwind configuration
├── postcss.config.js           # PostCSS configuration
├── package.json                # Dependencies
└── README.md                   # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation

```bash
# Navigate to project directory
cd me_site

# Install dependencies
npm install

# Build CSS
npm run build

# Start development server
npm run dev
```

### Build Scripts

```bash
# Build Tailwind CSS (one-time)
npm run build

# Watch Tailwind CSS for changes
npm run watch

# Start local HTTP server
npm run serve

# Run watch + serve concurrently (recommended)
npm run dev
```

## 🎨 Theme System

The site includes a sophisticated theme management system:

- **Light mode**: Bright background, dark text
- **Dark mode**: Dark background, light text
- **System mode**: Respects OS preference

**How it works:**
1. Reads saved preference from localStorage
2. Falls back to system preference
3. CSS variables automatically update all colors
4. Smooth transitions on theme change
5. Persists user preference

**Customizing colors:** Edit CSS variables in `src/css/main.css`:
```css
:root {
  --color-text: #0f172a;
  --color-bg: #ffffff;
  --color-accent: #0f172a;
  /* ... more colors ... */
}

[data-theme="dark"] {
  --color-text: #f8fafc;
  --color-bg: #0f172a;
  /* ... dark theme colors ... */
}
```

## 🌐 Pages

### Homepage (`public/index.html`)
- Hero section with two-column layout
- Trust indicators strip
- Featured work section (3 project cards)
- Trading research snapshot dashboard
- Background/About preview
- Experience timeline
- Research/Reading preview
- Skills grid
- Contact footer

### Project Case Study (`public/projects/trading-ml.html`)
- Project hero section
- Overview with key metrics
- Research questions and hypotheses
- Data and methodology
- Validation and risk controls
- Performance dashboard with metrics
- Implementation screenshots/charts
- Lessons learned and next steps
- Related resources

### About Page (`public/pages/about.html`)
- Education details
- Experience timeline
- Interests and focus areas
- What building toward section
- Contact links

### Research Page (`public/pages/research.html`)
- Currently reading tracker with progress
- Papers and technical notes section
- ML content & experiments library
- Resource links

## 🎯 Features

### Premium Effects
- ✅ Glass morphism with backdrop blur
- ✅ Magnetic hover effects on cards
- ✅ Smooth scroll animations
- ✅ Fade-in and slide-in effects
- ✅ Scroll progress indicator
- ✅ Responsive navigation with scroll effects

### Interactive Elements
- ✅ Theme toggle button (light/dark/system)
- ✅ Smooth anchor link scrolling
- ✅ Navigation glass effect on scroll
- ✅ Magnetic element hover states

### Performance
- ✅ Minimal CSS (no heavy framework)
- ✅ Fast theme switching (no flicker)
- ✅ Optimized animations (60fps)
- ✅ No external dependencies except Tailwind

### Responsive Design
- ✅ Mobile-first approach
- ✅ Tested on mobile, tablet, desktop
- ✅ Flexible grid layouts
- ✅ Touch-friendly buttons and links

## 📝 Customization

### Adding New Project Case Studies

1. Create a new file in `public/projects/projectname.html`
2. Use the trading-ml.html template as reference
3. Update the project card on homepage with the new link

### Updating Content

- Edit text directly in HTML files
- Chart/image placeholders are ready for screenshots (marked with comments)
- Metric values can be easily updated in cards

### Styling

All styling uses Tailwind CSS with custom CSS variables for theming. To modify:

1. Edit `src/css/main.css` for custom styles
2. Use Tailwind utility classes for layout
3. CSS variables for theme-dependent colors

## 🔧 Building for Production

```bash
# Build CSS for production
npm run build

# Serve static files (or deploy to hosting)
npm run serve
```

The site is fully static HTML/CSS/JS - no build process needed for deployment. Simply upload the `public/` directory to any static hosting provider (Vercel, Netlify, GitHub Pages, etc).

## 🎯 Implementation Checklist

- ✅ Premium theme system (light/dark/system)
- ✅ Sticky navigation with glass effect
- ✅ Hero section with two-column layout
- ✅ Featured work project cards (3)
- ✅ Trading research snapshot dashboard
- ✅ About/background preview
- ✅ Experience timeline
- ✅ Research/reading preview
- ✅ Skills grid
- ✅ Contact footer
- ✅ Trading ML case study page
- ✅ About page (full)
- ✅ Research page (full)
- ✅ Premium effects (glass, hover, animations)
- ✅ Responsive design
- ✅ Theme management system
- ✅ Scroll progress indicator

## 📚 Pages to Create (Future)

- `public/projects/authorcheck.html` - AuthorCheck case study
- `public/projects/ml-lab.html` - ML Learning Lab grid
- Additional case study pages as projects develop

## 🎨 Premium CSS Features Used

- **Glass Morphism**: `.glass-effect` and `.glass-effect-subtle`
- **Magnetic Effects**: `.magnetic-element` hover scaling
- **Premium Cards**: `.card-premium` with smooth hover animations
- **Premium Buttons**: `.btn-primary` and `.btn-secondary`
- **Smooth Animations**: Fade-in, slide-in, drift effects
- **Typography Scales**: h1-h4 with premium sizing and spacing

## 🌙 Theme Variables

All colors are CSS variables that change based on theme:

```css
--color-text           /* Main text */
--color-text-secondary /* Secondary text */
--color-bg             /* Background */
--color-bg-secondary   /* Secondary background */
--color-border         /* Borders */
--color-accent         /* Accent color */
--color-glass          /* Glass effect background */
--color-glass-border   /* Glass effect border */
```

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## 🚀 Deployment

### Netlify / Vercel
1. Connect GitHub repo
2. Set build command: `npm run build`
3. Set publish directory: `public/`

### GitHub Pages
1. Build locally: `npm run build`
2. Upload `public/` folder to gh-pages branch

### Traditional Hosting
1. Run `npm run build`
2. FTP/upload `public/` directory to server

## 📞 Contact

All contact info and links in the footer of each page.

## 📄 License

© 2025 Krish Arora. All rights reserved.

---

**Built with premium craftsmanship using vanilla HTML, Tailwind CSS, and JavaScript.**
