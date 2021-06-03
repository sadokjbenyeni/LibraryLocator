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

const librarySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    foundationDate: Number,
    address: {
        type: String,
        required: true
    },
    openingHours: [String],
    phone: Number,
    website: String,
    socialMedia: [String],
    email: String,
    portal: String,
    coords: {
        type: { type: String },
        coordinates: [Number]
    },
    openingTimes: [openingTimeSchema]
});

librarySchema.index({ coords: '2dsphere' });

mongoose.model('Library', librarySchema);   