# Locker - E-commerce Platform

This project is a **Single Page Application (SPA)** built with **React**, **TypeScript**, and **Vite**. It showcases a product catalog with advanced filtering, sorting, search, bookmarks, and shopping basket. The app is designed to provide a smooth and responsive user experience across desktop and mobile devices.

## Table of Contents

- [Features](#features)
- [Security Measures](#security-measures)
- [CI/CD and Maintenance](#cicd-and-maintenance)
- [API Reference](#api-reference)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Running the Development Server](#running-the-development-server)
  - [Environment Variables](#environment-variables)
- [Docker Setup](#docker-setup)
- [Building for Production](#building-for-production)

---

## Features

- **Product Grid**: Displays products in a grid format (image, name, price, description up to 100 characters).
- **Filtering**: Filter products by category.
- **Sorting**: Sort products by price (high-to-low, low-to-high) and name (alphabetically).
- **Search**: Search products by name using an input search bar.
- **Pagination**: Supports pagination to manage large datasets (20 products per page).
- **Product Details**: View product details in a modal upon clicking the "Details" button.
- **Add to Basket**: Add products to a basket (basket state stored using local storage).
- **Add to Wishlist**: Add products to a wishlist (wishlist state stored using local storage).
- **My Account**: Displays account information.
- **Login**: Allows users to login in order to use basket, wishlist and account features.

---

## Security Measures

To ensure data security and protection, the following measures are implemented:

- **HTTPS**: The application is served over HTTPS in production to ensure secure data transmission.
- **Local Storage for Token Management**: User session tokens and expiration data are stored in local storage for session management and route protection.
- **Token Expiry Management**: Tokens are checked for expiration on each protected route. If the token has expired, the user is automatically logged out and redirected to the login page.
- **Route Protection**: Protected routes ensure that only authenticated users can access certain parts of the application. Unauthenticated users or users with expired tokens are redirected to the login page.
- **Input Validation**: Basic input validation is in place to prevent unauthorized access and mitigate common vulnerabilities such as Cross-Site Scripting (XSS).
- **Docker Containerization**: The application is containerized using Docker to isolate and secure the app's environment, ensuring a consistent and secure deployment.

---

## CI/CD and Maintenance

- **Version Control**: Use Git for managing source code and versioning.
- **Continuous Integration (CI)**: Automate testing and build processes to ensure code quality.
- **Continuous Deployment (CD)**: Automate the deployment process for faster feature delivery.
- **Automated Testing**: Defined and implemented unit tests and integration tests to ensure the integrity of the app across different environments.

---

## API Reference

The application fetches data from the following APIs:

- **Users**: `https://dummyjson.com/users`
- **Authentication**: `https://dummyjson.com/docs/auth` for login and token management.
- **Products**: `https://dummyjson.com/products`
- **Categories**: `https://dummyjson.com/products/categories`

---

## Getting Started

### Prerequisites

Ensure you have the following installed:

- **Node.js** (version 14 or above)
- **npm** or **yarn**

### Running the Development Server

To run the app in development mode, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/val2cak/locker.git
   cd locker
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

3. Create a .env.local file in the root directory with your API credentials:

   ```bash
   VITE_BASE_URL='https://dummyjson.com'
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the app in your browser at `http://localhost:5173`

### Environment Variables

    VITE_BASE_URL: Base URL for the API.

---

## Docker Setup

To build and run the app using Docker Compose:

1. Build the Docker image:

   ```bash
   docker-compose build
   ```

2. Start the Docker container:

   ```bash
   docker-compose up
   ```

---

## Building for Production

To create a production-ready build:

```bash
npm run build
```

or

```bash
yarn run build
```
