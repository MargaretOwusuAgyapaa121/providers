import { db } from '../config/db.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get current directory for resolving file paths
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Fetch latest 10 sermons/events
export const getSermons = async (req, res) => {
  try {
    const [rows] = await db.query(
      'SELECT * FROM sermons_events ORDER BY created_at DESC LIMIT 10'
    );
    res.json(rows);
  } catch (err) {
    console.error("Error fetching sermons:", err);
    res.status(500).json({ error: 'Failed to fetch sermons.' });
  }
};

// Post a new sermon/event with optional file
export const postSermon = async (req, res) => {
  try {
    const { text } = req.body;
    let fileUrl = null;
    let fileType = null;

    if (req.file) {
      fileUrl = `/uploads/${req.file.filename}`;
      fileType = req.file.mimetype;
    }

    await db.query(
      'INSERT INTO sermons_events (text, fileUrl, fileType) VALUES (?, ?, ?)',
      [text, fileUrl, fileType]
    );

    res.json({ message: 'Posted successfully.' });
  } catch (err) {
    console.error("Error posting sermon:", err);
    res.status(500).json({ error: 'Failed to post sermon.' });
  }
};

// Delete a sermon/event and its associated file
export const deleteSermon = async (req, res) => {
  try {
    const { id } = req.params;

    const [rows] = await db.query('SELECT fileUrl FROM sermons_events WHERE id = ?', [id]);
    const item = rows[0];

    if (!item) {
      return res.status(404).json({ error: 'Sermon not found.' });
    }

    if (item.fileUrl) {
      const filePath = path.join(__dirname, '..', item.fileUrl);
      if (fs.existsSync(filePath)) {
        try {
          fs.unlinkSync(filePath);
        } catch (fileErr) {
          console.error("Failed to delete file:", fileErr);
        }
      }
    }

    await db.query('DELETE FROM sermons_events WHERE id = ?', [id]);
    res.json({ message: 'Deleted successfully.' });
  } catch (err) {
    console.error("Error deleting sermon:", err);
    res.status(500).json({ error: 'Failed to delete sermon.' });
  }
};
