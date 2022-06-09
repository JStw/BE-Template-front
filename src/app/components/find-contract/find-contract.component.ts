import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-find-contract',
  templateUrl: './find-contract.component.html'
})
export class FindContractComponent {
  contract: any;

  constructor(public api: ApiService) {}

  async findContract(id: string): Promise<void> {
    this.api.findContract(id).then((res: any) => {
      if (res.status === 204) {
        alert('Contract id ' + id + ' not found!');
      } else {
        this.contract = res.body;
      }

    }).catch(err => {
      if (err.status === 500) {
        alert('An error occurred: ' + err.body.error)
      }
    })
  }
}
