const Resource = require("../model/resource");

module.exports = (app) => {
    app.post("/resource/addResource", async(req,res) => {
        try{
            const { topic, resourceFormat, resourceUrl } = req.body;
            const newResource = new Resource({
                topic,
                resourceFormat,
                resourceUrl,
            });
            const result = await newResource.save();
            return res.status(200).json({msg: "new resource added", result});

        }
        catch(err){
            return res.status(500).json(err);
        }
    })

    app.get("/resource/getResource", async(req,res) => {
        try{
            const data = await Resource.find();
            return res.status(200).json(data);
        }
        catch(err){
            return res.status(500).json(err);
        }
    })

}