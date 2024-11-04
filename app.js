const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use('/api/books', (req, res, next) => {
    // Définir le chemin vers le fichier data.json
  const filePath = path.join(__dirname, '../frontend/public/data/data.json');

  // Lire le fichier data.json
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      // Gérer l'erreur de lecture
      console.error('Erreur de lecture du fichier JSON:', err);
      return res.status(500).json({ message: 'Erreur serveur' });
    }
    // Envoyer le contenu JSON en réponse
    res.status(200).json(JSON.parse(data));
  });
});




/*app.use('/api/books', (req, res, next) => {
    const books = [
        {
            "id": "1",
            "userId" : "clc4wj5lh3gyi0ak4eq4n8syr",
            "title" : "Milwaukee Mission",
            "author": "Elder Cooper",
            "imageUrl" : "https://via.placeholder.com/206x260",
            "year" : 2021,
            "genre" : "Policier",
            "ratings" : [{
              "userId" : "1",
              "grade": 5
            },
              {
                "userId" : "1",
                "grade": 5
              },
              {
                "userId" : "clc4wj5lh3gyi0ak4eq4n8syr",
                "grade": 5
              },
              {
                "userId" : "1",
                "grade": 5
              }],
            "averageRating": 3
          },
            {
              "id": "2",
              "userId" : "clbxs3tag6jkr0biul4trzbrv",
              "title" : "Book for Esther",
              "author": "Alabaster",
              "imageUrl" : "https://via.placeholder.com/206x260",
              "year" : 2022,
              "genre" : "Paysage",
              "ratings" : [{
                "userId" : "clbxs3tag6jkr0biul4trzbrv",
                "grade": 4
              },
                {
                  "userId" : "1",
                  "grade": 5
                },
                {
                  "userId" : "1",
                  "grade": 5
                },
                {
                  "userId" : "1",
                  "grade": 5
                }],
              "averageRating": 4.2
            },
            {
              "id": "3",
              "userId" : "1",
              "title" : "The Kinfolk Table",
              "author": "Nathan Williams",
              "imageUrl" : "https://via.placeholder.com/206x260",
              "year" : 2022,
              "genre" : "Cuisine",
              "ratings" : [{
                "userId" : "1",
                "grade": 5
              },
                {
                  "userId" : "1",
                  "grade": 5
                },
                {
                  "userId" : "1",
                  "grade": 5
                },
                {
                  "userId" : "1",
                  "grade": 5
                }],
              "averageRating": 3
            },
            {
              "id": "4",
              "userId" : "1",
              "title" : "Milwaukee Mission",
              "author": "Elder Cooper",
              "imageUrl" : "https://via.placeholder.com/206x260",
              "year" : 2021,
              "genre" : "Policier",
              "ratings" : [{
                "userId" : "1",
                "grade": 5
              },
                {
                  "userId" : "1",
                  "grade": 5
                },
                {
                  "userId" : "1",
                  "grade": 5
                },
                {
                  "userId" : "1",
                  "grade": 5
                }],
              "averageRating": 3
            },
            {
              "id": "5",
              "userId" : "1",
              "title" : "Book for Esther",
              "author": "Alabaster",
              "imageUrl" : "https://via.placeholder.com/206x260",
              "year" : 2022,
              "genre" : "Paysage",
              "ratings" : [{
                "userId" : "1",
                "grade": 5
              },
                {
                  "userId" : "1",
                  "grade": 5
                },
                {
                  "userId" : "1",
                  "grade": 5
                },
                {
                  "userId" : "1",
                  "grade": 5
                }],
              "averageRating": 4
            },
            {
              "id": "6",
              "userId" : "1",
              "title" : "The Kinfolk Table",
              "author": "Nathan Williams",
              "imageUrl" : "https://via.placeholder.com/206x260",
              "year" : 2022,
              "genre" : "Cuisine",
              "ratings" : [{
                "userId" : "1",
                "grade": 5
              },
                {
                  "userId" : "1",
                  "grade": 5
                },
                {
                  "userId" : "1",
                  "grade": 5
                },
                {
                  "userId" : "1",
                  "grade": 5
                }],
              "averageRating": 3
            },
            {
              "id": "7",
              "userId" : "1",
              "title" : "Milwaukee Mission",
              "author": "Elder Cooper",
              "imageUrl" : "https://via.placeholder.com/206x260",
              "year" : 2021,
              "genre" : "Policier",
              "ratings" : [{
                "userId" : "1",
                "grade": 5
              },
                {
                  "userId" : "1",
                  "grade": 5
                },
                {
                  "userId" : "1",
                  "grade": 5
                },
                {
                  "userId" : "1",
                  "grade": 5
                }],
              "averageRating": 3
            },
            {
              "id": "8",
              "userId" : "clc7s9xnh7zpt0ak4fisdwuj1",
              "title" : "Book for Esther",
              "author": "Alabaster",
              "imageUrl" : "https://via.placeholder.com/206x260",
              "year" : 2022,
              "genre" : "Paysage",
              "ratings" : [{
                "userId" : "1",
                "grade": 5
              },
                {
                  "userId" : "1",
                  "grade": 5
                },
                {
                  "userId" : "1",
                  "grade": 5
                },
                {
                  "userId" : "1",
                  "grade": 5
                }],
              "averageRating": 4
            },
            {
              "id": "9",
              "userId" : "clc4wj5lh3gyi0ak4eq4n8syr",
              "title" : "The Kinfolk Table",
              "author": "Nathan Williams",
              "imageUrl" : "https://via.placeholder.com/206x260",
              "year" : 2022,
              "genre" : "Cuisine",
              "ratings" : [{
                "userId" : "1",
                "grade": 5
              },
                {
                  "userId" : "1",
                  "grade": 5
                },
                {
                  "userId" : "1",
                  "grade": 5
                },
                {
                  "userId" : "clc4wj5lh3gyi0ak4eq4n8syr",
                  "grade": 1
                }],
              "averageRating": 3
            }
    ]
    res.status(200).json(books);
})/*

/*app.use((req, res, next) => {
    console.log('Requête reçue !');
    next();

});
app.use((req, res, next) => {
   res.status(201);
    next();

});


app.use((req, res, next) => {
   res.json({ message: 'Votre requête a bien été reçue !' }); 
   next();
});

app.use((req, res, next) => {
    console.log('Requête envoyée avec succés!');
    next();

});*/

module.exports = app;