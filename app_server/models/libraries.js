const mongoose = require('mongoose');

const openingTimeSchema = new mongoose.Schema({
    days: {
        type: String,
        required: true
    },
    opening: String,
    closing: String,
    closed: {
        type: Boolean,
        required: true
    }
});

const socialMedia = new mongoose.Schema({
    facebook: String,
    youtube: String,
    wikipedia: String,
    other: String
});

const librarySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    foundationDate: String,
    address: {
        type: String,
    },
    facilities: [String],
    phone: String,
    website: String,
    socialMedia: socialMedia,
    portal: String,
    coords: {
        type: { type: Number },
        coordinates: [Number]
    },
    openingTimes: [openingTimeSchema]
});

librarySchema.index({ coords: '2dsphere' });

mongoose.model('Library', librarySchema);