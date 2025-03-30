import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ أضف
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, DatePipe],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  data: any = []
  $data: any = []

  setVirtualData() {
    for(let data=0; data < 20; data++) {
      let des: any = ''
      for(let i=0; i<8; i++) {
        des += `
      <h1 class="text-red-500">ziad shalaby</h1>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Debitis odit autem est? Ipsam quod facilis cupiditate sunt quae officia
      consequatur ipsa, adipisci harum laudantium cumque ipsum alias! Illum,
      consectetur cum?`
      }
      let model: any = {
        "id": data+1,
        "title": "Project "+(data+1),
        "description": `${des}`,
        "author": {
          "id": data+1,
          "username": data%2 == 0 ? "ziad" : "ahmed",
          "img": "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?cs=srgb&dl=pexels-sulimansallehi-1704488.jpg&fm=jpg"
        },
        "created_at": "3/30/2025",
        "status": data%2 ==0 ? "Ongoing" : "Done"
      }
      this.data.push(model);
    }
    this.$data =  this.data;
  }

  constructor() {
    this.setVirtualData()
  }

  filters = [
    {
      "filter": 'All',
      "count": 20,
    },
    {
      "filter": 'Created',
      "count": 0,
    },
    {
      "filter": 'Done',
      "count": 10,
    }, 
    {
      "filter": 'Ongoing',
      "count": 10,
    }, 
    {
      "filter": 'Invited',
      "count": 10,
    }, 
  ];
  activeFilter = 'All';

  filterData(filter: string, fromSearch: boolean = false) {
    this.activeFilter = filter

    if(fromSearch) {
      this.$data = this.data.filter((e: any) => e.title.includes(filter));
      this.activeFilter = ''
      return
    }

    if(filter == "All" || filter == "Invited") {
      this.$data = this.data;
      return;
    }
    this.$data = this.data.filter((e: any) => e.status === filter);
  }

  startSearch() {
    this.filterData(this.searchValue, true);
  }
  searchValue: any = ''
  
  PSetting: number = 0
  togglePSetting(id: number) {
    if(this.PSetting == id) {
      this.PSetting = 0;
      return;
    }
    this.PSetting = id
  }
}
