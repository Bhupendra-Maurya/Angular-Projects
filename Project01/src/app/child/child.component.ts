import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { signal, WritableSignal } from '@angular/core';
import { ItemsType } from '../app.component';
@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule, FormsModule, NgFor],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent {
  @Input() items: ItemsType[] = [];

  @Output() selectedItem = new EventEmitter<any>();

  sendSelectedItems(name: string) {
    this.selectedItem.emit(name);
  }
}
  