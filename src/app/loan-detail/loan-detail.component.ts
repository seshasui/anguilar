import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Location} from '@angular/common';
import {LoanService} from '../services/loan/loan.service';
import {Loan} from '../models/loan';
import {LoanEvent} from '../models/loanevent';

@Component({
  selector: 'app-loan-detail',
  templateUrl: './loan-detail.component.html',
  styleUrls: ['./loan-detail.component.scss']
})
export class LoanDetailComponent implements OnInit {

  loan: Loan;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private location: Location,
              private loanService: LoanService) {
  }

  ngOnInit(): void {
    this.route.params.switchMap((params: Params) =>
      this.loanService.getLoan(+params['id']))
      .subscribe(loan => this.loan = loan);
  }
}
