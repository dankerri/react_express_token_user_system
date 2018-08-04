var express = require('express');
var bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');
var cors = require('cors');

var app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
	res.send({
		message: 'welcome to the test'
	});
});

app.get('/protected', verifyToken, (req,res)=> {
	jwt.verify(req.token, 'secretkey', (err, authData)=>{
		if(err) {
			res.sendStatus(403);
		} else {
			res.send({
				message: 'Congratulations that you get here',
				data: authData
			});
		}
	});
});

app.post('/login', (req, res)=>{
	// I will add mysql check later, bodyParser can be used in here.
	// req.body.name, req.body.password.
	// Add database check here
	/*
	
	*/

	function checkUser(username, password) {
		var user = {
			username: username,
			password: password,
			email: 'itrrion@gmail.com'
		}

		return user;
	}
	var user = checkUser(req.body.username, req.body.password);

	jwt.sign(user, 'secretkey', (err, token)=> {
		res.send({
			token
		});
	});

	//just for test
	console.log(
		'Login: '+
		req.body.username+
		', '+
		req.body.password+
		','+
		Date()
	);
});

function verifyToken(req, res, next) {
	// headers[Authorization] should be upper or lower?
	const bearerHeader = req.headers['authorization'];
	if( typeof bearerHeader !== 'undefined') {
		const bearer = bearerHeader.split(' ');
		const bearerToken = bearer[1];
		req.token = bearerToken;
		next();
	} else {
		res.send({
			message: 'error happened at verified'
		});
	}
}

app.listen(3000, ()=>{
	console.log('running on 3000');
});