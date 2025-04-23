# User management dashboard

Deploy: https://admin-dashboard-kq41-git-main-eliz39s-projects.vercel.app

A **Next.js** project built with **TypeScript**, utilizing the following tools and libraries:

- **React 19.0.0** for building user interfaces.
- **Tailwind CSS** for styling.
- **Radix UI** components for accessible primitives.
- **Lucide React** for icons.
- **ESLint** and **Prettier** for linting and code formatting.

## Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (Latest stable version preferred)
- [Yarn](https://yarnpkg.com/)

### Installation

1. Install dependencies:

   ```bash
   yarn install
   ```
   
2. Create .env.local file following .env.example

### Development

To run the development server:

```bash
yarn dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser. The page will automatically reload when you make
edits.

### Build

To create an optimized production build:

```bash
yarn build
```

### Start

Run the production build:

```bash
yarn start
```

### Linting and Formatting

- Run ESLint:

  ```bash
  yarn lint
  ```

## Features

- Authentication, app is accessible after login
- Can filter users list by search
- Can delete user
