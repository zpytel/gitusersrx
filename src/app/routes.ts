import { Routes } from '@angular/router';
import {UserProfileComponent } from './containers/user-profile-page/user-profile.component';
import {ViewUserPageComponent} from './containers/view-user-page/view-user-page.component';
import { CollectionPageComponent } from './containers/collection-page/collection-page.component';
import { NotFoundPageComponent } from './containers/not-found-page/not-found-page.component';
import {SelectUserPageComponent} from './containers/select-user-page/select-user-page.component';
import {UserExistsGuard} from './guards/user-exist.guard';
import {AuthenticateGuard} from './guards/authenticate.guard'
import {TestControlsComponent} from './containers/test-controls-page/test-controls.component';
import { FormPageComponent } from './containers/form-page/form-page.component';

export const routes: Routes = [
  {
    path: '',
    component: CollectionPageComponent
  },
  {
   path:'cars',
   component:TestControlsComponent,
   canActivate:[AuthenticateGuard]
   
  },
  {
    path: 'profile',
    component: UserProfileComponent,
    canActivate:[AuthenticateGuard]
  },
  {
    path: 'book/:id',
    canActivate: [ UserExistsGuard ],
    component: ViewUserPageComponent
  },
  {
    path:'form',
    component:FormPageComponent,
    canActivate:[AuthenticateGuard]
  },
  {
    path:'zibi',
    component:FormPageComponent,
    outlet:'zibioutlet'
  },
  {
    path: '**',
    component: NotFoundPageComponent
  }
  
];