import {Component, OnInit} from '@angular/core';
import {LoanService} from '../services/loan/loan.service';
import {Loan} from '../models/loan';
import 'rxjs/add/operator/switchMap';
import {NG_TABLE_DIRECTIVES} from 'ng2-table/ng2-table';

@Component({
  selector: 'app-loan-list',
  templateUrl: './loan-list.component.html',
  styleUrls: ['./loan-list.component.scss']
})
export class LoanListComponent implements OnInit {
  loansList: Loan[] = [];
  loan: Loan;

  public rows: Array<any> = [];
  public columns: Array<any> = [
    {title: 'Loan Number', name: 'loanNumber'},
    {title: 'Loan Amount ($)', name: 'loanAmount'}
  ];
  public page: number = 1;
  public itemsPerPage: number = 10;
  public maxSize: number = 5;
  public numPages: number = 1;
  public length: number = 0;

  public config: any = {
    paging: true,
    sorting: {columns: this.columns},
    filtering: {filterString: '', columnName: 'loanNumber'}
  };


  constructor(private loanService: LoanService) {
  }

  ngOnInit() {
    this.getLoansData();

    this.onChangeTable(this.config);
  }

  getLoansData() {
    this.loanService.getLoans()
      .subscribe(loans => this.loansList  = loans);
  }

  getLoanInfo(id: number) {
    this.loanService.getLoan(id)
      .subscribe(loan => this.loan = loan);
  }

  public changePage(page: any, data: Array<any> = this.loansList): Array<any> {
    console.log(page);
    let start = (page.page - 1) * page.itemsPerPage;
    let end = page.itemsPerPage > -1 ? (start + page.itemsPerPage) : data.length;
    return data.slice(start, end);
  }

  public changeSort(data: any, config: any): any {
    if (!config.sorting) {
      return data;
    }

    let columns = this.config.sorting.columns || [];
    let columnName: string = void 0;
    let sort: string = void 0;

    for (let i = 0; i < columns.length; i++) {
      if (columns[i].sort !== '') {
        columnName = columns[i].name;
        sort = columns[i].sort;
      }
    }

    if (!columnName) {
      return data;
    }

    // simple sorting
    return data.sort((previous: any, current: any) => {
      if (previous[columnName] > current[columnName]) {
        return sort === 'desc' ? -1 : 1;
      } else if (previous[columnName] < current[columnName]) {
        return sort === 'asc' ? -1 : 1;
      }
      return 0;
    });
  }

  public changeFilter(data: any, config: any): any {
    if (!config.filtering) {
      return data;
    }

    let filteredData: Array<any> = data.filter((item: any) =>
      item[config.filtering.columnName].match(this.config.filtering.filterString));

    return filteredData;
  }

  public onChangeTable(config: any, page: any = {page: this.page, itemsPerPage: this.itemsPerPage}): any {
    if (config.filtering) {
      Object.assign(this.config.filtering, config.filtering);
    }
    if (config.sorting) {
      Object.assign(this.config.sorting, config.sorting);
    }

    let filteredData = this.changeFilter(this.loansList, this.config);
    let sortedData = this.changeSort(filteredData, this.config);
    this.rows = page && config.paging ? this.changePage(page, sortedData) : sortedData;
    this.length = sortedData.length;
  }
}
