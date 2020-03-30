import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import * as L from 'leaflet';
import 'style-loader!leaflet/dist/leaflet.css';

@Component({
  selector: 'xa-maps-leaflet',
  styleUrls: ['./ngxa-maps-leaflet.component.scss'],
  templateUrl: './ngxa-maps-leaflet.component.html',
})
export class NgxaMapsLeafletComponent implements OnInit {

  @Input() public height: number = 25;
  @Input() public options = {
    layers: [
      L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' }),
    ],
    zoom: 4.5,
    center: L.latLng({ lat: -2.3641701, lng: 117.7690927 }),
  };
  @Input() public layers: any[] = [];
  @Input() public set markersFn(markers: L.LatLngExpression[]) {
    markers.forEach(marker => {
      this.layers.push(L.marker(marker).on('click', this.markerkClick));
    });
  }
  @Output() public onMarkerClick: EventEmitter<L.LatLng> = new EventEmitter<L.LatLng>();

  ngOnInit(): void {
    this.markersFn = [
      [ -6.3401758, 106.6426797 ]
    ];
  }

  public markerkClick(event): void {
    console.log(event.latlng);
    this.onMarkerClick.emit(event.latlng as L.LatLng);
  }

}
