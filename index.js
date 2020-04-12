const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const createInterns = require('./interns');
const findInterns = require('./findInterns');
const updateInterns = require('./updateInterns');

const url = 'mongodb://localhost:27017/Ibrahim3016';

const dbname = 'Ibrahim3016';

const client = new MongoClient(url);

client.connect(function(err) {
    assert.equal(null, err);
    console.log('Database created by Ibrahim3016!');
    
    const db = client.db(dbname);

    createInterns(db, function() {
        findInterns(db, function() {
            updateInterns (db, function() {
                client.close();
            });
        });      
    });                 
});