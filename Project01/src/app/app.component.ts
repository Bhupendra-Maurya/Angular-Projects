import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { NgFor, NgIf } from '@angular/common';
import { signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChildComponent, NgIf, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  itemsInParent: ItemsType[] = [
    { name: 'Red', type: 'Color' },
    { name: 'Green', type: 'Color' },
    { name: 'Blue', type: 'Color' },
    { name: 'Apple', type: 'Fruit' },
    { name: 'Banana', type: 'Fruit' },
    { name: 'Orange', type: 'Fruit' },
    { name: 'Cat', type: 'Animal' },
    { name: 'Dog', type: 'Animal' },
    { name: 'Elephant', type: 'Animal' },
  ];

  // items: WritableSignal<ItemsType[]> = signal(this.itemsInParent);
  // filteredItems: WritableSignal<ItemsType[]> = signal([]);

  // filterByType(type: string) {
  //   // Update filteredItems based on the clicked button type
  //   this.filteredItems.set(this.items().filter((item) => item.type === type));
  //   this.filteredItems.set(this.items().filter((item) => item.type === type));
  // // console.log(this.filteredItems())
  // }

  filteredItems: ItemsType[] = [];
  filterByType(type: string) {
    this.filteredItems = this.itemsInParent.filter(
      (item) => item.type === type
    );
  }
  item = '';
  handleSelectedItems(itm: string) {
    this.item = itm;
    console.log(this.item)
  }
}

export interface ItemsType {
  name: string;
  type: string;
}
