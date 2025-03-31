import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; // ✅ أضف
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-project-info',
  standalone: true,
  imports: [FormsModule, RouterModule, CommonModule, RouterOutlet],
  templateUrl: './project-info.component.html',
  styleUrl: './project-info.component.css'
})
export class ProjectInfoComponent {
  data: any = []
  item: any = {}

  setVirtualData() {
    for(let data=0; data < 9; data++) {
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
  }

  constructor(private route: ActivatedRoute, private router: Router) {
    this.setVirtualData()
  }

  ngOnInit(): void {
    this.router.navigate(['Description'], { relativeTo: this.route });

    this.item = this.data.filter((p: any) => p.id == this.route.snapshot.paramMap.get('id'))[0]
    console.log(this.item)
  }

  PSetting: number = 0
  togglePSetting(id: number) {
    if(this.PSetting == id) {
      this.PSetting = 0;
      return;
    }
    this.PSetting = id
    console.log(id)
  }

  sideItem: string = 'Description'

  Side: Boolean = false
  toggleSide() {
    this.Side = !this.Side
  }
}
