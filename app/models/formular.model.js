const mongoose = require('mongoose');

const formularSchema = mongoose.Schema({
    vorname: String,
    nachname: String,
    strasse: String,
    strassennr: String,
    plz: String,
    ort: String,
    email: String,
    message: String,
    signature:String
}, {
    timestamps: true
});


module.exports = mongoose.model('Formular', formularSchema);