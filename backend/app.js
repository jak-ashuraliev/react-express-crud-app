const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');

const indexRouter = require('./routes/index');
const vendorRouter = require('./routes/vendor');
const userRouter = require('./routes/user');

const app = express();

// Connect to Mongoose DB
mongoose.connect('mongodb+srv://macUser:access3@cluster0-mvlok.mongodb.net/test?retryWrites=true&w=majority', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log('*** DB Connected! ***'))
  .catch(err => {
    console.log('*** DB Connection Error ***');
  });

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
    return res.status(200).json({});
  }
  next();
});

app.use('/', indexRouter);
app.use('/vendor', vendorRouter);
app.use('/user', userRouter);

module.exports = app;