import { Component, OnInit } from '@angular/core';
import { GeolocationService } from 'src/app/services/geolocation.service';
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

  constructor(private geolocationService: GeolocationService) { }

  public message: string;
  public libraryPosition: Array<number> = [10.1634, 36.79999];


  ngOnInit(): void {
    this.getPosition();
  }

  private getLocations(position: any): void {
    this.message = 'Searching for nearby places';
    mapboxgl.accessToken = ACCESS_TOKEN;
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [this.libraryPosition[0], this.libraryPosition[1]],
      zoom: 13
    });
    map.center = [[this.libraryPosition[0], this.libraryPosition[1]]];
    const marker = new mapboxgl.Marker({
      color: 'red',
      draggable: true
    }).setLngLat([this.libraryPosition[0], this.libraryPosition[1]])
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
      this.getLocations.bind(this),
      this.showError.bind(this),
      this.noGeo.bind(this));
  }
  getCurrentLocation(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const userLongitude = position.coords.longitude;
        const userLatitude = position.coords.latitude;
      });
    } else {
      console.log('No support for geolocation');
    }
  }

}
