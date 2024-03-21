import { Component, Input } from '@angular/core';
import { OrderBook } from 'src/app/interface/orderBook';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent {
  @Input() dataSource: OrderBook[] = [];
  @Input() totalPrice: number = 0;


}
