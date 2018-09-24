import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
// Import Services
import { ScriptService } from '../../services/script.service';
// Import Models
import { Script } from '../../domain/vcenterws_db/script';

// START - USED SERVICES
/**
* ScriptService.delete
*	@description CRUD ACTION delete
*	@param ObjectId id Id
*
* ScriptService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component shows a list of Script
 * @class ScriptListComponent
 */
@Component({
    selector: 'app-script-list',
    templateUrl: './script-list.component.html',
    styleUrls: ['./script-list.component.css']
})
export class ScriptListComponent implements OnInit {
    list: Script[];
    search: any = {};
    idSelected: string;
    constructor(
        private scriptService: ScriptService,
    ) { }

    /**
     * Init
     */
    ngOnInit(): void {
        this.scriptService.list().subscribe(list => this.list = list);
    }

    /**
     * Select Script to remove
     *
     * @param {string} id Id of the Script to remove
     */
    selectId(id: string) {
        this.idSelected = id;
    }

    /**
     * Remove selected Script
     */
    deleteItem() {
        this.scriptService.remove(this.idSelected).subscribe(data => this.list = this.list.filter(el => el._id !== this.idSelected));
    }

}
