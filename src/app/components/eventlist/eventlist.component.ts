import { Component, OnInit } from '@angular/core';
import {ListingService} from '../../listing.service'
@Component({
  selector: 'app-eventlist',
  templateUrl: './eventlist.component.html',
  styleUrls: ['./eventlist.component.css']
})
export class EventlistComponent implements OnInit {

  public allEvent
  constructor(private  ListingService:ListingService) { }

  ngOnInit() {
    this.getEvents();
  }

  getEvents(){
    this.ListingService.getAllEvents().subscribe(res=>{
      this.allEvent = res;
      console.log(res)
      
    },err=>console.log(err))
  }

}
