

var Evento = require("../models/eventos");

// Get all cars
exports.getEventos = async (req, response) => {
    Evento.find()
        .then(notes => {
            response.send(notes);
        }).catch(err => {
            response.status(500).send({
                message: err.message || "Some error occurred while retrieving Autores."
            });
        });
}

// Get single Autor by ID
exports.getSingleEvento = async (req, res) => {
  Evento.findById(req.params.id)
    .then(note => {
        if(!note) {
            return res.status(404).send({
                message: "Autor not found with id " + req.params.id
            });            
        }
        res.send(note);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Autor not found with id " + req.params.id
            });                
        }
        return res.status(500).send({
            message: "Error retrieving note with id " + req.params.id
        });
    });
}

// Add a new Autor
exports.addEvento = async (req, res) => {
    const autor = new Evento({
        "idEvento":req.body.idEvento,
        "titulo" : req.body.titulo,
        "descripcion" : req.body.descripcion,
        "lugar" : req.body.lugar,
        "organizador": req.body.organizador,
        "calificacion_evento" : req.body.calificacion_evento,
        "usuario": req.body.usuario
    });

    // Save autor in the database
    autor.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Note."
        });
    });
}

// Update an existing Autor
exports.updateEvento = async (req, res) => {
    Evento.findByIdAndUpdate(req.params.id, {
        "idEvento":req.body.idEvento,
        "titulo" : req.body.titulo,
        "descripcion" : req.body.descripcion,
        "lugar" : req.body.lugar,
        "organizador": req.body.organizador,
        "calificacion_evento" : req.body.calificacion_evento,
        "usuario": req.body.usuario
    }, {new: true})
    .then(note => {
        if(!note) {
            return res.status(404).send({
                message: "Autor not found with id " + req.params.id
            });
        }
        res.send(note);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.id
            });                
        }
        return res.status(500).send({
            message: "Error updating note with id " + req.params.id
        });
    });
}

// Delete an Autor
exports.deleteEvento = async (req, res) => {
  Evento.findByIdAndRemove(req.params.id)
    .then(note => {
        if(!note) {
            return res.status(404).send({
                message: "Autor not found with id " + req.params.id
            });
        }
        res.send({message: "Autor deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.id
            });                
        }
        return res.status(500).send({
            message: "Could not delete note with id " + req.params.id
        });
    });
}
