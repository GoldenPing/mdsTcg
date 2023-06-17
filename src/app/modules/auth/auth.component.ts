import { Token } from '@angular/compiler/src/ml_parser/tokens';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { TokenProfile } from './token';
import { User } from './user';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  hide = true;
  user? : User;

  loginForm = new FormGroup(
    {
      login: new FormControl(this.user?.login,[Validators.required]),
      password: new FormControl(this.user?.password,[Validators.required])
    }
  )

  constructor( private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onLogin() {
    console.log(this.loginForm.value);

    this.auth.login(this.loginForm.value).subscribe((data)=>{
      localStorage.setItem('tokenJWT', data.token)
      this.router.navigateByUrl('/')
    })
  }
}
