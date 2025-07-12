# Modern Blog Landing Page

A beautiful, responsive blog landing page built with Next.js and Tailwind CSS.

## Features

- 🎨 Modern, clean design with Tailwind CSS
- 📱 Fully responsive layout
- 🔍 Search functionality (UI ready)
- 📚 Category filtering
- 📰 Featured and recent articles sections
- 💌 Newsletter signup
- 🚀 Built with Next.js for optimal performance
- 🎯 SEO-friendly with meta tags
- 📦 Lucide React icons for beautiful UI elements

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
├── pages/
│   ├── _app.tsx          # App component with global styles
│   └── index.tsx         # Main landing page
├── styles/
│   └── globals.css       # Global styles with Tailwind
├── package.json          # Dependencies and scripts
├── tailwind.config.js    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── README.md            # This file
```

## Customization

### Colors
The color scheme can be customized in `tailwind.config.js`. The primary color is currently set to blue, but you can change it to any color you prefer.

### Content
- Edit the blog posts data in `pages/index.tsx`
- Modify the hero section text and call-to-action buttons
- Update the navigation links and footer information

### Styling
- Global styles are in `styles/globals.css`
- Component-specific styles use Tailwind utility classes
- Custom button styles are defined in the CSS file

## Build for Production

```bash
npm run build
npm start
```

## Technologies Used

- **Next.js** - React framework for production
- **React** - JavaScript library for building user interfaces
- **Tailwind CSS** - Utility-first CSS framework
- **TypeScript** - Type-safe JavaScript
- **Lucide React** - Beautiful & consistent icons

## License

This project is open source and available under the [MIT License](LICENSE). 