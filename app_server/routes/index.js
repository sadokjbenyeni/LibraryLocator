const express = require('express');
const router = express.Router();
const librariesControllers = require('../controllers/libraries');

router
    .route('/libraries')
    .get(librariesControllers.getLibraries)
    .post(librariesControllers.createLibrary);

router
    .route('library/:libraryId')
    .get(librariesControllers.getLibraryById)
    .put(librariesControllers.updateLibraryById)
    .delete(librariesControllers.deleteLibraryById);

module.exports = router;
