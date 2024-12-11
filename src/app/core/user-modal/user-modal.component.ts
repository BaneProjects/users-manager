import { CommonModule } from '@angular/common';
import { compileNgModule } from '@angular/compiler';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-user-modal',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './user-modal.component.html',
  styleUrl: './user-modal.component.scss'
})
export class UserModalComponent {
  constructor(private formBilder: FormBuilder){}
  addNewUserForm!: FormGroup;
   @Output()  closeModal = new EventEmitter<void>();
 
    closeUserModal(){
     this.closeModal.emit();
    }
 
   ngOnInit(): void {
       this.addNewUserForm = this.formBilder.group({
         name: ['', [Validators.required]]  
       }); 
     }
}
