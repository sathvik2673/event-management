import React from 'react';
import event1 from '../assets/event1.jpg';
import event2 from '../assets/event2.jpg';
import event3 from '../assets/event3.jpg';

const events = [
  { img: event1, title: 'Wedding Bash', desc: 'A grand wedding celebration in Jaipur.' },
  { img: event2, title: 'Corporate Meetup', desc: 'Annual business networking meetup.' },
  { img: event3, title: 'Birthday Party', desc: 'Fun and colorful birthday celebration.' },
];

const Events = () => (
  <div className="events">
    <h2>Past Events</h2>
    <div className="event-grid">
      {events.map((event, i) => (
        <div key={i} className="event-card">
          <img src={event.img} alt={event.title} />
          <h3>{event.title}</h3>
          <p>{event.desc}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Events;
