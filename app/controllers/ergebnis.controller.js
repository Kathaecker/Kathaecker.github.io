const Ergebnis = require('../models/Ergebnis.model.js');


//Spielergebnis 

exports.create = (req, res) => {
    // Validate request
    console.log(req.body)
    if (!req.body) {
        return res.status(400).send({
            message: "Spielergebnis muss gesetzt sein"
        });
    }

    // Create a Note
    const ergebnis = new Ergebnis({
        Name: req.body.Name || "Anonym", // wenn kein Name eingetragen wird, wird es als Anonym gepostet
        AnzahlRichtige: req.body.AnzahlRichtige
    });

    // Save ergebnis in the database
    ergebnis.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Spielergebnis konnte nicht gespeichert werden."
            });
        });
};

exports.findAll = (req, res) => {
    Ergebnis.find()
        .then(ergebnis => {
            res.send(ergebnis);
        }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });

};