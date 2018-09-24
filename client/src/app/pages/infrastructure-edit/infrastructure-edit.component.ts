// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// Import Services
import { InfrastructureService } from '../../services/infrastructure.service';
import { UserService } from '../../services/user.service';
// Import Models
import { Infrastructure } from '../../domain/vcenterws_db/infrastructure';
import { User } from '../../domain/vcenterws_db/user';
import { User } from '../../domain/vcenterws_db/user';

// START - USED SERVICES
/**
* InfrastructureService.create
*	@description CRUD ACTION create
*
* InfrastructureService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id 
*
* UserService.list
*	@description CRUD ACTION list
*
* InfrastructureService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a Infrastructure
 */
@Component({
    selector: 'app-infrastructure-edit',
    templateUrl: 'infrastructure-edit.component.html',
    styleUrls: ['infrastructure-edit.component.css']
})
export class InfrastructureEditComponent implements OnInit {
    item: Infrastructure;
    listInfrastructure: Infrastructure[];
    listUser: User[];
    externalUser: User[];
    model: Infrastructure;
    formValid: Boolean;

    constructor(
    private infrastructureService: InfrastructureService,
    private userService: UserService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new Infrastructure();
        this.externalUser = [];
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.infrastructureService.get(id).subscribe(item => this.item = item);
                this.userService.findByInfrastructure(id).subscribe(list => this.externalUser = list);
            }
            // Get relations
            this.userService.list().subscribe(list => this.listUser = list);
        });
    }

    /**
     * Check if an User is in  user
     *
     * @param {string} id Id of User to search
     * @returns {boolean} True if it is found
     */
    containUser(id: string): boolean {
        if (!this.item.user) return false;
        return this.item.user.indexOf(id) !== -1;
    }

    /**
     * Add User from Infrastructure
     *
     * @param {string} id Id of User to add in this.item.user array
     */
    addUser(id: string) {
        if (!this.item.user)
            this.item.user = [];
        this.item.user.push(id);
    }

    /**
     * Remove an User from a Infrastructure
     *
     * @param {number} index Index of User in this.item.user array
     */
    removeUser(index: number) {
        this.item.user.splice(index, 1);
    }

    /**
     * Save Infrastructure
     *
     * @param {boolean} formValid Form validity check
     * @param Infrastructure item Infrastructure to save
     */
    save(formValid: boolean, item: Infrastructure): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.infrastructureService.update(item).subscribe(data => this.goBack());
            } else {
                this.infrastructureService.create(item).subscribe(data => this.goBack());
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



