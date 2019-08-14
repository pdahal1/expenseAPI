const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/Expense', (err) => {
    if (!err) {
        console.log('connected successfully');
    } else {
        console.log('cannot connect to the database' + JSON.stringify(err, undefined, 2));
    }
});

module.exports =  mongoose ;