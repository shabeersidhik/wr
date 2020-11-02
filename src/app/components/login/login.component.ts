import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  hide = true;
  error=false;
  constructor(private http:HttpClient,private fb:FormBuilder,private route:Router) { }

  ngOnInit(): void {
    this.loginForm=this.fb.group({
      strUsername:['',Validators.required],
      strPassword:['',Validators.required]
    })
  }
onSubmit(){
  if(this.loginForm.controls.strUsername.value=='admin' && this.loginForm.controls.strPassword.value=='123456'){
    this.route.navigate(['/home/dashboard'])
  }else{
    this.error=true;
  }
}
}
