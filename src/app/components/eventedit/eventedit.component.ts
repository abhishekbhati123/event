import { Component, OnInit } from '@angular/core';
import {FormBuilder,Validators, FormGroup} from '@angular/forms';
import { ActivatedRoute, Router } from "@angular/router";
import { ListingService } from "../../listing.service";
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
    //get the id 
    let myEventId=this.route.snapshot.paramMap.get('id');
    console.log(myEventId);

    //calling the function to get singleEvent
    

    //create the formgroup

    this.eventEditForm=this.fb.group({
      
      event_day:['',[Validators.required]],
      event_price:['',[Validators.required]],
      event_venue:['',[Validators.required]]
      
    

    })
  }
  editThisBlog():any{
    this.list.editEvent(this.currentEvent.id,this.currentEvent).subscribe(res=>{
      console.log(res);
      this.router.navigate(['/event']);
    },err=>{
      console.log(err);
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
