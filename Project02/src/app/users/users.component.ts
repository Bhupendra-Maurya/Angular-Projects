import { Component, EventEmitter, OnInit } from '@angular/core';
import { Input, Output } from '@angular/core';
import { type TaskType, UserType } from '../app.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent implements OnInit {
  @Input() Users: UserType[] = [];
  @Input() tasks: TaskType[] = [];

  userId!: number;
  userName!: string;
  isSelected: boolean = false;

  @Output() userSelected = new EventEmitter<number>();

  // emit the selected used to parent
  SelectedUser(user: UserType) {
    this.userId = user.id;
    this.userName = user.name;
    this.isSelected = true;
    this.userSelected.emit(user.id);
  }

  // display form
  showAddTaskDialog = false;

  // Add new Task
  newTask: Partial<TaskType> = {};

  // get the data from form's input
  newTitle = '';
  newSummary = '';
  newDueDate = '';

  ngOnInit(): void {}
  // add new task
  addTask() {
    const task: TaskType = { ...this.newTask } as TaskType;
    task.title = this.newTitle;
    task.summary = this.newSummary;
    task.dueDate = this.newDueDate;
    // console.log(task);
    this.tasks.push(task);
    localStorage.setItem('NewTask', JSON.stringify(this.tasks));
    console.log(this.tasks);
    this.closeAddTaskDialog();
  }
  // close form
  closeAddTaskDialog() {
    this.showAddTaskDialog = false;
    this.newTitle = '';
    this.newSummary = '';
    this.newDueDate = '';
  }
}