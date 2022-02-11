const User = require('../model/user.js');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');

module.exports = (app) => {

    app.post('/auth/register', [
        body('firstName', 'Enter a valid name').isLength({ min: 3 }),
        body('emailId', 'Enter a valid email').isEmail(),
        body('password', 'Password must be atleast 5 characters').isLength({ min: 5 }),
      ],async (req,res)=>{

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }

        try{

            let user = await User.findOne({ emailId: req.body.emailId });
            if (user) {
              return res.status(400).json({ error: "Sorry a user with this email already exists" })
            }

            const { firstName,lastName,userName,emailId,vjudgeId,college,role,phone } = req.body;
            const salt = await bcrypt.genSalt(10);
            const password = await bcrypt.hash(req.body.password, salt);
            
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


