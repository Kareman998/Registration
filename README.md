# React + Vite

/////////////////////////////////////////////////////////////////////////////////////////////
Project Name
GoStudent Registration & Booking Form

Description
This project is a responsive and user-friendly registration and booking form for GoStudent, the leading platform for online tutoring. The project was built using Vite, React, and modern front-end technologies. It includes components for header, form handling, and order overview with advanced form validation using React Hook Form and Zod.
 
Project Structure
src  
├── components  
│   ├── Header.jsx  
│   ├── OrderForm.jsx  
│   ├── OrderOverview.jsx  
├── App.jsx  
├── main.jsx  
└── index.css 
----------------------------------------------------
Technologies Used
Vite: For blazing-fast development environment.
React: To build reusable components and manage the UI.
React Hook Form: For handling form state and validation.
Zod: For schema validation and error handling.
tailwindCSS: For responsive and modern styling.
-----------------------------------------------------
Features
Reusable Components:

Header: Displays a title and brief description.
OrderForm: A comprehensive registration form with validation.
OrderOverview: Displays a summary of the order with dynamic options.
--------------------------------------------------------------------------
Form Validation:

Implemented using React Hook Form with Zod validation schema.
Provides real-time feedback for form fields.
Dynamic Data Handling:

Fetches session plans and payment methods from a WordPress REST API.
Responsive Design:

Ensures compatibility across devices with modern CSS.
RTL Support:

Includes right-to-left (RTL) text direction for better accessibility.

--------------------------------------------------
API Integration
The application fetches data dynamically using the following WordPress REST APIs:

Session Plans:
Endpoint: /wp-json/wp/v2/session-plans
Payment Methods:
Endpoint: /wp-json/wp/v2/payment-methods
Ensure your WordPress site has these endpoints configured properly.