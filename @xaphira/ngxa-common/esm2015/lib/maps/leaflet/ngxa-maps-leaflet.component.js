/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as L from 'leaflet';
import 'style-loader!leaflet/dist/leaflet.css';
import { delay } from 'rxjs/operators';
export class NgxaMapsLeafletComponent {
    constructor() {
        this.defaultLatLng = L.latLng({ lat: -2.3641701, lng: 117.7690927 });
        this.zoom = 4.5;
        this.height = 25;
        this.options = {
            layers: [
                L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: 'Civilians Emergency Report' }),
            ],
            zoom: this.zoom,
            center: this.defaultLatLng,
        };
        this.layers = [];
        this.onMarkerClick = new EventEmitter();
    }
    /**
     * @param {?} markers
     * @return {?}
     */
    set markersFn(markers) {
        if (markers) {
            this.layers = [];
            markers.forEach((/**
             * @param {?} marker
             * @return {?}
             */
            marker => {
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
            }));
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} event
     * @return {?}
     */
    markerClick(event) {
        /** @type {?} */
        const latlng = (/** @type {?} */ (event.latlng));
        /** @type {?} */
        const title = event.target.options.title;
        /** @type {?} */
        const alt = event.target.options.alt;
        this.onMarkerClick.emit({
            mark: latlng,
            title: title,
            alt: alt,
        });
        delay(200);
        this.map.setView([latlng.lat, latlng.lng], 15);
    }
    /**
     * @param {?} map
     * @return {?}
     */
    onMapReady(map) {
        this.map = map;
    }
}
NgxaMapsLeafletComponent.decorators = [
    { type: Component, args: [{
                selector: 'xa-maps-leaflet',
                template: "<div\n  id=\"leafletmap\"\n  [ngStyle]=\"{\n    'height': height + 'rem'\n  }\"\n  leaflet\n  [leafletOptions]=\"options\"\n  [leafletLayers]=\"layers\"\n  (leafletMapReady)=\"onMapReady($event)\">\n</div>",
                styles: [".nb-theme-default :host ::ng-deep .leaflet-bottom,.nb-theme-default :host ::ng-deep .leaflet-top{z-index:997}.nb-theme-default :host ::ng-deep .leaflet-container{width:100%;height:36.5625rem}.nb-theme-default :host ::ng-deep .pulse{-webkit-animation:1s ease-out infinite pulsate;animation:1s ease-out infinite pulsate;opacity:0}@-webkit-keyframes pulsate{0%,100%{opacity:0}50%{opacity:1}}.nb-theme-dark :host ::ng-deep .leaflet-bottom,.nb-theme-dark :host ::ng-deep .leaflet-top{z-index:997}.nb-theme-dark :host ::ng-deep .leaflet-container{width:100%;height:36.5625rem}.nb-theme-dark :host ::ng-deep .pulse{-webkit-animation:1s ease-out infinite pulsate;animation:1s ease-out infinite pulsate;opacity:0}.nb-theme-cosmic :host ::ng-deep .leaflet-bottom,.nb-theme-cosmic :host ::ng-deep .leaflet-top{z-index:997}.nb-theme-cosmic :host ::ng-deep .leaflet-container{width:100%;height:36.5625rem}.nb-theme-cosmic :host ::ng-deep .pulse{-webkit-animation:1s ease-out infinite pulsate;animation:1s ease-out infinite pulsate;opacity:0}.nb-theme-corporate :host ::ng-deep .leaflet-bottom,.nb-theme-corporate :host ::ng-deep .leaflet-top{z-index:997}.nb-theme-corporate :host ::ng-deep .leaflet-container{width:100%;height:36.5625rem}.nb-theme-corporate :host ::ng-deep .pulse{-webkit-animation:1s ease-out infinite pulsate;animation:1s ease-out infinite pulsate;opacity:0}@keyframes pulsate{0%,100%{opacity:0}50%{opacity:1}}"]
            }] }
];
NgxaMapsLeafletComponent.propDecorators = {
    height: [{ type: Input }],
    options: [{ type: Input }],
    layers: [{ type: Input }],
    markersFn: [{ type: Input }],
    onMarkerClick: [{ type: Output }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    NgxaMapsLeafletComponent.prototype.map;
    /**
     * @type {?}
     * @private
     */
    NgxaMapsLeafletComponent.prototype.defaultLatLng;
    /**
     * @type {?}
     * @private
     */
    NgxaMapsLeafletComponent.prototype.zoom;
    /** @type {?} */
    NgxaMapsLeafletComponent.prototype.height;
    /** @type {?} */
    NgxaMapsLeafletComponent.prototype.options;
    /** @type {?} */
    NgxaMapsLeafletComponent.prototype.layers;
    /** @type {?} */
    NgxaMapsLeafletComponent.prototype.onMarkerClick;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4YS1tYXBzLWxlYWZsZXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHhhcGhpcmEvbmd4YS1jb21tb24vIiwic291cmNlcyI6WyJsaWIvbWFwcy9sZWFmbGV0L25neGEtbWFwcy1sZWFmbGV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUvRSxPQUFPLEtBQUssQ0FBQyxNQUFNLFNBQVMsQ0FBQztBQUM3QixPQUFPLHVDQUF1QyxDQUFDO0FBQy9DLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQVF2QyxNQUFNLE9BQU8sd0JBQXdCO0lBTHJDO1FBUVUsa0JBQWEsR0FBYSxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsU0FBUyxFQUFFLEdBQUcsRUFBRSxXQUFXLEVBQUUsQ0FBQyxDQUFDO1FBQzFFLFNBQUksR0FBVyxHQUFHLENBQUM7UUFDWCxXQUFNLEdBQVcsRUFBRSxDQUFDO1FBQ3BCLFlBQU8sR0FBRztZQUN4QixNQUFNLEVBQUU7Z0JBQ04sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxtREFBbUQsRUFBRSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsV0FBVyxFQUFFLDRCQUE0QixFQUFFLENBQUM7YUFDN0g7WUFDRCxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixNQUFNLEVBQUUsSUFBSSxDQUFDLGFBQWE7U0FDM0IsQ0FBQztRQUNjLFdBQU0sR0FBVSxFQUFFLENBQUM7UUFvQmxCLGtCQUFhLEdBQStCLElBQUksWUFBWSxFQUFnQixDQUFDO0lBc0JoRyxDQUFDOzs7OztJQXpDQyxJQUFvQixTQUFTLENBQUMsT0FBdUI7UUFDbkQsSUFBSSxPQUFPLEVBQUU7WUFDWCxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztZQUNqQixPQUFPLENBQUMsT0FBTzs7OztZQUFDLE1BQU0sQ0FBQyxFQUFFO2dCQUN2QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUU7b0JBQ3JDLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDO3dCQUNYLE9BQU8sRUFBRSxHQUFHLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLDRCQUE0Qjt3QkFDckYsU0FBUyxFQUFFLEdBQUcsUUFBUSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksOEJBQThCO3dCQUN6RixRQUFRLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDO3dCQUNwQixVQUFVLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDO3dCQUNwQixXQUFXLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7d0JBQ3JCLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUztxQkFDNUIsQ0FBQztvQkFDRixLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUs7b0JBQ25CLEdBQUcsRUFBRSxNQUFNLENBQUMsR0FBRztpQkFDaEIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQy9DLENBQUMsRUFBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDOzs7O0lBR0QsUUFBUTtJQUNSLENBQUM7Ozs7O0lBRU0sV0FBVyxDQUFDLEtBQUs7O2NBQ2hCLE1BQU0sR0FBYSxtQkFBQSxLQUFLLENBQUMsTUFBTSxFQUFZOztjQUMzQyxLQUFLLEdBQVcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSzs7Y0FDMUMsR0FBRyxHQUFXLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUc7UUFDNUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUM7WUFDdEIsSUFBSSxFQUFFLE1BQU07WUFDWixLQUFLLEVBQUUsS0FBSztZQUNaLEdBQUcsRUFBRSxHQUFHO1NBQ1QsQ0FBQyxDQUFDO1FBQ0gsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ1gsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNqRCxDQUFDOzs7OztJQUVNLFVBQVUsQ0FBQyxHQUFVO1FBQzFCLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO0lBQ2pCLENBQUM7OztZQTFERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtnQkFFM0IseU5BQWlEOzthQUNsRDs7O3FCQU1FLEtBQUs7c0JBQ0wsS0FBSztxQkFPTCxLQUFLO3dCQUNMLEtBQUs7NEJBbUJMLE1BQU07Ozs7Ozs7SUEvQlAsdUNBQW1COzs7OztJQUNuQixpREFBa0Y7Ozs7O0lBQ2xGLHdDQUEyQjs7SUFDM0IsMENBQW9DOztJQUNwQywyQ0FNRTs7SUFDRiwwQ0FBbUM7O0lBb0JuQyxpREFBOEYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCAqIGFzIEwgZnJvbSAnbGVhZmxldCc7XG5pbXBvcnQgJ3N0eWxlLWxvYWRlciFsZWFmbGV0L2Rpc3QvbGVhZmxldC5jc3MnO1xuaW1wb3J0IHsgZGVsYXkgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBMZWFmbGV0TW9kZWwgfSBmcm9tICcuLi9tb2RlbHMvbGVhZmxldC5tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3hhLW1hcHMtbGVhZmxldCcsXG4gIHN0eWxlVXJsczogWycuL25neGEtbWFwcy1sZWFmbGV0LmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi9uZ3hhLW1hcHMtbGVhZmxldC5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIE5neGFNYXBzTGVhZmxldENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgcHJpdmF0ZSBtYXA6IEwuTWFwO1xuICBwcml2YXRlIGRlZmF1bHRMYXRMbmc6IEwuTGF0TG5nID0gTC5sYXRMbmcoeyBsYXQ6IC0yLjM2NDE3MDEsIGxuZzogMTE3Ljc2OTA5MjcgfSk7XG4gIHByaXZhdGUgem9vbTogbnVtYmVyID0gNC41O1xuICBASW5wdXQoKSBwdWJsaWMgaGVpZ2h0OiBudW1iZXIgPSAyNTtcbiAgQElucHV0KCkgcHVibGljIG9wdGlvbnMgPSB7XG4gICAgbGF5ZXJzOiBbXG4gICAgICBMLnRpbGVMYXllcignaHR0cDovL3tzfS50aWxlLm9wZW5zdHJlZXRtYXAub3JnL3t6fS97eH0ve3l9LnBuZycsIHsgbWF4Wm9vbTogMTgsIGF0dHJpYnV0aW9uOiAnQ2l2aWxpYW5zIEVtZXJnZW5jeSBSZXBvcnQnIH0pLFxuICAgIF0sXG4gICAgem9vbTogdGhpcy56b29tLFxuICAgIGNlbnRlcjogdGhpcy5kZWZhdWx0TGF0TG5nLFxuICB9O1xuICBASW5wdXQoKSBwdWJsaWMgbGF5ZXJzOiBhbnlbXSA9IFtdO1xuICBASW5wdXQoKSBwdWJsaWMgc2V0IG1hcmtlcnNGbihtYXJrZXJzOiBMZWFmbGV0TW9kZWxbXSkge1xuICAgIGlmIChtYXJrZXJzKSB7XG4gICAgICB0aGlzLmxheWVycyA9IFtdO1xuICAgICAgbWFya2Vycy5mb3JFYWNoKG1hcmtlciA9PiB7XG4gICAgICAgIHRoaXMubGF5ZXJzLnB1c2goTC5tYXJrZXIobWFya2VyLm1hcmssIHtcbiAgICAgICAgICBpY29uOiBMLmljb24oe1xuICAgICAgICAgICAgaWNvblVybDogYCR7ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2Jhc2UnKVswXS5ocmVmfWFzc2V0cy9tYXAvbWFya2VyLWljb24ucG5nYCxcbiAgICAgICAgICAgIHNoYWRvd1VybDogYCR7ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2Jhc2UnKVswXS5ocmVmfWFzc2V0cy9tYXAvbWFya2VyLXNoYWRvdy5wbmdgLFxuICAgICAgICAgICAgaWNvblNpemU6IFsyNy41LCA0MF0sXG4gICAgICAgICAgICBpY29uQW5jaG9yOiBbMjAsIDQwXSxcbiAgICAgICAgICAgIHBvcHVwQW5jaG9yOiBbMCwgLTQwXSxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogbWFya2VyLmNsYXNzTmFtZSxcbiAgICAgICAgICB9KSxcbiAgICAgICAgICB0aXRsZTogbWFya2VyLnRpdGxlLFxuICAgICAgICAgIGFsdDogbWFya2VyLmFsdCxcbiAgICAgICAgfSkub24oJ2NsaWNrJywgdGhpcy5tYXJrZXJDbGljay5iaW5kKHRoaXMpKSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgQE91dHB1dCgpIHB1YmxpYyBvbk1hcmtlckNsaWNrOiBFdmVudEVtaXR0ZXI8TGVhZmxldE1vZGVsPiA9IG5ldyBFdmVudEVtaXR0ZXI8TGVhZmxldE1vZGVsPigpO1xuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICB9XG5cbiAgcHVibGljIG1hcmtlckNsaWNrKGV2ZW50KTogdm9pZCB7XG4gICAgY29uc3QgbGF0bG5nOiBMLkxhdExuZyA9IGV2ZW50LmxhdGxuZyBhcyBMLkxhdExuZztcbiAgICBjb25zdCB0aXRsZTogc3RyaW5nID0gZXZlbnQudGFyZ2V0Lm9wdGlvbnMudGl0bGU7XG4gICAgY29uc3QgYWx0OiBzdHJpbmcgPSBldmVudC50YXJnZXQub3B0aW9ucy5hbHQ7XG4gICAgdGhpcy5vbk1hcmtlckNsaWNrLmVtaXQoe1xuICAgICAgbWFyazogbGF0bG5nICxcbiAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgIGFsdDogYWx0LFxuICAgIH0pO1xuICAgIGRlbGF5KDIwMCk7XG4gICAgdGhpcy5tYXAuc2V0VmlldyhbbGF0bG5nLmxhdCwgbGF0bG5nLmxuZ10sIDE1KTtcbiAgfVxuXG4gIHB1YmxpYyBvbk1hcFJlYWR5KG1hcDogTC5NYXApOiB2b2lkIHtcbiAgICB0aGlzLm1hcCA9IG1hcDtcbiAgfVxuXG59XG4iXX0=