const { Order, validate} = require('../models/orderModel');
const catchAsync = require('../utils/catchAsync');


exports.getAllOrder = catchAsync(async (req, res)=> {
    const order = await Order.find().sort("FullName");
    res.send(order);

});
exports.createOrder = catchAsync(async (req, res)=> {
    const { error } = validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);
  
    let order = new Order ({
        FullName: req.body.FullName,
        YourGoods: req.body.YourGoods,
        Amount: req.body.Amount,
        state: req.body.state,
        address: req.body.address,
        createdAt: req.body.createdAt
    });
    order = await order.save();

    res.send(order);
});

exports.getOrderById =  catchAsync(async (req, res) => {
    const order = await Order.findById(req.params.id);

    if (!order) return res.status(404).send('The order with the given ID was not found');
    
    res.send(order);
});




    exports.updateOrder = catchAsync(async(req, res) => {
        const { error } = validate(req.body);
        if(error) return res.status(400).send(error.details[0].message);
    
        const order = await Order.findByIdAndUpdate(req.params.id, {
             FullName: req.body.FullName,   
             YourGoods: req.body.YourGoods, 
             Amount: req.body.Amount,
             state: req.body.state,
             address: req.body.address,
             createdAt: req.body.createdAt

            },
             {
                new: true
            });

            if (!order) return res.status(404).send('The order with the given ID was not found');
            
            res.send(order);
    
    });
    exports.deleteOrder = catchAsync(async(req, res) => {
        const order = await Order.findByIdAndDelete(req.params.id);
        if (!order) return res.status(404).send("The order with the ID was not found");
    
        res.send(order);
    
});


