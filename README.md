# SimpleWeb_GEO101
An **interactive timeline** that showcases significant events in Earth's history. Built with React, this project demonstrates basic React functionality, such as state management, dynamic rendering, and simple CSS styling.

---

## Features

- **Homepage**: Displays class and assignment information on the initial load.
- **Sidebar Navigation**: Clickable timeline years to select events.
- **Event Details Panel**: Displays detailed information, including title, year, category, impact, image, and a "Learn More" link.
- **Responsive Design**: Optimized for desktop browsing.

---

## Project Details

- **Class Name**: History of Earth  
- **Assignment**: Interactive Timeline  
- **Time Spent**: Approximately 1 hour  
- **Purpose**: To learn and demonstrate React basics, including fetching data, rendering components dynamically, and applying styles.

---

## Installation & Usage

To run this project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/SimpleWeb_GEO101.git
   cd SimpleWeb_GEO101
   cd geo101
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
4. Visit ```http://localhost:3000``` in your browser to view the app.

## Data Format

The project uses a JSON file to populate the timeline. Each event in the timeline follows this structure:
```
{
  "year": "Event year",
  "title": "Event title",
  "description": "Event description",
  "image": "URL of the event image",
  "category": "Event category",
  "impact": "Event impact",
  "readMoreLink": "URL to learn more"
}
```

