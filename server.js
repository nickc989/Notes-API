

var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();
var Note = require('./app/models/note');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;
var router = express.Router();

router.use(function(req, res, next) {
    next();
});


router.route('/notes')

	.get(function(req, res) {
		var searchVal = req.query.search;
		if (searchVal) 
		{
			console.log("Searching notes for: '" + searchVal + "'");
			
			var regex = new RegExp(".*"+searchVal+".*", "g");
			Note.find({body: regex}).find(function(error, notes) {
				if (error)
					res.send(error);

				res.json(notes);
			});
		}
		else
		{
			Note.find(function(error, notes) {
				if (error)
					res.send(error);

				res.json(notes);
			});
		} 
	})
	
	.post(function(req, res) {	
		var note = new Note();
		note.body = req.body.body;
		
		console.log("Creating note: " + req.body.body);
		note.save(function(error) {
			if (error)
				res.send(error);
			
			res.json({ message: "New note successfully created (id:" + note.id + ", body:" + note.body + ")" });
		});
	})
	
router.route('/notes/:id')
	.get(function(req, res) {
        Note.findById(req.params.id, function(error, note) {
            if (error)
                res.send(error);
            res.json(note);
        });
	})
	
	.put(function(req, res) {
        Note.findById(req.params.id, function(error, note) {
            if (error)
                res.send(error);
			
			note.body = req.body.body
			
			console.log("Updating note: " + req.body.body);
			note.save(function(error) {
				if (error)
					res.send(error);
				res.json({ message: "Note successfully updated (id:" + note.id + ", body:" + note.body + ")" });
			});	
        });  
	})
	
	.delete(function(req, res) {
        Note.remove({
            _id: req.params.id
        }, function(error, note) {
            if (error)
                res.send(error);

			res.json({ message: "Note successfully deleted (id:" + req.params.id + ")" });
        });  
	})

app.use('/api', router);

app.listen(port);
console.log('Notes API opened on port: ' + port);








