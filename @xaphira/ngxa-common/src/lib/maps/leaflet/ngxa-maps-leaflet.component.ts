import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import * as L from 'leaflet';
import 'style-loader!leaflet/dist/leaflet.css';
import { delay } from 'rxjs/operators';
import { LeafletModel } from '../models/leaflet.model';

@Component({
  selector: 'xa-maps-leaflet',
  styleUrls: ['./ngxa-maps-leaflet.component.scss'],
  templateUrl: './ngxa-maps-leaflet.component.html',
})
export class NgxaMapsLeafletComponent implements OnInit {

  private map: L.Map;
  private defaultLatLng: L.LatLng = L.latLng({ lat: -2.3641701, lng: 117.7690927 });
  private zoom: number = 4.5;
  @Input() public height: number = 25;
  @Input() public options = {
    layers: [
      L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: 'Civilians Emergency Report' }),
    ],
    zoom: this.zoom,
    center: this.defaultLatLng,
  };
  @Input() public layers: any[] = [];
  @Input() public set markersFn(markers: LeafletModel[]) {
    if (markers) {
      this.layers = [];
      markers.forEach(marker => {
        this.layers.push(L.marker(marker.mark, {
          icon: L.icon({
            iconUrl: `${document.getElementsByTagName('base')[0].href}assets/map/marker-icon.png`,
            shadowUrl: `${document.getElementsByTagName('base')[0].href}assets/map/marker-shadow.png`,
            iconSize: [27.5, 40],
            iconAnchor: [20, 40],
            popupAnchor: [0, -40],
            className: marker.className,
          }),
          title: marker.title,
          alt: marker.alt,
        }).on('click', this.markerClick.bind(this)));
      });
    }
  }
  @Output() public onMarkerClick: EventEmitter<LeafletModel> = new EventEmitter<LeafletModel>();

  ngOnInit(): void {
  }

  public markerClick(event): void {
    const latlng: L.LatLng = event.latlng as L.LatLng;
    const title: string = event.target.options.title;
    const alt: string = event.target.options.alt;
    this.onMarkerClick.emit({
      mark: latlng ,
      title: title,
      alt: alt,
    });
    delay(200);
    this.map.setView([latlng.lat, latlng.lng], 15);
  }

  public onMapReady(map: L.Map): void {
    this.map = map;
  }

}
