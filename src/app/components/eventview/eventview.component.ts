import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { ListingService } from "../../listing.service";
@Component({
  selector: 'app-eventview',
  templateUrl: './eventview.component.html',
  styleUrls: ['./eventview.component.css']
})
export class EventviewComponent implements OnInit {
//member variable
public currentEvent;


  constructor(private route:ActivatedRoute,private router:Router,private ListingService:ListingService) { }

  ngOnInit() {



      //used to get id
    let myEventId=this.route.snapshot.paramMap.get('id');
    console.log(myEventId);
    
    this.ListingService.getEventById(myEventId).subscribe(res=>{
      console.log(res);
      this.currentEvent=res;

    },
    err=>{
      
      console.log(err)
    })
  }
  editBlog(){
    this.ListingService.editEvent(this.currentEvent.id,this.currentEvent).subscribe(res=>{
      console.log(res);
      this.router.navigate(['/event'])
    },
    err=>{
      console.log(err);
    })
  }
  delEvent(){
    this.ListingService.deleteEvent(this.currentEvent.id,this.currentEvent).subscribe(res=>{
      console.log(res)
      this.router.navigate(['event']);
    },
    err=>{
      console.log(err);
    })
  }



}
