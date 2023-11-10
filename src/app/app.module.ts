import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './features/vacation4u-user-web/common/nav-bar/nav-bar.component';

// import { Vacation4uUserWebComponent } from './features/vacation4u-user-web/vacation4u-user-web/vacation4u-user-web.component';

@NgModule({
  declarations: [
    AppComponent,
    // Vacation4uUserWebComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
