const mongoose = require('mongoose');
const UserProfile = require('../models/UserProfile');

mongoose.connect('mongodb://localhost:27017/userProfilesDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const dummyUsers = [
  { name: 'Aarav Gupta', age: 28, location: 'Delhi', profession: 'Software Engineer' },
  { name: 'Riya Sharma', age: 25, location: 'Mumbai', profession: 'Marketing Specialist' },
  { name: 'Vihaan Singh', age: 30, location: 'Bangalore', profession: 'Data Scientist' },
  { name: 'Aanya Patel', age: 27, location: 'Hyderabad', profession: 'UX Designer' },
  { name: 'Aditya Kumar', age: 32, location: 'Chennai', profession: 'Product Manager' },
  { name: 'Isha Verma', age: 24, location: 'Kolkata', profession: 'Graphic Designer' },
  { name: 'Kabir Reddy', age: 29, location: 'Pune', profession: 'Business Analyst' },
  { name: 'Diya Joshi', age: 26, location: 'Ahmedabad', profession: 'Content Writer' },
  { name: 'Arjun Desai', age: 31, location: 'Jaipur', profession: 'Full Stack Developer' },
  { name: 'Nidhi Chauhan', age: 28, location: 'Lucknow', profession: 'DevOps Engineer' },
];

UserProfile.insertMany(dummyUsers)
  .then(() => {
    console.log('Dummy users added successfully!');
    mongoose.connection.close();
  })
  .catch((error) => {
    console.error('Error adding dummy users:', error);
  });
