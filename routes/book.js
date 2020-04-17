const express = require('express');
const router = express.Router();

const Book = require('../models/book');

router.post('/', (req, res) => {
  const book = new Book(req.body.book);
  book.save()
  .then(response => res.status(201).json(response))
  .catch(error => res.status(400).json(error));
});

router.get('/:id', (req, res) => {
  Book.findOne({_id: req.params.id})
  .then(response => res.status(200).json(response))
  .catch(error => res.status(404).json(error));
});

router.put('/:id', (req, res) => {
  const book = new Book(req.body.book);
  Book.updateOne({_id: req.params.id}, book)
  .then(response => res.status(201).json(response))
  .catch(error => res.status(400).json(error));
});

router.delete('/:id', (req, res) => {
  Book.deleteOne({_id: req.params.id})
  .then(response => res.status(200).json(response))
  .catch(error => res.status(400).json(error));
});

router.get('/', (req, res) => {
  Book.find()
  .then(response => res.status(200).json(response))
  .catch(error => res.status(400).json(error));
});

module.exports = router;