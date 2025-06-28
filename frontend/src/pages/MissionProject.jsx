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
  }
];

const categories = ["All", ...new Set(projects.map(p => p.category))];

const MissionSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section className="mission-section">

      <div className="container">
        <h2>Global Mission</h2>
        <div className="global-mission">
          <img src="/assets/image/slider9.jpg" alt="" />
          <div className="text-content">
            <h3><a href="/about">Pakistan Crusade</a></h3>
            <p>Reaching beyound borders with communities around the world to share hope, meet tangible needs,
              and uplift lives through faith driven action.
            </p>
            
            <a href="/about" className="read-more">Read More</a>
          </div>
        </div>

        <h3>Local Outreach</h3>
        <div className="outreach">
          {["1"].map((count, i) => (
            <div key={i} className="outreach-card">
              <div className="count">{count}</div>
              <p>We believe ministry starts at home. Our Local Outreach program empowers individual especially our youth
                to serve thier communities with love, faith, and purpose.
              </p>
              <a href="/about" className="read-more white">Read More</a>
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
              <h4><a href="/about">{item.title}</a></h4>
              <p>{item.text}</p>
            </div>
          ))}
        </div>

        <h2>Our Mission Projects</h2>
        <p className="subtitle">Impacting lives across communities through sustainable development</p>

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
                <p>{project.description}</p>
                <span className="project-tag">{project.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
