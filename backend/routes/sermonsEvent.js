const express = require('express');
const multer = require('multer');
const fs = require('fs');
const { getSermons, postSermon, deleteSermon } = require('../controllers/sermonController');

const router = express.Router();

// Ensure uploads directory exists
const uploadDir = 'uploads';
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// Multer config
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadDir),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname),
});

const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    const allowed = ['audio/', 'video/'];
    if (allowed.some(type => file.mimetype.startsWith(type))) {
      cb(null, true);
    } else {
      cb(new Error('Only audio and video files are allowed'), false);
    }
  },
});

// Routes
router.get('/', getSermons);
router.post('/', upload.single('file'), postSermon);
router.delete('/:id', deleteSermon);

module.exports = router;
