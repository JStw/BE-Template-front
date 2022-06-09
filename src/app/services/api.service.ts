import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { take, timeout } from 'rxjs/operators';
import { environment } from '../../environments/environment';


@Injectable({providedIn: 'root'})
export class ApiService {
  profile_id = '';
  profile_selected_id = '';

  constructor(
    private http: HttpClient,
    protected router: Router) {
  }

  private get httpOptions(): any {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Accept: 'application/json',
        profile_id: this.profile_id.toString()
      }),
      observe: 'response'
    };

    return options;
  }

  deposit(amount: string, toUserId: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.post<any>(environment.BACKEND + '/v1/balances/deposit/' + toUserId, {amount}, this.httpOptions)
        .pipe(timeout(20000)).pipe(take(1)).subscribe(resolve, reject);
    });
  }

  findBestClients(start: string, end: string, limit: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get<any>(environment.BACKEND + '/v1/admin/best-clients?start=' + start + '&end=' + end + '&limit=' + limit, this.httpOptions)
        .pipe(timeout(20000)).pipe(take(1)).subscribe(resolve, reject);
    });
  }

  findBestProfession(start: string, end: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get<any>(environment.BACKEND + '/v1/admin/best-profession?start=' + start + '&end=' + end, this.httpOptions)
        .pipe(timeout(20000)).pipe(take(1)).subscribe(resolve, reject);
    });
  }

  payJob(id: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.post<any>(environment.BACKEND + '/v1/jobs/' + id + '/pay', {}, this.httpOptions)
        .pipe(timeout(20000)).pipe(take(1)).subscribe(resolve, reject);
    });
  }

  findContract(id: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get<any>(environment.BACKEND + '/v1/contracts/' + id, this.httpOptions)
        .pipe(timeout(20000)).pipe(take(1)).subscribe(resolve, reject);
    });
  }

  getContracts(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get<any>(environment.BACKEND + '/v1/contracts', this.httpOptions)
        .pipe(timeout(20000)).pipe(take(1)).subscribe(resolve, reject);
    });
  }

  getJobsUnpaid(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get<any>(environment.BACKEND + '/v1/jobs/unpaid', this.httpOptions)
        .pipe(timeout(20000)).pipe(take(1)).subscribe(resolve, reject);
    });
  }
}
