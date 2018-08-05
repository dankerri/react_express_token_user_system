var checkUser = require('./db.js');

checkUser('danker', '1234567')
.then(result => {
	console.log(result);
});
