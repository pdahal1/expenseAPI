const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var {Expense} = require('../models/expense');

router.get('/', (req, res) => {
  Expense.find((err, doc) => {
    if (!err) {
      res.send(doc);
    } else {
      console.log(
        `Error in Retrieving the employee` + JSON.stringify(err, undefined, 2)
      );
    }
  });
});

router.get('/:id', (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res
      .status(400)
      .send(`cannot retrieve the data with the id: ${req.params.id}`);

  Expense.findById(req.params.id, (err, doc) => {
    if (!err) {
      res.send(doc);
    } else {
      console.log(
        "error in getting the data wit the particular id that you are lookingor" +
          JSON.stringify(err, undefined, 2)
      );
    }
  });
});

router.post('/', (req, res) => {
  var exp = new Expense({
    catagory: req.body.catagory,
    where: req.body.where,
    amount: req.body.amount
  });
  exp.save((err, doc) => {
    if (!err) {
      res.send(doc);
    } else {
      console.log(
        'error in saving the expense object' + JSON.stringify(err, undefined, 2)
      );
    }
  });
});

router.put('/:id', (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res
      .status(400)
      .send(`could not find the id : ${req.params.id} to update`);

  var exp = {
    catagory: req.body.catagory,
    where: req.body.where,
    amount: req.body.amount
  };

  Expense.findByIdAndUpdate(
    req.params.id,
    { $set: exp },
    { new: true },
    (err, doc) => {
      if (!err) {
        res.send(doc);
      } else {
        console.log(
          "error in updating the xpense" + JSON.stringify(err, undefined, 2)
        );
      }
    }
  );
});

router.delete('/:id', (req, res) => {
  if (!ObjectId.isValid)
    return res.status(400).send(`cannot delete the item with the id: ${req.params.id}`);
  
  Expense.findByIdAndRemove(req.params.id, (err, docs) => {
    if (!err) {
      res.send(docs);
    } else {
      console.log('error in deleting an entry' + JSON.stringify(err, undefined, 2));
    }
  });
});

module.exports = router; 