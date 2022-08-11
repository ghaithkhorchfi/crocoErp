import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TraineeshipsService } from '../../traineeships/services/traineeships.service';
import { UserService } from '../../users/service/user.service';
import { PaymentService } from '../service/payment.service';

@Component({
  selector: 'app-add-payment',
  templateUrl: './add-payment.component.html',
  styleUrls: ['./add-payment.component.scss']
})
export class AddPaymentComponent implements OnInit {
payment:any={}
addPayment:FormGroup
students:any=[]
traineeships:any=[]
  constructor(private formBuilder:FormBuilder, private userService:UserService,private traineeshipService:TraineeshipsService,private paymentService:PaymentService) { }

  ngOnInit(): void {
    this.addPayment=this.formBuilder.group({
      amount:[''],
      typeOfPayment:[''],
      _idStudent:[''],
      _idTraineeship:[''],
    })
    this.userService.getAllUsers().subscribe(data=>{
      this.students=data.Users.filter(e=>{
        return e.role==='student'
      })      
    })
    this.traineeshipService.getAllTraineeships().subscribe(data=>{
      this.traineeships=data.Traineeships
    })
  }
  add(){
    console.log(this.payment);
    this.paymentService.addPayment(this.payment).subscribe(data=>{
      console.log(data);
      
    })
    
  }

}
