import { OnInit, EventEmitter } from '@angular/core';
import * as L from 'leaflet';
import 'style-loader!leaflet/dist/leaflet.css';
import { LeafletModel } from '../models/leaflet.model';
export declare class NgxaMapsLeafletComponent implements OnInit {
    private map;
    private defaultLatLng;
    private zoom;
    height: number;
    options: {
        layers: L.TileLayer[];
        zoom: number;
        center: L.LatLng;
    };
    layers: any[];
    markersFn: LeafletModel[];
    onMarkerClick: EventEmitter<LeafletModel>;
    ngOnInit(): void;
    markerClick(event: any): void;
    onMapReady(map: L.Map): void;
}
