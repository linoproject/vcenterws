import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
// Import Services
import { InfrastructureService } from '../../services/infrastructure.service';
// Import Models
import { Infrastructure } from '../../domain/vcenterws_db/infrastructure';

// START - USED SERVICES
/**
* InfrastructureService.delete
*	@description CRUD ACTION delete
*	@param ObjectId id Id
*
* InfrastructureService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component shows a list of Infrastructure
 * @class InfrastructureListComponent
 */
@Component({
    selector: 'app-infrastructure-list',
    templateUrl: './infrastructure-list.component.html',
    styleUrls: ['./infrastructure-list.component.css']
})
export class InfrastructureListComponent implements OnInit {
    list: Infrastructure[];
    search: any = {};
    idSelected: string;
    constructor(
        private infrastructureService: InfrastructureService,
    ) { }

    /**
     * Init
     */
    ngOnInit(): void {
        this.infrastructureService.list().subscribe(list => this.list = list);
    }

    /**
     * Select Infrastructure to remove
     *
     * @param {string} id Id of the Infrastructure to remove
     */
    selectId(id: string) {
        this.idSelected = id;
    }

    /**
     * Remove selected Infrastructure
     */
    deleteItem() {
        this.infrastructureService.remove(this.idSelected).subscribe(data => this.list = this.list.filter(el => el._id !== this.idSelected));
    }

}
