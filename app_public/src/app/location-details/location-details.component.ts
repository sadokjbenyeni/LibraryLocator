import { Component, OnInit } from '@angular/core';
const mapboxgl = require('mapbox-gl');
@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.component.html',
  styleUrls: ['./location-details.component.scss']
})
export class LocationDetailsComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
    mapboxgl.accessToken = 'pk.eyJ1Ijoic3RhbmRhbDEiLCJhIjoiY2tpc3JqYXhmMGhkMDJ1bW1jMmpqZ3hnNSJ9.rJKWNXdRMFANIujV3y08nQ';
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [10.17, 36.8],
      zoom: 14
    });

    const marker = new mapboxgl.Marker({
      color: 'red',
      draggable: true
      }).setLngLat([10.1634, 36.79999])
      .addTo(map);
  }



}
