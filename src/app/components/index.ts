
import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {MaterialModule} from '@angular/material'
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import {LayoutComponent} from "../components/layout/layout.component";
import {NavItemComponent} from "../components/nav-item/nav-item.component";
import {SidenavComponent} from "../components/sidenav/sidenav.component";
import {ToolbarComponent} from "../components/toolbar/toolbar.component";
import { DropdownComponent } from '../components/dropdown/dropdown.component'
import { CarDetailComponent } from '../components/car-detail/car-detail.component';


export const COMPONENTS=[
    LayoutComponent,
    NavItemComponent,
    SidenavComponent,
    ToolbarComponent,
    DropdownComponent,
    CarDetailComponent
    ]

@NgModule({
 imports:[
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule
 ],
 declarations:COMPONENTS,
 exports:COMPONENTS
})
export class ComponentsModule{

}