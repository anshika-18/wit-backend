const User = require('../model/user.js');

module.exports = (app) => {

    app.post('/auth/register',async (req,res)=>{
        try{
            const { firstName,lastName,userName,emailId,vjudgeId,college,role,phone,password } = req.body;
            
            const newUser = new User({
               firstName,
               lastName,
               userName,
               emailId,
               vjudgeId,
               college,
               role,
               phone,
               password
            });

            const result = await newUser.save();
            return res.status(200).json({msg:"New user added successfully!!" , result});
        }catch(err){
            return res.status(500).json(err);
        }
    });
}


