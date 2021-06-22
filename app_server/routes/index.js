const express = require('express');
const router = express.Router();
const librariesController = require('../controllers/libraries');

router
    .route('/libraries')
    .get(librariesController.getLibraries)
    .post(librariesController.createLibrary);

router
    .route('library/:libraryId')
    .get(librariesController.getLibraryById)
    .put(librariesController.updateLibraryById)
    .delete(librariesController.deleteLibraryById);

module.exports = router;
