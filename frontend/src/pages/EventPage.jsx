import React from "react";


export default function EventPage() {
  return (
    <div className="container">
      <header className="header">
        <h1>Classic 2025 Gala</h1>
        <p className="subtitle">An unforgettable evening of elegance and celebration</p>
      </header>

      <section className="flyer">
        <img
          src="https://via.placeholder.com/700x400.png?text=Classic+2025+Gala+Flyer"
          alt="Classic 2025 Gala Flyer"
        />
      </section>

      <section className="event-details">
        <h2>Event Details</h2>
        <ul>
          <li><strong>Date:</strong> December 31, 2025</li>
          <li><strong>Time:</strong> 7:00 PM – 1:00 AM</li>
          <li><strong>Location:</strong> Grand Heritage Hall, New York City</li>
          <li><strong>Dress Code:</strong> Formal Attire</li>
        </ul>
      </section>

      <section className="description">
        <h2>About the Event</h2>
        <p>
          Join us for the Classic 2025 Gala, a night of sophistication featuring live music,
          gourmet dining, and a midnight champagne toast. Ring in the new year surrounded by
          timeless charm and good company.
        </p>
      </section>
    </div>
  );
}
