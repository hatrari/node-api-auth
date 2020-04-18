const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');

const book = require('../controllers/book');

router.get('/', auth, book.all);
router.post('/', auth, book.create);
router.get('/:id', auth, book.get);
router.put('/:id', auth, book.update);
router.delete('/:id', auth, book.delete);

module.exports = router;