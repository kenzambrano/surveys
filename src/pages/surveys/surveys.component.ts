import { Component } from "@angular/core";
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database";
import { AuthService } from "../../services/auth.service";

@Component({
    selector: 'my-surveys',
    templateUrl: '../surveys/surveys.component.html',
    styleUrls: ['../surveys/surveys.component.css']
}) 

export class SurveysComponent {
    surveys: FirebaseListObservable<any[]>;
    constructor (public authService: AuthService ,db: AngularFireDatabase) {
        this.surveys = db.list('/surveys');
        //alert();
        console.log(this.surveys)
      }
}