import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {


  constructor(private ordersService:OrdersService) { }

  ngOnInit(): void {
    this.ordersService.disparadorOrders.subscribe(
      data=>{
        console.log("recibiendo data...",data);
        
      }
    )
    this.ordersService.disparadorTotal.subscribe(
      data=>{
        console.log("recibiendo total...",data);
      }
    )
  }

}
