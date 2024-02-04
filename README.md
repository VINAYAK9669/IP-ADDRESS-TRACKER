# IP Address Tracker 

## Overview

This project is a solution to the [IP address tracker challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0). The goal of the challenge is to create a responsive web application that allows users to view their own IP address on a map and search for information about other IP addresses or domains.

### Features

- View the optimal layout for each page based on the device's screen size.
- Hover states for all interactive elements on the page.
- Display the user's own IP address on the map during the initial page load.
- Search for any IP addresses or domains and view key information and location.

## Demo

- [Live Site](https://vinayak9669.github.io/IP-ADDRESS-TRACKER/)
- [Frontend Mentor Solution URL](https://www.frontendmentor.io/solutions/responsive-ip-address-tracker-using-react-7qcGwTUnCY)

## Built with

- [React-vite](https://reactjs.org/) - JavaScript library for building user interfaces.
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework.
- [Leaflet](https://leafletjs.com/) - An open-source JavaScript library for interactive maps.

## External Free Sources

1. [Ipify Geolocation API](https://www.ipify.org/) - Used to track user IP address and location.
2. [Leaflet library](https://leafletjs.com/) - Integrated for map functionality.

## Challenges Faced

1. **Leaflet Library Integration**: Integrating the Leaflet library posed challenges during deployment. Multiple resources, including official documentation, blogs, and YouTube tutorials, were referenced to overcome these hurdles.

2. **Error Handling for Map**: Handling scenarios where the location data is not available and preventing map errors required careful consideration. Implementing robust error handling for both components was a challenge.

3. **API Key Security**: Protecting the API key was a concern. The solution involved referencing documentation to securely store the API key using a `.env` file.

## ScreenShots
