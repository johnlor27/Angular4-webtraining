import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ProjectListComponent } from './auth/project-list/project-list.component';
import { HeaderComponent } from './common/header/header.component';
import { LoaderComponent } from './common/loader/loader.component';

import { ProjectListservices} from './auth/project-list/services/project-list.services'
/*import { AuthenticationService } from  './auth/project-list/services/authentication.service';
import {Ng2Webstorage} from '@angular/cli';
import {HttpService} from './auth/project-list/services/http.service';*/

@NgModule({
  declarations: [
    AppComponent,
    ProjectListComponent,
    HeaderComponent,
    LoaderComponent
   ],
  imports: [
    //AuthenticationService,
    BrowserModule,
    FormsModule,
    HttpModule,
    //Ng2Webstorage
  ],
 
  providers: [ProjectListservices],
  bootstrap: [AppComponent]

})
export class AppModule { }
