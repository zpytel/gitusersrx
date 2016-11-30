import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';




import { AppComponent } from './containers/app/app.component';

import { FindUserPageComponent } from './containers/find-user-page/find-user-page-component';

import { ViewBookPageComponent } from './containers/collection-page-component/collection-page-component';
import { CollectionPageComponent } from './containers/collection-page-component/collection-page-component';
import { NotFoundPageComponent } from './containers/collection-page-component/collection-page-component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
