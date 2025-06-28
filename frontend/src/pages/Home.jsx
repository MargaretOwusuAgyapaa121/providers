
import React from "react";

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section with Background Video */}
      <section className="hero-section">
        <video className="hero-video" autoPlay loop muted>
          <source src="/assets/image/videos/pask.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-content">
          <h1 className="hero-title" style={{color:"white"}}>Provider's Missions</h1>
          <p className="hero-subtitle" style={{color:"whitesmoke"}}>
            Empowering communities with faith, service, and purpose in a connected world.
          </p>
          <a href="/about">
          <button className="hero-button">about  us</button>
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <h2 className="section-title">About Provider's Missions</h2>
        <p className="section-text">
          Provider's Mission is a faith-based initiative dedicated to uplifting communities through spiritual growth,
          outreach programs, and compassionate service. Our goal is to create a future grounded in hope,
          unity, and purpose.
        </p>
      </section>

      {/* Core Values */}
      <section className="values-section">
        <h2 className="section-title">Our Core Values</h2>
        <div className="values-grid">
          {["Faith", "Service", "Community"].map((value, idx) => (
            <div key={idx} className="value-card">
              <h3 className="value-title">{value}</h3>
              <p className="value-text">
                We are guided by strong moral values, a spirit of generosity, and a deep commitment to serve.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <h2 className="section-title" style={{color:"white"}}>Be a Part of Something Greater</h2>
        <p className="section-text" style={{color:"whitesmoke"}}>
          Join us in shaping a brighter future with faith and purpose. Discover how you can make an impact.
        </p>
        <a href="/contact">
        <button className="cta-button">Get Involved</button>
        </a>
      </section>
    </div>
  );
};

export default Home;

