import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListingService {

  constructor(private http:HttpClient) { } 


  getAllEvents(){
    return this.http.get('http://localhost:3000/events');
  }
  getAllUsers(){
    return this.http.get('http://localhost:3000/users');
  }

  getEventById(id){
    return this.http.get('http://localhost:3000/events/'+id);
  }
   
  addEvent(data){
    return this.http.post('http://localhost:3000/users',data)
  }
  
  addUser(data){
    return this.http.post('http://localhost:3000/users',data)
  }
  editEvent(id,data){
    return this.http.put('http://localhost:3000/events/',+id,data)
  }
}
