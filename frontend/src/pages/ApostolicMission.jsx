import React from "react";


const missions = [
  {
    title: "Village Outreach",
    description:
      "Delivering the gospel, meals, and medical care to underserved communities in remote villages—transforming lives spiritually and physically.",
    image: "/assets/image/food3.jpg",
    date: "June 2025",
    location: "Pakistan"
  },
  {
    title: "Youth Empowerment",
    description:
      "Equipping the next generation with leadership, vision, and faith to carry transformation into their communities.",
    image: "/assets/image/slider1.jpg",
    date: "February 2025",
    location: "Nakpanduri, Ghana"
  },
  {
    title: "Freedom from Debt",
    description:
      "Breaking cycles of bondage by paying off debts for struggling families, giving them hope and a future with dignity.",
    image: "/assets/image/freeslider1.jpg",
    date: "June 2025",
    location: "Pakistan"
  }
];

const ApostolicMissions = () => {
  return (
    <section className="missions2025">
      {/* Header */}
      <div className="missions-header">
        <h1>Apostolic Missions 2025</h1>
        <p>Bringing hope, healing, and faith-driven change across nations.</p>
      </div>

      {/* Mission Cards */}
      <div className="missions-grid">
        {missions.map((item, idx) => (
          <div key={idx} className="mission-card">
            {/* Image */}
            <div className="image-wrapper">
              <img src={item.image} alt={item.title} />
            </div>

            {/* Content */}
            <div className="mission-content">
              <h2>{item.title}</h2>
              <p className="meta">{item.date} • {item.location}</p>
              <p className="desc">{item.description}</p>
              <button className="btn" href="/gallery">Learn More</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ApostolicMissions;
