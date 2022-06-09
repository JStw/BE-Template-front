import { Component } from '@angular/core';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-find-best-profession',
  templateUrl: './best-profession.component.html'
})
export class BestProfessionComponent {
  result: any;

  constructor(public api: ApiService) {
  }

  async findBestProfession(start: string, end: string): Promise<void> {
    this.api.findBestProfession(start, end).then((result: any) => {
      if (!result.body) {
        alert('No profession found!');
      } else {
        this.result = result.body;
      }
    }).catch(err => {
      if (err.status === 401) {
        alert('You need to select an admin profile!');
      } else if (err.status === 500) {
        alert('An error occurred: ' + err.body.error)
      }
    })
  }
}
