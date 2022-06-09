import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-get-jobs-unapid',
  templateUrl: './get-jobs-unpaid.component.html'
})
export class GetJobsUnpaidComponent {
  jobs: any[] = [];

  constructor(public api: ApiService) {}

  async getJobsUnpaid(): Promise<void> {
    this.api.getJobsUnpaid().then((res: any) => {
      if (!res.body.length) {
        alert('No jobs to paid!');
      } else {
        this.jobs = res.body;
      }
    }).catch(err => {
      if (err.status === 500) {
        alert('An error occurred: ' + err.body.error)
      }
    })
  }
}
