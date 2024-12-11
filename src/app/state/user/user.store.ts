
import { Injectable } from '@angular/core';
import { createStore, withProps, select } from '@ngneat/elf';

import { Observable } from 'rxjs';
import { User } from '../model/user-model';


const initialUsers: User[] = [
  { id: 1, name: 'Alice', isActive: true },
  { id: 2, name: 'Charlie', isActive: true },
  { id: 3, name: 'Charlie', isActive: true }
];

export const userStore = createStore(
  { name: 'users' }, 
  withProps<{ users: User[] }>({ users: initialUsers }) 
);

@Injectable({ providedIn: 'root' })
export class UserStore {
  private store = userStore;
 public getUsers(): Observable<User[]> {
    return this.store.pipe(select(state => state.users)); 
  }

  updateUser(user: User) {
    userStore.update(state => ({
      users: state.users.map(existingUser => 
        existingUser.id === user.id ? { ...existingUser, isActive: user.isActive } : existingUser
      )
    }));
  }

}
