const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const User = require('../routes/models/user');

router.post('/signup', (req, res, next) => {
  User.find({
      email: req.body.email
    })
    .exec()
    .then(user => {
      if (user.length >= 1) {
        return res.json({
          message: 'Email address already in the system.'
        })
      } else {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          if (err) {
            return res.json({
              error: err
            });
          } else {
            const user = new User({
              _id: new mongoose.Types.ObjectId(),
              email: req.body.email,
              password: hash
            });
            user.save()
              .then(result => {
                console.log(result);
                res.json({
                  message: 'User has been created!'
                })
              })
              .catch(err => {
                console.log(err);
                res.json({
                  error: err
                });
              });
          }
        });
      }
    })
});

router.post('/login', (req, res, next) => {
  User.find({
      email: req.body.email
    })
    .exec()
    .then(user => {
      if (user.length < 1) {
        return res.json({
          message: 'Authentication Failed.'
        });
      }
      bcrypt.compare(req.body.password, user[0].password, (err, result) => {
        if (err) {
          return res.json({
            message: 'Authentication Failed.'
          });
        }
        if (result) {
          return res.json({
            message: 'Authentication Successful.'
          });
        }
        res.json({
          message: 'Authentication Failed.'
        });
      });
    })
    .catch(err => {
      console.log(err);
      res.json({
        error: err
      });
    });
});

router.delete('/:id', (req, res, next) => {
  User.remove({
      _id: req.body.Id
    })
    .exec()
    .then(result => {
      res.json({
        message: 'User Removed!'
      });
    })
    .catch(err => {
      console.log(err);
      res.json({
        error: err
      });
    });
})

module.exports = router;