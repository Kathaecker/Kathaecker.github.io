const mongoose = require('mongoose');

const ErgebnisSchema = mongoose.Schema({
    Name: String,
    AnzahlRichtige: Number
}, {
    timestamps: true
});

module.exports = mongoose.model('Ergebnis', ErgebnisSchema);