# VM Computers and Networking - Professional Website

A modern, responsive React Single Page Application (SPA) for VM Computers and Networking, showcasing enterprise networking solutions, IoT services, and home network infrastructure.

## 🚀 Project Overview

Professional website for **VM Computers and Networking** owned by **Vignesh Mahalingam**, specializing in:

- Enterprise Networking and Office IT Infrastructure
- IoT Solutions for Smart Business Decisions
- Next Generation Home Network Infrastructure
- Comprehensive Technical Support Services

## ✨ Features

- **Clean Single Page Design** with smooth scrolling navigation
- **Conditional Header/Navigation** (hidden on home section, appears on scroll)
- **Professional Blue Gradient Theme** throughout the site
- **Responsive Layout** with content-left, image-right design pattern
- **Contact Form** with file upload capabilities
- **EmailJS Integration** for reliable email delivery

## 🎯 Website Sections

### 🏠 **Home Section**

- **Full background hero** with company logo and name
- **Clean landing page** without visible header/navigation
- **Professional tagline** and call-to-action button

### 🌐 **Enterprise Networking Section**

- **Heading**: Enterprise Networking and Office IT Infrastructure
- **Services**: Structured cabling, wireless networking, LAN/WAN setup, server configuration, network security, cloud integration
- **Target**: Business productivity and secure communication solutions

### 📡 **IoT Section**

- **Heading**: Smarter Connections, Smarter Decisions
- **Services**: Real-time data collection, remote monitoring, smart automation, energy management, asset tracking
- **Target**: Business efficiency and innovation through connected technology

### 🏠 **Home Network Section**

- **Heading**: Stay Connected with Next Gen Home Network Infrastructure
- **Services**: Routers, mesh Wi-Fi systems, extenders, switches, streaming/gaming optimization
- **Target**: Seamless home connectivity and smart device management

### 📞 **Contact Section**

- **Company**: VM COMPUTERS AND NETWORKING
- **Owner**: Vignesh Mahalingam
- **Phone**: +91 9345305055
- **Email**: vmcomputersnetworking@gmail.com
- **Service Areas**: Tamil Nadu, Puducherry, Kerala & Karnataka
- **Hours**: Monday–Friday: 9 AM – 6 PM, Saturday–Sunday: 10 AM – 5 PM

## 🛠️ Tech Stack

- **React 19** - Modern React with hooks and functional components
- **Vite 7.0.6** - Fast build tool and development server
- **EmailJS** - Email service for contact form submissions
- **React Icons** - Comprehensive icon library
- **CSS3** - Custom styling with gradients and responsive design

## 🚀 Getting Started

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

## 📧 Email Configuration

To enable the contact form email functionality:

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create a new service and email template
3. Update the EmailJS configuration in `src/components/Contact.jsx`:
   - Replace `YOUR_SERVICE_ID` with your EmailJS service ID
   - Replace `YOUR_TEMPLATE_ID` with your EmailJS template ID
   - Replace `YOUR_PUBLIC_KEY` with your EmailJS public key
   - Email destination is set to: `vmcomputersnetworking@gmail.com`

## 🎨 Design Features

### Layout Structure

- **Content-left, Image-right** pattern for all sections
- **Blue gradient backgrounds** with light shade variations
- **Responsive grid layouts** for optimal viewing on all devices
- **Professional typography** with proper hierarchy

### Color Scheme

- **Primary Color**: Navy blue (#2c3e50)
- **Secondary Color**: Light blue (#3498db)
- **Accent Color**: Red (#e74c3c)
- **Background**: Blue gradients with white/light variations

### Navigation Behavior

- **Hidden on Home**: Header and navigation are hidden on the hero section
- **Appears on Scroll**: Header with contact info appears when scrolling past hero
- **Smooth Scrolling**: Navigation links smoothly scroll to respective sections
- **Mobile Responsive**: Hamburger menu for mobile devices

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

## 🔧 Customization

### Contact Information Update

Update contact details in these files:

- `src/components/Header.jsx` - Header contact display
- `src/components/Contact.jsx` - Contact form recipient and info display

### Content Customization

- **Hero Section**: Edit `src/components/Hero.jsx` for company branding
- **Enterprise Networking**: Modify `src/components/EnterpriseNetworking.jsx`
- **IoT Services**: Update `src/components/IoT.jsx`
- **Home Networking**: Customize `src/components/HomeNetwork.jsx`
- **Contact Form**: Edit `src/components/Contact.jsx` for form fields and styling

### Styling Customization

The project uses CSS custom properties for consistent theming:

- **Global Styles**: `src/App.css` contains color variables and base styles
- **Component Styles**: Each component has its own CSS file
- **Responsive Design**: Mobile-first approach with breakpoints at 768px and 480px

## 📦 Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment.

## 🚀 Deployment Options

- **Netlify**: Connect GitHub repository for automatic deployments
- **Vercel**: Import GitHub repository for seamless deployment
- **GitHub Pages**: Use GitHub Actions for static site deployment
- **Traditional Hosting**: Upload `dist` folder contents to web server

## 📁 Project Structure

```
src/
├── components/              # React components
│   ├── Header.jsx          # Header with contact info (conditional)
│   ├── Navigation.jsx      # Smooth scrolling navigation
│   ├── Hero.jsx           # Full-screen hero with company branding
│   ├── EnterpriseNetworking.jsx  # Enterprise IT solutions
│   ├── IoT.jsx            # IoT services and solutions
│   ├── HomeNetwork.jsx    # Home networking services
│   ├── Contact.jsx        # Contact form with file upload
│   ├── Footer.jsx         # Site footer
│   └── *.css             # Component-specific styles
├── App.jsx               # Main app with conditional header logic
├── App.css              # Global styles and CSS variables
├── main.jsx             # Application entry point
└── index.css            # Base reset styles
```

## 🌟 Key Features in Detail

### Conditional Header Display

- Header and navigation are hidden on the hero section
- Appears when user scrolls past the hero section
- Smooth transition with scroll detection

### Professional Contact Form

- **Fields**: Name, Email, Message, Optional File Upload
- **Validation**: Built-in form validation
- **EmailJS Integration**: Reliable email delivery
- **File Attachments**: Support for document uploads
- **Success/Error Messaging**: User feedback on form submission

### Responsive Design

- **Mobile-First**: Optimized for mobile devices first
- **Flexible Layouts**: CSS Grid and Flexbox for responsive design
- **Touch-Friendly**: Large buttons and touch targets for mobile
- **Cross-Browser**: Compatible with modern browsers

### Performance Optimization

- **Vite Build Tool**: Fast development and optimized production builds
- **Component-Based**: Modular React components for maintainability
- **Minimal Dependencies**: Lean tech stack for fast loading
- **Modern JavaScript**: ES6+ features for efficient code

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support & Contact

For technical support or business inquiries:

- **Business Email**: vmcomputersnetworking@gmail.com
- **Phone**: +91 9345305055
- **Owner**: Vignesh Mahalingam
- **Service Areas**: Tamil Nadu, Puducherry, Kerala & Karnataka

## 🏢 Business Information

**VM Computers and Networking** specializes in:

- Enterprise networking solutions for businesses
- IoT implementation and smart automation
- Home network infrastructure and optimization
- Technical support and maintenance services

**Business Hours:**

- Monday–Friday: 9:00 AM – 6:00 PM
- Saturday–Sunday: 10:00 AM – 5:00 PM

---

Built with ❤️ for **VM Computers and Networking** | Professional Networking Solutions
