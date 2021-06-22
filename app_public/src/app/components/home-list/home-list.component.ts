import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { LibraryLocatorDataService } from 'src/app/services/library-locator-data.service';
import { Library } from 'src/app/models/library';
@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.scss']
})
export class HomeListComponent implements OnInit {

  constructor(private libraryLocatorDataService: LibraryLocatorDataService) {
  }

  ngOnInit(): void {
    this.getLibraries();
  }

  public libraries: Library[];

  private getLibraries(): void {
    this.libraryLocatorDataService.getLibraries()
      .then(foundLibraries => this.libraries = foundLibraries);
  }
}
