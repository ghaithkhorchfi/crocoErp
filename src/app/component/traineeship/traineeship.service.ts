import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TraineeshipService {
  traineeshipUrl:string='http://localhost:3000/api/traineeships'

  constructor(private htttpClient:HttpClient) { }
  getAllTraineeships(){
    return this.htttpClient.get<{Traineeships:any}>(this.traineeshipUrl)
  }
}
