const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schemaModel = new Schema({
    title : { type : String },
    brief : { type : String },
    lick : { type : Number},
    Fabulous : { type : Number },
    ueditor : { type : String },
    comment : { type : Array },
    time : { type : Date }
},{ collection : 'list' })

module.exports = {
	getModel : function() {
		return mongoose.model('schemaModel',schemaModel);
	}
}