import React from "react";


const EventPage = () => {
  return (
    <div className="event-page">
      <div className="event-container">
        <h1 className="event-title" style={{ color: "#731399" }}>World Explosion</h1>
        <div className="event-date-location">
          July 16TH  - 20TH, 2025 | Sunyani Technical University, Bono Region, Ghana
        </div>

        <div className="event-flyer">
          <img src="/assets/image/logo/flyer.jpg" alt="Event Flyer" />
        </div>

        <p className="event-description" style={{ color: "black" }}>
          This is not just another gathering, it's a call to rise adversity! World Explosion come to Sunyani Technical University, Bono Region, Ghana, from July 16TH to 20TH, 2025. Join us for a transformative experience filled with powerful sermons, uplifting worship, and community engagement. Together, we will ignite a movement of faith and action that transcends boundaries and brings hope to the world.
        </p>
        

        {/* <div className="rsvp">
          <button className="rsvp-button">RSVP Now</button>
        </div> */}
      </div>
    </div>
  );
};

export default EventPage;
