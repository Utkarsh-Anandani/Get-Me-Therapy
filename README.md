# Frontend Development Intern Task 1

> **Warning:** Please view the site on a mobile device or using the inspect responsiveness tool set to phone settings, as the design provided for the task was for mobile devices and could'nt be converted for a large device.

## Features

### 1. Authentication
- **Login and Register**: Implemented using Node.js, Express, and MongoDB.
- **Security**: Authentication handled using JWT, and passwords are securely hashed using bcryptjs.

### 2. Tracking Screen
- **Analog Clock**: Created using `react-clock`, customized to run anticlockwise and display a countdown timer.
- **Speed Control**: A slider to adjust the speed of the clock's hands.
- **Sharable URL**: Unique URLs are generated using `uuid` to share the current state of the clock and slider settings.
- **Quotes**: Fetching quotes from the API Ninja Quotes API to display on the screen.

## Implementation Details

### Backend

- **Node.js and Express**: The backend server handles user authentication and registration.
- **MongoDB**: User data is stored in MongoDB.
- **JWT**: JSON Web Tokens are used to manage user sessions securely.
- **bcryptjs**: Passwords are hashed before storing them in the database to enhance security.

### Frontend

- **React**: The frontend is built using React.
- **Tailwind**: The designing part of app is done with Tailwind CSS.
- **react-clock**: Used for the analog clock component.
- **react-router-dom**: Used for client-side routing.
- **API Ninja Quotes**: Integrated to fetch and display random quotes.

## How to Run the Project

### Backend

1. **Install Dependencies**:
   ```bash
   cd backend
   npm install
2. **Run Server**:
   ```bash
   nodemon index.js

 ### Frontend

 1. **Install Dependencies**:
   ```bash
   cd backend
   npm install
```
2. **Run client**:
   ```bash
   npm run dev
 
 
