# Ecommerce Web Application with Springboot, Angular, Keycloak, and MySQL

## Overview

This repository contains the source code for an E-commerce web application built using SpringBoot for the backend, Angular for the frontend, Keycloak for authentication and authorization, and MySQL for the database. The application is specifically tailored for an online bookstore.

## Features

- **User Authentication**: Utilizes Keycloak for secure user authentication and authorization.
- **Product Management**: Allows administrators to manage products, including adding, updating, and deleting products.
- **Shopping Cart**: Users can browse products, add them to a shopping cart, and proceed to checkout.
- **Order Management**: Supports order creation, tracking, and history for users.
- **RESTful APIs**: Backend services are exposed via RESTful APIs, providing flexibility for future enhancements or integrations.

## Technologies Used

- **SpringBoot**: Java-based framework for building backend services.
- **Angular**: TypeScript-based framework for building dynamic web applications.
- **Keycloak**: Open-source Identity and Access Management solution for securing applications and services.
- **MySQL**: Relational database management system for data storage.
- **Angular Material**: Material Design components for Angular applications.
- **Bootstrap**: Frontend framework for responsive design.

## Images
![image](https://github.com/jhenals/ecommerce-frontend-angular-v1/assets/77573528/4d7a522e-fab8-4e7f-be54-d776a9b426fc)
![image](https://github.com/jhenals/ecommerce-frontend-angular-v1/assets/77573528/74a06461-9da8-496d-848f-3f22765bfb4b)
![image](https://github.com/jhenals/ecommerce-frontend-angular-v1/assets/77573528/e0205707-6aaa-4757-b672-cd4783937d90)
![image](https://github.com/jhenals/ecommerce-frontend-angular-v1/assets/77573528/44fcf2b1-55e6-4d57-a4c4-a9ffc23fad52)



## Prerequisites

Before running the application, ensure you have the following installed:

- Java Development Kit (JDK)
- Node.js and npm
- Angular CLI
- MySQL Server
- Keycloak Server

## Installation

1. Clone the frontend repository:

   ```bash
   git clone https://github.com/jhenals/ecommerce-frontend-angular-v1.git
   ```

2. Clone the backend repository:

  ```bash
   git clone https://github.com/jhenals/ecommerce-backend-springboot-v1.git
   ```

3. Navigate to the backend directory and run the SpringBoot application:

   ```bash
   cd <YOUR_PATH>\ecommerce-backend
   ./mvnw spring-boot:run
   ```

4. Navigate to the frontend directory and install dependencies:

   ```bash
   cd <YOUR_PATH>\ecommerce-frontend
   npm install
   ```

5. Run the Angular application:

   ```bash
   npm start
   ```

6. Navigate to Keycloak directory and run Keycloak Server:

   ```bash
   cd <YOUR_PATH>\bin
   kc.bat start-dev
   ```

7. Access the application in your web browser at `http://localhost:4200`.

## Configuration

1. Configure MySQL database connection settings and Keycloak settings in `application.properties` file located in the `backend/src/main/resources` directory.

2. Configure Keycloak settings in the Angular environment files located in the `ecommerce-frontend\environment.ts` file.

## Usage

- Visit `http://localhost:4200` in your web browser to access the application.
- Use the provided login interface to authenticate. You can use the default admin credentials for testing or create a new account.
- Navigate through the bookstore, add products to your cart, and complete the checkout process.
---


