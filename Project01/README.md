
# Project Title: Angular Parent-Child Component Interaction

### Description

This project demonstrates dynamic parent-child component interaction in Angular. It showcases how to filter data in a parent component, pass the filtered data to a child component, and handle user selections in the child component to reflect back in the parent component.

### Features

- **Dynamic Data Filtering**: The parent component can filter items by type (Color, Fruit, Animal) and pass the filtered list to the child component.
- **Real-time Data Selection**: The child component displays the filtered items and allows the user to select an item. The selected item is then communicated back to the parent component.
- **Reusable Components**: The project is structured using reusable Angular components to ensure maintainability and scalability.

### Project Structure

- **app.component.ts**: Contains the logic for filtering items and handling selected items.
- **app.component.html**: Contains the template for the parent component, including buttons for filtering and displaying the child component.
- **child.component.ts**: Contains the logic for emitting selected items to the parent component.
- **child.component.html**: Contains the template for the child component, including buttons for displaying items.

### Usage

1. **Parent Component**:
    - Defines an array of items with different types.
    - Filters items based on the selected type and sends the filtered list to the child component.
    - Displays the selected item from the child component.

2. **Child Component**:
    - Receives the filtered items from the parent component.
    - Displays the items as buttons.
    - Emits the selected item back to the parent component when a button is clicked.

### Code Overview

#### Parent Component (`app.component.ts`)

```typescript
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChildComponent, NgIf, NgFor],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
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

  filteredItems: ItemsType[] = [];

  filterByType(type: string) {
    this.filteredItems = this.itemsInParent.filter(
      (item) => item.type === type
    );
  }

  item = '';

  handleSelectedItems(itm: string) {
    this.item = itm;
    console.log(this.item);
  }
}

export interface ItemsType {
  name: string;
  type: string;
}
```

#### Parent Component Template (`app.component.html`)

```html
<div class="parent-container">
  <h1>Parent Component</h1>

  <h3 *ngIf="item" class="selected-item">Selected Item is: {{ item }}</h3>

  <h2>Filter by Type:</h2>
  <div class="button-group">
    <button (click)="filterByType('Color')" class="filter-button">Colors</button>
    <button (click)="filterByType('Fruit')" class="filter-button">Fruits</button>
    <button (click)="filterByType('Animal')" class="filter-button">Animals</button>
  </div>

  <app-child
    [items]="filteredItems"
    (selectedItem)="handleSelectedItems($event)"
  ></app-child>
</div>
```

#### Child Component (`child.component.ts`)

```typescript
import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ItemsType } from '../app.component';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule, FormsModule, NgFor],
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent {
  @Input() items: ItemsType[] = [];
  @Output() selectedItem = new EventEmitter<string>();

  sendSelectedItems(name: string) {
    this.selectedItem.emit(name);
  }
}
```

#### Child Component Template (`child.component.html`)

```html
<div class="button-container">
  <h1>Child Component</h1>
  <button *ngFor="let item of items" (click)="sendSelectedItems(item.name)" class="item-button">
    {{ item.name }}
  </button>
</div>
```

### Styles

#### Parent Component Styles (`app.component.css`)

```css
.parent-container {
  text-align: center;
  margin: 20px;
  padding: 20px;
  border: 2px solid #ccc;
  border-radius: 10px;
  background-color: #f9f9f9;
}

h1 {
  color: #333;
  font-size: 2.5em;
  margin-bottom: 20px;
}

h2 {
  color: #666;
  font-size: 1.5em;
  margin: 20px 0;
}

.selected-item {
  color: #007bff;
  font-size: 1.2em;
  margin: 10px 0;
  font-weight: bold;
}

.button-group {
  margin: 20px 0;
}

.filter-button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
  transition: background-color 0.3s ease;
}

.filter-button:hover {
  background-color: #0056b3;
}
```

#### Child Component Styles (`child.component.css`)

```css
.button-container {
  text-align: center;
  margin: 20px;
  padding: 20px;
  border: 2px solid #ccc;
  border-radius: 10px;
  background-color: #f0f8ff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h1 {
  color: #333;
  font-size: 2em;
  margin-bottom: 20px;
}

.item-button {
  background-color: #28a745;
  color: white;
  border: none;
  padding: 10px 20px;
  margin: 10px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
  transition: background-color 0.3s ease, transform 0.2s ease, box-shadow 0.2s ease;
}

.item-button:hover {
  background-color: #218838;
  transform: scale(1.05);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.item-button:active {
  background-color: #1e7e34;
  transform: scale(0.95);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
```

### Running the Project

1. **Install Angular CLI**: Ensure you have Angular CLI installed. If not, install it using:
   ```bash
   npm install -g @angular/cli
   ```

2. **Clone the Repository**: Clone the project repository to your local machine.

3. **Install Dependencies**: Navigate to the project directory and install the necessary dependencies:
   ```bash
   npm install
   ```

4. **Run the Application**: Start the Angular development server:
   ```bash
   ng serve
   ```

5. **Open in Browser**: Open your browser and navigate to `http://localhost:4200/` to see the application in action.

### Conclusion

This project demonstrates effective use of Angular’s component-based architecture to create a dynamic and interactive application. 
---






