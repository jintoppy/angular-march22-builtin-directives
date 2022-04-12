import { Component } from '@angular/core';

type User = {
  name:string;
  age: number;
}

type ValidationMessage = {
  isInvalid: boolean;
  message: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  selectedUser?: User;
  myVal = 'hello';
  isNewNameValid = false;
  isNewAgeValid = false;
  isAddClicked = false;
  messages = {
    name: {
      success: 'Name is valid',
      error: 'Number not allowed in name'
    },
    age: {
      success: 'Age is valid',
      error: `Age can't be less than 1`
    }
  }

  // nameErrorMsg = 'Number not allowed in name';

  newName = '';
  newAge = '';

  users: User[] = [
    {name: 'Vijay', age: 10},
    {name: 'Ajith', age: 20}
  ];

  isNameInvalid(){
    return /\d/.test(this.newName);
  }

  isAgeInvalid(){
    const newAge = parseInt(this.newAge);
    return !newAge || newAge < 1;
  }

  getValidationMessages(){
    const nameMessage = {
      isInvalid: this.isNameInvalid(),
      message:   this.isNameInvalid()? this.messages.name.error : this.messages.name.success
    };
    const ageMessage = {
      isInvalid: this.isAgeInvalid(),
      message:   this.isAgeInvalid()? this.messages.age.error : this.messages.age.success
    }
    return [nameMessage, ageMessage];
  }

  currentMessages: ValidationMessage[] = [];

  onAdd(){    
    this.isAddClicked = true;    
    this.currentMessages = this.getValidationMessages();
    if(this.isNameInvalid() || this.isAgeInvalid()){
      return;
    }
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
