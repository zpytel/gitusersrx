
import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {MaterialModule} from '@angular/material'
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import {LayoutComponent} from "../components/layout/layout.component";
import {NavItemComponent} from "../components/nav-item/nav-item.component";
import {SidenavComponent} from "../components/sidenav/sidenav.component";
import {ToolbarComponent} from "../components/toolbar/toolbar.component";
import { DropdownComponent } from '../components/dropdown/dropdown.component'
import { CarDetailComponent } from '../components/car-detail/car-detail.component';
import { CarSearchComponent } from '../components/car-search/car-search.component';
import { AddCarFormComponent } from '../components/add-car-form/add-car-form.component';

export const COMPONENTS=[
    LayoutComponent,
    NavItemComponent,
    SidenavComponent,
    ToolbarComponent,
    DropdownComponent,
    CarDetailComponent,
    CarSearchComponent,
    AddCarFormComponent
    ]

@NgModule({
 imports:[
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    RouterModule
 ],
 declarations:COMPONENTS,
 exports:COMPONENTS
})
export class ComponentsModule{

}