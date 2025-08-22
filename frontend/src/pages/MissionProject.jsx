import React, { useState } from "react";

const projects = [
  {
    title: "Paying Off Debts",
    image: "/assets/image/freeslider1.jpg",
    description: "Free families from modern slavery by clearing their debts.",
    category: "Relief",
  },
  {
    title: "Feeding the Hungry",
    image: "/assets/image/food3.jpg",
    description: "Delivering food supplies to underserved communities.",
    category: "Relief",
  },
  {
    title: "Education for All",
    image: "/assets/image/slider1.jpg",
    description: "Empowering children with quality education and resources.",
    category: "Education",
  },
];

const categories = ["All", ...new Set(projects.map((p) => p.category))];

const MissionSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section className="mission-section">
      <h2 className="section-title">Global Mission</h2>
      <div className="global-mission">
        {/* Embedded YouTube Video replaces the image */}
        <div class="video-wrapper">
          <iframe
            src="https://www.youtube.com/embed/Ws0U3CIooh0"
            title="Global Mission - Pakistan Crusade"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>

        <div className="text-content">
          <h3>
            <a href="/about">Word Explosion Crusade</a>
          </h3>
          <p className="subtitle">
            Reaching beyond borders with communities around the world to share
            hope, meet tangible needs, and uplift lives through faith-driven
            action.
          </p>

          <p className="program-info">
            Experience the full program with powerful worship, testimonies, and
            faith-filled messages that are transforming lives across nations.
          </p>

          <a href="/events" className="read-more">
            Read More
          </a>
        </div>
      </div>

      {/* <div className="container" style={{"backgroundColor":"white"}}> */}
      <section className="mission-section">
        <h2 className="mission-title">🌍 Pakistan Mission</h2>

        <div className="mission-showcase">
          <div className="mission-image">
            <img src="/assets/image/slider9.jpg" alt="Pakistan Crusade" />
          </div>

          <div className="mission-details">
            <h3 className="mission-subtitle">
              <a href="/about">Pakistan Crusade</a>
            </h3>
            <p className="mission-description">
              The Pakistan Crusade stands as a powerful movement of faith and
              compassion, reaching hearts and transforming lives across
              communities in need. Through this mission, we not only share a
              message of hope but also extend tangible support—providing food,
              healthcare, and essential resources to uplift those facing
              hardship. None of this would be possible without the generosity of
              our donation partners, whose commitment and sacrifice fuel every
              step we take. Together, we are bridging borders, breaking
              barriers, and building a brighter future rooted in faith-driven
              action.
            </p>

            <a href="/gallery" className="mission-button">
              Discover More
            </a>
          </div>
        </div>
      </section>

      <h3>Local Outreach</h3>
      <div className="outreach">
        {["1"].map((count, i) => (
          <div key={i} className="outreach-card">
            <div className="count">{count}</div>
            <p className="subtitle">
              We believe ministry starts at home. Our Local Outreach program
              empowers individual especially our youth to serve thier
              communities with love, faith, and purpose.
            </p>
            <a href="/about" className="read-more white">
              Read More
            </a>
          </div>
        ))}
      </div>

      <h3>International Mission</h3>
      <div className="international">
        {[
          {
            img: "/assets/image/slider7.jpg",

            text: "Supporting communities with sustainable development initiatives.",
          },
          {
            img: "/assets/image/slider4.jpg",

            text: "Delivering education and aid to children globally.",
          },
          {
            img: "/assets/image/slider8.jpg",

            text: "Providing medical aid and shelter to crisis zones.",
          },
        ].map((item, idx) => (
          <div className="intl-card" key={idx}>
            <img src={item.img} alt="" />
            <h4>
              <a href="/about">{item.title}</a>
            </h4>
            <p style={{ color: "gray" }}>{item.text}</p>
          </div>
        ))}
      </div>

      <h2>Our Mission Projects</h2>
      <p className="subtitle">
        Impacting lives across communities through sustainable development
      </p>

      <div className="filter-buttons">
        {categories.map((cat) => (
          <button
            key={cat}
            className={cat === selectedCategory ? "active" : ""}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project, idx) => (
          <div className="project-card" key={idx}>
            <img src={project.image} alt={project.title} />
            <div className="project-content">
              <h3>{project.title}</h3>
              <p style={{ color: "gray" }}>{project.description}</p>
              <span className="project-tag">{project.category}</span>
            </div>
          </div>
        ))}
      </div>
      {/* </div> */}
    </section>
  );
};

export default MissionSection;
