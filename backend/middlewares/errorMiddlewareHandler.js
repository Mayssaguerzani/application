const errorMiddlewareHandler = (err, req, res, next)=>{ 
        // set status code 
        const errorStatusCode =res.statuscode === 200 ? 500 :  res.statusCode;
        res.status(errorStatusCode);
        res.json({ 
            message: err.message,
        });
    
    
    };

    module.exports = {errorMiddlewareHandler};
