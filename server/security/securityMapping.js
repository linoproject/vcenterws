/**

  _____                      _              _ _ _     _   _     _        __ _ _      
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |     
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___ 
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|
                                                                                     
                                                                                   
 *  DO NOT EDIT HIS FILE!!
 * 
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 * 
 */

exports.authMapping = {
    //STATIC SECURITY
    'POST - /api/changePassword$': [],
    'POST - /api/users/$': ["ADMIN"],
    'POST - /api/users/([^/])+$': ["ADMIN"],
    'GET - /api/users/$': ["ADMIN"],
    'GET - /api/users/([^/])+$': ["ADMIN"],
    'POST - /api/users/([^/])+/changePassword': ["ADMIN"],

    //YOUR SECURITY MAPPING
	'POST - /api/executions/*$' : [],
	'DELETE - /api/executions/([^/])+$' : [],
	'GET - /api/executions/findByScript/([^/])+$' : [],
	'GET - /api/executions/findByuser/([^/])+$' : [],
	'GET - /api/executions/([^/])+$' : [],
	'GET - /api/executions/*$' : [],
	'POST - /api/executions/([^/])+$' : [],
	'POST - /api/results/*$' : [],
	'DELETE - /api/results/([^/])+$' : [],
	'GET - /api/results/([^/])+$' : [],
	'GET - /api/results/*$' : [],
	'POST - /api/results/([^/])+$' : [],
	'POST - /api/scripts/*$' : [],
	'DELETE - /api/scripts/([^/])+$' : [],
	'GET - /api/scripts/([^/])+$' : [],
	'GET - /api/scripts/*$' : [],
	'POST - /api/scripts/([^/])+$' : [],
	'POST - /api/Users/*$' : [],
	'DELETE - /api/Users/([^/])+$' : [],
	'GET - /api/Users/([^/])+$' : [],
	'GET - /api/Users/*$' : [],
	'POST - /api/Users/([^/])+$' : [],
	

}
