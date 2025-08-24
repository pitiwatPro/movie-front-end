# 🎬 Movie Frontend Application

A movie project built with Next.js, TypeScript, and Clean Architecture principles. This project demonstrates a Netflix-like interface with internationalization support and responsive design.

## 🚀 Live Demo

- **Frontend**: [https://movie-frontend-151383141329.asia-southeast1.run.app](https://movie-frontend-151383141329.asia-southeast1.run.app)
- **Backend API**: [https://movie-backend-151383141329.asia-southeast1.run.app/swagger](https://movie-backend-151383141329.asia-southeast1.run.app/swagger)
- **Backend Repository**: [https://github.com/pitiwatPro/movie-back-end](https://github.com/pitiwatPro/movie-back-end)

## 📋 Prerequisites

Before getting started, you need to obtain a **RAPID_API_KEY** from:
[https://rapidapi.com/movie-of-the-night-movie-of-the-night-default/api/streaming-availability/playground](https://rapidapi.com/movie-of-the-night-movie-of-the-night-default/api/streaming-availability/playground)

## 🛠️ Local Development Setup

### Using Docker Compose (Recommended)

1. **Create project directory and clone repositories:**
   ```bash
   mkdir movie_project
   cd movie_project
   git clone https://github.com/pitiwatPro/movie-front-end.git
   git clone https://github.com/pitiwatPro/movie-back-end.git
   ```

2. **Configure environment variables:**
   ```bash
   cd movie-front-end
   cp .env.example .env
   echo "RAPID_API_KEY={your_rapid_api_key}" >> .env
   # Replace {your_rapid_api_key} with your actual API key
   ```

3. **Start the application:**
   ```bash
   docker compose up -d
   ```

4. **Open your browser:**
   Visit [http://localhost:3000](http://localhost:3000)

### Using npm (Development)

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   ```bash
   cp .env.example .env
   # Edit .env file
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

## 🏗️ Project Architecture

This project follows **Clean Architecture** principles with clear separation of concerns:

```
src/
├── app/                    # Next.js App Router pages
│   ├── [locale]/          # Internationalization routes
│   │   ├── (main)/        # Main application pages
│   │   ├── error.tsx      # Global error boundary
│   │   ├── loading.tsx    # Loading UI
│   │   └── not-found.tsx  # 404 page
├── components/            # React components
│   ├── common/           # Shared components (Navbar, Buttons, etc.)
│   └── ui/               # Page-specific UI components
├── core/                 # Business Logic Layer (Framework Independent)
│   ├── adapters/         # Interfaces/Ports for external data sources
│   ├── models/           # Domain entities and business objects
│   └── usecases/         # Application business logic and use cases
├── services/             # External Data Layer
│   ├── api/              # API client wrapper and configurations
│   └── movie/            # Movie data services (real API + mock)
├── i18n/                 # Internationalization configuration
├── lib/                  # Utility functions and helpers
└── middleware.ts         # Next.js middleware for i18n routing
```

### Architecture Layers Explained:

#### 🎯 **Core Layer** (Business Logic)
- **`models/`**: Pure domain entities containing business rules
- **`usecases/`**: Orchestrates business logic and coordinates between models and adapters
- **`adapters/`**: Interfaces (ports) that define contracts for external data sources

#### 🔌 **Services Layer** (External Data)
- **`api/`**: HTTP client wrapper with error handling and request configuration
- **`movie/`**: Implementation of movie data fetching (both real API and mock data)
- Services implement adapter interfaces to work with core business logic

#### 🎨 **Presentation Layer**
- **`components/common/`**: Reusable UI components shared across pages
- **`components/ui/`**: Page-specific components with business logic integration
- **`app/`**: Next.js pages using App Router with internationalization support

#### 🌐 **Cross-cutting Concerns**
- **`i18n/`**: Multi-language support (English/Thai)
- **`lib/`**: Shared utilities and helper functions
- **`middleware.ts`**: Request routing and language detection

## 🛡️ Technologies Used

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: Ui.shadcn
- **Internationalization**: next-intl
- **Theme Management**: next-themes
- **Deployment**: Google Cloud Run
- **Containerization**: Docker

## 📁 Environment Variables

```bash
# API Configuration
NEXT_PUBLIC_MOVIE_API_BASE_URL="http://localhost:3001/api"
MOVIE_API_KEY="your_movie_api_key"
```

## 🚀 Available Scripts

- **`npm run dev`**: Start development server with Turbopack
- **`npm run build`**: Build production application
- **`npm run start`**: Start production server
- **`npm run lint`**: Run ESLint for code quality

## 🌐 Deployment

The application is automatically deployed to Google Cloud Run via GitHub Actions when pushing to the main branch. The CI/CD pipeline includes:

- ✅ Type checking and linting
- 🐳 Docker image building
- 🚀 Automatic deployment to Cloud Run
- 🔍 Health checks and rollback on failure

## 🔗 Related Projects

- [Movie Backend API](https://github.com/pitiwatPro/movie-back-end) - NestJS backend service
