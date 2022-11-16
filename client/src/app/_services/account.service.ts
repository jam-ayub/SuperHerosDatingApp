import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, ReplaySubject } from 'rxjs';
import { User } from '../_models/User';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  baseUrl = "https://localhost:5001/api/";
  private currentUserSource = new ReplaySubject<User>(1);
  currentUser$ = this.currentUserSource.asObservable();
  
  constructor(private http:HttpClient) {}

   login (model:any) {
    return this.http.post(this.baseUrl + 'account/login', model).pipe(
      map((responce: User) => {
        const user = responce
        if (user){
          localStorage.setItem('User', JSON.stringify(user));
          this.currentUserSource.next(user);
        }
      })
    );
   }

   register(model: any){
    return this.http.post(this.baseUrl + 'account/register', model).pipe(
      map((user: User) => {
        if (user){
          localStorage.setItem('User', JSON.stringify(user));
          this.currentUserSource.next(user);
        }
        return user;
      })
    );
   }

   setCurrentUser(user:User){
    this.currentUserSource.next(user);
   }

   logout(){
    localStorage.removeItem('User');
    this.currentUserSource.next(null);
   }
}
