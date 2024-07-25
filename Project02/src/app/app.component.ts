import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { UsersComponent } from './users/users.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule, UsersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  usersData = [
    {
      id: 1,
      name: 'Alice',
      age: 25,
      profile: 'Developer',
      pictureUrl: 'assets/pic1.jpg',
    },
    {
      id: 2,
      name: 'Bob',
      age: 30,
      profile: 'Designer',
      pictureUrl: 'assets/pic1.jpg',
    },
    {
      id: 3,
      name: 'Charlie',
      age: 35,
      profile: 'Manager',
      pictureUrl: 'assets/pic1.jpg',
    },
    {
      id: 4,
      name: 'Bhupendra',
      age: 20,
      profile: 'SDE',
      pictureUrl: 'assets/pic1.jpg',
    },
  ];
  tasks = [
    {
      id: 't1',
      userId: '1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: '2',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: '3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ];

  filterTasks: TaskType[] = [];


  ngOnInit(): void {
    
  }

  filterTask(userId: number) {
    this.filterTasks = this.tasks.filter((task) => task.userId === userId.toString());
    localStorage.setItem('Tasks', JSON.stringify(this.filterTasks));
    console.log(this.filterTasks);
  }

}

export type UserType = {
  id: number;
  name: string;
  age: number;
  profile: string;
  pictureUrl: string;
};

export type TaskType = {
  id: string;
  userId: string;
  title: string;
  summary: string;
  dueDate: string;
};