// leaderRouter.js //

// require all modules //
var express = require('express');
var bodyParser = require('body-parser');

// set express router and call body-parser //
var leaderRouter = express.Router();
leaderRouter.use(bodyParser.json());

// for all collection requests //
leaderRouter.route('/')
.all(function(req,res,next) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  next();
})

.get(function(req,res,next){
  res.end('Will send all the leaders to you!');
})

.post(function(req, res, next){
  res.end('Will add the leaders: ' + req.body.name + ' with details: ' + req.body.description);    
})

.delete(function(req, res, next){
  res.end('Deleting all leaders');
});

// for collection requests with IDs //
leaderRouter.route('/:id')
.all(function(req,res,next) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  next();
})

.get(function(req,res,next){
  res.end('Will send details of the leader: ' + req.params.id +' to you!');
})

.put(function(req, res, next){
  res.write('Updating the leader: ' + req.params.id + '\n');
  res.end('Will update the leader: ' + req.body.name + ' with details: ' + req.body.description);
})

.delete(function(req, res, next){
  res.end('Deleting leader: ' + req.params.id);
});

// export module //
module.exports = leaderRouter;