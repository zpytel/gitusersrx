import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';



import { AppComponent } from './containers/app/app.component';
import {FindUserPageComponent } from './containers/find-user-page/find-user-page.component';
import {ViewUserPageComponent} from './containers/view-user-page/view-user-page.component';
import { CollectionPageComponent } from './containers/collection-page/collection-page.component';
import { NotFoundPageComponent } from './containers/not-found-page/not-found-page.component';
import {SelectUserPageComponent} from './containers/select-user-page/select-user-page.component';
import {routes} from './routes'
import {UserExistsGuard} from './guards/user-exist.guard'

@NgModule({
  declarations: [
    AppComponent,
    FindUserPageComponent,
    ViewUserPageComponent,
    CollectionPageComponent,
    NotFoundPageComponent,
    SelectUserPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    RouterModule.forRoot(routes, { useHash: true })
  ],
  providers: [UserExistsGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
