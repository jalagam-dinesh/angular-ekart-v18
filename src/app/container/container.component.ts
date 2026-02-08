import { Component } from '@angular/core';

@Component({
  selector: 'container',
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {
  // name ="Dinesh"
  addToCart: number = 0;
  product = {
    name: 'iPhone X',
    price: 999,
    color: 'Matte Black',
    discount: 8.5,
    stock: 5,
    pImage: "assets/iphone.png"
  };
  isDisabled = this.product.stock > 0 ? false : true;

  getDiscountedPrice(){
    return this.product.price - (this.product.price * this.product.discount / 100);
  }

  onNameChange($event: any){
  //   console.log($event);
  //   this.name = $event.target.value;
  }

  incrementCartValue(){
    if(this.addToCart < this.product.stock){
      this.addToCart++;
    }
  }

  decrementCartValue(){
    if(this.addToCart > 0){
      this.addToCart--;
    }
  }
}
