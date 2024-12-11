import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';
import { User } from '../state/model/user-model';
import { UserStore } from '../state/user/user.store';
import { UserTableComponent } from './user-table/user-table.component';
import { CommonModule } from '@angular/common';
import { UserModalComponent } from './user-modal/user-modal.component';

@Component({
  selector: 'app-core',
  standalone: true,
  imports: [UserTableComponent, CommonModule, UserModalComponent],
  templateUrl: './core.component.html',
  styleUrl: './core.component.scss'
})
export class CoreComponent {
  users$: Observable<User[]> | undefined;
  isBtnForAddUserEnabled$: Observable<boolean> | undefined;
  isModalOpened: boolean = false;
  constructor(private userStore: UserStore) { }
  ngOnInit(): void {
    this.users$ = this.userStore.getUsers()
    this.isBtnForAddUserEnabled$ = this.users$.pipe(
      map((users) => {
        return users.length < 5 && users.every(user => user.isActive)
      })
    )


  }
  onToggleUserActiveStatus(user: User) {

    const updatedUser = {...user, isActive: !user.isActive}
    this.userStore.updateUser(updatedUser)

  }
  onOpenUserModal() {
    this.isModalOpened = true;
  }

  onCloseUserModal() {
    this.isModalOpened = false;
  }
}
