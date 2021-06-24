import { Component, OnInit, Inject, Output, Input } from '@angular/core';
import { LibraryLocatorDataService } from 'src/app/services/library-locator-data.service';
import { Library } from 'src/app/models/library';
import { MatSliderChange } from '@angular/material/slider';
@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.scss']
})

export class HomeListComponent implements OnInit {
  constructor(private libraryLocatorDataService: LibraryLocatorDataService) { }

  public libraries: Library[];
  public maxDistance = 5000;

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition((position) => {
      this.getLibraries(position.coords.latitude, position.coords.longitude, this.maxDistance);
    });
  }

  private getLibraries(lng, lat, maxDistance): void {
    this.libraryLocatorDataService.getLibraries(lng, lat, maxDistance)
      .then(foundLibraries => this.libraries = foundLibraries);
  }

  public formatLabel(value: number): any {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'km';
    }
    return value;
  }

  public onInputChange(event: MatSliderChange): void {
    navigator.geolocation.getCurrentPosition((position) => {
      this.getLibraries(position.coords.latitude, position.coords.longitude, event.value);
    });
  }
}
