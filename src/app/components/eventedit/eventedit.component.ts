import { Component, OnInit } from '@angular/core';
import {FormBuilder,Validators, FormGroup} from '@angular/forms';
import { ActivatedRoute, Router } from "@angular/router";
import { ListingService } from "../../listing.service";
import Swal from 'sweetalert2';
@Component({
  selector: 'app-eventedit',
  templateUrl: './eventedit.component.html',
  styleUrls: ['./eventedit.component.css']
})
export class EventeditComponent implements OnInit {

  submmited :boolean = false;
  public currentEvent;
  eventEditForm:FormGroup;
//create the instance of formBuilder class
  constructor(private fb:FormBuilder,private list:ListingService,private route:ActivatedRoute,private router:Router ) { }

  ngOnInit() {




    
    this.eventEditForm=this.fb.group({
      
      event_day:['',[Validators.required]],
      event_price:['',[Validators.required]],
      event_venue:['',[Validators.required]]
      
    

    })
    //get the id 
    let myEventId=this.route.snapshot.paramMap.get('id');
    console.log(myEventId);


    //calling the function to get singleEvent
    this.list.getEventById(myEventId).subscribe(res=>{
      console.log(res);
      this.currentEvent=res;
    },
    err=>{
      console.log('error called')
      console.log(err);
    }
    )
  
//create the formgroup


  }
  editThisBlog():any{
    
    this.list.editEvent(this.currentEvent.id,this.currentEvent).subscribe(res=>{
      console.log(res);
      Swal.fire('Hello world')
      this.router.navigate(['/event']);
    },err=>{
      console.log(err.ErrorMessage);
    })
    //to check userform valid or not
        if(this.eventEditForm.valid) {
            alert('user form is valid')
        }
        else
        {
          alert('user form is not valid')
        }
  }


}
