import { Component, Input } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database";
import { AuthService } from "../services/auth.service";
import { RouterModule, Routes } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  //menus: FirebaseListObservable<any[]>;
  //surveys: FirebaseListObservable<any[]>;

  constructor (public authService: AuthService) {
    //this.menus = db.list('/menu');
    //this.surveys = db.list('/surveys');
  }


}
