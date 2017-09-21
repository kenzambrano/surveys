import { Component, OnInit } from "@angular/core";
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database";
import { AuthService } from "../../services/auth.service";

@Component({
    selector: 'login',
    templateUrl: '../login/login.component.html',
    styleUrls: ['../login/login.component.css']
})
export class LoginComponent {
	email: string;
	password: string;
	constructor (public authService: AuthService ,db: AngularFireDatabase) { }

  signup() {
    this.authService.signup(this.email, this.password);
    this.email = this.password = "";
  }

  login() {
    this.authService.login(this.email, this.password);
    this.email = this.password = "";
  }
}