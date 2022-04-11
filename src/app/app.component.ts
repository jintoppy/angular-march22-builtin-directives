import { Component } from '@angular/core';

type User = {
  name:string;
  age: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  selectedUser?: User;
  myVal = 'hello';

  users: User[] = [
    {name: 'Vijay', age: 10},
    {name: 'Ajith', age: 20}
  ];

  onUserClick(userIndex: number){
    this.selectedUser = this.users[userIndex];
  }
  
}


//tagName
//class <-> template 
