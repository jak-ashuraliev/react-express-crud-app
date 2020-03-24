const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const checkAuth = require('./middleware/check-auth');

const Employees = require('./models/employees');

// GET LIST OF EMPLOYEES
router.get('/', checkAuth, (req, res, next) => {
  Employees.find()
    .select('firstName lastName department phone email')
    .exec()
    .then(docs => {
      const response = {
        // count: docs.length,
        employee: docs
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

// POST/INSERT NEW EMPLOYEE
router.post('/', checkAuth, (req, res, next) => {

  const employee = new Employees({
    _id: new mongoose.Types.ObjectId(),
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    department: req.body.department,
    phone: req.body.phone,
    email: req.body.email,
  });
  employee.save()
    .then(result => {
      console.log(result);
      res.json({
        message: 'Handling POST / INSERT requests to /employee',
        createEmployee: employee
      });
    })
    .catch(err => {
      console.log(err);
      res.json({
        error: err
      })
    });
});

// GET SPECIFIC EMPLOYEE
router.get('/:id', checkAuth, (req, res, next) => {
  const id = req.params.id;
  Employees.findById(id)
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

// UPDATE SPECIFIC EMPLOYEE
router.patch('/:id', checkAuth, (req, res, next) => {
  const id = req.params.id;
  const updateOps = {};
  for (const ops of req.body) {
    updateOps[ops.propName] = ops.value;
  }
  Employees.update({
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

// DELETE SPECIFIC EMPLOYEE
router.delete('/:id', checkAuth, (req, res, next) => {
  const id = req.params.id;
  Employees.remove({
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