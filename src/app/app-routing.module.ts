import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetContractComponent } from './components/get-contracts/get-contract.component';
import { FindContractComponent } from './components/find-contract/find-contract.component';
import { GetJobsUnpaidComponent } from './components/jobs-unpaid/get-jobs-unpaid.component';
import { PayJobComponent } from './components/pay-job/pay-job.component';
import { BestProfessionComponent } from './components/admin/best-profession/best-profession.component';
import { BestClientsComponent } from './components/admin/best-clients/best-clients.component';
import { BalanceComponent } from './components/balance/balance.component';

const routes: Routes = [
  {path: 'contracts', component: GetContractComponent},
  {path: 'find-contract', component: FindContractComponent},
  {path: 'jobs-unpaid', component: GetJobsUnpaidComponent},
  {path: 'pay-job', component: PayJobComponent},
  {path: 'balance', component: BalanceComponent},
  {path: 'admin/find-best-profession', component: BestProfessionComponent},
  {path: 'admin/find-best-clients', component: BestClientsComponent},
  {
    path: '**',
    redirectTo: '/contracts',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
