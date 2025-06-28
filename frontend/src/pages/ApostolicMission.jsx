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
    title: "Church Planting",
    description:
      "Paying off the debts of struggling families in pakistan setting them free from bondage of slavery giving them a new beginning filled with hope and dignity.",
    image: "/assets/image/freeslider1.jpg",
    date: "June 2025",
    location: "Pakistan"
  }
];

const ApostolicMissions = () => {
  return (
    <section className="apostolic-wrapper">
      <div className="hero-banner">
        <div className="overlay">
          <h1>Apostolic Missions</h1>
          <p>Spreading truth, healing, and hope to the nations.</p>
        </div>
      </div>

      <div className="missions-container">
        {missions.map((mission, idx) => (
          <div className="mission-card" key={idx}>
            <img src={mission.image} alt={mission.title} />
            <div className="mission-details">
              <h2>{mission.title}</h2>
              <p className="meta">{mission.date} | {mission.location}</p>
              <p className="desc">{mission.description}</p>
              <button className="learn-more">Learn More</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ApostolicMissions;
