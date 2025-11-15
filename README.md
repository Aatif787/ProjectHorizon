# DataHorizon - AI-Powered Analytics Platform

A modern, full-stack web application for data analysis and visualization with AI-powered insights.

## Features

- 📊 **Data Visualization**: Interactive charts and graphs using Nivo
- 🤖 **AI Insights**: Multi-provider AI analysis with ChatGPT and Gemini integration
- 🧠 **Smart Analytics**: Automated pattern recognition and statistical analysis
- 📁 **File Upload**: Support for CSV, Excel, JSON, and PDF files
- 🔐 **Authentication**: Secure user registration and login
- 💳 **Subscription System**: Premium features with Razorpay integration
- 📱 **Responsive Design**: Mobile-friendly interface
- 🌐 **Multi-language Support**: English, Hindi, Hinglish, and Urdu
- ⚡ **AI Provider Selection**: Choose between ChatGPT, Gemini, or auto-selection
- 🔄 **Intelligent Fallback**: Automatic failover between AI providers

## Tech Stack

### Frontend
- React 18 with TypeScript
- Vite for build tooling
- Tailwind CSS for styling
- Framer Motion for animations
- Nivo for data visualization
- React Router for navigation

### Backend
- Node.js with Express
- MongoDB with Mongoose
- JWT for authentication
- Nodemailer for email services
- Razorpay for payments

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- MongoDB
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd project
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
Create a `.env` file in the root directory with the following variables:

```env
# AI Service Configuration
VITE_OPENAI_API_KEY=your_openai_api_key_here
VITE_GEMINI_API_KEY=your_gemini_api_key_here

# Supabase Configuration
VITE_SUPABASE_URL=your_supabase_url_here
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key_here

# MongoDB Configuration
MONGODB_URI=mongodb://localhost:27017/datahorizon

# JWT Configuration
JWT_SECRET=your_jwt_secret_here
JWT_EXPIRES_IN=7d

# Email Configuration
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_password

# Razorpay Configuration
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret

# Server Configuration
PORT=5000
NODE_ENV=development
```

4. Start the development server
```bash
npm run dev
```

This will start both the frontend (Vite) and backend (Express) servers concurrently.

### AI Integration Setup

To enable AI-powered insights, configure at least one AI provider:

#### OpenAI ChatGPT
1. Visit [OpenAI Platform](https://platform.openai.com/api-keys)
2. Create an API key
3. Add to `.env`: `VITE_OPENAI_API_KEY=your_key_here`

#### Google Gemini
1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Create an API key
3. Add to `.env`: `VITE_GEMINI_API_KEY=your_key_here`

**Note**: At least one AI provider must be configured for AI features to work. The system will automatically fallback to available providers if one fails.

### Available Scripts

- `npm run dev` - Start development servers
- `npm run client` - Start only the frontend
- `npm run server` - Start only the backend
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
project/
├── src/                    # Frontend source code
│   ├── components/         # React components
│   ├── pages/             # Page components
│   ├── lib/               # Utility libraries
│   └── main.tsx           # Entry point
├── server/                # Backend source code
│   ├── controllers/       # Route controllers
│   ├── middleware/        # Express middleware
│   ├── models/           # Database models
│   ├── routes/           # API routes
│   └── utils/            # Utility functions
├── public/               # Static assets
└── dist/                # Build output
```

## Features Overview

### Data Visualization
- Bar charts, line charts, pie charts
- Heatmaps, scatter plots, box plots
- Treemaps, calendar charts, radar charts
- Interactive tooltips and legends

### AI Analytics
- Automatic pattern recognition
- Trend analysis and forecasting
- Outlier detection
- Statistical summaries
- Natural language queries

### File Processing
- CSV and Excel file support
- JSON data processing
- PDF text extraction
- Data validation and cleaning

### User Management
- Secure authentication
- Profile management
- Subscription tracking
- Usage analytics

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support, email aarizfarooqui786@gmail.com or create an issue in the repository.
