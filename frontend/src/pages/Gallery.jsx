import React, { useState } from "react";


const mediaItems = [

  { type: "image", src: "/assets/image/word/411A0103.jpg", tags: ["Ministry"] },
  { type: "image", src: "/assets/image/word/411A9335.jpg", tags: ["Ministry"] },
  { type: "image", src: "/assets/image/word/411A9282.jpg", tags: ["Ministry"] },
  { type: "image", src: "/assets/image/word/zak8.jpg", tags: ["Ministry"] },
  { type: "image", src: "/assets/image/word/zak2.jpg", tags: ["Ministry"] },
  { type: "image", src: "/assets/image/word/411A0036.jpg", tags: ["Ministry"] },
  { type: "image", src: "/assets/image/word/411A0107.jpg", tags: ["Ministry"] },
  { type: "image", src: "/assets/image/word/411A0211.jpg", tags: ["Minitry"] },
  { type: "image", src: "/assets/image/word/411A0056.jpg", tags: ["Ministry"] },
  { type: "image", src: "/assets/image/word/411A0073.jpg", tags: ["Ministry"] },
  // { type: "image", src: "/assets/image/word/zak7(1).jpg", tags: ["Ministry"] },
  { type: "image", src: "/assets/image/word/zak.jpg", tags: ["Ministry"] },
  { type: "image", src: "/assets/image/word/411A9678.jpg", tags: ["Ministry"] },
  { type: "image", src: "/assets/image/word/411a9453.jpg", tags: ["Ministry"] },
  { type: "image", src: "/assets/image/word/411A9426.jpg", tags: ["Minisry"] },
  { type: "image", src: "/assets/image/word/411A9416.jpg", tags: ["Ministry"] },
  { type: "image", src: "/assets/image/word/411A9392.jpg", tags: ["Ministry"] },
  { type: "image", src: "/assets/image/word/411A9300.jpg", tags: ["Ministry"] },
  { type: "image", src: "/assets/image/word/411A0073.jpg", tags: ["Ministry"] },
  // { type: "image", src: "/assets/image/411A0135.jpg", tags: ["Ministry"] },
  { type: "image", src: "/assets/image/present4.jpg", tags: ["Ministry"] },
  { type: "image", src: "/assets/image/food3.jpg", tags: ["Donation"] },
  { type: "image", src: "/assets/image/slider9.jpg", caption: "Spreading the gosple", tags: ["Ministry"] },
  { type: "video", src: "/assets/image/videos/slavery.mp4", caption: "taking a whole family from slavery", tags: ["Donation"] },
  { type: "image", src: "/assets/image/batims1.jpg", caption: "Faith made visible", tags: ["Ministry"] },
  { type: "video", src: "/assets/image/videos/welcome.mp4", caption: "Downtown Vibes", tags: ["City"] },
  { type: "image", src: "/assets/image/ministry3.jpg", caption: "A warm welcome", tags: ["City"] },
  { type: "image", src: "/assets/image/batism.jpg", caption: "Made new in Jesus Christ", tags: ["Ministry"] },
  { type: "image", src: "/assets/image/batism2.jpg", caption: "washed in Grace", tags: ["Ministry"] },
  { type: "image", src: "/assets/image/north1.jpg", caption: "A step of faith", tags: ["Ministry"] },
    { type: "image", src: "/assets/image/freeslider1.jpg", caption: "Dept paid, freedom restored", tags: ["Donation"] },
  { type: "image", src: "/assets/image/slider9.jpg", caption: "feeding the needy", tags: ["City"] },
  { type: "video", src: "/assets/image/videos/slavery.mp4", caption: "taking a whole family from slavery", tags: ["Ministry"] },
  { type: "image", src: "/assets/image/slider7.jpg", caption: "", tags: ["Ministry"] },
  { type: "video", src: "/assets/image/videos/pask.mp4", caption: "Downtown Vibes", tags: ["City"] },
  { type: "video", src: "/assets/image/videos/preach.mp4", caption: "Downtown Vibes", tags: ["City"] },
  { type: "image", src: "/assets/image/freeSlider5.jpg", caption: "", tags: ["Ministry"] },
  { type: "image", src: "/assets/image/gallery4.jpg", caption: "", tags: ["Ministry"] },
  { type: "image", src: "/assets/image/slider5.jpg", caption: "", tags: ["Ministry"] },
   { type: "image", src: "/assets/image/ministry.jpg", caption: "", tags: ["Ministry"] }
];

const allTags = ["All", ...new Set(mediaItems.flatMap(item => item.tags))];

const Gallery = () => {
  const [selectedTag, setSelectedTag] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filtered = selectedTag === "All"
    ? mediaItems
    : mediaItems.filter(item => item.tags.includes(selectedTag));

  const open = (idx) => setLightboxIndex(idx);
  const close = () => setLightboxIndex(null);

  return (
    <div className="gallery-wrapper">
      <section className="hero">
        <div className="hero-overlay">
          <h1>/ Our Gallery</h1>
        </div>
      </section>

      <h2 className="gallery-title">Provider Missions Gallery</h2>

      <div className="filter-controls">
        {allTags.map(tag => (
          <button
            key={tag}
            className={selectedTag === tag ? "active" : ""}
            onClick={() => setSelectedTag(tag)}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="gallery-grid">
        {filtered.map((item, idx) => (
          <div className="gallery-item" key={idx} onClick={() => open(idx)}>
            {item.type === "image" ? (
              <img src={item.src} alt={item.caption || "Gallery image"} />
            ) : (
              <video src={item.src} muted autoPlay loop playsInline />
            )}
            <p className="gallery-caption">{item.caption}</p>
          </div>
        ))}
      </div>

      {lightboxIndex !== null && (
        <div className="lightbox-backdrop" onClick={close}>
          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            {filtered[lightboxIndex].type === "image" ? (
              <img src={filtered[lightboxIndex].src} alt="" />
            ) : (
              <video controls autoPlay src={filtered[lightboxIndex].src} />
            )}
            <button className="lightbox-close" onClick={close}>×</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
