import React from "react";

const missions = [
  {
    title: "Village Outreach",
    description:
      "We bring the gospel, food, and medical aid to underserved villages in remote areas, changing lives spiritually and physically.",
    image: "/assets/image/food3.jpg",
    date: "June 2025",
    location: "Pakistan"
  },
  {
    title: "Youth Evangelism",
    description:
      "Empowering the next generation with bold faith and leadership, our youth missions program trains and sends young believers.",
    image: "/assets/image/slider1.jpg",
    date: "February 2025",
    location: "Nakpanduri, North East Region, Ghana"
  },
  {
    title: "Paying off Debts",
    description:
      "Paying off the debts of struggling families in Pakistan, setting them free from bondage of slavery and giving them a new beginning filled with hope and dignity.",
    image: "/assets/image/freeslider1.jpg",
    date: "June 2025",
    location: "Pakistan"
  }
];

const ApostolicMissions = () => {
  return (
    <section className="apostolic-wrapper">
      {/* Centered Header */}
      <div className="section-header">
        <h1 style={{ color: "#6b0952ffff" }}>Apostolic Missions</h1>
        <p style={{ color: "#302e2eff" }}> Spreading truth, healing, and hope to the nations.</p>
      </div>

      {/* Mission Cards */}
      <div className="missions-container">
        {missions.map((mission, idx) => (
          <div className="mission-card" key={idx}>
            <img src={mission.image} alt={mission.title} />
            <div className="mission-details">
              <h2 style={{ color: "#6b0952ffff" }}>{mission.title}</h2>
              <p className="meta" style={{ color: "#0f0e0e" }}>{mission.date} | {mission.location}</p>
              <p className="desc" style={{ color: "#080808" }}>{mission.description}</p>
              <button className="learn-more">Learn More</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ApostolicMissions;
