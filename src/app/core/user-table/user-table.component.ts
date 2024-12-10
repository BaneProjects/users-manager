import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { User } from '../../state/model/user-model';

@Component({
  selector: 'app-user-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-table.component.html',
  styleUrl: './user-table.component.scss'
})
export class UserTableComponent {
  @Input() users: User[] = [];
}
