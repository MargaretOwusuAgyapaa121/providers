import React from 'react';

export default function AboutUsComponent() {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay">
          <h1>/ AboutUs</h1>
        </div>
      </section>

      

      {/* About Us Section */}
      <section className="about-section">
        <img src="/assets/image/abtBg.jpg" alt="Bishop" />
        <div className="about-text">
          <h2>About Us</h2>
          <p>
            We are committed to embodying God's love and teaching. We strive to become stronger Christians through prayer, study, service, and donations.
          </p>
          <p>
            Welcome to Provider Missions a place of worship, community, and spiritual growth. A glimpse of heaven with glowing love and a study Bible at heart.
          </p>
          <p className="founder">Founder & Leader: Rev. Abdulai  Razark Ibrahim</p>
        </div>
      </section>

      {/* Our Belief Section */}
      <section className="text-section">
        <h2>Our Belief</h2>
        <p>
           At Providers Missions, we believe in the life changing power of the gosple and the unshakable
           truth of God's Word. We're driven by Great Commision to share Jesus, make disciples, and love people 
           deeply. Led by the Holy Spirit, webuild strong churches, raise bold leaders, and bring hope where it's needed most.
           United in Christ, we shine His light to the world may knowHis Love.
        </p>
      </section>

      {/* Our Mission Section */}
      <section className="text-section">
        <h2>Our Mission</h2>
        <p>
          Providers Missions is committed to creating a welcoming and nurturing environment where people from all walks of life can come together to experience God's love and purpose. Through worship, community outreach, education, and fellowship, we live our mission daily.
        </p>
      </section>

      {/* Video Section */}
      <section className="video-section">
        <h2>Message from the Bishop</h2>
        <a
          href="https://youtu.be/Qb4zUqCE1fY?si=f_eCoUOBJ3yuqUX0"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>Watch Video</button>
        </a>
      </section>

      {/* Get in Touch Section */}
      <section className="contact-section">
        <div>
          <h2 style={{ color: 'black' }}>Get in Touch</h2>
          <p style={{ color: 'black' }}>Don’t hesitate to contact us. These are various ways to contact Provided Machines.</p>
        </div>

        <div className="contact-grid">
          <div className="contact-card">
            <div className="contact-details">
              <p><strong>Call:</strong> +(1774)994-4723</p>
              {/* <p><strong>Email:</strong> contact@providedmachines.org</p> */}
              <p><strong>Website:</strong> www.providedmachines.org</p>
              <p><strong>Location:</strong>173 Grove Street Worcester MA 01605</p>
            </div>
          </div>

          <div className="contact-button">
            <a href="/contact">
            <button>Contact Us</button>
            </a>
            <p style={{ color: 'black' }}>Click the button for details on visiting Providers Missions, including Sunday service time and duration.</p>
          </div>
        </div>
      </section>
    </div>
  );
}