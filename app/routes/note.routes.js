module.exports = (app) => {

    const ergebnis = require('../controllers/ergebnis.controller.js');
    const formular =require ('../controllers/formular.controller.js');

    // Create a new Note
    app.post('/ergebnis', ergebnis.create);
    app.post('/formular', formular.create);
    // Retrieve all Notes
    app.get('/ergebnis', ergebnis.findAll);

    // Retrieve a single Note with noteId
   // app.get('/notes/:noteId', notes.findOne);

    // Update a Note with noteId
   // app.put('/notes/:noteId', notes.update);

    // Delete a Note with noteId
  //  app.delete('/notes/:noteId', notes.delete);
}