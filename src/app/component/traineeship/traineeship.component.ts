
import { AfterViewInit, ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
// import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
// import { Subject } from 'rxjs';
// import { takeUntil } from 'rxjs/operators';
// import { ApexOptions } from 'ng-apexcharts';
// import { FinanceService } from 'app/modules/admin/dashboards/finance/finance.service';
// import { DataSource } from '@angular/cdk/collections';
import { TraineeshipService } from './traineeship.service';



@Component({
  selector: 'app-traineeship',
  templateUrl: './traineeship.component.html',
  styleUrls: ['./traineeship.component.scss']
})
export class TraineeshipComponent implements OnInit, AfterViewInit, OnDestroy {

//   @ViewChild('recentTransactionsTable', {read: MatSort}) recentTransactionsTableMatSort: MatSort;

//   data: any=[
//     {_id:'1',nameOfTraineeship:"angular",state:'begin',numberOfHours:'40',startDate:'1/1/2023',finalDate:'2/2/23'},
//     {_id:'2',nameOfTraineeship:"angular",state:'begin',numberOfHours:'40',startDate:'1/1/2023',finalDate:'2/2/23'},
//     {_id:'3',nameOfTraineeship:"angular",state:'begin',numberOfHours:'40',startDate:'1/1/2023',finalDate:'2/2/23'},
//     {_id:'4',nameOfTraineeship:"angular",state:'begin',numberOfHours:'40',startDate:'1/1/2023',finalDate:'2/2/23'},
//   ]
//   accountBalanceOptions: ApexOptions;
  recentTransactionsDataSource: MatTableDataSource<any>

  recentTransactionsTableColumns: string[] = ['_id', 'finalDate', 'nameOfTraineeship', 'numberOfHours', 'state','startDate'];
//   private _unsubscribeAll: Subject<any> = new Subject<any>();
//   dataSource = this.data

  /**
   * Constructor
   */
  constructor(private traineeshipService: TraineeshipService)
  {
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void
  {
    
      // Get the data
      /*this._financeService.data$
          .pipe(takeUntil(this._unsubscribeAll))
          .subscribe((data) => {

              // Store the data
              this.data = data;

              // Store the table data
              this.recentTransactionsDataSource.data = data.recentTransactions;

              // Prepare the chart data
              this._prepareChartData();
          });*/
          this.traineeshipService.getAllTraineeships().subscribe((data)=>{
            console.log(data);
            this.recentTransactionsDataSource=data.Traineeships          

          })

  }

  /**
   * After view init
   */
  ngAfterViewInit(): void
  {
      // Make the data source sortable
    //   this.recentTransactionsDataSource.sort = this.recentTransactionsTableMatSort;
  }

  /**
   * On destroy
   */
  ngOnDestroy(): void
  {
      // Unsubscribe from all subscriptions
    //   this._unsubscribeAll.next();
    //   this._unsubscribeAll.complete();
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Track by function for ngFor loops
   *
   * @param index
   * @param item
   */
//   trackByFn(index: number, item: any): any
//   {
//       return item.id || index;
//   }

  // -----------------------------------------------------------------------------------------------------
  // @ Private methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Prepare the chart data from the data
   *
   * @private
   */
//   private _prepareChartData(): void
//   {
//       // Account balance
//       this.accountBalanceOptions = {
//           chart  : {
//               animations: {
//                   speed           : 400,
//                   animateGradually: {
//                       enabled: false
//                   }
//               },
//               fontFamily: 'inherit',
//               foreColor : 'inherit',
//               width     : '100%',
//               height    : '100%',
//               type      : 'area',
//               sparkline : {
//                   enabled: true
//               }
//           },
//           colors : ['#A3BFFA', '#667EEA'],
//           fill   : {
//               colors : ['#CED9FB', '#AECDFD'],
//               opacity: 0.5,
//               type   : 'solid'
//           },
//           series : this.data.accountBalance.series,
//           stroke : {
//               curve: 'straight',
//               width: 2
//           },
//           tooltip: {
//               followCursor: true,
//               theme       : 'dark',
//               x           : {
//                   format: 'MMM dd, yyyy'
//               },
//               y           : {
//                   formatter: (value): string => value + '%'
//               }
//           },
//           xaxis  : {
//               type: 'datetime'
//           }
//       };
//   }

}
