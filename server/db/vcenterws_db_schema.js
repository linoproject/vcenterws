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
  * Execution
  */
db_vcenterws_db_schema.Execution = new mongoose.Schema({
	//RELATIONS
	Script: {
		type: Schema.ObjectId,
		ref : "Script"
	},
	user: {
		type: Schema.ObjectId,
		ref : "User"
	},
	
	
	//EXTERNAL RELATIONS
	/*
	*/
});


 /**
  * Results
  */
db_vcenterws_db_schema.Results = new mongoose.Schema({
	data: {
		type: 'String'
	},
	path: {
		type: 'String'
	},
	//RELATIONS
	
	
	//EXTERNAL RELATIONS
	/*
	*/
});


 /**
  * Script
  */
db_vcenterws_db_schema.Script = new mongoose.Schema({
	Name: {
		type: 'String'
	},
	Path: {
		type: 'String'
	},
	//RELATIONS
	
	
	//EXTERNAL RELATIONS
	/*
	Script: {
		type: Schema.ObjectId,
		ref : "Execution"
	},
	*/
});


 /**
  * User
  */
db_vcenterws_db_schema.User = new mongoose.Schema({
	infrastructure: {
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
	/*
	user: {
		type: Schema.ObjectId,
		ref : "Execution"
	},
	*/
});



// Import schema customization
require('./vcenterws_db_customSchema.js');
var vcenterws_db_model = require('./vcenterws_db_crud.js');

// Declare mongoose model

db_vcenterws_db.Execution = vcenterws_db_model.connection.model('Execution', db_vcenterws_db_schema.Execution );
db_vcenterws_db.Results = vcenterws_db_model.connection.model('Results', db_vcenterws_db_schema.Results );
db_vcenterws_db.Script = vcenterws_db_model.connection.model('Script', db_vcenterws_db_schema.Script );
db_vcenterws_db.User = vcenterws_db_model.connection.model('User', db_vcenterws_db_schema.User );

module.exports = db_vcenterws_db;

// Create ADMIN user if does not exist
createUser.createUser();
