/**
 *
 *
  _____                      _              _ _ _     _   _     _        __ _ _
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|

 * DO NOT EDIT THIS FILE!!
 *
 *  FOR CUSTOMIZE resultsBaseService PLEASE EDIT ../results.service.ts
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */
 // DEPENDENCIES
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

// CONFIG
import { environment } from '../../../environments/environment';

// MODEL
import { Results } from '../../domain/vcenterws_db/results';

/**
 * THIS SERVICE MAKE HTTP REQUEST TO SERVER, FOR CUSTOMIZE IT EDIT ../Results.service.ts
 */

/*
 * SCHEMA DB Results
 *
	{
		data: {
			type: 'String'
		},
		path: {
			type: 'String'
		},
		//RELATIONS
		//EXTERNAL RELATIONS
	}
 *
 */
@Injectable()
export class ResultsBaseService {

    contextUrl: string = environment.endpoint + '/results';
    constructor(
        protected http: HttpClient
        ) { }

    // CRUD METHODS

    /**
    * ResultsService.create
    *   @description CRUD ACTION create
    *
    */
    create(item: Results): Observable<Results> {
        return this.http
            .post<Results>(this.contextUrl, item)
            .pipe(map(data => data));
    }

    /**
    * ResultsService.delete
    *   @description CRUD ACTION delete
    *   @param ObjectId id Id
    *
    */
    remove(id: string): Observable<void> {
        return this.http
            .delete<void>(this.contextUrl + '/' + id)
            .pipe(map(data => data));
    }

    /**
    * ResultsService.get
    *   @description CRUD ACTION get
    *   @param ObjectId id Id 
    *
    */
    get(id: string): Observable<Results> {
        return this.http
            .get<Results>(this.contextUrl + '/' + id)
            .pipe(map(data => data));
    }

    /**
    * ResultsService.list
    *   @description CRUD ACTION list
    *
    */
    list(): Observable<Results[]> {
        return this.http
            .get<Results[]>(this.contextUrl)
            .pipe(map(data => data));
    }

    /**
    * ResultsService.update
    *   @description CRUD ACTION update
    *   @param ObjectId id Id
    *
    */
    update(item: Results): Observable<Results> {
        return this.http
            .post<Results>(this.contextUrl + '/' + item._id, item)
            .pipe(map(data => data));
    }


    // Custom APIs

}
