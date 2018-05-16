import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  // curr_user: any;
  logs:any;
  gold:any;
  constructor(private _httpService: HttpService){}
  ngOnInit(){
    // this.curr_user = [];
    this.logs = [];
    this.gold = 0;
  }
  // login(){

  // }
  // newUser(){

  // }
  farm(){
    let num = Math.floor(Math.random()*6)+2;
    this.gold += num;
    let activity = "You earned " + num+ " gold in the farm!";
    let act = {"action": activity, "gain": true}
    this.logs.unshift(act);
  }
  cave(){
    let num = Math.floor(Math.random()*10)+5;
    this.gold += num;
    let activity = "You earned " + num+ " gold in the cave!";
    let act = {"action": activity, "gain": true}
    this.logs.unshift(act);
  }
  house(){
    let num = Math.floor(Math.random()*15)+7;
    this.gold += num;
    let activity = "You earned " + num+ " gold in the house!";
    let act = {"action": activity, "gain": true}
    this.logs.unshift(act);
  }
  casino(){
    let num = Math.floor(Math.random()*201)-100;
    this.gold += num;
    let activity:any;
    let act: any;
    if (num >= 0){
      activity = "You earned " + num+ " gold at the casino!";
      act = {"action": activity, "gain":true};
    }else {
      activity = "You lost " + num+ " gold at the casino!";
      act = {"action": activity, "gain":false};
    }
    this.logs.unshift(act);
  }
}
