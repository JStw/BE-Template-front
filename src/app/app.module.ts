import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { GetContractComponent } from './components/get-contracts/get-contract.component';
import { HttpClientModule } from '@angular/common/http';
import { FindContractComponent } from './components/find-contract/find-contract.component';
import { GetJobsUnpaidComponent } from './components/jobs-unpaid/get-jobs-unpaid.component';
import { PayJobComponent } from './components/pay-job/pay-job.component';
import { BestProfessionComponent } from './components/admin/best-profession/best-profession.component';
import { BestClientsComponent } from './components/admin/best-clients/best-clients.component';
import { BalanceComponent } from './components/balance/balance.component';

@NgModule({
  declarations: [
    AppComponent,
    GetContractComponent,
    FindContractComponent,
    GetJobsUnpaidComponent,
    PayJobComponent,
    BestProfessionComponent,
    BestClientsComponent,
    BalanceComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MatButtonModule,
    MatToolbarModule,
    AppRoutingModule,
    MatSelectModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
