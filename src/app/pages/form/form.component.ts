import { Volunteer } from './../../core/entities/volunteer';
import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent implements OnInit {
   volunteer : Volunteer  = new Volunteer({name:"teste",email:"teste"});

   public form: FormGroup = new FormGroup({});
   
  matcher = new MyErrorStateMatcher();

   constructor(private formBuilder: FormBuilder){

    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['',[Validators.required, Validators.email]],
      age: [''],
    })
   }
  ngOnInit(): void {
    console.log(!this.form.get('email')?.hasError('required'));

  }
}


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
