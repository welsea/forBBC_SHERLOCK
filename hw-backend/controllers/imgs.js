var imgsModel = require('../model/imgs');

/* GET imgs listing. */
const imgsController = {
    all(req, res) {
        imgsModel.find({}).sort({ _id:-1})
            .exec((err, imgs) => res.json(imgs))
    },
    sortBy(req,res){
        imgsModel
            .find({}).sort({kudos:-1})
            .exec((err,imgs)=>res.json(imgs));
    },
    limitReturn(req,res){
        imgsModel
            .find({}).sort({kudos:-1}).limit(3)
            .exec((err,imgs)=>res.json(imgs));
    },
    create(req, res) {
        const requestBody = req.body;
        const newImg = new imgsModel(requestBody);

        newImg.save((err, saved) => {
            imgsModel
                .findOne({
                    _id: newImg._id
                })
                .exec((err, imgs) => res.json(imgs))
        })
    },
    update(req, res) {
        const idParams = req.params.id;
        let imgs= req.body;

        imgsModel.updateOne({
            _id: idParams
        }, {
            ...imgs
        }, (err, updated) => {
            res.json(updated);
        })
    },
    remove(req, res) {
        const idParams = req.params.id;

        imgsModel.findOne({
            _id: idParams
        }).remove((err, removed) => res.json(idParams))
    }
}

module.exports = imgsController;