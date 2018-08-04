const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();

app.get('/api', (req, res) => {
	res.json({
		message: 'Welcome to the API'
	});
});

app.post('/api/protected', verifyToken, (req, res)=> {
	jwt.verify(req.token, 'secretkey', (err, authData)=>{
		if(err) {
			res.sendStatus(403);
		} else {
			res.json({
				message: 'Post created',
				authData
			});
		}
	});
});

app.post('/api/login', (req, res) => {
	const user = {
		id: 1,
		username: 'brad',
		email: 'brad@gmail.com'
	}

	jwt.sign(user, 'secretkey', (err, token) => {
		res.json({
			token
		});
	});
});



function verifyToken(req, res, next) {
	const bearerHeader = req.headers['authorization'];
	if(typeof bearerHeader !== 'undefined') {
		// Split at the space
    const bearer = bearerHeader.split(' ');
    // Get token from array
    const bearerToken = bearer[1];
    // Set the token
    req.token = bearerToken;
    // Next middleware
    next();
	} else {
		req.sendStatus(403);
	}
}



app.listen(3000, ()=>{
	console.log('run on port 3000');
});