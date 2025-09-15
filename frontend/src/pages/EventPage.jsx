

import { useState } from "react";

export default function EventsPage() {
  const [lightboxSrc, setLightboxSrc] = useState(null);
  const [isVideo, setIsVideo] = useState(false);

  const upcomingEvents = [
    {
      title: "Pakistan and Azerbaigan Missions",
      date: "June , 2026 ",
      location: "Pakistan and Azerbaigan",
      desc: "Hope, Help, and the Gospel across Nations.",
      flyer: "/assets/image/word/2026.jpg",
      link: "/assets/image/videos/2026.mp4", // 🎥 First video
    },
    {
      title: "Providers Missions",
      date: "LAST SATURDAY OF EVERY MONTH · 1:00 PM – 3:00 PM",
      location: "ON ZOOM",
      flyer: "/assets/image/logo/coun.jpg",
      link: "/assets/image/videos/sch.mp4", // 🎥 Second video
    },
  ];

  const pastEvents = [
    {
      title: "Word Explosion Crusade",
      date: "July, 16-20, 2025",
      flyer: "/assets/image/logo/flyer.jpg",
    },
    {
      title: "Pakistan Mission",
    },
  ];

  const openLightbox = (src, video = false) => {
    setLightboxSrc(src);
    setIsVideo(video);
  };

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
                onClick={() => openLightbox(event.flyer)}
              >
                <img src={event.flyer} alt={event.title} />
                <h3>{event.title}</h3>
              </div>
              <div className="event-content">
                <p className="event-date">{event.date}</p>
                <p className="event-location">{event.location}</p>
                <p className="event-desc">{event.desc}</p>
                {event.link && (
                  <button
                    onClick={() => openLightbox(event.link, true)}
                    className="event-link"
                  >
                    ▶ View Details
                  </button>
                )}
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
                onClick={() => openLightbox(event.flyer)}
              >
                {event.flyer && <img src={event.flyer} alt={event.title} />}
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
          {isVideo ? (
            <video
              src={lightboxSrc}
              controls
              autoPlay
            />
          ) : (
            <img
              src={lightboxSrc}
              alt="Event Flyer"
            />
          )}
        </div>
      )}
    </div>
  );
}
