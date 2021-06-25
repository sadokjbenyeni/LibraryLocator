const mongoose = require('mongoose');
const Library = mongoose.model('Library');
const createLibrary = async (req, res) => {
    try {
        let library = await Library.create({
            name: req.body.name,
            address: req.body.address,
            facilities: req.body.facilities.split(","),
            coords: {
                type: "Point",
                coordinates: [
                    parseFloat(req.body.lng),
                    parseFloat(req.body.lat)
                ]
            },
            phone: req.body.phone,
            website: req.body.website,
            socialMedia: {
                facebook: req.body.facebook,
                youtube: req.body.youtube,
                wikipedia: req.body.wikipedia,
                other: req.body.other
            },
            portal: req.body.portal,
            openingTimes: [{
                days: req.body.days1,
                opening: req.body.opening1,
                closing: req.body.closing1,
                closed: req.body.closed1
            },
            {
                days: req.body.days2,
                opening: req.body.opening2,
                closing: req.body.closing2,
                closed: req.body.closed2
            }]
        }).exec();
        res.status(201).json(library);
    } catch (error) {
        res.status(500).json(error)
    }

};

const getLibraryById = async (req, res) => {
    if (!req.params.libraryId) {
        return res.status(404).json({ 'Message': 'No library Id was provided!' });
    }
    try {
        let library = await Library.findById(req.params.libraryId).exec();
        if (!library) {
            res.status(404).json({ 'Message': 'No library matches your search' });
        }
        else {
            res.status(200).json(library);
        }
    } catch (error) {
        res.status(500).json({ "Message": error });
    }
}
const getLibraries = async (req, res) => {
    const lng = parseFloat(req.query.lng);
    const lat = parseFloat(req.query.lat);
    const maxDistance = parseFloat(req.query.maxDistance);
    const near = {
        type: "Point",
        coordinates: [lng, lat]
    };
    const geoOptions = {
        distanceField: "distance.calculated",
        spherical: true,

        maxDistance: maxDistance
    };
    if (!lng || !lat) {
        return res.status(404).json({ 'Message': 'Coordinates parameters are required' });
    }
    try {
        const results = await Library.aggregate([
            {
                $geoNear: {
                    near,
                    ...geoOptions
                }
            }
        ]);
        const libraries = results.map(result => {
            return {
                id: result._id,
                name: result.name,
                address: result.address,
                facilities: result.facilities,
                distance: `${result.distance.calculated.toFixed()}m`
            }
        });
        res.status(200).json(libraries);
    } catch (error) {
        res.status(500).json(error);
    }
};

const updateLibraryById = async (req, res) => {
    if (!req.params.libraryId) {
        return res.status(404).json({ "Message": "Library Id is required" });
    }

    try {
        let library = await Library.findById(req.params.libraryId).select().exec();
        if (!library) {
            res.status(404).json({ "Message": "Library was not found" });
        }
        else {
            library.name = req.body.name,
                library.address = req.body.address,
                library.facilities = req.body.facilities.split(","),
                library.coords = {
                    type: "Point",
                    coordinates: [
                        parseFloat(req.body.lng),
                        parseFloat(req.body.lat)
                    ]
                },
                library.phone = req.body.phone,
                library.website = req.body.website,
                library.socialMedia = {
                    facebook: req.body.facebook,
                    youtube: req.body.youtube,
                    wikipedia: req.body.wikipedia,
                    other: req.body.other
                },
                library.portal = req.body.portal,
                library.openingTimes = [{
                    days: req.body.days1,
                    opening: req.body.opening1,
                    closing: req.body.closing1,
                    closed: req.body.closed1
                },
                {
                    days: req.body.days2,
                    opening: req.body.opening2,
                    closing: req.body.closing2,
                    closed: req.body.closed2
                }]
            res.status(200).json(library);
        }
    } catch (error) {
        res.status(500).json(error);
    }
};

const deleteLibraryById = async (req, res) => {
    const { libraryId } = req.params;
    if (!libraryId) {
        return res.status(404).json({ "Message": "Library Id was not provided" });
    }
    try {
        await Library.findByIdAndRemove(libraryId).exec();
        res.status(201).json(null);
    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports = {
    getLibraries,
    getLibraryById,
    updateLibraryById,
    createLibrary,
    deleteLibraryById
};
