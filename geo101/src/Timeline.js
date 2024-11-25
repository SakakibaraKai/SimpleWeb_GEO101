import React from 'react';

// Array of key events in Earth's history
const events = [
  { time: '4.6 b.y.a.', event: 'Birth of the Solar System and Earth' },
  { time: '4.48 b.y.', event: 'Oldest moon rocks' },
  { time: '4.0 b.y.', event: 'Oldest rocks recognized on Earth' },
  { time: '3.5 b.y.', event: 'Oldest recognizable fossils of single-celled bacteria' },
  { time: '1.5 b.y.', event: 'Oldest recognizable single-celled organisms with nuclei' },
  { time: '1.0 b.y.', event: 'Origin of sexual reproduction' },
  { time: '700 m.y.a.', event: 'First multi-celled animals' },
  { time: '540 m.y.', event: 'First animals with hard shells' },
  { time: '480 m.y.', event: 'First fish' },
  { time: '420 m.y.', event: 'First land plants (invasion of the land begins)' },
  { time: '380 m.y.', event: 'First amphibians' },
  { time: '320 m.y.', event: 'First reptiles' },
  { time: '250 m.y.', event: 'Largest mass extinction in Earth history' },
  { time: '210 m.y.', event: 'First dinosaurs' },
  { time: '160 m.y.', event: 'First birds' },
  { time: '66 m.y.', event: 'Mass extinction, including dinosaurs' },
  { time: '3-4 m.y.', event: 'Early hominids (precursors to modern humans)' },
  { time: '2 m.y.', event: 'Modern Ice Ages begin' },
  { time: '0.010 m.y.', event: 'Advent of agriculture and civilization' }
];

function Timeline() {
  return (
    <div className="timeline">
      <h2>Key Events in Earth's History</h2>
      <ul>
        {events.map((event, index) => (
          <li key={index}>
            <strong>{event.time}</strong>: {event.event}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Timeline;
