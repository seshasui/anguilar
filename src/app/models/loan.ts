import {LoanEvent} from './loanevent';

export class Loan {
  loanAmount: number;
  loanNumber: string;
  sourceSystems: LoanEvent[];
  state: string;

  get latestEvent(): Date {
    if (this.sourceSystems.length) {
      let ldate = this.sourceSystems.reduce((m, i) => (i.end > m.end) && i || m, null)
        .end;
      console.log('Latest Event ' + ldate);

      return ldate;
    }
    return null;
  }
}

