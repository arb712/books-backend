const Books = require("../models/Book")

module.exports={
    create:(req,res,next) => {
        Books.create({
            bookTitle:req.body.bookTitle,
            years:req.body.years,
            bookNumber:req.body.bookNumber,
            status:req.body.status
        },
        (err,result) => {
            if (err) next(err)
            else{
                res.json({
                    status:"success",
                    data:result,
                })
            }
         }
        )
    },
    getData:(req,res) => {
        Books.find({})
        .then((result)=>{
            res.json({
                status:"success",
                data:result
            })
        })
        .catch((err)=>err);
    },
    getById:(req,res) =>{
        Books.findById(req.params.booksId)
        .then((result)=> res.json(result))
        .catch((err)=>res.json(err))
    },
    deleteById: (req,res)=>{
        Books.findByIdAndRemove(req.params.booksId)
        .then((result)=>res.json(result))
        .catch((err)=>res.json(err))
    },
    editById: (req,res) => {
        Books.findByIdAndUpdate(req.params.booksId,{
         bookTitle:req.body.bookTitle,
         years:req.body.years,
         bookNumber:req.body.bookNumber,
         status:req.body.status
        })
        .then((result)=>res.json(result))
        .catch((err)=>res.json(err))
    }
}