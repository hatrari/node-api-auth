const Book = require('../models/book');

exports.create = (req, res) => {
  const book = new Book(req.body);
  book.save()
  .then(response => res.status(201).json(response))
  .catch(error => res.status(400).json(error));
};

exports.get = (req, res) => {
  Book.findOne({_id: req.params.id})
  .then(response => res.status(200).json(response))
  .catch(error => res.status(404).json(error));
};

exports.update = (req, res) => {
  Book.updateOne({_id: req.params.id}, req.body)
  .then(response => res.status(201).json(response))
  .catch(error => res.status(400).json(error));
};

exports.delete = (req, res) => {
  Book.deleteOne({_id: req.params.id})
  .then(response => res.status(200).json(response))
  .catch(error => res.status(400).json(error));
};

exports.all = (req, res) => {
  Book.find()
  .then(response => res.status(200).json(response))
  .catch(error => res.status(400).json(error));
};