import {Component, OnInit} from '@angular/core';
import {LoanService} from '../services/loan/loan.service';
import {Loan} from '../models/loan';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-loan-list',
  templateUrl: './loan-list.component.html',
  styleUrls: ['./loan-list.component.scss'],

})
export class LoanListComponent implements OnInit {
  loansList: Loan[] = [];
  loan: Loan;

  constructor(private loanService: LoanService) {
  }

  ngOnInit() {
    this.getLoansData();
  }

  getLoansData() {
    this.loanService.getLoans()
      .subscribe(loans => this.loansList = loans);
  }

  getLoanInfo(id: number) {
    this.loanService.getLoan(id)
      .subscribe(loan => this.loan = loan);
  }
}
