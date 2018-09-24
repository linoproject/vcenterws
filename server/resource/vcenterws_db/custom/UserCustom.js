
const app = require('../../../app.js');
const db_vcenterws_db = require('../../../db/vcenterws_db_schema.js');
const logger = require('../../../logger.js');
const handleError = require('../../../security/util.js').handleError;
const properties = require('../../../properties.js');


// start documentation
/*
 * SCHEMA DB User
 * 
	{
		infrastrcture: {
			type: 'String', 
			required : true
		},
		password: {
			type: 'String', 
			required : true
		},
		role: {
			type: 'String'
		},
		username: {
			type: 'String', 
			required : true
		},
		//RELATIONS
		
		
		//EXTERNAL RELATIONS
		
		user: {
			type: Schema.ObjectId,
			ref : "Execution"
		},
		
	}
 * 
 * 
 * 
 * Custom APIs
 *
 */
// end documentation

// INSERT HERE YOURS CUSTOM METHODS



/**
 * UserService.edit
 *   @description Save user
 *   @returns object
 *
 */
app.post(properties.api + '/Users/:id', function (req, res) {
	let user = req.body;
	delete user.password;

	db_vcenterws_db.User.findByIdAndUpdate(req.params.id, user, {
		'new': true
	}, function (err, obj) {
		if (err) return handleError(err, res);
		res.send(obj);
	});
});

/**
 * UserService.changePassword
 *   @description Change password of user from admin
 *   @returns object
 *
 */
app['post'](properties.api + '/Users/:id/changePassword', function (req, res) {

	db_vcenterws_db.User.findOne({
		username: req.user.username,
		password: req.body.passwordAdmin
	}).exec(function (err, user) {
		if (err) return handleError(err, res);
		if (!user) return handleError("Admin password not valid", res);

		db_vcenterws_db.User.findByIdAndUpdate(req.params.id, {
			password: req.body.passwordNew
		}, {
			'new': true
		}, function (err, obj) {
			if (err) return handleError(err, res);
			res.send({
				success: true
			});
		});

	});
});


