const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const booksRoutes = require('./Routes/books');
const userRoutes = require('./Routes/user');

require('dotenv').config();

mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("Connexion à MongoDB réussie !"))
.catch((error) => {
  console.log("Connexion à MongoDB échouée !");
  console.error(error);  
});

  const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(express.json());

app.use('/api/books', booksRoutes);
app.use('/api/auth', userRoutes);
app.use('/images', express.static(path.join(__dirname, 'images')));

module.exports = app;