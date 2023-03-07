var express = require('express');
const { publishToQueue } = require('../Service/MQService');
var router = express.Router();

/* GET home page. */
router.post('/add_message', function (req, res, next) {
  const { data } = req.body
  const DataInput = JSON.stringify(data)
  publishToQueue('user-message', DataInput) 
  res.status(200).json({ message: data })
});

module.exports = router;
