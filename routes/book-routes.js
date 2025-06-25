const express = require('express');
const router = express.Router();
const { getAllBooks,getSingleBookById,addNewBook,updateBook,deleteBook } = require('../controllers/book-controller');

//all routes that are related to books only
//each routes provided their controller as parameter
router.get('/get',getAllBooks);
router.get('/get/:id',getSingleBookById);
router.post('/add',addNewBook);
router.put('/update/:id',updateBook);
router.delete('/delete/:id',deleteBook);

module.exports = router;