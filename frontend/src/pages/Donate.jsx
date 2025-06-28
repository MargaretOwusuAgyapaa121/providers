import React from "react";


const Donate = () => {
  return (
    <div className="donate-container">
      {/* Hero Section */}
      <section className="donate-hero">
        <div className="hero-overlay">
          <h1>Support the Mission of Hope</h1>
          <p>
            Every seed you sow empowers lives, builds futures, and transforms
            communities. Let’s make a difference together in 2025 and beyond.
          </p>
          <a href="#donate-info" className="hero-button">Donate Now</a>
        </div>
      </section>

      {/* Donation Section */}
      <section className="donate-section" id="donate-info">
        <div className="donate-grid">
          {/* Left: Flyer */}
          <div className="flyer-container">
            <img
              src="/assets/image/logo/donation.jpg"
              alt="Donation Flyer"
              className="flyer-image"
            />
          </div>

          {/* Right: Donation Info */}
          <div className="donate-details">
            <h2>Donation Options</h2>
            <ul>
              <li><strong>Paypal:</strong>Paypal.me/ providersmissions</li>
              {/* <li><strong>Account No:</strong> 0193921100001</li> */}
              <li><strong>Account Name:</strong> Ernest C Deryy</li>
              <li><strong>Mobile Money (MTN):</strong> 0243 225 166</li>
              <li><strong>Reference:</strong> Tithe / Offering / Donate</li>
            </ul>
            <p className="note">* Kindly use the correct reference when donating.</p>
            <a href="https://wa.me/+15082026458" className="whatsapp-link" target="_blank" rel="noopener noreferrer">💬 Chat Us on WhatsApp</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donate;
