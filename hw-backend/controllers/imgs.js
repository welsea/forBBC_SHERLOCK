var imgsModel = require('../model/imgs');

/* GET imgs listing. */
const imgsController = {
    all(req, res) {
        imgsModel.find({}).sort({ _id:-1})
            .exec((err, imgs) => res.json(imgs))
    },
    sortBy(req,res){
        const sortby="-"+req.params.sort;

        imgsModel
            .find({}).sort(sortby)
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