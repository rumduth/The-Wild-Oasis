# 🏨 The Wild Oasis : https://the-wild-oasis-rum-duth.netlify.app/dashboard

A modern hotel management system built with React, designed to streamline hotel operations including cabin management, bookings, guest check-ins/check-outs, and comprehensive dashboard analytics.

![React](https://img.shields.io/badge/React-19.1.0-blue.svg)
![Vite](https://img.shields.io/badge/Vite-6.3.5-646CFF.svg)
![Supabase](https://img.shields.io/badge/Supabase-2.49.9-3ECF8E.svg)
![License](https://img.shields.io/badge/License-MIT-green.svg)

## 🌟 Features

### 🏠 Cabin Management

- **Cabin Inventory**: Complete CRUD operations for cabin management
- **Cabin Details**: Manage cabin information, pricing, and availability
- **Image Management**: Upload and manage cabin photos
- **Capacity Management**: Track maximum occupancy per cabin

### 📅 Booking System

- **Booking Management**: Create, view, update, and delete bookings
- **Guest Information**: Comprehensive guest profile management
- **Booking Status**: Track confirmed, unconfirmed, and checked-in bookings
- **Payment Tracking**: Monitor payment status and amounts

### 🔐 Authentication & Authorization

- **Secure Login**: User authentication with Supabase Auth
- **User Management**: Admin can create new user accounts
- **Protected Routes**: Role-based access control
- **Profile Management**: Users can update their profiles and passwords

### 📊 Dashboard & Analytics

- **Real-time Statistics**: Key performance indicators and metrics
- **Sales Charts**: Visual representation of revenue trends
- **Occupancy Analytics**: Track cabin utilization rates
- **Recent Activity**: Monitor recent bookings and check-ins

### 🏃‍♂️ Check-in/Check-out

- **Today's Activity**: View all check-ins and check-outs for the day
- **Quick Check-in**: Streamlined guest check-in process
- **Payment Confirmation**: Handle payment during check-in
- **Breakfast Add-ons**: Optional breakfast service management

### ⚙️ Settings Management

- **Global Settings**: Configure breakfast prices, booking limits
- **Application Preferences**: Customize app behavior
- **Dark/Light Mode**: Toggle between themes

## 🛠️ Technologies Used

### Frontend

- **React 19.1.0** - Modern React with latest features
- **React Router 7.6.1** - Client-side routing
- **Styled Components 6.1.18** - CSS-in-JS styling
- **React Hook Form 7.57.0** - Form management
- **React Hot Toast 2.5.2** - Toast notifications
- **React Icons 5.5.0** - Icon library
- **Recharts 2.15.3** - Data visualization

### Backend & Database

- **Supabase** - Backend-as-a-Service
  - PostgreSQL database
  - Real-time subscriptions
  - Authentication
  - File storage

### State Management & Data Fetching

- **TanStack React Query 5.80.6** - Server state management
- **React Query DevTools** - Development debugging

### Development Tools

- **Vite 6.3.5** - Build tool and dev server
- **ESLint** - Code linting
- **Date-fns 4.1.0** - Date manipulation

### Deployment

- **Netlify** - Static site hosting with SPA routing

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager
- Supabase account (for backend services)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/the-wild-oasis.git
   cd the-wild-oasis
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory:

   ```env
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Start the development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
the-wild-oasis/
├── public/                 # Static assets
│   ├── logo-dark.png      # Dark theme logo
│   ├── logo-light.png     # Light theme logo
│   └── default-user.jpg   # Default user avatar
├── src/
│   ├── context/           # React Context providers
│   ├── data/              # Sample data and utilities
│   ├── features/          # Feature-based components
│   │   ├── authentication/
│   │   ├── bookings/
│   │   ├── cabins/
│   │   ├── check-in-out/
│   │   ├── dashboard/
│   │   └── settings/
│   ├── hooks/             # Custom React hooks
│   ├── pages/             # Page components
│   ├── services/          # API services
│   ├── styles/            # Global styles
│   ├── ui/                # Reusable UI components
│   ├── utils/             # Utility functions
│   ├── App.jsx            # Main App component
│   └── main.jsx           # Application entry point
├── .env                   # Environment variables
├── netlify.toml          # Netlify configuration
├── package.json          # Dependencies and scripts
└── vite.config.js        # Vite configuration
```

## 🎯 Usage

### For Hotel Staff

1. **Login** with your credentials
2. **Dashboard** - View daily statistics and recent activity
3. **Cabins** - Manage cabin inventory and details
4. **Bookings** - Handle guest reservations
5. **Check-in/Check-out** - Process guest arrivals and departures
6. **Settings** - Configure application preferences

### For Administrators

- **User Management** - Create accounts for hotel staff
- **System Settings** - Configure global application settings
- **Data Management** - Access to all system data and analytics

## 🔧 Configuration

### Supabase Setup

1. Create a new Supabase project
2. Set up the database schema (tables for cabins, bookings, guests, settings)
3. Configure Row Level Security (RLS) policies
4. Enable authentication providers
5. Update environment variables with your Supabase credentials

### Netlify Deployment

The project includes a `netlify.toml` configuration file for seamless deployment:

- Automatic SPA routing support
- Build command: `npm run build`
- Publish directory: `dist`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow the existing code style and structure
- Use feature-based organization for new components
- Write meaningful commit messages
- Test your changes thoroughly
- Update documentation as needed

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [React](https://reactjs.org/)
- Powered by [Supabase](https://supabase.com/)
- Styled with [Styled Components](https://styled-components.com/)
- Charts by [Recharts](https://recharts.org/)
- Icons from [React Icons](https://react-icons.github.io/react-icons/)

## 📞 Support

If you have any questions or need help with setup, please open an issue in the GitHub repository.

---

**The Wild Oasis** - Streamlining hotel management with modern web technology 🏨✨
