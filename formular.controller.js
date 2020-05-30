const Formular = require('../models/formular.model.js');


//Formular

exports.create = (req, res) => {
    // Validate request
    console.log(req.body)
    if (!req.body) {
        return res.status(400).send({
            message: "Leider kann Ihre Anfrage nicht bearbeitet werden."
        });
    }

    // Validate request einzelne Abfragen gesetzt sind

    if (!req.body.vorname||!req.body.nachname ||!req.body.strasse ||!req.body.hausnr ||!req.body.plz ||!req.body.ort ||!req.body.email ||!req.body.telefon ||!req.body.message ) {
        return res.status(400).send({
            message: "Alle Felder mit [*] gekennzeichneten Felder müssen ausgefüllt werden."
        });
    }

    // Create a Note
    const formular = new Formular( //req= required der Kontakformulardaten inkl der Unterschrift
        {
            vorname: req.body.vorname,
            nachname: req.body.nachname,
            strasse: req.body.strasse,
            hausnr: req.body.hausnr,
            plz: req.body.plz,
            ort: req.body.ort,
            email: req.body.email,
            telefon: req.body.telefon,
            message: req.body.message,
            signature: req.body.signature
        });

    // Save formular in the database
    formular.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Formular konnte nicht gespeichert werden."
            });
        });
};

