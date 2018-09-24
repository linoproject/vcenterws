
const app = require('../../../app.js');
const db_vcenterws_db = require('../../../db/vcenterws_db_schema.js');
const logger = require('../../../logger.js');
const handleError = require('../../../security/util.js').handleError;
const properties = require('../../../properties.js');


// start documentation
/*
 * SCHEMA DB Infrastructure
 * 
	{
		release: {
			type: 'String'
		},
		vc: {
			type: 'String'
		},
		//RELATIONS
		
		
		//EXTERNAL RELATIONS
		
		infrastructure: [{
			type: Schema.ObjectId,
			ref : "User"
		}],
		user: [{
			type: Schema.ObjectId,
			ref : "Infrastructure"
		}],
		
	}
 * 
 * 
 * 
 * Custom APIs
 *
 */
// end documentation

// INSERT HERE YOURS CUSTOM METHODS


