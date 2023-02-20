const Event = require('../model/event.js');

module.exports = (app) => {

    app.post('/event/addEvent',async (req,res)=>{
        try{
            const { topic , posterUrl ,speaker ,description , date } = req.body;
            
            const newEvent = new Event({
                topic,
                posterUrl,
                speaker,
                description,
                date
            });

            const result = await newEvent.save();
            return res.status(200).json({msg:"New event added successfully!!"});
        }catch(err){
            return res.status(500).json(err);
        }
    });

    app.get("/event/getEvents" , async (req,res)=>{

        try{
            const data = await Event.find();
            return res.status(200).json(data);
        }catch (err) {
            return res.status(500).json(err);
        }
    })

    app.get("/event/getEvent/:title" , async (req,res)=>{

        try{
            //console.log(req)
            const data = await Event.find({topic:req.params.title});
            return res.status(200).json(data);
        }catch (err) {
            return res.status(500).json(err);
        }
    })

}


