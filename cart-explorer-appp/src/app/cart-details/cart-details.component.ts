import { Component, OnInit, inject } from '@angular/core';
import { CommonModule, CurrencyPipe, PercentPipe, DecimalPipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../services/cart.service';
import { DiscountPipe } from '../pipes/discount.pipe';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-cart-details',
  standalone: true,
  imports: [CommonModule, CurrencyPipe, PercentPipe, DecimalPipe, DiscountPipe],
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnInit {
  cart: any;
  private route = inject(ActivatedRoute);
  private cartService = inject(CartService);

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap(params => {
        const id = Number(params.get('id'));
        return this.cartService.getCartById(id);
      })
    ).subscribe(cart => {
      this.cart = cart;
    });
  }
}
