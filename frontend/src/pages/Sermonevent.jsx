import React, { useEffect, useState } from "react";

const SermonAndEventPage = () => {
  const [items, setItems] = useState([]);
  const [text, setText] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");
  const isBishop = localStorage.getItem("bishop") === "true";

  const API_URL = "https://providers-67no.onrender.com"; // Update with your actual API URL

  const fetchItems = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/api/sermons-events`);
      const data = await res.json();
      setItems(data);
    } catch (err) {
      console.error("Error fetching items:", err);
      setMessage("Failed to load sermons.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!text.trim() && !file) {
      setMessage("Please provide a description or media file.");
      return;
    }

    const formData = new FormData();
    formData.append("text", text);
    if (file) formData.append("file", file);

    setUploading(true);
    setMessage("");

    try {
      const res = await fetch(`${API_URL}/api/sermons-events`, {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.error || "Upload failed");
      }

      setText("");
      setFile(null);
      setMessage("Sermon posted successfully.");
      fetchItems();
    } catch (err) {
      console.error("Upload failed:", err);
      setMessage("Upload failed. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this post?")) return;

    try {
      const res = await fetch(`${API_URL}/api/sermons-events/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.error || "Delete failed");
      }

      setMessage("Post deleted successfully.");
      fetchItems();
    } catch (err) {
      console.error("Delete failed:", err);
      setMessage("Failed to delete post.");
    }
  };

  return (
    <div className="sermon-event-page">
      <h2>Sermons and Events</h2>

      {isBishop && (
        <form onSubmit={handleUpload} encType="multipart/form-data" style={{ marginBottom: "1rem" }}>
          <textarea
            placeholder="Enter description..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows={4}
            style={{ width: "100%", marginBottom: "0.5rem" }}
          />
          <input
            type="file"
            accept="audio/*,video/*"
            onChange={(e) => setFile(e.target.files[0])}
            style={{ marginBottom: "0.5rem" }}
          />
          <button type="submit" disabled={uploading}>
            {uploading ? "Posting..." : "Post"}
          </button>
        </form>
      )}

      {message && <p style={{ color: message.toLowerCase().includes("fail") ? "red" : "green" }}>{message}</p>}

      {loading ? (
        <p>Loading sermons and events...</p>
      ) : (
        <div className="item-list">
          {items.length > 0 ? (
            items.map((item) => (
              <div
                key={item.id}
                className="item"
                style={{ border: "1px solid #ccc", padding: "1rem", marginBottom: "1rem" }}
              >
                <p>{item.text}</p>

                {item.fileUrl && item.fileType?.startsWith("video") && (
                  <video controls width="100%" src={`${API_URL}${item.fileUrl}`} />
                )}

                {item.fileUrl && item.fileType?.startsWith("audio") && (
                  <audio controls src={`${API_URL}${item.fileUrl}`} />
                )}

                {!item.fileUrl && <p>(No media attached)</p>}

                {item.created_at && (
                  <small style={{ display: "block", marginTop: "0.5rem", color: "#777" }}>
                    Posted: {new Date(item.created_at).toLocaleString()}
                  </small>
                )}

                {isBishop && (
                  <button
                    onClick={() => handleDelete(item.id)}
                    style={{ marginTop: "0.5rem", background: "red", color: "#fff" }}
                  >
                    Delete
                  </button>
                )}
              </div>
            ))
          ) : (
            <p>No sermons or events found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default SermonAndEventPage;
