const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Vendor = require('./models/vendor');

// GET list of VENDORS
router.get('/', (req, res, next) => {
  Vendor.find()
    .select(' vendorName firstName lastName phone email')
    .exec()
    .then(docs => {
      const response = {
        // count: docs.length,
        vendor: docs
      }
      if (docs.length >= 0) {
        res.json(docs);
      } else {
        res.json({
          message: 'No Data Found!'
        })
      }
    })
    .catch(err => {
      console.log(err);
      res.json({
        error: err
      });
    });
});

// POST/INSERT NEW VENDOR
router.post('/', (req, res, next) => {

  const vendor = new Vendor({
    _id: new mongoose.Types.ObjectId(),
    vendorName: req.body.vendorName,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    phone: req.body.phone,
    email: req.body.email,
  });
  vendor.save()
    .then(result => {
      console.log(result);
      res.json({
        message: 'Handling POST / INSERT requests to /vendor',
        createVendor: vendor
      });
    })
    .catch(err => {
      console.log(err);
      res.json({
        error: err
      })
    });
});

// GET SPECIFIC VENDOR
router.get('/:id', (req, res, next) => {
  const id = req.params.id;
  Vendor.findById(id)
    .exec()
    .then(doc => {
      console.log(doc);
      if (doc) {
        res.json({
          doc
        });
      } else {
        res.json({
          message: 'Invalid ID provided!'
        });
      }
    })
    .catch(err => {
      console.log(err);
      res.json({
        error: err
      })
    });
});

// UPDATE SPECIFIC VENDOR
router.patch('/:id', (req, res, next) => {
  const id = req.params.id;
  const updateOps = {};
  for (const ops of req.body) {
    updateOps[ops.propName] = ops.value;
  }
  Vendor.update({
      _id: id
    }, {
      $set: updateOps
    })
    .exec()
    .then(result => {
      console.log(result);
      res.json(result);
    })
    .catch(err => {
      console.log(err);
      res.json({
        error: err
      });
    });
});

// DELETE SPECIFIC VENDOR
router.delete('/:id', (req, res, next) => {
  const id = req.params.id;
  Vendor.remove({
      _id: id
    })
    .exec()
    .then(result => {
      res.json(result);
    })
    .catch(err => {
      console.log(err);
      res.json({
        error: err
      });
    })
});

module.exports = router;