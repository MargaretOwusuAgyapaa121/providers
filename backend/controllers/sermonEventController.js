const db = require("../models/db");
const path = require("path");

exports.getAll = (req, res) => {
  db.query("SELECT * FROM sermons_events ORDER BY created_at DESC", (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

exports.create = (req, res) => {
  const { text } = req.body;
  const file = req.file;

  const fileUrl = file ? `/uploads/${file.filename}` : null;
  const fileType = file ? file.mimetype : null;

  db.query(
    "INSERT INTO sermons_events (text, fileUrl, fileType, created_at) VALUES (?, ?, ?, NOW())",
    [text, fileUrl, fileType],
    (err, result) => {
      if (err) return res.status(500).json({ error: err.message });

      res.status(201).json({
        id: result.insertId,
        text,
        fileUrl,
        fileType,
        created_at: new Date(),
      });
    }
  );
};

exports.delete = (req, res) => {
  const { id } = req.params;

  db.query("DELETE FROM sermons_events WHERE id = ?", [id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json({ message: "Deleted successfully" });
  });
};
