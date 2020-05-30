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



// Delete a note with the specified noteId in the request
exports.delete = (req, res) => {
    Ergebnis.findByIdAndRemove(req.params.ergebnisId)
        .then(ergebnis => {
            if (!ergebnis) {
                return res.status(404).send({
                    message: "Ergebnis not found with id " + req.params.ergebnisId
                });
            }
            res.send({ message: "Last Row deleted successfully!" });
        }).catch(err => {
        if (err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Ergebnis not found with id " + req.params.ergebnisId
            });
        }
        return res.status(500).send({
            message: "Could not delete ergebnis with id " + req.params.ergebnisId
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