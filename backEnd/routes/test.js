const express = require('express');
const mongoose = require('mongoose');
const Test = require('../models/test')
const router = express.Router()



router.post('/', (req, res) => {
    console.log('here into add tests', req.body);
    // add object to db
    const testObj = new Test({
        typeOfTest:req.body.typeOfTest,
        grade:req.body.grade ,
        duration:req.body.duration ,
        _idFormtaion: req.body._idFormtaion,
        _idStudent: req.body._idStudent
    });
    testObj.save();
    res.status(200).json({mes : " saved"})

});

router.get('/', (req, res) => {
    console.log('here into get all tests')
    //access to db and find objects
    Test.find((err, docs) => {
        if (err) {
            console.log('error in  data base', err)
        } else {
            res.status(200).json({
                Tests: docs
            });

        }

    });

});

router.get('/:id', (req, res) => {
    console.log('here into get test by id', req.params.id)
    Test.findOne({ _id: req.params.id }).then((result) => {
        console.log('result of get by id', result)
        if (result) {
            res.status(200).json({
                test: result
            })
        }

    })

})

router.put('/:id', (req, res) => {
    console.log('here into edit test', req.params.id);
    console.log('here into edit test', req.body);

    const obj = new Test({
        _id: req.body._id,
        typeOfTest:req.body.typeOfTest,
        grade:req.body.grade ,
        duration:req.body.duration ,
        _idFormtaion: req.body._idFormtaion,
        _idStudent: req.body._idStudent


    })
    Test.updateOne({ _id: req.params.id }, obj).then((result) => {
        console.log('after update', result)
        if (result) {
            res.status(200).json({
                message: obj 
            })
        }

    })


})

router.delete('/:id', (req, res) => {
    console.log('here delete')
    console.log('here id', req.params.id)
    Test.deleteOne({ _id: req.params.id }).then((result) => {
        console.log('after delete', result)
        if (result) {
            res.status(200).json({
                message: 'delete with success'
            })
        }

    })
})
module.exports=router