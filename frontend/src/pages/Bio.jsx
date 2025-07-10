import React from 'react';

const BioPage = () => {
  return (
    <div className="bio-container">
      <div className="bio-card">
        <div className="bio-image-section">
          <img
            src="/assets/image/logo/picture.jpg"
            alt="Rev. Abdul Razak Ibrahim"
            className="bio-image"
          />
        </div>
        <div className="bio-text-section">
          <h1 className="bio-name">Rev. Abdulai Abdul Razak Ibrahim</h1>
          <p className="bio-role">Founder & Lead Pastor</p>

          <section className="bio-section">
            <h2>My Testimony</h2>
            <p>
              I was born into a devout Muslim household but encountered Jesus Christ in 2007 at the Church of Pentecost. That moment changed my life forever, marking the beginning of my journey in Christian ministry.
            </p>
          </section>

          <section className="bio-section">
            <h2>Leadership in My Youth</h2>
            <p>
              In senior high school, I served as the President of the Scripture Union (2008–2009), fostering a deep love for God’s Word. My ministry passion grew stronger during college at Sunyani Polytechnic (now Sunyani Technical University), where I served in the Assemblies of God Campus Ministry as Prayer Secretary (2011–2012) and President (2012–2013).
            </p>
          </section>

          <section className="bio-section">
            <h2>Ministry & Military Service</h2>
            <p>
              Over six years of pastoral ministry have shaped my calling, marked by spiritual leadership, discipleship, and missions. I also served honorably in the U.S. Army, retiring in 2019, which strengthened my leadership and discipline.
            </p>
          </section>

          <section className="bio-section">
            <h2>Education</h2>
            <p>
              I earned my Bachelor’s degree in Biblical and Pastoral Studies from Northpoint Bible College (2023). Currently, I am pursuing a Master of Theological Studies at Boston College to deepen my theological foundation.
            </p>
          </section>

          <section className="bio-section">
            <h2>Current Ministry</h2>
            <p>
              Today, I serve as the Lead Pastor of Glorious Anchor of Life Ministry in Worcester, Massachusetts. My heart is committed to building a Christ-centered, Spirit-filled church focused on prayer, discipleship, and missions.
            </p>
          </section>

          <div className="bio-social-links">
        
            <a href="https://www.instagram.com/abdul_razak_great?igsh=Y2hpajl2bjR4cWp1&utm_source=qr" target="_blank" rel="noreferrer" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.tiktok.com/@bondservant04?_t=ZN-8xlGpT7eXDT&_r=1" target="_blank" rel="noreferrer" aria-label="TikTok">
              <i className="fab fa-tiktok"></i>
            </a>
            <a href="https://www.facebook.com/share/1CUN9Dvn1e/?mibextid=wwXIfr" target="_blank" rel="noreferrer" aria-label="Facebook">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://youtu.be/4nvliE6v7yQ" target="_blank" rel="noreferrer" aria-label="YouTube">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BioPage;
