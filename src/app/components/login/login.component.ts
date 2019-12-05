import { Component, OnInit } from '@angular/core';
import {AbstractControl,FormBuilder,Validators, FormGroup} from '@angular/forms'
import {ListingService} from '../../listing.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public email:any;
  public password:any;
  submmited :boolean = false;
  loginForm:FormGroup
  all;

  constructor(private list:ListingService,private fb:FormBuilder, private router:Router)   { }
//create a formGroup


  ngOnInit() {
    this.list.getAllUsers().subscribe(res=>{
      this.all=res;     
    });


    this.loginForm=this.fb.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required]],
    })
  }

  onsubmit(){
    console.log(this.loginForm.value)
    if(this.loginForm.valid){
      for(let i= 0; i<this.all.length; i++){
        if(this.all[i].email == this.loginForm.value.email){
          if(this.all[i].password == this.loginForm.value.password){
            alert('successfullylogin');
            this.router.navigate(['/event'])
            }  
        }
      }
    }
    else{
      alert('recod not found');
    }
  }


}
