/*const multer = require('multer');

const MIME_TYPES = {
  'image/jpg': 'jpg',
  'image/jpeg': 'jpg',
  'image/png': 'png'
};

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'images');
  },
  filename: (req, file, callback) => {
    const name = file.originalname.split(' ').join('_');
    const extension = MIME_TYPES[file.mimetype];
    callback(null, name + Date.now() + '.' + extension);
  }
});

module.exports = multer({storage: storage}).single('image');*/
/*const multer = require('multer');
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Configure multer pour stocker les fichiers en mémoire
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Middleware pour gérer le téléchargement et la conversion d'image
const processImage = async (req, res, next) => {
  if (!req.file) {
    return res.status(400).json({ message: 'Aucun fichier téléchargé.' });
  }

  try {
    // Vérifie que le dossier "images" existe, sinon le crée
    const imagePath = path.join(__dirname, '../images');
    if (!fs.existsSync(imagePath)) {
      fs.mkdirSync(imagePath, { recursive: true });
    }

    // Transforme l'image en .webp avec sharp
    const { buffer, originalname } = req.file;
    const timestamp = Date.now(); // Utilisation d'un timestamp plus simple
    const ref = `${timestamp}-${originalname.split(' ').join('_')}.webp`;

    await sharp(buffer)
      .webp({ quality: 20 })
      .toFile(path.join(imagePath, ref));

    // Ajoute le chemin de l'image transformée à la requête
    req.file.filename = ref;
    req.file.path = `/images/${ref}`;

    next(); // Passe à l'étape suivante
  } catch (error) {
    console.error('Erreur lors de la conversion de l\'image :', error);
    res.status(500).json({ message: 'Erreur lors du traitement de l\'image.', error });
  }
};

// Exportation de multer pour l'utiliser dans les routes
module.exports = { upload, processImage, multer };*/
const multer = require('multer');
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Utilisation de multer en mémoire pour traiter le fichier avant de l'enregistrer sur le disque
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Middleware pour transformer l'image en format `.webp` et la sauvegarder
const processImage = async (req, res, next) => {
  if (!req.file) {
    return next(); // Passe au middleware suivant si aucune image n'est téléchargée
  }

  try {
    const imagePath = path.join(__dirname, '../images');
    if (!fs.existsSync(imagePath)) {
      fs.mkdirSync(imagePath, { recursive: true });
    }

    const { buffer, originalname } = req.file;
    const timestamp = Date.now();
    const filename = `${timestamp}-${originalname.split(' ').join('_').split('.')[0]}.webp`;

    // Conversion et enregistrement de l'image au format `.webp`
    await sharp(buffer)
      .webp({ quality: 80 }) // Ajustez la qualité selon vos besoins
      .toFile(path.join(imagePath, filename));

    // Mise à jour des informations sur l'image dans la requête pour être utilisée dans le contrôleur
    req.file.filename = filename;
    req.file.path = `/images/${filename}`;

    next(); // Passe au middleware suivant
  } catch (error) {
    console.error('Erreur lors de la conversion de l\'image :', error);
    res.status(500).json({ message: 'Erreur lors du traitement de l\'image.', error });
  }
};

module.exports = { upload, processImage };


