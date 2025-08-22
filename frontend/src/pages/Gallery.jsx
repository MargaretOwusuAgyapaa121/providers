import React, { useState } from "react";


const mediaItems = [
  
  { type: "image", src: "/assets/image/word/zak.webp", tags: ["Donation"] },
  { type: "image", src: "/assets/image/word/zak8.webp", tags: ["Ministry"] },
  { type: "image", src: "/assets/image/word/gallery.webp", tags: ["Donation"] },
  { type: "image", src: "/assets/image/word/dr5.webp", tags: ["Ministry"] },
  { type: "image", src: "/assets/image/word/gallery1.webp", tags: ["Donation"] },
  { type: "image", src: "/assets/image/word/411A9880.webp", tags: ["Ministry"] },
  { type: "image", src: "/assets/image/word/gallery3.webp", tags: ["Donation"] },
  { type: "image", src: "/assets/image/word/dr5.webp", tags: ["Ministry"] },
  // { type: "image", src: "/assets/image/word/gallery5.webp", tags: ["Minitry"] },
  { type: "image", src: "/assets/image/word/gallery6.webp", tags: ["Ministry"] },
  { type: "image", src: "/assets/image/word/gallery7.webp", tags: ["Ministry"] },
  { type: "image", src: "/assets/image/word/worship5.webp", tags: ["Ministry"] },
  { type: "image", src: "/assets/image/word/worship7.webp", tags: ["Donation"] },
  { type: "image", src: "/assets/image/word/worship9.webp", tags: ["Ministry"] },
  { type: "image", src: "/assets/image/word/zak2.webp", tags: ["Ministry"] },
  { type: "image", src: "/assets/image/word/zak4.webp", tags: ["Donation"] },
  { type: "image", src: "/assets/image/word/zak7.webp", tags: ["Ministry"] },
  { type: "image", src: "/assets/image/word/zak8.webp", tags: ["Ministry"] },
  { type: "image", src: "/assets/image/word/zak9.webp", tags: ["Ministry"] },
  { type: "image", src: "/assets/image/word/gallery2.webp", tags: ["Ministry"] },
  { type: "image", src: "/assets/image/slider9.jpg", tags: ["Ministry"] },
  { type: "image", src: "/assets/image/word/dr5.webp", tags: ["Ministry"] },
  { type: "image", src: "/assets/image/food3.jpg", tags: ["Donation"] },
  { type: "image", src: "/assets/image/slider9.jpg", caption: "Spreading the gosple", tags: ["Ministry"] },
  { type: "video", src: "/assets/image/videos/slavery.mp4", caption: "taking a whole family from slavery", tags: ["Donation"] },
  { type: "image", src: "/assets/image/batism.jpg", caption: "Faith made visible", tags: ["Ministry"] },
  { type: "video", src: "/assets/image/videos/welcome.mp4", caption: "Downtown Vibes", tags: ["City"] },
  { type: "image", src: "/assets/image/ministry4.jpg", caption: "A warm welcome", tags: ["City"] },
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
