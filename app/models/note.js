var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var autoIncrement = require('mongoose-auto-increment');
var connection = mongoose.connect('mongodb://notesUser:notes@ds031591.mongolab.com:31591/notes');

autoIncrement.initialize(connection);

var NoteSchema   = new Schema({
	body: String
},
{
	versionKey: false
});

NoteSchema.plugin(autoIncrement.plugin, 'Note');
module.exports = mongoose.model('Notes', NoteSchema);