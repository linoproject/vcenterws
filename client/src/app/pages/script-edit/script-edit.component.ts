// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// Import Services
import { ScriptService } from '../../services/script.service';
import { ExecutionService } from '../../services/execution.service';
// Import Models
import { Script } from '../../domain/vcenterws_db/script';
import { Execution } from '../../domain/vcenterws_db/execution';

// START - USED SERVICES
/**
* ScriptService.create
*	@description CRUD ACTION create
*
* ExecutionService.findByScript
*	@description CRUD ACTION findByScript
*	@param Objectid key Id della risorsa Script da cercare
*
* ScriptService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id 
*
* ScriptService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a Script
 */
@Component({
    selector: 'app-script-edit',
    templateUrl: 'script-edit.component.html',
    styleUrls: ['script-edit.component.css']
})
export class ScriptEditComponent implements OnInit {
    item: Script;
    listScript: Script[];
    externalExecution: Execution[];
    model: Script;
    formValid: Boolean;

    constructor(
    private scriptService: ScriptService,
    private executionService: ExecutionService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new Script();
        this.externalExecution = [];
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.scriptService.get(id).subscribe(item => this.item = item);
                this.executionService.findByScript(id).subscribe(list => this.externalExecution = list);
            }
            // Get relations
        });
    }


    /**
     * Save Script
     *
     * @param {boolean} formValid Form validity check
     * @param Script item Script to save
     */
    save(formValid: boolean, item: Script): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.scriptService.update(item).subscribe(data => this.goBack());
            } else {
                this.scriptService.create(item).subscribe(data => this.goBack());
            } 
        }
    }

    /**
     * Go Back
     */
    goBack(): void {
        this.location.back();
    }


}



