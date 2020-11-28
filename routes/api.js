const router = require('express').Router();
const dataItem = require('../model/dataItem');

router.post('/', async(req, res) => {
    const data = new dataItem({
        title:req.body.title,
        body:req.body.body,
        year:req.body.year,
        position:req.body.position
    });
    try{
        const savedataItem = await data.save();
        res.send(savedataItem);
    }catch(err) {
        res.status(400).send(err);
    }
});

router.get('/', (req, res) => {
    dataItem.find({ }).then(data => res.json(data));
});

module.exports = router;