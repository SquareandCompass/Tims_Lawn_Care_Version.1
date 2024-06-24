


tims-lawn-care
.
├── backend
│   ├── config
│   │   └── db.js
│   ├── controllers
│   │   ├── appointmentController.js
│   │   └── authController.js
│   ├── middleware
│   │   └── auth.js
│   ├── models
│   │   ├── Appointment.js
│   │   └── User.js
│   ├── package.json
│   ├── package-lock.json
│   ├── routes
│   │   ├── appointments.js
│   │   ├── auth.js
│   │   └── authRoutes.js
│   └── server.js
├── frontend
│   ├── package.json
│   ├── package-lock.json
│   ├── public
│   │   └── index.html
│   ├── README.md
│   └── src
│       ├── api
│       │   └── api.js
│       ├── App.js
│       ├── App.module.css
│       ├── components
│       │   ├── Header.js
│       │   ├── Header.module.css
│       │   └── Login.js
│       ├── index.js
│       ├── pages
│       │   ├── Contact.js
│       │   ├── Contact.module.css
│       │   ├── Home.js
│       │   ├── Home.module.css
│       │   ├── Services.js
│       │   └── Services.module.css
│       └── services
└── README.md


####################################################################################################################################################






# Tim's Lawn Care Version 0.01
## README.md
### Overview
Tim's Lawn Care Version 0.01 is a full-stack application designed to manage lawn care appointments. This document provides instructions on how to create and install all dependencies for both the frontend and backend of the application.

### Table of Contents
1. [﻿Frontend Setup](https://#frontend-setup) 
    - [﻿Prerequisites](https://#prerequisites) 
    - [﻿Installation](https://#installation) 
    - [﻿Running the Application](https://#running-the-application) 
2. [﻿Backend Setup](https://#backend-setup) 
    - [﻿Prerequisites](https://#prerequisites-1) 
    - [﻿Installation](https://#installation-1) 
    - [﻿Running the Application](https://#running-the-application-1) 
3. [﻿API Testing with Postman](https://#api-testing-with-postman) 
4. [﻿Docker Setup](https://#docker-setup) 
## Frontend Setup
### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)
### Installation
1. Clone the repository:git clone https://github.com/yourusername/tims-lawn-care.git
cd tims-lawn-care/frontend
2. Install dependencies:npm install
### Running the Application
1. Start the development server:npm start
2. Open your browser and navigate to `http://localhost:3000` 
## Backend Setup
### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)
- MongoDB
### Installation
1. Navigate to the backend directory:cd tims-lawn-care/backend
2. Install dependencies:npm install
3. Set up environment variables:
    - Create a `.env`  file in the `backend`  directory
    - Add the following variables:MONGO_URI=your_mongodb_connection_string
PORT=5000
### Running the Application
1. Start the server:npm start
2. The backend server will be running on `http://localhost:5000` 
## API Testing with Postman
1. Import the Postman collection:
    - Open Postman
    - Click on `Import`  and select the Postman collection file located in the `postman`  directory of the repository
2. Use the imported collection to test the API endpoints.
## Docker Setup
1. Ensure Docker is installed and running on your machine.
2. Build the Docker images:docker-compose build
3. Start the containers:docker-compose up
4. The frontend will be available at `http://localhost:3000`  and the backend at `http://localhost:5000` 





======================================================================================================================================================================


Step-by-step instructions for setting up and running the server, including installing dependencies and configuring the environment variables.

Navigate to the backend directory:

cd tims-lawn-care/backend

Initialize a new Node.js project (if not already done):
npm init -y

Install the required dependencies:
npm install express mongoose dotenv cors jsonwebtoken bcryptjs

Install development dependencies:
npm install --save-dev nodemon

Create a .env file in the backend directory:
touch .env

Open the .env file and add the following environment variables:
MONGO_URI=mongodb://localhost:27017/tims-lawn-care
JWT_SECRET=your_very_secure_secret_key_here
PORT=5000


Replace the MONGO_URI with your actual MongoDB connection string, set a strong JWT_SECRET, and fill in your Auth0 domain and audience.
Update the package.json file to include start scripts:

"scripts": {
  "start": "node server.js",
  "dev": "nodemon server.js"
}

Ensure all the backend files (server.js, routes, controllers, models, etc.) are in place as provided in the previous response.
To run the server in development mode with auto-restart on file changes:

npm run dev
Or to run in production mode:
npm start

Additional setup steps:
Set up MongoDB:

If you're using a local MongoDB instance, make sure MongoDB is installed and running on your machine.
If you're using a cloud-hosted MongoDB (like MongoDB Atlas), make sure you have created a cluster and obtained the connection string.

Set up Auth0:
Create an Auth0 account if you haven't already.
Set up a new application and API in your Auth0 dashboard.
Configure the allowed callbacks, logout URLs, and web origins in your Auth0 application settings to match your frontend URL (e.g., http://localhost:3000 for development).

Verify your folder structure matches the one provided earlier:
mipsasm
Copy
backend/
├── config/
│   └── db.js
├── controllers/
│   ├── authController.js
│   └── appointmentController.js
├── middleware/
│   └── auth.js
├── models/
│   ├── User.js
│   └── Appointment.js
├── routes/
│   ├── auth.js
│   └── appointments.js
├── .env
├── package.json
└── server.js
Before running the server, make sure your MongoDB instance is running and accessible.
Run the server:

npm run dev

You should see a console message indicating that the server is running on the specified port and that MongoDB has connected successfully.
With these steps completed, your backend server should be set up and ready to run. It will be able to handle authentication via Auth0, 
manage appointments, and interact with the MongoDB database. Make sure to keep your .env file secure and never commit it to version control.