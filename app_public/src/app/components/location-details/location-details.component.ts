import { Component, OnInit } from '@angular/core';
import { GeolocationService } from 'src/app/services/geolocation.service';
import { LibraryLocatorDataService } from 'src/app/services/library-locator-data.service';
import { Library } from '../../models/library';
const mapboxgl = require('mapbox-gl');
const ACCESS_TOKEN = 'pk.eyJ1Ijoic3RhbmRhbDEiLCJhIjoiY2tpc3JqYXhmMGhkMDJ1bW1jMmpqZ3hnNSJ9.rJKWNXdRMFANIujV3y08nQ';

@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.component.html',
  styleUrls: ['./location-details.component.scss']
})
export class LocationDetailsComponent implements OnInit {

  public userLongitude: number;
  public userLatitude: number;
  public libraryId = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);

  constructor(private geolocationService: GeolocationService, private libraryLocatorDataService: LibraryLocatorDataService) { }

  public message: string;
  public library: Library;
  public coords: number[];

  ngOnInit(): void {
    this.getLibraryDetails();
    this.initializeMap();
    this.getLibraryDetails();
    // this.getPosition();
  }

  private async getLibraryDetails(): Promise<void> {
    this.library = await this.libraryLocatorDataService.getLibraryById(this.libraryId);
  }

  private async initializeMap(): Promise<void> {
    let foundCoords = await this.libraryLocatorDataService.getCoordsById(this.libraryId);
    mapboxgl.accessToken = ACCESS_TOKEN;
    mapboxgl.setRTLTextPlugin(
      'https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js',
      null,
      true
    );
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [foundCoords[1], foundCoords[0]],
      zoom: 13
    });
    map.center = [[foundCoords[1], foundCoords[0]]];
    const marker = new mapboxgl.Marker({
      color: 'red',
      draggable: true
    }).setLngLat([foundCoords[1], foundCoords[0]])
      .addTo(map);
  }
  private showError(error: any): void {
    this.message = error.message;
  }

  private noGeo(): void {
    this.message = 'Geolocation not supported by this browser.';
  }

  private getPosition(): void {
    this.message = 'Getting your location ...';
    this.geolocationService.getPosition(
      this.initializeMap.bind(this),
      this.showError.bind(this),
      this.noGeo.bind(this));
  }
  // getCurrentLocation(): void {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition((position) => {
  //       const userLongitude = position.coords.longitude;
  //       const userLatitude = position.coords.latitude;
  //     });
  //   } else {
  //     console.log('No support for geolocation');
  //   }
  // }

}
