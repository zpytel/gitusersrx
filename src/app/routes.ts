import { Routes } from '@angular/router';


export const routes: Routes = [
  {
    path: '',
    component: CollectionPageComponent
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