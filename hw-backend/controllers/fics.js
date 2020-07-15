var ficsModel = require('../model/fics');

/* GET fics listing. */
const ficsController = {
    all(req, res) {
        ficsModel.find({}).sort({ _id:-1})
            .exec((err, fics) => res.json(fics))
    },
    sortBy(req,res){
        ficsModel
            .find({}).sort({kudos:-1})
            .exec((err,fics)=>res.json(fics));
    },
    create(req, res) {
        const requestBody = req.body;
        const newFic = new ficsModel(requestBody);

        newFic.save((err, saved) => {
            ficsModel
                .findOne({
                    _id: newFic._id
                })
                .exec((err, fics) => res.json(fics))
        })
    },
    update(req, res) {
        const idParams = req.params.id;
        let fics= req.body;

        ficsModel.updateOne({
            _id: idParams
        }, {
            ...fics
        }, (err, updated) => {
            res.json(updated);
        })
    },
    remove(req, res) {
        const idParams = req.params.id;

        ficsModel.findOne({
            _id: idParams
        }).remove((err, removed) => res.json(idParams))
    }
}

module.exports = ficsController;