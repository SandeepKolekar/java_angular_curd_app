import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private httpClient: HttpClient,
    private router: Router
    ) { }

  login(){
    this.router.navigate(['/login']);
  }

  registerUser(){
    this.registerForm.value;
    this.router.navigate(['/login']);

  }
  
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      userid: '',
      name: '',
      email: '',
      phoneno: '',
      address: '',
      gender: '',
      hobbies: '',
      username: '',
      password: '',
      confirm_password: ''
  });
  }

}
