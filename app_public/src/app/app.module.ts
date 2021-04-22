import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HomeListComponent } from './home-list/home-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LocationDetailsComponent } from './location-details/location-details.component';
import { AboutComponent } from './about/about.component';
import { AngularMaterialModule } from './angular-material.module';
@NgModule({
  declarations: [
    HomeListComponent,
    LocationDetailsComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule
  ],
  providers: [],
  bootstrap: [HomeListComponent]
})
export class AppModule { }
