var ficsModel = require('../model/fics');

/* GET fics listing. */
const ficsController = {
    all(req, res) {
        ficsModel.find({}).sort({ _id:-1})
            .exec((err, fics) => res.json(fics))
    },
    find(req, res){
        const keyword=req.query.kw;
        ficsModel.find({name:{ $regex: '.*' + keyword + '.*' } }).sort({ _id:-1})
            .exec((err, fics) => res.json(fics))
    },
    byId(req,res){
        const id=req.query.id;
        ficsModel.findOne({_id:id})
            .exec((err, fic) => res.json(fic))
    },
    sortBy(req,res){
        ficsModel
            .find({}).sort({kudos:-1})
            .exec((err,fics)=>res.json(fics));
    },
    limitReturn(req,res){
        ficsModel
            .find({}).sort({kudos:-1}).limit(10)
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