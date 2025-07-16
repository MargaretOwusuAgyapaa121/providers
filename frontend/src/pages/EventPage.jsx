import React from "react";


export default function EventPage() {
  return (
    <div className="container">
      <header className="header">
        <h1>word explosion</h1>
        <p className="subtitle">An unforgettable evening of elegance of worship</p>
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
          <li><strong>Date:</strong> 16th - 20th July 2025</li>
          <li><strong>Time:</strong> 6:00pm each night</li>
          <li><strong>Location:</strong> Sunyani Technical University main auditorium, Ghana</li>
          
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
