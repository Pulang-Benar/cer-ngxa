import { LatLngExpression } from 'leaflet';

export class LeafletModel {
    public markers: LatLngExpression[];
    public title?: string = '';
    public alt?: string = '';
    public className?: string;
}
