import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { PaymentService } from '../service/payment.service';

@Component({
  selector: 'app-payment-table',
  templateUrl: './payment-table.component.html',
  styleUrls: ['./payment-table.component.scss']
})
export class PaymentTableComponent implements OnInit {

  paymentsDataSource: MatTableDataSource<any>
  paymentsTableColumns: string[] = ['amount', 'type Of Payment', 'student Name','traineeship Name','action'];
  data:any=[{_id:'1',amount:'hello',typeOfPayment:'hello',students:[{firstName:'ggg',lastName:'gggg'}],traineeships:[{nameOfTraineeship:'ggg',lastName:'gggg'}]}]
  constructor(private paymentService:PaymentService,private router:Router) { }

  ngOnInit(): void {
    this.paymentsDataSource=this.data
    this.paymentService.getAllPayments().subscribe(data=>{
      console.log(data);
      
      this.paymentsDataSource=data.payments
    })
  }
  edit(id:any){
    this.router.navigate([`/payments/edit/${id}`])

  }
  delete(id:any){
    this.paymentService.deletePayment(id).subscribe(data=>{
      console.log(data);
      this.paymentService.getAllPayments().subscribe(data=>{        
        this.paymentsDataSource=data.payments
      })
      
    })
  }

}
