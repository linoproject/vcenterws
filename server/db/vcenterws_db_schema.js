/**

  _____                      _              _ _ _     _   _     _        __ _ _      
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |     
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___ 
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|
                                                                                     
                                                                                   
 *  DO NOT EDIT HIS FILE!!
 * 
 *  FOR CUSTOMIZE DB SCHEMA PLEASE EDIT db/vcenterws_db_customSchema.js
 * 
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 * 
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const createUser = require('../security/security.js');

const db_vcenterws_db_schema = [];
const db_vcenterws_db = [];

/**
 * SCHEMA DB vcenterws_db
 */



 /**
  * Infrastructure
  */
db_vcenterws_db_schema.Infrastructure = new mongoose.Schema({
	release: {
		type: 'String'
	},
	vc: {
		type: 'String'
	},
	//RELATIONS
	user: [{
		type: Schema.ObjectId,
		ref : "User"
	}],
	
	
	//EXTERNAL RELATIONS
	/*
	infrastructure: [{
		type: Schema.ObjectId,
		ref : "User"
	}],
	*/
});


 /**
  * User
  */
db_vcenterws_db_schema.User = new mongoose.Schema({
	Name: {
		type: 'String'
	},
	password: {
		type: 'String', 
		required : true
	},
	username: {
		type: 'String', 
		required : true
	},
	//RELATIONS
	infrastructure: [{
		type: Schema.ObjectId,
		ref : "Infrastructure"
	}],
	
	
	//EXTERNAL RELATIONS
	/*
	user: [{
		type: Schema.ObjectId,
		ref : "Infrastructure"
	}],
	*/
});



// Import schema customization
require('./vcenterws_db_customSchema.js');
var vcenterws_db_model = require('./vcenterws_db_crud.js');

// Declare mongoose model

db_vcenterws_db.Infrastructure = vcenterws_db_model.connection.model('Infrastructure', db_vcenterws_db_schema.Infrastructure );
db_vcenterws_db.User = vcenterws_db_model.connection.model('User', db_vcenterws_db_schema.User );

module.exports = db_vcenterws_db;

// Create ADMIN user if does not exist
createUser.createUser();
