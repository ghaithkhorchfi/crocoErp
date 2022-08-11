import { Route } from "@angular/router";
import { AddPaymentComponent } from "./add-payment/add-payment.component";
import { PaymentTableComponent } from "./payment-table/payment-table.component";

export const paymentRoutes:Route[]=[
    {path:'addPayment' ,component:AddPaymentComponent },
    {path:'' ,component:PaymentTableComponent },

]