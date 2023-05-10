const mongoose = require('mongoose');

async function main() {
  try {
    await mongoose.connect('mongodb+srv://tester321:tester321@cluster0.tz3y6pr.mongodb.net/test', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    console.log('Connected to the database');
  } catch (error) {
    console.error('Connection error:', error);
  }
}

module.exports = main;
