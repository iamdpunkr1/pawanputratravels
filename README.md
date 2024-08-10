# Pawanputra Tours & Travel Website

Welcome to the Pawanputra Tours & Travel Website! This project is a modern web application built using React, Vite, and TypeScript. It aims to provide users with a seamless experience for exploring and booking travel packages.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Add New Package](#add-new-package)

## Features

- Browse and explore various travel packages.
- Detailed itineraries for each package.
- Responsive design for optimal viewing on different devices.
- Contact form for inquiries.
- User-friendly navigation and interface.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A fast build tool for modern web projects.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **React Router**: For routing and navigation.
- **Hamburger-react**: For the responsive hamburger menu.
- **CSS Modules**: For scoped and modular CSS.

## Installation

To get a local copy up and running, follow these steps:

1. **Clone the repository (or Download as zip):**
    ```sh
    git clone https://github.com/iamdpunkr1/pawanputratravels
    cd pawanputratravels
    ```

2. **Install dependencies:**
    ```sh
    npm install
    ```

## Usage

To start the development server, run:
```sh
npm run dev
```

To create a production build, run:
```sh
npm run build
```

This will create a "dist" folder. Copy the contents of the "dist" folder to your desired server.

## Add New Package

To add a new travel package:

1. Navigate to the data directory:
    ```sh
    cd ./src/data
    ```

2. Inside the data folder, you will find the `tour.ts` file. Add an object with the following properties:

    ```typescript
    {
      slno: string;        // Serial number for the tour
      state: string;       // State or location of the tour
      image: string;       // Image path, imported from the assets folder
      placesCovered: string;  // Summary of places covered
      days: number;        // Number of days for the tour
      nights: number;      // Number of nights for the tour
      itineraryCode: string;  // Unique code for linking the itinerary
    }
    ```

3. Next, go to the `itinerary.ts` file in the same data directory. Add an itinerary object to the itinerary array with the following structure:

    ```typescript
    {
      title: string;       // Title of the itinerary
      duration: string;    // Duration of the tour (e.g., "5 Days / 4 Nights")
      itineraryCode: string;  // Itinerary code to link with the tour
      gForm: string;       // URL of the Google Form for inquiries/booking
      days: [
        {
          day: number;     // Day number
          title: string;   // Title or heading for the day
          description: string;  // Detailed description of the day's activities
        },
        // Add more day objects as needed...
      ]
    }
    ```

