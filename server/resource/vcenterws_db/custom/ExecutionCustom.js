
const app = require('../../../app.js');
const db_vcenterws_db = require('../../../db/vcenterws_db_schema.js');
const logger = require('../../../logger.js');
const handleError = require('../../../security/util.js').handleError;
const properties = require('../../../properties.js');


// start documentation
/*
 * SCHEMA DB Execution
 * 
	{
		//RELATIONS
		
		
		//EXTERNAL RELATIONS
		
		Script: {
			type: Schema.ObjectId,
			ref : "Execution"
		},
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


