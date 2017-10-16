import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Loan} from '../../models/loan';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class LoanService {
  private baseUrl = 'http://localhost:8088';

  constructor(private http: Http) {
  }

  getLoans(): Observable<Loan[]> {
    const url = `${this.baseUrl}/loans`;
    return this.http.get(url)
      .map(response => response.json() as Loan[]);
  }

  getLoan(id: number): Observable<Loan> {
    const url = `${this.baseUrl}/loans/${id}`;
    return this.http.get(url)
      .map(response => response.json() as Loan);
  }

}
