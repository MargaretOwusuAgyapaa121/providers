import { useState } from "react";


export default function EventsPage() {
  const [lightboxSrc, setLightboxSrc] = useState(null);

  const upcomingEvents = [
    {
      title: "Pakistan and Azerbaigan Missions",
      date: "June , 2026 ",
      location: "Pakistan and Azerbaigan",
      desc: "Hope, Help, and the Gosple across Nations.",
      flyer: "/assets/image/word/2026.jpg",
      // link: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID",
    },
    {
      title: "providers Missions",
      // date: "July 14, 2025 · 10AM",
      // location: "Convention Center, San Francisco",
      // desc: "A gathering of tech leaders shaping the future.",
      // flyer: "/assets/events/flyer2.jpg",
      // link: "/flyers/techsummit.pdf",
    },
  ];

  const pastEvents = [
    {
      title: "Word Explosion Crusade",
      date: "July, 16-20, 2025",
      flyer: "/assets/image/logo/flyer.jpg",
      // link: "/gallery/winter-gala",
    },
    {
      title: "pakistan Mission",
      // date: "October 5, 2024",
      // flyer: "/assets/events/past2.jpg",
      // link: "/gallery/art-expo",
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="hero">
        <div className="hero-overlay">
          <h1>Our Events</h1>
          <p>Experience unforgettable moments with us</p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="upcoming" style={{ padding: "4rem 2rem" }}>
        <h2 className="section-title">Upcoming Events</h2>
        <div className="event-grid">
          {upcomingEvents.map((event, idx) => (
            <div key={idx} className="event-card">
              <div
                className="event-image"
                onClick={() => setLightboxSrc(event.flyer)}
              >
                <img src={event.flyer} alt={event.title} />
                <h3>{event.title}</h3>
              </div>
              <div className="event-content">
                <p className="event-date">{event.date}</p>
                <p className="event-location">{event.location}</p>
                <p className="event-desc">{event.desc}</p>
                <a
                  href={event.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="event-link"
                >
                  View Details
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Past Events */}
      <section
        className="past"
        style={{ padding: "4rem 2rem", borderTop: "1px solid #eee" }}
      >
        <h2 className="section-title">Past Events</h2>
        <div className="event-grid">
          {pastEvents.map((event, idx) => (
            <div key={idx} className="event-card">
              <div
                className="event-image"
                onClick={() => setLightboxSrc(event.flyer)}
              >
                <img src={event.flyer} alt={event.title} />
                <h3>{event.title}</h3>
              </div>
              <div className="event-content">
                <p className="event-date">{event.date}</p>
                <a href="/gallery" className="event-link">
                  View Gallery
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxSrc && (
        <div className="lightbox active" onClick={() => setLightboxSrc(null)}>
          <span className="lightbox-close" onClick={() => setLightboxSrc(null)}>
            &times;
          </span>
          <img src={lightboxSrc} alt="Event Flyer" />
        </div>
      )}
    </div>
  );
}
