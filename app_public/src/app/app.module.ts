import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeListComponent } from './home-list/home-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LocationDetailsComponent } from './location-details/location-details.component';
import { AboutComponent } from './about/about.component';
import { AngularMaterialModule } from './angular-material.module';
import { FrameworkComponent } from './framework/framework.component';
@NgModule({
  declarations: [
    FrameworkComponent,
    HomeListComponent,
    LocationDetailsComponent,
    AboutComponent
  ],
  imports: [
    RouterModule.forRoot([{
      path: '',
      component: HomeListComponent
    },
    {
      path: 'about',
      component: AboutComponent
    },
    {
      path: 'library/:libraryId',
      component: LocationDetailsComponent
    }]
    ),
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterialModule
  ],
  providers: [],
  bootstrap: [FrameworkComponent]
})
export class AppModule { }
