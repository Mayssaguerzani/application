const expressAsyncHandler = require('express-async-handler');
const Book =require('../models/Book');

const express = require('express');
const bookRoutes = express.Router();
const authMiddleware = express.middleware();

//create Book 

bookRoutes.post('/',expressAsyncHandler(async(req,res)=>{
    const book=await Book.create(req.body);0
    if (book){
        res.status(200);
        res.json(book);
    }else{
        res.status(500);
        throw new Error('Book creating failed');
    }
    })
);



//create Book 

bookRoutes.get ('/',expressAsyncHandler(async(req,res)=>{
    const book=await Book.find({})

    if (book){
        res.status(200);
        res.json(book);
    }else{
        res.status(500);
        throw new Error('There are no books');
    }
    })
);

bookRoutes.put (
    '/:id' ,
     authMiddleware, expressAsyncHandler(async(req, res) => {
    const book=await Book.findById(req.params.id);
    if (book){
        const updateBook=await Book.findByIdAndUpdate(req.params.id, 
            req.body,
            {
                new:true,
                runValidators: true,
            } 
            );

            res.status(200);
            res.json({updatedBook});
    }else {
        res.status(500);
        throw new Error('Update failed');
    }
}))

module.exports = bookRoutes;