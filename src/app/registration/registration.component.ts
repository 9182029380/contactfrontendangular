import { Component, OnInit } from '@angular/core';

import { UserRegistrationService } from '../user-registration.service';
import { Contact } from '../contact';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  contact : Contact = new Contact("","","","","");
  message: any;

  constructor(private service: UserRegistrationService){
    
  }

  public registerNow(){
    let resp=this.service.doRegistration(this.contact);
    resp.subscribe((data)=>this.message=data);
      }

  ngOnInit() {}

}
