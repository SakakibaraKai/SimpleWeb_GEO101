import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    fetch("/data/events.json")
      .then((response) => response.json())
      .then((data) => setEvents(data))
      .catch((error) => console.error("Error loading data:", error));
  }, []);

  const handleEventClick = (event) => {
    setSelectedEvent(event);
  };

  return (
    <div className="timeline-container">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="timeline">
          {events.map((event, index) => (
            <div
              key={index}
              className="timeline-year"
              onClick={() => handleEventClick(event)}
            >
              {event.year}
            </div>
          ))}
        </div>
      </div>

      {/* Homepage */}
      {!selectedEvent && (
        <div className="homepage">
          <h1>Class Name: Geo 101</h1>
          <h2>Assignment: Lab8</h2>
          <p>
            Welcome to the interactive timeline! Select a year from the sidebar
            to explore significant events in Earth's history.
          </p>
        </div>
      )}

      {/* Event Details Panel */}
      {selectedEvent && (
        <div className="details-panel">
          <h2>{selectedEvent.title}</h2>
          <div className="event-meta">
            <span className="event-year">{selectedEvent.year}</span>
            <span className="event-category">{selectedEvent.category}</span>
          </div>
          <div className="event-content">
            <img
              src={selectedEvent.image}
              alt={selectedEvent.title}
              className="event-image"
            />
            <p>{selectedEvent.description}</p>
            <p>
              <strong>Impact:</strong> {selectedEvent.impact}
            </p>
            <a
              href={selectedEvent.readMoreLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn More
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
