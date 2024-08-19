# User Profile Creation and Display System

This is a full-stack application for creating and displaying user profiles. The front-end is built with React, and the back-end uses Node.js and Express to interact with a MongoDB database. This project allows users to create profiles and view them, with the ability to sort profiles based on location.

## Table of Contents
1. [Project Structure](#project-structure)
2. [Prerequisites](#prerequisites)
3. [Installation](#installation)
4. [Running the Application](#running-the-application)
5. [API Endpoints](#api-endpoints)
6. [Folder Structure](#folder-structure)
7. [Additional Notes](#additional-notes)

## Project Structure
UserProfileApp/
│
├── backend/
│ ├── models/
│ │ └── profileModel.js
│ ├── routes/
│ │ └── profileRoutes.js
│ ├── server.js
│ └── package.json
│
├── frontend/
│ ├── public/
│ ├── src/
│ │ ├── components/
│ │ │ ├── Header/
│ │ │ ├── ProfileCard/
│ │ │ ├── ProfileForm/
│ │ │ ├── ProfileList/
│ │ │ └── SortDropdown/
│ │ └── App.js
│ └── package.json
│
└── README.md

## Prerequisites

- **Node.js**: Ensure that Node.js is installed on your system. You can download it [here](https://nodejs.org/).
- **MongoDB**: You will need MongoDB installed locally or have access to a MongoDB cloud instance. MongoDB installation guide can be found [here](https://docs.mongodb.com/manual/installation/).
- **npm or yarn**: Make sure you have npm or yarn installed to manage your dependencies.

## Installation

### Backend Setup

1. Navigate to the `backend` directory:
   ```bash
   cd backend

2. Install the necessary dependencies:
   ```bash
   npm install

3. Create a .env file in the backend directory to store environment variables. Add the following content  to your .env file:
   ```env
   MONGO_URI=your_mongodb_connection_string
   PORT=5000

4. Start the backend server:
   ```bash
   npm start

The backend server will run on http://localhost:5000.

### Frontend Setup

1. Navigate to the `frontend` directory:
   ```bash
   cd frontend

2. Install the necessary dependencies:
   ```bash
   npm install

3. Start the frontend server:
   ```bash
   npm start

The frontend server will run on http://localhost:3000.

## Running the Application

1. Backend: Start the backend server from the backend directory:
   ```bash
   npm start

2. Frontend: Start the frontend server from the frontend directory:
   ```bash
   npm start

3. Open your browser and go to http://localhost:3000. You should be able to see the application running.

## API Endpoints

### POST /api/profiles

Description: Creates a new user profile.
Request Body :
    {
    "name": "John Doe",
    "age": 30,
    "location": "New York",
    "profession": "Software Engineer"
    }

Response: A JSON object representing the newly created profile.

### GET /api/profiles

Description: Retrieves all user profiles.
Response: A JSON array of all profiles stored in the MongoDB database.

## Folder Structure
### Backend
    server.js: The entry point of the backend application. It sets up Express and connects to MongoDB.
    models/profileModel.js: Defines the MongoDB schema for user profiles.
    routes/profileRoutes.js: Handles API routes related to profiles.
### Frontend
    src/components/: Contains React components.
        Header/: The header navigation component.
        ProfileCard/: Component to display individual profiles.
        ProfileForm/: Form component for creating profiles.
        ProfileList/: Component that lists and sorts profiles.
        SortDropdown/: Dropdown component for sorting profiles.

## Additional Notes
    ### Database: Ensure MongoDB is running locally or accessible via cloud connection, and update the MONGO_URI in the .env file accordingly.
    ### Routing: The project uses react-router-dom for client-side routing.
    ### Styling: All styles are located in their respective index.css files within each component's folder.
### Sample Data
    You can populate the MongoDB database with dummy profiles for testing purposes by sending POST requests to the /api/profiles endpoint.

## Common Issues
    CORS Errors: If you encounter CORS issues, ensure that you have installed and configured the cors package in your backend. You can add the following to your index.js:
        const cors = require('cors');
        app.use(cors());

    Database Connection: If you face connection issues with MongoDB, ensure that your MONGO_URI is correct and that MongoDB is running.

    Port Conflicts: Ensure that the backend runs on port 5000 and the frontend on port 3000. If these ports are already in use, you can change them in the .env file (backend) and package.json (frontend).

## Conclusion
    This project allows users to create and view profiles in a full-stack application. The project is structured to separate concerns between the frontend and backend, with a clear API and dynamic rendering of profiles in the front-end.