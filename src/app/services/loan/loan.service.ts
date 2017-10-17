import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Loan} from '../../models/loan';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class LoanService {
  private baseUrl = 'http://localhost:8080/api';

  constructor(private http: Http) {
  }

  getLoans(): Observable<Loan[]> {
    const url = `${this.baseUrl}/events`;
    return this.http.get(url)
      .map(response => response.json() as Loan[]);
  }

  getLoan(id: number): Observable<Loan> {
    const url = `${this.baseUrl}/search/${id}`;
    return this.http.get(url)
      .map(response => response.json() as Loan);
  }

}
