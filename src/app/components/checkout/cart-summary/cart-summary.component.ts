import { Component, Input } from '@angular/core';
import { OrderDetail } from 'src/app/models/OrderDetail';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent {
  @Input() dataSource: OrderDetail[] = [];
  @Input() totalPrice: number = 0;


}
