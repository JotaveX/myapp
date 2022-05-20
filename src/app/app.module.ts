import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyFirstComponent } from './myfirst.component';
import { MysecondComponent } from './mysecond/mysecond.component';
import { MythirdComponent } from './mysecond/mythird/mythird.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { StringInterpolationComponent } from './string-interpolation/string-interpolation.component';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDividerModule} from '@angular/material/divider';
import { TwoWayDataBindingComponent } from './two-way-data-binding/two-way-data-binding.component';
import { FormsModule } from '@angular/forms';
import { NgStyleComponent } from './ng-style/ng-style.component';
import {MatRadioModule} from '@angular/material/radio';
import { NgClassComponent } from './ng-class/ng-class.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { VacaComponent } from './vaca/vaca.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { Routes, RouterModule } from '@angular/router';
import { NgswhichComponent } from './ngswhich/ngswhich.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { NgTemplateComponent } from './ng-template/ng-template.component';
import { NgcontainerComponent } from './ngcontainer/ngcontainer.component';
import { NgContentComponent } from './ng-content/ng-content.component';
import { InputBindingComponent } from './input-binding/input-binding.component';
import { EventComponent } from './event/event.component';
import { ChildItemComponent } from './event/child-item/child-item.component';
import { ClientsComponent } from './clients/clients.component';
import { ItemClientComponent } from './clients/item-client/item-client.component';


const routes: Routes = [
  { path: 'app-vaca', component: VacaComponent },
  /*{ path: 'app-menu', component: MainNavComponent },*/
];

@NgModule({
  declarations: [
    AppComponent,
    MyFirstComponent,
    MysecondComponent,
    MythirdComponent,
    StringInterpolationComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    TwoWayDataBindingComponent,
    NgStyleComponent,
    NgClassComponent,
    NgIfComponent,
    VacaComponent,
    MainNavComponent,
    NgswhichComponent,
    NgTemplateComponent,
    NgcontainerComponent,
    NgContentComponent,
    InputBindingComponent,
    EventComponent,
    ChildItemComponent,
    ClientsComponent,
    ItemClientComponent,
  ],
  imports: [
    BrowserModule,
    MatRadioModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    MatSelectModule,
    MatFormFieldModule,
    MatDividerModule,
    FormsModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatProgressBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
