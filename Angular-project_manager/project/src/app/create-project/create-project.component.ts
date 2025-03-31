import { Component } from '@angular/core';
// import { marked } from 'marked';

@Component({
  selector: 'app-create-project',
  standalone: true,
  imports: [],
  templateUrl: './create-project.component.html',
  styleUrl: './create-project.component.css'
})
export class CreateProjectComponent {
  markdownContent: string = `# Welcome to My Project  
This is a **README** editor 
- Type Markdown on the left  
- See the preview on the right`

  // getHtmlContent(): string {
  //   return marked.parse(this.markdownContent); // تحويل Markdown إلى HTML
  // }
}
