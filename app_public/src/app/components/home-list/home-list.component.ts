import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { LibraryLocatorDataService } from 'src/app/services/library-locator-data.service';
import { Library } from 'src/app/models/library';
import { NumberValueAccessor } from '@angular/forms';
@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.scss']
})
export class HomeListComponent implements OnInit {

  constructor(private libraryLocatorDataService: LibraryLocatorDataService) { }

  public libraries: Library[];
  public maxDistance = 20000;

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition((position) => {
      this.getLibraries(position.coords.latitude, position.coords.longitude, this.maxDistance);
    });
  }

  private getLibraries(lng, lat, maxDistance): void {
    this.libraryLocatorDataService.getLibraries(lng, lat, maxDistance)
      .then(foundLibraries => this.libraries = foundLibraries);
  }
}
