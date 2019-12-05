import { Component, OnInit } from '@angular/core';
//import the form builder module
import {FormBuilder,Validators, FormGroup} from '@angular/forms'
import {ListingService} from '../../listing.service';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  submmited :boolean = false;
  userForm:FormGroup;
  error_messages={
    'firstName':[
    {type:'required', message:'First Name Is Required.'},
    ],
    'lastName':[
      {type:'required',message:'last name is rwquired.'}
    ],
    'email':[
      {type:'required',message:'Email is required.'},
      {type:'minlength',message:'Email length should '}
    ]

  }
//create the instance of formBuilder class
  constructor(private fb:FormBuilder,private list:ListingService) { }

  ngOnInit() {


    //create the formgroup

    this.userForm=this.fb.group({
      email:['',[Validators.required,Validators.email]],
      firstName:['',[Validators.required,Validators.minLength(3)]],
      lastName:['',[Validators.required]],
      mobileNumber:['',[Validators.required,Validators.pattern(/\d{10,12}/)]],
      password:['',[Validators.required]]
    })
  }
  onSubmit(){
    //to check userform valid or not
    // console.log(this.userForm.value)
    if(this.userForm.valid) {
        this.list.addEvent(this.userForm.value).subscribe(res=>{
            console.log(res)
          },
          err=>{ 
            console.log(err);
          })
            alert('user form is valid')
      }
      else{
        alert('user form is not valid')
      }
  }

}
