# Locker - Product Catalog SPA

This project is a **Single Page Application (SPA)** built with **React**, **TypeScript**, and **Vite**. It showcases a product catalog with advanced filtering, sorting, and pagination features. The app is designed to provide a smooth and responsive user experience across desktop and mobile devices.

## Table of Contents

- [Features](#features)
  - [Nice to Have](#nice-to-have)
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
- **Filtering**: Filter products by category and price range (e.g., $10-$50, $50-$100, $100+).
- **Sorting**: Sort products by price (high-to-low, low-to-high) and name (alphabetically).
- **Search**: Search products by name using an input search bar.
- **Pagination**: Supports pagination to manage large datasets (20 products per page).
- **Product Details**: View product details in a modal upon clicking the "Details" button.

### Nice to Have

- **Cart Functionality**: Add products to a cart (cart state stored using local storage or session).
- **User Authentication**: Differentiate between logged-in and anonymous users with token refresh mechanisms.

---

## Security Measures

To ensure data security and protection:

- Use **HTTPS** for secure data transmission.
- Implement **token-based authentication** (JWT) to protect user sessions.
- Leverage **local storage or session storage** for sensitive user information, using encryption where necessary.
- **Input validation and sanitization** to prevent attacks like **SQL Injection** and **XSS**.

---

## CI/CD and Maintenance

- **Version Control**: Use Git for managing source code and versioning.
- **Continuous Integration (CI)**: Automate testing and build processes to ensure code quality.
- **Continuous Deployment (CD)**: Automate the deployment process for faster feature delivery.
- **Automated Testing**: Define and implement unit tests and integration tests to ensure the integrity of the app across different environments.

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
    yarn build
    ```
