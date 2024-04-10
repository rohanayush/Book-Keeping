import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent implements OnInit{

  constructor(){}

  ngOnInit(): void {  
  }

  signUp({email,password}:any){
    console.log(email, password);
  }
  
}
