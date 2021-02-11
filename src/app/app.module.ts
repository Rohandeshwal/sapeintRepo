import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FilterComponentComponent } from './modules/components/filter-component/filter-component.component';
import { ProgramListingComponent } from './modules/components/program-listing/program-listing.component';
import { LaunchProgramsComponent } from './modules/pages/launch-programs/launch-programs.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    FilterComponentComponent,
    ProgramListingComponent,
    LaunchProgramsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,SharedModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
