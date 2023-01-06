import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  isLoggedIn: boolean = false;
  user!:User;

  constructor(private authService: AuthService, private fb: FormBuilder, private router: Router) { 
    this.isLoggedIn =this.authService.isLoggedIn();
  }
  ngOnInit(): void {

    this.form = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    })
  }

  submit() {
    const { username, password } = this.form.value;
    this.authService.signIn(username, password).subscribe({
      next: (user: User) => {
        this.authService.UserInfo = user;
        this.isLoggedIn =this.authService.isLoggedIn();
        this.user = this.authService.UserInfo;

        this.form.reset();
        alert("Login successful");

      },
      error: (err) => {
        alert(err.message);
      }
    })


  }

  logOut(){
  
    this.authService.signOut();
    this.isLoggedIn =this.authService.isLoggedIn();
  }


}
