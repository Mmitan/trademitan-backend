require('dotenv').config();
const express = require('express');
const cors = require('cors');
const adminRoutes = require('./routes/admin');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api/admin', adminRoutes);

app.listen(PORT, () => {
  console.log(`Server attivo su http://localhost:${PORT}`);
});
