import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html'
})
export class BalanceComponent {
  constructor(public api: ApiService) {}

  async deposit(amount: string): Promise<void> {
    this.api.deposit(amount, this.api.profile_selected_id).then((res: any) => {
        alert('Amount was successfully transferred');
    }).catch(err => {
      if (err.status === 400) {
        alert('Transfer impossible, reason: ' + err.body.error);
      } else if (err.status === 500) {
        alert('An error occurred: ' + err.body.error)
      }
    })
  }
}
