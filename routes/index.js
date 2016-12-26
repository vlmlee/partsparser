var express = require('express');
var router = express.Router();
var spawn = require('child_process').spawn;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Parse your sentences into parts of speech' });
});

router.post('/transform', (req, res) => {
	const data = req.body.data;
	const child = spawn('node', ['./bin/babel-pos-cli.js', data]);
    child.stdout.on('data', function(data) {
        res.setHeader('Content-Type', 'text/plain');
        res.send(data);
        child.kill();
    });
});

module.exports = router;