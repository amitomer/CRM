var express = require('express');
const router = express.Router()
let Data = require('./dataModel');


router.get('/clients', function(req,res){
    Data.findAll({}).then(data=>{
        res.send(data);
    }).catch((err)=>{
        res.send(err)
    })
})

router.get('/actions', function(req,res){
    Data.findAll({ attributes: ['_id', 'name', 'owner'] }).then(data => {
        res.send(data);
    })
})

router.put('/actions/owner/:clientId', function(req,res){
    let clientId=req.params.clientId;
    Data.update (
        {owner: req.body.owner},
        {
            where :{
                _id:clientId
            }
        }
    )
    res.send();
})
router.put('/client/update/:clientId', function(req,res){
    let clientId=req.params.clientId;
    Data.update (
        {name: req.body.name, country:req.body.country},
        {
            where :{
                _id:clientId
            }
        }
    )
    res.send();
})
router.put('/actions/email/:clientId', function(req,res){
    let clientId=req.params.clientId;
    Data.update (
        {emailType: req.body.emailType},
        {
            where :{
                _id:clientId
            }
        }
    )
    res.send();
})
router.put('/actions/sold/:clientId', function(req,res){
    let clientId=req.params.clientId;
    Data.update (
        {sold: true},
        {
            where :{
                _id:clientId
            }
        }
    )
    res.send();
})

router.post('/actions/add', function (req,res){
    Data.create(req.body, function(){console.log("added")});
    res.send();
})

module.exports = router;