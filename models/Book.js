const mongoose = require('mongoose');

const bookSchema = mongoose.Schema ({
    userId: { type: String }, 
    title: { type: String, required: true }, 
    author: { type: String, required: true }, 
    imageUrl: { type: String, required: true }, 
    year: { type: Number, required: true }, 
    genre: { type: String, required: true }, 
    ratings: [ // Tableau des évaluations
      {
        userId: { type: String  }, // ID de l'utilisateur qui a noté le livre
        grade: { type: Number, required: true, min: 0, max: 5 } // Note attribuée, entre 0 et 5
      }
    ],
    averageRating: { type: Number, default: 0 } // Note moyenne, calculée à partir des évaluations
  });

module.exports = mongoose.model('Book', bookSchema);