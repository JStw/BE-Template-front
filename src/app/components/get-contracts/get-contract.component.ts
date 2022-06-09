import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-get-contract',
  templateUrl: './get-contract.component.html'
})
export class GetContractComponent {
  contracts: any[] = [];

  constructor(public api: ApiService) {}

  async getContracts(): Promise<void> {
    this.api.getContracts().then((res: any) => {
      if (!res.body.length) {
        alert('No contracts available!');
      } else {
        this.contracts = res.body;
      }
    }).catch(err => {
      if (err.status === 500) {
        alert('An error occurred: ' + err.body.error)
      }
    })
  }
}
