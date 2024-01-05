const mongoose = require('mongoose');
const Joi = require('joi');

const orderSchema = new mongoose.Schema({
    FullName: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 1500
    },
    YourGoods: {
        type: String,
        required: true,
        minlength: 4,
        maxlength: 1500
    },
    Amount: {
        type: Number,
        required: true,
        
    },
    state: {
        type: String,
        required: true,
        enum: ['Abia', 'Abuja', 'Adamawa', 'Anambra', 'Akwa Ibom', 'Bayelsa', 'Benue', 'Cross River', 'Delta', 'Edo', 'Ebonyi', 'Enugu', 'Imo', 'Jigawa', 'Taraba', 'Gombe', 'Lagos', 'Plateux', 'Rivers', 'Kwara', 'Ondo', 'Kogi', 'Birni', 'Borno'],

    },
    address: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 1500
    },
    createdAt: {
        type: Date,
        required: false,
        default: Date.now,
    },
});


const Order = mongoose.model('Order', orderSchema);


function validateOrder(order) {
    const schema = {
        FullName: Joi.string().min(2).required(),
        YourGoods: Joi.string().min(4).required(),
        Amount: Joi.number().required(),
        state: Joi.string().required(),
        address: Joi.string().min(5).required(),
        createdAt: Joi.date()
    };
    return Joi.validate(order, schema);
}
exports.orderSchema = orderSchema;
exports.Order = Order; 
exports.validate = validateOrder;