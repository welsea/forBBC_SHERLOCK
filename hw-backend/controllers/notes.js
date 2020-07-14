var notesModel = require('../model/notes');

/* GET notes listing. */
const notesController = {
    all(req, res) {
        notesModel.find({})
            .exec((err, notes) => res.json(notes))
    },
    create(req, res) {
        const requestBody = req.body;
        const newNote = new notesModel(requestBody);

        newNote.save((err, saved) => {
            notesModel
                .findOne({
                    _id: newNote._id
                })
                .exec((err, notes) => res.json(notes))
        })
    },
    update(req, res) {
        const idParams = req.params.id;
        let notes= req.body;

        notesModel.updateOne({
            _id: idParams
        }, {
            ...notes
        }, (err, updated) => {
            res.json(updated);
        })
    },
    remove(req, res) {
        const idParams = req.params.id;

        notesModel.findOne({
            _id: idParams
        }).remove((err, removed) => res.json(idParams))
    }
}

module.exports = notesController;