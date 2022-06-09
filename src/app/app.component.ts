import { Component } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BE-Template-front';
  profiles = [{
    id: 1,
    firstName: 'Harry',
    lastName: 'Potter',
    profession: 'Wizard',
    balance: 1150,
    type: 'client'
  }, {
    id: 2,
    firstName: 'Mr',
    lastName: 'Robot',
    profession: 'Hacker',
    balance: 231.11,
    type: 'client'
  }, {
    id: 3,
    firstName: 'John',
    lastName: 'Snow',
    profession: 'Knows nothing',
    balance: 451.3,
    type: 'client'
  }, {
    id: 4,
    firstName: 'Ash',
    lastName: 'Kethcum',
    profession: 'Pokemon master',
    balance: 1.3,
    type: 'client'
  }, {
    id: 5,
    firstName: 'John',
    lastName: 'Lenon',
    profession: 'Musician',
    balance: 64,
    type: 'contractor'
  }, {
    id: 6,
    firstName: 'Linus',
    lastName: 'Torvalds',
    profession: 'Programmer',
    balance: 1214,
    type: 'contractor'
  }, {
    id: 7,
    firstName: 'Alan',
    lastName: 'Turing',
    profession: 'Programmer',
    balance: 22,
    type: 'contractor'
  }, {
    id: 8,
    firstName: 'Aragorn',
    lastName: 'II Elessar Telcontarvalds',
    profession: 'Fighter',
    balance: 314,
    type: 'contractor'
  }];

  constructor(public api: ApiService) {
  }

  changeProfile($ev: any): void {
    this.api.profile_id = $ev.value as string;
  }

  changeTargetProfile($ev: any): void {
    this.api.profile_selected_id = $ev.value as string;
  }

}
