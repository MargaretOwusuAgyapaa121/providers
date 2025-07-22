import React from 'react';


export default function OurStory() {
  return (
    <div className="ourstory-container">

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay">
          <h1>/ Our Stoty</h1>
        </div>
      </section>  
  

      {/* Story Paragraph Section */}
      <section className="story-section">
        <h2>A Beautiful Beginning</h2>
        <p>
          In the year 2022 <span className="highlight">Providers Missions</span> was established with a heart for compassion
          to share the gosple of Jesus Christ. What began as a simple act of faith has grown into a global mission,
          preaching, giving, and transforming lives.
        </p>
        <p className="italic">
          Today, we continue to walk boldly in faith, embracing our past while shaping a future filled with hope, outreach, and spiritual depth.
        </p>
      </section>

      {/* Our Logo Section */}
      <section className="logo-section">
        <h2>Our Logo</h2>
        <div className="logo-container">
          <img
            src="/assets/image/logo/logo-bg.png"
            alt="Provided Machines Logo"
          />
        </div>
        <p>
          Our logo is rich with meaning a cross, globe and a dove, each symbolizing a key part of our mission.
          <span style={{color:"purple", fontWeight:"bold"}}> The cross </span> stand for the love and sacrifice of Jesus Christ. <span style={{color:"purple", fontWeight:"bold"}}>The globe</span> beneath it reflect our commitment
          to reach the world with gosple, and <span style={{color:"purple", fontWeight:"bold"}}> the dove </span> gently soaring to the side, represent peace, the Holy Spirit,
          and the purity of our mission.
          Together, they form a powerful image of faith in action.       </p>
      </section>
       <section className="contact-section">
        <div>
          <h2 style={{color:"black"}}>Get in Touch</h2>
          <p style={{color:"black"}}>Don’t hesitate to contact us. These are various ways to contact Providers Missions.</p>
        </div>

        <div className="contact-grid">
          <div className="contact-card">
            <div className="contact-details">
              <p><strong>Call:</strong>+5108 202 6458 / +1(774) 994-4723</p>
              <p><strong>Email:</strong> contact@providersmachines.org</p>
              {/* <p><strong>Website:</strong> www.providedmachines.org</p> */}
              <p><strong>Location:</strong>173 Grove Street Worcester MA 01605</p>
            </div>
          </div>

          <div className="contact-button">
            <button >Contact Us</button>
            <p style={{color:"black"}}>Click the button for details on visiting Providers Missions, including Sunday service time and duration.</p>
          </div>
        </div>
      </section>
    </div>
  );
}