# Country Info App

The Country Info App provides information about countries, including available countries, country details, and flag images. This README guides you through setting up, running, and testing the application.

## Project Overview

The project is divided into two parts:

### Backend

- **Tech Stack:** Node.js (Express.js)

- **Endpoints:**

  1. **Get Available Countries** `/api/countries/available`

     - Fetches a list of available countries.

  2. **Get Country Info** `/api/countries/info/BR`

     - Retrieves detailed information about a specific country, including border countries, population data, and flag URL.

### Frontend

- **Tech Stack:** React.js (Next.js preferred)

- **Features:**

  1. **Country List Page**

     - Displays a list of countries. Each country name links to the Country Info Page.

  2. **Country Info Page**

     - Shows detailed information about a selected country, including country name, flag, border countries, and a population chart.

## Installation and Setup

### Backend Setup

1. **Clone the Repository**

   ```bash
   git clone https://github.com/sans-script/country-info-app.git
   ```

2. **Navigate to the Backend Directory**

   From the root directory of the project:

   ```bash
   cd backend
   ```

   If you are in your home directory, use the following command:

   ```bash
   cd country-info-app/backend
   ```

3. **Install Dependencies**

   ```bash
   npm install
   ```

4. **Setting up the `.env` File**

   Create a `.env` file in the `backend` directory with the following content:

   ```
   PORT=5000
   ORIGIN=http://localhost:3000
   HOST=0.0.0.0
   BASE_URL=https://date.nager.at/api/v3
   POPULATION_URL=https://countriesnow.space/api/v0.1/countries/population
   FLAG_URL=https://countriesnow.space/api/v0.1/countries/flag/images
   ```

5. **Start the Backend Server**

   ```bash
   npm start
   ```

   The backend server will run on port 5000.

### Frontend Setup

1. **Navigate to the Frontend Directory**

   From the root directory of the project:

   ```bash
   cd frontend
   ```

   If you are in your home directory, use the following command:

   ```bash
   cd country-info-app/frontend
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Setting up the `.env` File**

   Create a `.env` file in the `frontend` directory with the following content:

   ```
   NEXT_PUBLIC_API_URL=http://localhost:5000/api
   ```

4. **Start the Frontend Server**

   ```bash
   npm run dev
   ```

   The frontend server will run on port 3000.

## Running the Application

1. **Start the Backend Server**

   Follow the [Backend Setup](#backend-setup) steps.

2. **Start the Frontend Server**

   Follow the [Frontend Setup](#frontend-setup) steps.

3. **Access the Application**

   Open a web browser and go to `http://localhost:3000`.

## Environment Variables

### Backend

- `PORT`: Port for the backend server.
- `ORIGIN`: Origin URL for CORS configuration.
- `HOST`: Host for the server.
- `BASE_URL`: Base URL for fetching available countries.
- `POPULATION_URL`: URL for fetching population data.
- `FLAG_URL`: URL for fetching flag images.

### Frontend

- `NEXT_PUBLIC_API_URL`: Base URL for fetching data from the backend.

Ensure these environment variables are set correctly in their respective `.env` files.
