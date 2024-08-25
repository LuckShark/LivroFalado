import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor() { }

  sendEmail(){
    console.log('Send email.');
    
  }
}
