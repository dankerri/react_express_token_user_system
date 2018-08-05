var mysql = require('mysql');

// Config connection
var pool = mysql.createPool({
	connectionLimit: 10,
	host: 'localhost',
	user: 'danker',
	password: 'cctv..p,q',
	database: 'user_system',
});

exports.checkUser = function checkUser(username, password) {

	const table = 'users';	
	var sql = "SELECT * FROM `"+table+
						"` WHERE  user_name = '" +username+ "' && password='" +password+ "' limit 1";

	const checkResult = new Promise((resolve, reject)=>{
		pool.query(sql, (err, row)=>{
			if (err)  throw err;
			resolve(! (row.length === 0) );
		})
	});

	return checkResult;
}

exports.registerUser = function registerUser() {
	return true;
}

// module.exports = {
// 	checUser: checkUser(),
// 	registerUser: registerUser()
// }
// module.exports = checkUser;