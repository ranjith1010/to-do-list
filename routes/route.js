var express = require('express');
var router = express.Router();

const Task = require('../models/tasks');

router.use((req,res,next) => {
	console.log('Request received at '+Date.now());
	next();
});

router.get('/tasks', (req,res) => {
	Task.find((err, tasks) => {
		res.json(tasks);
	});
});

router.post('/task', (req,res) => {
	let newTask = new Task({
		task: req.body.task,
		status: req.body.status,
    	due: req.body.due,
    	category: req.body.category,
    	labels: req.body.labels,
    	priority: req.body.priority
	});

	newTask.save((err, task) =>{
		if(err){
			res.json({ msg : 'Failed to Add Task'+err});
		}
		else{
			res.json({ msg : 'Task Added Successfully'});
		}
	});
});

router.delete('/task/:id', (req,res) => {
	Task.remove({_id: req.params.id}, (err, result) => {
		if(err){
			res.json(err);
		}
		else{
			res.json(result);
		}
	});
});

router.get('/', (req,res) => {
	res.send('API works!!');
});

router.all('*', (req,res) => {
	res.send('404 - Page Not Found');
});

module.exports = router;