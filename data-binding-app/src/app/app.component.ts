import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'data-binding-app';
  count: number = 0;
  is_hidden: boolean = true;
 
  getName(): string{
    return "My Name is Otito";
  }
  
  button_pressed(): void{
    this.count++;
  }

  reset_count(): void{
    this.count = 0;
  }

  star_dblclick(): void{
    this.is_hidden = !this.is_hidden;
  }
}

