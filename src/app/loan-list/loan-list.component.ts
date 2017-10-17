import { Component, ViewChild, ViewContainerRef, OnInit} from '@angular/core';
import {   MatSidenav, MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material';
import {LoanService} from '../services/loan/loan.service';
import {Loan} from '../models/loan';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-loan-list',
  templateUrl: './loan-list.component.html',
  styleUrls: ['./loan-list.component.scss'],

})
export class LoanListComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav;
  loansList: Loan[] = [];
  loan: Loan;
  selectedLoan: Loan;

  constructor(private loanService: LoanService, private vcr: ViewContainerRef) {
  }

  ngOnInit() {
    this.getLoansData();
  }

  showLoanDetails(loan: Loan) {
    this.selectedLoan = loan;
    this.sidenav.open();
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
