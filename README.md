# 🚀 Instabids Mobile App

## AI-Powered Mobile-First Auction Platform

[![React Native](https://img.shields.io/badge/React%20Native-0.76+-61DAFB?style=flat-square&logo=react)](https://reactnative.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3+-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Expo](https://img.shields.io/badge/Expo-SDK%2051-000020?style=flat-square&logo=expo)](https://expo.dev/)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

## 🎯 Overview

Instabids is a revolutionary mobile-first auction platform powered by AI and built with cutting-edge technologies. This repository contains the complete mobile application built with React Native, TypeScript, and integrated with an advanced MCP (Model Context Protocol) toolchain.

## 🏗️ Tech Stack

### Core Technologies
- **Framework**: React Native 0.76+ (New Architecture)
- **Language**: TypeScript 5.3+
- **State Management**: Zustand 5.0+
- **Navigation**: React Navigation 7.0
- **Development**: Expo (Bare Workflow with EAS)
- **Styling**: NativeWind (Tailwind for React Native)

### Backend & Services
- **Database**: Supabase (PostgreSQL)
- **Storage**: Supabase Storage + R2
- **Authentication**: Supabase Auth
- **Real-time**: Supabase Realtime
- **Cache**: Redis (DigitalOcean)
- **Automation**: n8n Workflows

### AI & Design Integration
- **Design**: Figma with 4 MCP integrations
- **Code Generation**: Builder.io Visual Copilot
- **AI Assistant**: Claude with 17+ MCP tools

### DevOps & Deployment
- **CI/CD**: Codemagic
- **Builds**: EAS Build
- **Updates**: EAS Update (OTA)
- **Testing**: Detox + BrowserStack
- **Deployment**: Fastlane

## 📁 Project Structure

```
instabids-mobile-app/
├── src/                    # Source code
│   ├── components/         # Reusable components
│   ├── screens/           # Screen components
│   ├── navigation/        # Navigation configuration
│   ├── store/             # Zustand state management
│   ├── services/          # API and external services
│   ├── hooks/             # Custom React hooks
│   ├── utils/             # Utility functions
│   ├── types/             # TypeScript definitions
│   └── theme/             # Design system and theming
├── assets/                # Images, fonts, etc.
├── docs/                  # Documentation
│   ├── mcp-tools/         # MCP tools documentation
│   ├── architecture/      # Architecture decisions
│   └── setup/             # Setup guides
├── scripts/               # Build and automation scripts
├── .github/               # GitHub Actions workflows
└── tests/                 # Test files
```

## 🚀 Quick Start

### Prerequisites
- Node.js 20+
- Bun 1.2+ (recommended) or npm/yarn
- iOS: Xcode 15+
- Android: Android Studio
- Expo CLI

### Installation

```bash
# Clone the repository
git clone https://github.com/Insta-Bids-System/instabids-mobile-app.git
cd instabids-mobile-app

# Install dependencies
bun install

# Install iOS dependencies (macOS only)
cd ios && pod install && cd ..

# Set up environment variables
cp .env.example .env.local
```

### Development

```bash
# Start the development server
bun run dev

# Run on iOS
bun run ios

# Run on Android
bun run android

# Run on web (PWA)
bun run web
```

## 🤖 MCP Tools Integration

This project is powered by an extensive MCP toolchain:

### Design & Development
- **Figma Dev Mode**: Direct integration with Figma designs
- **Claude Talk to Figma**: Real-time design manipulation
- **Builder.io**: Figma to React Native code generation

### Infrastructure
- **Supabase MCP**: Database and auth management
- **GitHub MCP**: Version control automation
- **Vercel MCP**: Web deployment
- **DigitalOcean MCP**: Infrastructure management

### Testing & Deployment
- **BrowserStack MCP**: Real device testing
- **Codemagic MCP**: CI/CD pipelines
- **Fastlane MCP**: App store deployment

[See full MCP documentation](docs/mcp-tools/README.md)

## 🎨 Design System

Our design system is managed through Figma and synchronized with code:

- **Design Tokens**: Managed via Tokens Studio
- **Components**: 2000+ pre-built components
- **Icons**: 150,000+ icons via Iconify
- **Themes**: Light/Dark mode support

## 📱 Features

- **AI-Powered Auctions**: Smart bidding recommendations
- **Real-time Updates**: Live auction tracking
- **Cross-Platform**: iOS, Android, and Web
- **Offline Support**: Local-first architecture
- **Push Notifications**: Instant bid alerts
- **Secure Payments**: Multiple payment methods
- **Social Features**: Follow sellers, share items

## 🧪 Testing

```bash
# Unit tests
bun test

# E2E tests (Detox)
bun run test:e2e

# Type checking
bun run type-check

# Linting
bun run lint
```

## 📦 Building & Deployment

### Development Builds
```bash
# iOS development build
eas build --platform ios --profile development

# Android development build
eas build --platform android --profile development
```

### Production Builds
```bash
# iOS App Store
eas build --platform ios --profile production

# Android Play Store
eas build --platform android --profile production
```

### Over-the-Air Updates
```bash
# Publish OTA update
eas update --branch production
```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Links

- [Documentation](https://instabids-docs.vercel.app)
- [API Reference](https://api.instabids.com/docs)
- [Design System](https://www.figma.com/file/xxx)
- [Project Board](https://github.com/orgs/Insta-Bids-System/projects/1)

## 💬 Support

- [Discord Community](https://discord.gg/instabids)
- [GitHub Issues](https://github.com/Insta-Bids-System/instabids-mobile-app/issues)
- Email: support@instabids.com

---

Built with ❤️ by the Instabids Team using AI-powered development tools