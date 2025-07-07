
const app = require('./app.js');

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('✅ Backend is working successfully! 🚀');
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
