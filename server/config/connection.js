const mongoose = require('mongoose');
require("dotenv").config();
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connection successful!'))
.catch(err => console.error('MongoDB connection error:', err));
module.exports = mongoose.connection;
