import { Component } from '@angular/core';

@Component({
  selector: 'app-description',
  standalone: true,
  imports: [],
  templateUrl: './description.component.html',
  styleUrl: './description.component.css'
})
export class DescriptionComponent {
  content: string = `    A full-stack Django and Angular website is a project management system. 
    The platform includes registration, login, a homepage, 
    and a profile page where users can edit their personal information. 
    Once logged in, users are directed to a page displaying all their projects, 
    along with an invitations page and a page for creating new projects.

    Users can click on any project to view its details, 
    leading them to the project page, 
    which consists of four main sections: Description, Tasks, Notes, Members
    
    Only the project owner can create and edit the description and tasks, 
    while any team member can complete assigned tasks and submit notes.
    
    Technologies Used:
        Frontend: Angular, Tailwind CSS, FontAwesome
        Backend: Django REST Framework
    
    Concepts Implemented:
        Pagination, Auth & Permission, REST API, Filtering, CRUD Operations`

    constructor() {
      // this.content = this.setBold(this.content)
    }
}
