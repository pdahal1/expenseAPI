const mongoose = require('mongoose');


var Expense = mongoose.model('Expense', {
    catagory: { type: String },
    where: { type: String },
    amount: { type: Number }
    
}); 

module.exports = { Expense };