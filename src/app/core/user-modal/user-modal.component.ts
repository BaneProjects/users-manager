import { CommonModule } from '@angular/common';
import { compileNgModule } from '@angular/compiler';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserStore } from '../../state/user/user.store';
import { uniqueNameAsyncValidator } from '../../validator/unique-name.validator';


@Component({
  selector: 'app-user-modal',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './user-modal.component.html',
  styleUrl: './user-modal.component.scss'
})
export class UserModalComponent {
  constructor(private formBilder: FormBuilder, private userStore: UserStore){}
  addNewUserForm!: FormGroup;
   @Output()  closeModal = new EventEmitter<void>();
 
    closeUserModal(){
     this.closeModal.emit();
    }
 
   ngOnInit(): void {
       this.addNewUserForm = this.formBilder.group({
        name: ['', [Validators.required],uniqueNameAsyncValidator(this.userStore)],
         isActive: [false], 
       }); 
     }

    
     onSubmit() {
      if (this.addNewUserForm.valid) {
        const newUser = this.addNewUserForm.value;
        this.userStore.addUser(newUser);
        this.closeUserModal();
      }
    }
}


