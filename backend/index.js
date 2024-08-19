const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserProfile = require('./models/UserProfile');

const app = express();
app.use(express.json());
app.use(cors);

mongoose.connect('mongodb://localhost:27017/userProfilesDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Create new profile
app.post('/api/profiles', (req, res) => {
  const newUser = new UserProfile(req.body);
  newUser.save()
    .then((user) => res.status(201).json(user))
    .catch((error) => res.status(400).json({ error: error.message }));
});

// Get all profiles
app.get('/api/profiles', (req, res) => {
  UserProfile.find()
    .sort({ location: 1 }) // Sorting by location
    .then((profiles) => res.json(profiles))
    .catch((error) => res.status(500).json({ error: error.message }));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
