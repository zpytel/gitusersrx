import { Routes } from '@angular/router';
import {FindUserPageComponent } from './containers/find-user-page/find-user-page.component';
import {ViewUserPageComponent} from './containers/view-user-page/view-user-page.component';
import { CollectionPageComponent } from './containers/collection-page/collection-page.component';
import { NotFoundPageComponent } from './containers/not-found-page/not-found-page.component';
import {SelectUserPageComponent} from './containers/select-user-page/select-user-page.component';
import {UserExistsGuard} from './guards/user-exist.guard'
import {TestControlsComponent} from './containers/test-controls-page/test-controls.component';

export const routes: Routes = [
  {
    path: '',
    component: CollectionPageComponent
  },
  {
   path:'cars',
   component:TestControlsComponent
  },
  {
    path: 'book/find',
    component: FindUserPageComponent
  },
  {
    path: 'book/:id',
    canActivate: [ UserExistsGuard ],
    component: ViewUserPageComponent
  },
  {
    path: '**',
    component: NotFoundPageComponent
  }
];