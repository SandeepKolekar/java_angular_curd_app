import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  logionForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private httpClient: HttpClient,
    private router: Router
    ) { }

  doLogin(){
    this.logionForm.value;
    this.router.navigate(['/home']);
  }

  doRegister(){
    this.router.navigate(['/register']);
  }


  ngOnInit() {
    this.logionForm = this.formBuilder.group({
        username: '',
        password: ''
    });
  }
}
