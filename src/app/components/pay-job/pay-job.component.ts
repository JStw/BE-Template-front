import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-find-contract',
  templateUrl: './pay-job.component.html'
})
export class PayJobComponent {

  constructor(public api: ApiService) {}

  async payJob(id: string): Promise<void> {
    this.api.payJob(id).then((res: any) => {
      alert('job successfully paid!')
    }).catch(err => {
      if (err.status === 404) {
        alert('Job id ' + id + ' not found or already paid!');
      } else if (err.status === 400) {
        alert('Your balance is too low to pay this job!');
      } else if (err.status === 500) {
        alert('An error occurred: ' + err.body.error)
      }
    })
  }
}
