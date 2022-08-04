const express = require('express');
const mongoose = require('mongoose');
const Payment = require('../models/payment')
const router = express.Router()


router.post('/', (req, res) => {
    console.log('here into add payments', req.body);
    // add object to db
    const paymentObj = new Payment({
       amount : req.body.amount,
       typeOfPayment : req.body.typeOfPayment,
       _idTraineeship: req.body._idTraineeship,
       _idStudent:req.body._idStudent,

    });
    paymentObj.save()
    res.status(200).json({mes : " saved"})
});

router.get('/', (req, res) => {
    console.log('here into get all payments')
    //access to db and find objects
    Payment.find((err, docs) => {
        if (err) {
            console.log('err data base', err)
        } else {
            res.status(200).json({
                Payments: docs
            });

        }

    });

});

router.get('/:id', (req, res) => {
    console.log('here into get payment by id', req.params.id)
    Payment.findOne({ _id: req.params.id }).then((result) => {
        console.log('result of get by id', result)
        if (result) {
            res.status(200).json({
                payment: result
            })
        }

    })

})


router.put('/:id', (req, res) => {
    console.log('here into edit payment', req.params.id);
    console.log('here into edit payment', req.body);

    const obj = new Payment({
        _id: req.body._id,
        amount : req.body.amount,
        typeOfPayment : req.body.typeOfPayment,
        _idTraineeship: req.body._idTraineeship,
        _idStudent:req.body._idStudent,

    })
    Payment.updateOne({ _id: req.params.id }, obj).then((result) => {
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
    Payment.deleteOne({ _id: req.params.id }).then((result) => {
        console.log('after delete', result)
        if (result) {
            res.status(200).json({
                message: 'delete with success'
            })
        }

    })
})
module.exports=router