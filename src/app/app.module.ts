import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
import { AngularFireModule } from 'angularfire2'; 
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFireAuthModule } from "angularfire2/auth";
import { AuthService } from "../services/auth.service";
import { environment } from "../environments/environment";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule, Routes } from "@angular/router";
/** Material */
import {MdGridListModule, MdListModule, MdCardModule, MdButtonModule, MdMenuModule, MdToolbarModule, MdIconModule, MdInputModule, MdSnackBarModule} from '@angular/material';
import 'hammerjs';
/** Component App */
import { LoginComponent } from "../pages/login/login.component";
import { NewsurveyComponent } from "../pages/new-survey/newsurvey.component";
import { SurveysComponent } from "../pages/surveys/surveys.component";
import { MenuComponent } from "../pages/menu/menu.component";
/** Router Path */
const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'new-survey', component: NewsurveyComponent },
  { path: 'surveys', component: SurveysComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NewsurveyComponent,
    SurveysComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
    FormsModule,
    /** material */
    MdGridListModule,
    MdListModule,
    MdCardModule,
    MdButtonModule,
    MdMenuModule,
    MdToolbarModule,
    MdIconModule, 
    MdInputModule,
    MdSnackBarModule,
    /** router path  */
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
