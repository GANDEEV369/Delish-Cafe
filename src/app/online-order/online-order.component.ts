// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-online-order',
//   templateUrl: './online-order.component.html',
//   styleUrl: './online-order.component.css'
// })
// export class OnlineOrderComponent {

// }
import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-online-order',
  templateUrl: './online-order.component.html',
  styleUrls: ['./online-order.component.css'],
})
export class OnlineOrderComponent implements OnInit {
  products: any;

  constructor(private cartService: CartService) {
    this.products = [
      // Coffee items
      { id: 1001, name: "Espresso", price: 2.50, description: "Strong and short coffee", imgsrc: "assets/images/coffee-cup.png" },
      { id: 1002, name: "Cappuccino", price: 3.50, description: "Coffee with equal parts of espresso, steamed milk, and milk foam", imgsrc: "assets/images/coffee-cup.png" },
      { id: 1003, name: "Latte", price: 4.00, description: "Coffee with a lot of steamed milk and a small amount of foam", imgsrc: "assets/images/coffee-cup.png" },
      { id: 1004, name: "Americano", price: 2.75, description: "Espresso diluted with hot water", imgsrc: "assets/images/coffee-cup.png" },
      { id: 1005, name: "Mocha", price: 4.50, description: "Coffee with chocolate and steamed milk", imgsrc: "assets/images/coffee-cup.png" },
      { id: 1006, name: "Macchiato", price: 3.00, description: "Espresso with a dash of foamed milk", imgsrc: "assets/images/coffee-cup.png" },
      { id: 1007, name: "Flat White", price: 3.75, description: "Espresso with steamed milk and a thin layer of foam", imgsrc: "assets/images/coffee-cup.png" },
      { id: 1008, name: "Cold Brew", price: 3.50, description: "Coffee brewed with cold water for a smooth and less acidic taste", imgsrc: "assets/images/coffee-cup.png" },
      { id: 1009, name: "Frappuccino", price: 5.00, description: "Blended coffee drink with ice, whipped cream, and various flavors", imgsrc: "assets/images/coffee-cup.png" },
      { id: 1010, name: "Affogato", price: 4.50, description: "Espresso poured over a scoop of vanilla ice cream", imgsrc: "assets/images/coffee-cup.png" },

      // Tea items
      { id: 1011, name: "Black Tea", price: 2.00, description: "Tea made from the leaves of the Camellia sinensis plant", imgsrc: "assets/images/coffee-cup.png" },
      { id: 1012, name: "Green Tea", price: 2.25, description: "Tea made from the unoxidized leaves of the Camellia sinensis plant", imgsrc: "assets/images/coffee-cup.png" },
      { id: 1013, name: "Oolong Tea", price: 2.50, description: "Tea made from the partially oxidized leaves of the Camellia sinensis plant", imgsrc: "assets/images/coffee-cup.png" },
      { id: 1014, name: "White Tea", price: 2.75, description: "Tea made from the young buds and leaves of the Camellia sinensis plant", imgsrc: "assets/images/coffee-cup.png" },
      { id: 1015, name: "Herbal Tea", price: 2.50, description: "Tea made from various herbs, spices, and fruits", imgsrc: "assets/images/coffee-cup.png" },
      { id: 1016, name: "Chai Tea", price: 3.00, description: "Tea made from black tea, milk, and spices such as cardamom, cinnamon, and ginger", imgsrc: "assets/images/coffee-cup.png" },
      { id: 1017, name: "Matcha Tea", price: 3.50, description: "Tea made from finely ground green tea leaves", imgsrc: "assets/images/coffee-cup.png" },
      { id: 1018, name: "Earl Grey Tea", price: 2.50, description: "Tea made from black tea and bergamot oil", imgsrc: "assets/images/coffee-cup.png" },
      { id: 1019, name: "Jasmine Tea", price: 2.75, description: "Tea made from green tea and jasmine flowers", imgsrc: "assets/images/coffee-cup.png" },
      { id: 1020, name: "Rooibos Tea", price: 2.50, description: "Tea made from the leaves of the Aspalathus linearis plant", imgsrc: "assets/images/coffee-cup.png" },

      // Pastry items
      { id: 1031, name: "Blueberry Muffin", price: 2.99, description: "Moist muffin with blueberries", imgsrc: "assets/images/cake.png" },
      { id: 1032, name: "Chocolate Croissant", price: 3.49, description: "Flaky croissant filled with chocolate", imgsrc: "assets/images/cake.png" },
      { id: 1033, name: "Cinnamon Roll", price: 3.99, description: "Sweet roll with cinnamon and icing", imgsrc: "assets/images/cake.png" },
      { id: 1034, name: "Scone", price: 2.49, description: "Buttery and crumbly pastry with various flavors", imgsrc: "assets/images/cake.png" },
      { id: 1035, name: "Donut", price: 1.99, description: "Fried dough with glaze or frosting", imgsrc: "assets/images/cake.png" },
      { id: 1036, name: "Brownie", price: 2.99, description: "Rich and fudgy chocolate cake", imgsrc: "assets/images/cake.png"},
      { id: 1037, name: "Cookie", price: 1.49, description: "Baked treat with chocolate chips, nuts, or other ingredients", imgsrc: "assets/images/cake.png" },
      { id: 1038, name: "Cheesecake", price: 4.99, description: "Creamy cake with a graham cracker crust", imgsrc: "assets/images/cake.png" },
      { id: 1039, name: "Apple Pie", price: 3.99, description: "Flaky crust with spiced apple filling", imgsrc: "assets/images/cake.png" },
      { id: 1040, name: "Lemon Tart", price: 3.49, description: "Crisp pastry shell with tangy lemon curd", imgsrc: "assets/images/cake.png" },
    ];

  }

  ngOnInit() {}

  addToCart(product: any) {
    this.cartService.addToCart(product);
  }
}
