const { Manage, validate} = require('../models/manageModel');
const catchAsync = require('../utils/catchAsync');


exports.getAllManage = catchAsync(async (req, res)=> {
    const manage = await Manage.find().sort("FullName");
    res.send(manage);

});
exports.createManage = catchAsync(async (req, res)=> {
    const { error } = validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);
  
    let manage = new Manage ({
        FullName: req.body.FullName,
        YourLocation: req.body.YourLocation,
        Email: req.body.Email,
        Gender: req.body.Gender,
        Complaints: req.body.Complaints,
        createdAt: req.body.createdAt
    });
    manage = await manage.save();

    res.send(manage);
});

exports.getManageById =  catchAsync(async (req, res) => {
    const manage = await Manage.findById(req.params.id);

    if (!manage) return res.status(404).send('The complaints with the given ID was not found');
    
    res.send(manage);
});




    exports.updateManage = catchAsync(async(req, res) => {
        const { error } = validate(req.body);
        if(error) return res.status(400).send(error.details[0].message);
    
        const manage = await Manage.findByIdAndUpdate(req.params.id, {
             FullName: req.body.FullName,   
             YourLocation: req.body.YourLocation, 
             Email: req.body.Email,
             Gender: req.body.Gender,
             Complaints: req.body.Complaints,
             createdAt: req.body.createdAt

            },
             {
                new: true
            });

            if (!manage) return res.status(404).send('The complaints with the given ID was not found');
            
            res.send(manage);
    
    });
    exports.deleteManage = catchAsync(async(req, res) => {
        const manage = await Manage.findByIdAndDelete(req.params.id);
        if (!manage) return res.status(404).send("The complaints with the ID was not found");
    
        res.send(manage);
    
});


