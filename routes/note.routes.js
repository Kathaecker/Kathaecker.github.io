module.exports = (app) => {

    const ergebnis = require('../controllers/ergebnis.controller.js');
    const formular =require ('../controllers/formular.controller.js');

    // Create a new ergebnis/Formular
    app.post('/ergebnis', ergebnis.create);
    app.post('/formular', formular.create);
    // Retrieve all ergebnis
    app.get('/ergebnis', ergebnis.findAll);
    // Delete a ergebnis with noteId
    app.delete('/ergebnis/:ergebnisId', ergebnis.delete);
}

// Retrieve a single Note with noteId
// app.get('/notes/:noteId', notes.findOne);

// Update a Note with noteId
// app.put('/notes/:noteId', notes.update);

