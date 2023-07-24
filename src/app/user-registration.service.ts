import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from './contact';


@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {

  constructor(private http: HttpClient) { }

  public doRegistration(contact: Contact) {
    return this.http.post("http://localhost:8080/api/contacts", contact, { responseType: 'text' as 'json' });
  }
  public getcontacts() {
    return this.http.get("http://localhost:8080/api/contacts/contact");
  }
  public getContactById(id: any) {
    return this.http.get("http://localhost:8080/api/contacts/findid" + id);
  }
  public deleteContact(id: any) {
    return this.http.delete("http://localhost:8080/api/contacts/contact/" + id);
  }
}


