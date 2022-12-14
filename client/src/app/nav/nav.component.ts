import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../_models/User';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};
  //loggedIn: boolean;
  //currentUser$: Observable<User>;

  constructor(public accountService:AccountService) { }

  ngOnInit(): void {
    //this.getCurrentUser();
    //this.currentUser$ = this.accountService.currentUser$;
  }

  login(){
    this.accountService.login(this.model).subscribe(responce => {
      console.log(responce);
      //this.loggedIn = true;
    }, error => {
      console.log(error);
    });
  }

  logOut() {
    this.accountService.logout();
    //this.loggedIn = false;
  }

  // getCurrentUser(){
  //   this.accountService.currentUser$.subscribe(user => {
  //     this.loggedIn = !!user;
  //   }, error => {
  //     console.log(error);
  //   });
  // }

}
