import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
  @Input()
  inStockCount: number = 0;

  @Input()
  outOfStockCount: number = 0;

  @Input()
  allCount: number = 0;

  selectedFilterRadioButton: string = 'all';

  /*Tried to get product data from parent component to calculate the stock counts by getting the products as input 
  and then iterating through them to calculate the counts. However, we can get the counts directly in the parent 
  component and pass them as inputs to the filter component, which is more efficient and avoids unnecessary iterations 
  in the child component. Iteration method also gave a wrong count as the stockCalculation method was being called 
  multiple times during the component lifecycle, leading to incorrect counts.
  @Input()
  products: {
    id: number,
    name: string,
    description: string,
    brand: string,
    gender: string,
    category: string,
    size: number[],
    color: string[],
    price: number,
    discountPrice?: number,
    is_in_inventory: boolean,
    items_left: number,
    imageURL: string,
    slug: string
  }[] = [];

  
  stockCalculation(inStock: boolean) {
    if (inStock) {
      this.inStockCount++;
    } else {
      this.outOfStockCount++;
    }
      this.allCount++;

  }*/

};
