# TheDan AI Landing Page

A simple, modern, and easy-to-deploy landing page for TheDan AI to introduce the AI Agent Builder Platform and attract users.

![TheDan AI](https://via.placeholder.com/800x400?text=TheDan+AI+Landing+Page)

## Features

- 🚀 Built with Next.js 14, TypeScript, and Tailwind CSS
- 🎨 Modern UI with Dark/Light mode support
- 🌐 Bilingual support (Vietnamese and English)
- 📱 Fully responsive design
- ⚡ Static site generation for fast loading
- 📊 Google Analytics integration
- 🔍 SEO optimized

## Sections

- **Hero:** A catchy tagline and call-to-action button
- **Overview:** Core functionalities and benefits
- **Pricing:** Detailed pricing tiers
- **About Us:** Company information
- **Contact:** Lead capture form with validation
- **Smooth Navigation:** Between sections

## Tech Stack

- **Frontend:** Next.js 14 (App Router), TypeScript, Tailwind CSS, Shadcn UI
- **Validation:** React Hook Form with Zod
- **Theming:** Dark/Light mode using next-themes
- **Deployment:** GitHub Pages

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/thedan-ai-landing.git
   cd thedan-ai-landing
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

### GitHub Pages

1. Update the `basePath` in `next.config.mjs` if needed.

2. Run the deployment script:
   ```bash
   npm run deploy
   # or
   yarn deploy
   ```

3. Your site will be deployed to the `gh-pages` branch of your repository.

4. Configure GitHub Pages in repository settings to serve from the `gh-pages` branch.

### Automated Deployment with GitHub Actions

This project includes a GitHub Actions workflow that automatically deploys to GitHub Pages when changes are pushed to the main branch.

1. The workflow is defined in `.github/workflows/deploy.yml`
2. When you push to the main branch, it will:
   - Build the Next.js application
   - Deploy to the `gh-pages` branch
   - Update your GitHub Pages site

3. You can also manually trigger a deployment from the Actions tab in your GitHub repository.

## Project Structure

```
thedan-ai-landing/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with SEO metadata
│   │   ├── page.tsx            # Main landing page
│   │   └── globals.css         # Global CSS with theming variables
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx      # Navigation with smooth scrolling
│   │   │   └── Footer.tsx      # Footer with links
│   │   ├── sections/
│   │   │   ├── Hero.tsx        # Hero section with CTA
│   │   │   ├── Overview.tsx    # Features overview
│   │   │   ├── Pricing.tsx     # Pricing tiers
│   │   │   ├── About.tsx       # About us
│   │   │   └── Contact.tsx     # Contact form
│   │   └── ui/                 # UI components (Shadcn)
│   └── lib/
│       └── utils.ts            # Utility functions
├── public/                     # Static assets
├── next.config.mjs             # Next.js configuration
└── tailwind.config.ts         # Tailwind CSS configuration
```

## Customization

- **Theme Colors:** Edit the CSS variables in `src/app/globals.css`
- **Content:** Modify the text in each component's content object
- **SEO:** Update metadata in `src/app/layout.tsx`

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn UI](https://ui.shadcn.com/)
- [Lucide Icons](https://lucide.dev/)
