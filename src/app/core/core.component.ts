import { Component } from '@angular/core';
import {  Observable } from 'rxjs';
import { User } from '../state/model/user-model';
import { UserStore } from '../state/user/user.store';
import { UserTableComponent } from './user-table/user-table.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-core',
  standalone: true,
  imports: [UserTableComponent,CommonModule],
  templateUrl: './core.component.html',
  styleUrl: './core.component.scss'
})
export class CoreComponent {
  users$: Observable<User[]> | undefined;
 

  constructor(private userStore: UserStore) { }
  ngOnInit(): void {
    this.users$ = this.userStore.getUsers()
    


  }
}
