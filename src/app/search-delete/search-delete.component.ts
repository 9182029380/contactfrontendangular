import { Component, OnInit } from '@angular/core';

import { UserRegistrationService } from '../user-registration.service';

@Component({
  selector: 'app-search-delete',
  templateUrl: './search-delete.component.html',
  styleUrls: ['./search-delete.component.css']
})
export class SearchDeleteComponent implements OnInit  {
  contact:any;
  id:number | undefined;
  
  constructor(private service:UserRegistrationService) { }

  public delteContact(id:number){
    let resp= this.service.deleteContact(id);
    resp.subscribe((data: any)=>this.contact=data);
   }
   public findContactById(){
     let resp= this.service.getContactById(this.id);
     resp.subscribe((data: any)=>this.contact=data);
    }

  
  ngOnInit() {
    let resp=this.service.getcontacts();
    resp.subscribe((data: any)=>this.contact=data);
  }
}
