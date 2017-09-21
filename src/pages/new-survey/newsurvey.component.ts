import { Component, OnInit } from "@angular/core";
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database";
import { AuthService } from "../../services/auth.service";

@Component({
    selector: 'my-newsurvey',
    templateUrl: '../new-survey/newsurvey.component.html',
    styleUrls: ['../new-survey/newsurvey.component.css']
})
export class NewsurveyComponent {
	email: string;
	password: string;
    constructor (public authService: AuthService ,db: AngularFireDatabase) { }
}