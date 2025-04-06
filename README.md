# Turbopack Monorepo

This repository contains a monorepo setup with two Next.js applications that share a common UI component library.

## Project Structure

The project is organized as follows:

- `apps/`: Contains the two Next.js applications.
  - `apps/app1`: The first Next.js application.
  - `apps/app2`: The second Next.js application.
- `packages/`: Contains shared libraries and components.
  - `packages/ui`: Shared UI component library.

## Running the Project

To run the project, follow these steps:

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server for each application:
   ```bash
   npm run dev --workspace=apps/app1
   npm run dev --workspace=apps/app2
   ```

## Troubleshooting

If you encounter the error message `Cannot find module 'next'`, ensure that the dependencies are installed correctly by running:
```bash
npm install

