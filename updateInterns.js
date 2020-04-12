const assert = require('assert');

const updateInterns = function(db, callback) {
    const collection = db.collection('myMovies');
    collection.updateOne(
        { movie: "The Banker"},
        {$set: {movie: "Startng", year: "2020", rating: "9"}}, 
        function(err, update) {
            assert.equal(err, null);
            console.log("Updated successfully");
            console.log(update);
            callback(update);
    });
};

module.exports = updateInterns;