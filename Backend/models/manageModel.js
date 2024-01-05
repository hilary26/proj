const mongoose = require('mongoose');
const Joi = require('joi');

const manageSchema = new mongoose.Schema({
    FullName: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 1500
    },
    YourLocation: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 1500
    },
    Email: {
        type: String,
        required: true,
        
    },
    Gender: {
        type: String,
        required: true,
        enum: ['Male', 'Female', 'Others' ],

    },
    Complaints: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 1500
    },
    createdAt: {
        type: Date,
        required: false,
        default: Date.now,
    },
});


const Manage = mongoose.model('Manage', manageSchema);


function validateManage(manage) {
    const schema = {
        FullName: Joi.string().min(2).required(),
        YourLocation: Joi.string().min(2).required(),
        Email: Joi.string().required(),
        Gender: Joi.string().required(),
        Complaints: Joi.string().min(2).required(),
        createdAt: Joi.date()
    };
    return Joi.validate(manage, schema);
}
exports.manageSchema = manageSchema;
exports.Manage = Manage; 
exports.validate = validateManage;