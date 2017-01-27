
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
import { CustomSwithcherComponent } from '../controls/custom-swithcher/custom-swithcher.component';
import { UserProfileComponent } from '../components/user-profile/user-profile.component';
import { InfoComponent } from '../components/info/info.component';
import { SearchComponent } from '../components/search/search.component';
import { TabGroupComponent } from '../components/tab-group/tab-group.component';
import { TabComponent } from '../components/tab/tab.component';
import { TabTemplateComponent } from '../components/tab-template/tab-template.component';
import { SearchTextboxComponent } from '../components/search-textbox/search-textbox.component';
import { ListItemsComponent } from '../components/list-items/list-items.component';
import { TruncatePipe } from '../pipes/truncate.pipe';


export const COMPONENTS=[
    LayoutComponent,
    NavItemComponent,
    SidenavComponent,
    ToolbarComponent,
    DropdownComponent,
    CarDetailComponent,
    CarSearchComponent,
    AddCarFormComponent,
    CustomSwithcherComponent,
    UserProfileComponent,
    InfoComponent,
    SearchComponent,
    TabGroupComponent,
    TabComponent,
    TabTemplateComponent,
    SearchTextboxComponent,
    ListItemsComponent,
    TruncatePipe
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