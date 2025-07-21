# Contributing to Instabids

We love your input! We want to make contributing to Instabids as easy and transparent as possible, whether it's:

- Reporting a bug
- Discussing the current state of the code
- Submitting a fix
- Proposing new features
- Becoming a maintainer

## We Develop with Github

We use GitHub to host code, to track issues and feature requests, as well as accept pull requests.

## We Use [Github Flow](https://guides.github.com/introduction/flow/index.html)

Pull requests are the best way to propose changes to the codebase. We actively welcome your pull requests:

1. Fork the repo and create your branch from `develop`.
2. If you've added code that should be tested, add tests.
3. If you've changed APIs, update the documentation.
4. Ensure the test suite passes.
5. Make sure your code lints.
6. Issue that pull request!

## Any contributions you make will be under the MIT Software License

In short, when you submit code changes, your submissions are understood to be under the same [MIT License](http://choosealicense.com/licenses/mit/) that covers the project. Feel free to contact the maintainers if that's a concern.

## Report bugs using Github's [issues](https://github.com/Insta-Bids-System/instabids-mobile-app/issues)

We use GitHub issues to track public bugs. Report a bug by [opening a new issue](https://github.com/Insta-Bids-System/instabids-mobile-app/issues/new); it's that easy!

## Write bug reports with detail, background, and sample code

**Great Bug Reports** tend to have:

- A quick summary and/or background
- Steps to reproduce
  - Be specific!
  - Give sample code if you can.
- What you expected would happen
- What actually happens
- Notes (possibly including why you think this might be happening, or stuff you tried that didn't work)

## Development Process

### Prerequisites

- Node.js 20+
- Bun 1.2+
- iOS: Xcode 15+
- Android: Android Studio
- Expo CLI

### Setup

```bash
# Clone the repository
git clone https://github.com/Insta-Bids-System/instabids-mobile-app.git
cd instabids-mobile-app

# Install dependencies
bun install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your values

# iOS setup (macOS only)
cd ios && pod install && cd ..

# Start development
bun run dev
```

### Code Style

- We use TypeScript for type safety
- Follow the existing code style
- Use meaningful variable and function names
- Write self-documenting code
- Add comments for complex logic

### Testing

```bash
# Run unit tests
bun test

# Run E2E tests
bun run test:e2e

# Type checking
bun run type-check

# Linting
bun run lint
```

### Commit Messages

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation only changes
- `style:` Code style changes (formatting, etc)
- `refactor:` Code change that neither fixes a bug nor adds a feature
- `perf:` Performance improvement
- `test:` Adding missing tests
- `chore:` Changes to the build process or auxiliary tools

Example: `feat: add user profile editing`

### Pull Request Process

1. Update the README.md with details of changes to the interface, if applicable.
2. Update the documentation with any new environment variables, exposed ports, useful file locations, and container parameters.
3. Increase the version numbers in any examples files and the README.md to the new version that this Pull Request would represent.
4. Your Pull Request will be merged once you have the sign-off of at least one other developer.

## MCP Tool Development

If you're working on MCP tool integrations:

1. Document the tool in `docs/mcp-tools/`
2. Add configuration examples
3. Include error handling
4. Write integration tests
5. Update the tool matrix in the main MCP documentation

## License

By contributing, you agree that your contributions will be licensed under its MIT License.

## References

This document was adapted from the open-source contribution guidelines for [Facebook's Draft](https://github.com/facebook/draft-js/blob/a9316a723f9e918afde44dea68b5f9f39b7d9b00/CONTRIBUTING.md)