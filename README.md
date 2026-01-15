# Mishra Enterprises - Packaging Solutions Website

A modern, production-ready React application for Mishra Enterprises, showcasing innovative packaging solutions.

## 🚀 Features

- **Modern React Architecture**: Built with React 19 and Vite for optimal performance
- **Responsive Design**: Fully responsive design that works on all devices
- **SEO Optimized**: Meta tags, semantic HTML, and proper structure for search engines
- **Accessibility**: ARIA labels, keyboard navigation, and semantic HTML
- **Error Handling**: Error boundaries for graceful error handling
- **Performance Optimized**: Code splitting, lazy loading, and optimized builds
- **Production Ready**: Optimized build configuration with minification and tree-shaking

## 📋 Prerequisites

- Node.js 18+ and npm

## 🛠️ Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

## 🏃 Development

Run the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## 🏗️ Building for Production

Build the application for production:

```bash
npm run build
```

The production build will be in the `dist` directory.

Preview the production build:

```bash
npm run preview
```

## 📦 Deployment

### GitHub Pages

The project is configured for GitHub Pages deployment:

1. Build the project:

   ```bash
   npm run build
   ```

2. Deploy to GitHub Pages:
   ```bash
   npm run deploy
   ```

The `predeploy` script will automatically build the project before deployment.

## 🎯 Project Structure

```
src/
├── components/       # Reusable React components
├── pages/           # Page components
├── assets/          # Static assets (images, etc.)
├── App.jsx          # Main app component with routing
└── main.jsx         # Application entry point
```

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory (see `.env.example` for reference):

```env
VITE_APP_NAME=Mishra Enterprises
VITE_APP_URL=https://your-domain.com
VITE_PHONE_1=080-49894644
VITE_PHONE_2=+91-8884607600
VITE_EMAIL=info@mishraenterprises.in
```

### Vite Configuration

The Vite configuration is optimized for production:

- Code splitting for vendor libraries
- Minification with Terser
- Console and debugger removal in production
- Optimized chunk sizes

## 📱 Pages

- **Home**: Main landing page with product showcases
- **About**: Company information and mission
- **Services**: Services offered by the company
- **Products**: Product catalog with categories
- **Contact**: Contact form and information
- **FAQ**: Frequently asked questions

## 🎨 Styling

The project uses Tailwind CSS for styling. Configuration is in `tailwind.config.js`.

## ✅ Code Quality

- ESLint for code linting
- Prettier for code formatting
- Error boundaries for error handling
- Accessibility best practices

## 🔒 Production Checklist

- ✅ Error boundaries implemented
- ✅ SEO meta tags added
- ✅ Accessibility improvements (ARIA labels, semantic HTML)
- ✅ Image lazy loading
- ✅ Code splitting and optimization
- ✅ Production build optimization
- ✅ All routes implemented
- ✅ Error handling (404 page)
- ✅ React Router Link components (no hard navigation)

## 📞 Contact

For questions or support, contact:

- Email: info@mishraenterprises.in
- Phone: 080-49894644, +91-8884607600

## 📄 License

All rights reserved © 2025 Mishra Enterprises
