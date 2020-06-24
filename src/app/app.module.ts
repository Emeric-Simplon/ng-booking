import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CitiesSidebarComponent } from './cities-sidebar/cities-sidebar.component';
import { HotelDetailsComponent } from './hotel-details/hotel-details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    HotelListComponent,
    LoginComponent,
    CitiesSidebarComponent,
    HotelDetailsComponent
  ],
  imports: [
    AppRoutingModule,
    HttpClientModule, 
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    NgbModule],
    
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
