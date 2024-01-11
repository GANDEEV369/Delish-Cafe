import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  title(title: any) {
      throw new Error('Method not implemented.');
  }
  constructor(private cartService: CartService) {}

  get cartItems() {
    return this.cartService.getCartItems();
  }

  ngOnInit() {}
}

