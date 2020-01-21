import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { usersList } from "../data";
import { UserAuthenticatedService } from '../user-authenticated.service';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})

export class LoginPageComponent implements OnInit {

  emailId: string;
  password : any;
  public loginForm : FormGroup;
  hide = true;
  inValid: boolean = false;
  message : string;
 

  constructor(private userAuth: UserAuthenticatedService, private router: Router ) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      emailId : new FormControl('', [Validators.required, Validators.email]),
      password :new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(25)])
      
    })
  }

  handleLogin(event: any){
    usersList.forEach(element => {
      if(element.emailId == event.emailId && element.password == event.password) {
        this.userAuth.updateAuthentication(true)
        this.router.navigate(['/home']);
        return;
      }
      else
      {
        this.message="Enter valid email and password";
        return !this.inValid;
      }
    });
   
    
  }

  

}
