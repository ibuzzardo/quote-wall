# Quote Wall

A beautiful daily quote wall built with Next.js 15, featuring inspiring quotes in a responsive masonry layout with favorites and category filtering.

## Features

- 📱 **Responsive Design** - Works perfectly on mobile, tablet, and desktop
- 🌙 **Dark Theme** - Beautiful dark UI with carefully chosen colors
- ❤️ **Favorites** - Save your favorite quotes with localStorage persistence
- 🏷️ **Categories** - Filter quotes by Motivation, Wisdom, Humor, and Life
- 📋 **Copy to Clipboard** - One-click copying with toast notifications
- ⭐ **Daily Quote** - Featured quote that changes each day
- 🎨 **Smooth Animations** - Hover effects and transitions throughout

## Tech Stack

- **Next.js 15** - App Router with TypeScript
- **Tailwind CSS** - Utility-first styling
- **React 18** - Latest React features
- **TypeScript** - Full type safety in strict mode

## Getting Started

### Prerequisites

- Node.js 18.0.0 or higher
- npm (comes with Node.js)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ibuzzardo/quote-wall.git
cd quote-wall
```

2. Install dependencies:
```bash
npm install
```

3. Copy environment variables (optional):
```bash
cp .env.example .env.local
```

4. Start the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with dark theme
│   ├── page.tsx            # Main page with all functionality
│   └── globals.css         # Tailwind CSS imports
├── components/
│   ├── QuoteCard.tsx       # Individual quote card component
│   ├── CategoryFilter.tsx  # Category filter buttons
│   └── Toast.tsx           # Copy success notification
└── data/
    └── quotes.ts           # Hardcoded quotes data
```

## Customization

### Adding More Quotes

Edit `src/data/quotes.ts` to add more quotes:

```typescript
export const quotes: Quote[] = [
  {
    id: 'unique-id',
    text: 'Your inspiring quote here',
    author: 'Author Name',
    category: Category.MOTIVATION, // or WISDOM, HUMOR, LIFE
  },
  // ... more quotes
];
```

### Styling

The app uses Tailwind CSS with a custom color palette defined in `tailwind.config.ts`. Key colors:

- **Primary**: `#2563EB` (Blue)
- **Background**: `#1F2937` (Dark Gray)
- **Foreground**: `#F9FAFB` (Light Gray)
- **Accent**: `#D97706` (Orange)

## Deployment

The app is configured for deployment with `output: 'standalone'` in `next.config.ts`.

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Docker

```bash
npm run build
# Use the generated standalone output
```

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes
4. Run type checking: `npm run type-check`
5. Run linting: `npm run lint`
6. Commit your changes: `git commit -m 'Add feature'`
7. Push to the branch: `git push origin feature-name`
8. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Quotes sourced from various public domain collections
- Built with ❤️ using Next.js and Tailwind CSS