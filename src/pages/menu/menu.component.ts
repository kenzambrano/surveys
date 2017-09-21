import { Component } from "@angular/core";
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database";
import { AuthService } from "../../services/auth.service";
import { Http } from "@angular/http";

@Component({
    selector: 'my-menu',
    templateUrl: '../menu/menu.component.html',
    styleUrls: ['../menu/menu.component.css']
})

export class MenuComponent {
    menus: FirebaseListObservable<any[]>;
    constructor (public authService: AuthService ,db: AngularFireDatabase) {
        this.menus = db.list('/menu');
    }

    logout() {
        this.authService.logout();
    }
}