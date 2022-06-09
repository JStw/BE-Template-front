import { Component } from '@angular/core';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-find-best-clients',
  templateUrl: './best-clients.component.html'
})
export class BestClientsComponent {
  clients: any = [];

  constructor(public api: ApiService) {
  }

  async findBestClients(start: string, end: string, limit = '2'): Promise<void> {
    this.api.findBestClients(start, end, limit).then((res: any) => {
      if (!res.body.length) {
        alert('No profession found!');
      } else {
        this.clients = res.body;
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
