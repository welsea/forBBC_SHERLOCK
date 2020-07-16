var msgsModel = require('../model/msgs');

/* GET msgs listing. */
const msgsController = {
    all(req, res) {
        msgsModel.find({}).sort({ _id:-1})
            .exec((err, msgs) => res.json(msgs))
    },
    sortBy(req,res){
        msgsModel
            .find({}).sort({kudos:-1})
            .exec((err,msgs)=>res.json(msgs));
    },
    limitReturn(req,res){
        msgsModel
            .find({}).sort({kudos:-1}).limit(3)
            .exec((err,msgs)=>res.json(msgs));
    },
    create(req, res) {
        const requestBody = req.body;
        const newMsg = new msgsModel(requestBody);

        newMsg.save((err, saved) => {
            msgsModel
                .findOne({
                    _id: newMsg._id
                })
                .exec((err, msgs) => res.json(msgs))
        })
    },
    update(req, res) {
        const idParams = req.params.id;
        let msgs= req.body;

        msgsModel.updateOne({
            _id: idParams
        }, {
            ...msgs
        }, (err, updated) => {
            res.json(updated);
        })
    },
    remove(req, res) {
        const idParams = req.params.id;

        msgsModel.findOne({
            _id: idParams
        }).remove((err, removed) => res.json(idParams))
    }
}

module.exports = msgsController;