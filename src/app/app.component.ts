import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular Training';
  name= '';
  email = '';

  users = [
    {name: 'Vijay', age: 10},
    {name: 'Ajith', age: 20}
  ];


  setName(e: KeyboardEvent){
    const el = (e.target) as HTMLInputElement;
    this.name = el.value;
  }

  setEmail(e: KeyboardEvent){
    const el = (e.target) as HTMLInputElement;
    this.email = el.value;
  }

  onClick(e: MouseEvent, myStr: string){
    this.title = 'My Angular Training Completed';
  }
  
}


//tagName
//class <-> template 
