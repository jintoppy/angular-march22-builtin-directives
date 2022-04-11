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

  newName = '';
  newAge = '';

  users: User[] = [
    {name: 'Vijay', age: 10},
    {name: 'Ajith', age: 20}
  ];

  onAdd(){
    const newUser = {
      name: this.newName,
      age: parseInt(this.newAge)
    };
    this.users = [...this.users, newUser];
    this.newAge = '';
    this.newName = '';
  }

  onUserClick(userIndex: number){
    this.selectedUser = this.users[userIndex];
  }
  
}


//tagName
//class <-> template 
