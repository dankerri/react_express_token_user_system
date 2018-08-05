var express = require('express');
var bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');
var cors = require('cors');

//My package
var db = require('./db.js');
var checkUser = db.checkUser;
var registerUser = db.registerUser;

//Config
var app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//Router
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

app.post('/login', (req, res)=>{
	checkUser(req.body.username, req.body.password)
	.then(result=>{
		if ( result ) {
			var user = {
				username: req.body.username,
				email: 'itrrion@gmail.com'
			}
			jwt.sign(user, 'secretkey', (err, token)=> {
				res.send({
					token
				});
			});
		} else {
			res.send({
				message: 'username or password wrong'
			});
		}
	})
	.catch(e=>{
		console.log(e);
	});

	console.log( req.body.username + ' login at ' + Date() );
});

app.get('/', (req, res) => {
	res.send({
		message: 'welcome to the test'
	});
});
app.listen(3000, ()=>{
	console.log('running on 3000');
});