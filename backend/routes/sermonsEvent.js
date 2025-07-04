import express from 'express';
import multer from 'multer';
import { getSermons, postSermon, deleteSermon } from '../controllers/sermonController.js';

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname),
});
const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    const allowed = ['image/', 'audio/', 'video/'];
    if (allowed.some(type => file.mimetype.startsWith(type))) cb(null, true);
    else cb(new Error('Unsupported file type'), false);
  },
});

router.get('/', getSermons);
router.post('/', upload.single('file'), postSermon);
router.delete('/:id', deleteSermon);

export default router;
