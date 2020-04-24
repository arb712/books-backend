const express = require("express")
const router = express.Router()
const Books = require("../controllers/BookControllers")

router.post('/post',Books.create)
router.get('/get',Books.getData)
router.get('/get/:booksId',Books.getById)
router.put('/update/:booksId',Books.editById)
router.delete('/delete/:booksId',Books.deleteById)

module.exports = router