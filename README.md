# VMCN Business Solutions Website

A modern, responsive React Single Page Application (SPA) for VMCN Business Solutions, featuring comprehensive business services and product showcases.

## Features

- **Modern React SPA** built with Vite for optimal performance
- **Responsive Design** that works on all devices
- **Smooth Scrolling Navigation** with sticky header
- **Professional Business Sections:**
  - Hero section with compelling CTAs
  - About us with company values
  - Services showcase with detailed descriptions
  - Products catalog with pricing
  - Client testimonials
  - Contact form with file attachments

## Tech Stack

- **React 19** - Modern React with latest features
- **Vite** - Fast build tool and development server
- **EmailJS** - Email service for contact form
- **React Icons** - Comprehensive icon library
- **CSS3** - Custom styling with modern CSS features

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone git@github.com:mrsathishe/vmcn.git
cd vmcn
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## Email Configuration

To enable the contact form email functionality:

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create a new service and email template
3. Update the EmailJS configuration in `src/components/Contact.jsx`:
   - Replace `YOUR_SERVICE_ID` with your EmailJS service ID
   - Replace `YOUR_TEMPLATE_ID` with your EmailJS template ID
   - Replace `YOUR_PUBLIC_KEY` with your EmailJS public key
   - Update the `to_email` with your actual business email

## Customization

### Contact Information

Update the contact details in the following files:
- `src/components/Header.jsx` - Header contact info
- `src/components/Contact.jsx` - Contact form email recipient
- `src/components/Footer.jsx` - Footer contact details

### Content Customization

- **Hero Section**: Edit `src/components/Hero.jsx`
- **About Section**: Modify `src/components/About.jsx`
- **Services**: Update `src/components/Services.jsx`
- **Products**: Customize `src/components/Products.jsx`
- **Testimonials**: Edit `src/components/Testimonials.jsx`

### Styling

The project uses CSS custom properties (variables) for easy theming:
- Main styles: `src/App.css`
- Color scheme variables are defined in `:root`
- Individual component styles in their respective CSS files

## Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment.

## Deployment

The project can be deployed to various platforms:

- **Netlify**: Connect your GitHub repository for automatic deployments
- **Vercel**: Import your GitHub repository
- **GitHub Pages**: Use GitHub Actions for deployment
- **Traditional hosting**: Upload the `dist` folder contents

## Project Structure

```
src/
├── components/          # React components
│   ├── Header.jsx      # Header with contact info
│   ├── Navigation.jsx  # Sticky navigation menu
│   ├── Hero.jsx        # Hero section
│   ├── About.jsx       # About section
│   ├── Services.jsx    # Services showcase
│   ├── Products.jsx    # Products catalog
│   ├── Testimonials.jsx # Client testimonials
│   ├── Contact.jsx     # Contact form
│   ├── Footer.jsx      # Footer
│   └── *.css          # Component-specific styles
├── App.jsx            # Main app component
├── App.css            # Global styles
├── main.jsx           # App entry point
└── index.css          # Base styles
```

## Features in Detail

### Navigation
- Smooth scrolling to sections
- Sticky header on scroll
- Mobile-responsive hamburger menu

### Contact Form
- Form validation
- File attachment support
- EmailJS integration
- Success/error messaging
- Professional styling

### Responsive Design
- Mobile-first approach
- Flexible grid layouts
- Optimized for all screen sizes
- Touch-friendly interfaces

### Performance
- Vite for fast development and builds
- Optimized images and assets
- Minimal bundle size
- Modern JavaScript features

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support or questions:
- Email: info@vmcn.com
- Phone: +1 (555) 123-4567

---

Built with ❤️ by VMCN Business Solutions+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
