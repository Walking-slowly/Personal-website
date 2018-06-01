const mongoose = require('mongoose')
const url = 'mongodb://127.0.0.1:27017/personal'

mongoose.connect(url, {}, function(err){
    if(err) {
        console.log('connection error:',connectionString + err);
    }else{
        console.log('connection success');
    }
})