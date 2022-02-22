# README

The following document describes the steps necessary to get the Next website up and running.

### What is this Repository for?

This repository holds the codebase for https://www.hichamtaha.com.

### How to Setup / Scripts

- `yarn dev` Serve with hot reload at localhost:3000.
- `yarn build` Build for production.
- `yarn start` Launch server.
- `yarn generate` Generate static project in the /dist folder. Used for static hosting on S3.

### Linting

1. In visual studio code, ensure you have the following plugins.
   - stylelint
   - ESLint
   - Prettier
   - Tailwind CSS IntelliSense
2. Settings are located in .vscode/settings.json. Linting is based off airbnb-base plugin.

### Directory Layout

```bash
├── .vscode/                    # Prettier setting with linting.
├── components/                 # Global components to be used across all page components.
├── lib/     		            # JSON exports for content used across the site.
├── node_modules/               # NPM packages.
├── pages/                      # Next page based components.
    ├── api/                    # Next endpoints.
├── public/                     # Static files to be accessed via public routes.
    ├── images                  # Website and project images.
├── styles/                     # All css files relating to the project.
    ├── mixins                  # Global postcss mixins.
├── dist/                       # Distributed client side files to serve for static hosting.
├── scripts/                    # Shell scripts.
    ├── pipeline/               # Pipeline scripts for Code Build to deploy to S3.
├── .gitignore                  # Files to ignore in bitbucket.
├── .prettierignore             # Files to ignore prettier triggers from.
├── .prettierrc                 # Rules used in tandem with auto lint to ensure prettier tabs when developing.
├── next.config.js              # Next configurations.
├── package.json                # Core dependencies, scripts, and project details.
├── postcss.config.js           # Postcss configurations.
├── tailwind.config.js          # Tailwind configurations.
```
