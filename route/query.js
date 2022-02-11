const Query = require('../model/query.js');

module.exports = (app) => {

    app.post('/query/addQuery',async (req,res)=>{
        try{
            const { firstName,lastName,emailId,description } = req.body;
            
            const newQuery = new Query({
               firstName,
               lastName,
               emailId,
               description
            });

            const result = await newQuery.save();
            return res.status(200).json({msg:"New event added successfully!!" , result});
        }catch(err){
            return res.status(500).json(err);
        }
    });
}


