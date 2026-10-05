# Trips.io - Travel Itinerary Planner

This project is a statically hosted web application (designed for GitHub Pages) that allows you to manage and view travel itineraries. It is built using Vue 3 (via CDN) without any build steps.

## Project Structure

The project separates UI logic from data:
- `js/trip/` - Contains the application logic (Vue app, state management, map logic).
- `assets/` - Contains stylesheets and images.
- `data/` - Contains all trip-specific data and the main registry of trips.
- `trip.html` - The generic viewer for any trip.
- `index.html` - The homepage listing all available trips.

## How to Add a New Country Plan

To add a new trip (e.g., Japan, with ID `jp`), follow these steps:

### 1. Create a New Data Folder
Create a new folder inside the `data/` directory named after your trip ID (e.g., `data/jp/`). You can copy the contents of an existing folder like `data/nz/` to use as a template.

### 2. Create the Required Data Files
Inside your new folder (e.g., `data/jp/`), you need to create/modify the following 5 files:

*   **`index.js`**: The main configuration file for the trip.
    ```javascript
    import { days } from './days.js';
    import { places } from './places.js';
    import { summary } from './summary.js';
    import { checklist } from './checklist.js';

    export const tripData = {
        id: 'jp',
        title: 'Japan Trip',
        days: days,
        places: places,
        summary: summary,
        checklist: checklist
    };
    ```

*   **`days.js`**: Contains the day-by-day itinerary.
    ```javascript
    export const days = [
        {
            day: 1,
            date: '2025-04-01',
            title: 'Arrival in Tokyo',
            activities: [
                { time: '14:00', description: 'Land at Narita Airport', locationId: 'nrt' }
            ]
        }
    ];
    ```

*   **`places.js`**: Contains geographical data for maps and locations.
    ```javascript
    export const places = {
        nrt: { name: 'Narita Airport', lat: 35.771986, lng: 140.392850 }
    };
    ```

*   **`summary.js`**: Contains high-level summary info (budget, highlights, etc.).
    ```javascript
    export const summary = {
        totalDays: 14,
        budget: 'Moderate'
    };
    ```

*   **`checklist.js`**: Contains packing and preparation lists.
    ```javascript
    export const checklist = [
        { category: 'Documents', items: ['Passport', 'Visa'] }
    ];
    ```

### 3. Register the New Trip
Open `data/trips.js` and add your new trip to the list so it appears on the homepage.

```javascript
export const trips = [
    {
        id: 'nz',
        title: 'New Zealand',
        description: 'South Island Roadtrip',
        url: 'trip.html?trip=nz' // URL format for the generic viewer
    },
    {
        id: 'jp',
        title: 'Japan',
        description: 'Spring Cherry Blossoms',
        url: 'trip.html?trip=jp'
    }
];
```

Once these steps are completed, your new trip will be visible on the homepage and accessible via the generic trip viewer! You can test it locally by running a static server, or simply push to GitHub Pages.
