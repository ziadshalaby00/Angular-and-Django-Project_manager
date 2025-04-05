import { Component } from '@angular/core';
import { VirtualiService } from '../virtual-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from '../project-id.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-tasks',
    imports: [CommonModule],
    templateUrl: './tasks.component.html',
    styleUrl: './tasks.component.css'
})
export class TasksComponent {
    data: any = []
    project_id: any
    item: any = []

    constructor(
        private route: ActivatedRoute, 
        private router: Router, 
        private myVirtualData: VirtualiService,
        private projectService: ProjectService
    ) {}

    ngOnInit(): void {
        this.data = this.myVirtualData.setVirtuali();
        
        this.project_id = this.projectService.getProjectId();
        this.item = this.data.filter((p: any) => p.id == this.project_id)[0];
    }

    currentTask: boolean = false
    openTask() {

    }

    doneTask(task_id: number, status: boolean) {
        let task: any = this.item.tasks.filter((t: any) => t.id === task_id)
        if(task) {
            task = task[0]
            task.is_done = status
            task.done_by = {
                "id": 1,
                "username": `ziad shalaby ${1}`,
                "img": "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?cs=srgb&dl=pexels-sulimansallehi-1704488.jpg&fm=jpg",
            }
        }
    }

    addTask: boolean = false
    openAddTask() {
        this.addTask = !this.addTask
    }

    isOpen = false;
    toggleDropdown() {
        this.isOpen = !this.isOpen;
    }

    selectedPerson: any = false
    selectPerson(person: any) {
        this.selectedPerson = person;
        this.isOpen = false;
    }
}