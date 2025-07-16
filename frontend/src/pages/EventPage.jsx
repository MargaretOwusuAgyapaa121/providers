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
          src="/image/logo/flyer.png"
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
          This is not just another gathering, it's a divine appointment! Join us for the Word Explosion 2025, where we will delve deep into the Word of God, experience powerful worship, and witness lives transformed by the power of the Holy Spirit. 
          This event is designed to ignite your faith and equip you for greater works in the Kingdom of God.
        </p>
      </section>
    </div>
  );
}
