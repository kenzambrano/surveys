import { Injectable } from "@angular/core";
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database";

@Injectable()
export class SurveysService {

    constructor(db: AngularFireDatabase){
    }

    listSurveys(): Promise<any> {
        return new Promise((reject, resolve) => {
        })
    }
}