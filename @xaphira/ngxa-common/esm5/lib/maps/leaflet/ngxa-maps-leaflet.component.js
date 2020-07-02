/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as L from 'leaflet';
import 'style-loader!leaflet/dist/leaflet.css';
import { delay } from 'rxjs/operators';
var NgxaMapsLeafletComponent = /** @class */ (function () {
    function NgxaMapsLeafletComponent() {
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
    Object.defineProperty(NgxaMapsLeafletComponent.prototype, "markersFn", {
        set: /**
         * @param {?} markers
         * @return {?}
         */
        function (markers) {
            var _this = this;
            if (markers) {
                this.layers = [];
                markers.forEach((/**
                 * @param {?} marker
                 * @return {?}
                 */
                function (marker) {
                    _this.layers.push(L.marker(marker.mark, {
                        icon: L.icon({
                            iconUrl: document.getElementsByTagName('base')[0].href + "assets/map/marker-icon.png",
                            shadowUrl: document.getElementsByTagName('base')[0].href + "assets/map/marker-shadow.png",
                            iconSize: [27.5, 40],
                            iconAnchor: [20, 40],
                            popupAnchor: [0, -40],
                            className: marker.className,
                        }),
                        title: marker.title,
                        alt: marker.alt,
                    }).on('click', _this.markerClick.bind(_this)));
                }));
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NgxaMapsLeafletComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NgxaMapsLeafletComponent.prototype.markerClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var latlng = (/** @type {?} */ (event.latlng));
        /** @type {?} */
        var title = event.target.options.title;
        /** @type {?} */
        var alt = event.target.options.alt;
        this.onMarkerClick.emit({
            mark: latlng,
            title: title,
            alt: alt,
        });
        delay(200);
        this.map.setView([latlng.lat, latlng.lng], 15);
    };
    /**
     * @param {?} map
     * @return {?}
     */
    NgxaMapsLeafletComponent.prototype.onMapReady = /**
     * @param {?} map
     * @return {?}
     */
    function (map) {
        this.map = map;
    };
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
    return NgxaMapsLeafletComponent;
}());
export { NgxaMapsLeafletComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4YS1tYXBzLWxlYWZsZXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHhhcGhpcmEvbmd4YS1jb21tb24vIiwic291cmNlcyI6WyJsaWIvbWFwcy9sZWFmbGV0L25neGEtbWFwcy1sZWFmbGV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUvRSxPQUFPLEtBQUssQ0FBQyxNQUFNLFNBQVMsQ0FBQztBQUM3QixPQUFPLHVDQUF1QyxDQUFDO0FBQy9DLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUd2QztJQUFBO1FBUVUsa0JBQWEsR0FBYSxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsU0FBUyxFQUFFLEdBQUcsRUFBRSxXQUFXLEVBQUUsQ0FBQyxDQUFDO1FBQzFFLFNBQUksR0FBVyxHQUFHLENBQUM7UUFDWCxXQUFNLEdBQVcsRUFBRSxDQUFDO1FBQ3BCLFlBQU8sR0FBRztZQUN4QixNQUFNLEVBQUU7Z0JBQ04sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxtREFBbUQsRUFBRSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsV0FBVyxFQUFFLDRCQUE0QixFQUFFLENBQUM7YUFDN0g7WUFDRCxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixNQUFNLEVBQUUsSUFBSSxDQUFDLGFBQWE7U0FDM0IsQ0FBQztRQUNjLFdBQU0sR0FBVSxFQUFFLENBQUM7UUFvQmxCLGtCQUFhLEdBQStCLElBQUksWUFBWSxFQUFnQixDQUFDO0lBc0JoRyxDQUFDO0lBekNDLHNCQUFvQiwrQ0FBUzs7Ozs7UUFBN0IsVUFBOEIsT0FBdUI7WUFBckQsaUJBa0JDO1lBakJDLElBQUksT0FBTyxFQUFFO2dCQUNYLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO2dCQUNqQixPQUFPLENBQUMsT0FBTzs7OztnQkFBQyxVQUFBLE1BQU07b0JBQ3BCLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRTt3QkFDckMsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUM7NEJBQ1gsT0FBTyxFQUFLLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLCtCQUE0Qjs0QkFDckYsU0FBUyxFQUFLLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLGlDQUE4Qjs0QkFDekYsUUFBUSxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQzs0QkFDcEIsVUFBVSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQzs0QkFDcEIsV0FBVyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDOzRCQUNyQixTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVM7eUJBQzVCLENBQUM7d0JBQ0YsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLO3dCQUNuQixHQUFHLEVBQUUsTUFBTSxDQUFDLEdBQUc7cUJBQ2hCLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLEtBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDL0MsQ0FBQyxFQUFDLENBQUM7YUFDSjtRQUNILENBQUM7OztPQUFBOzs7O0lBR0QsMkNBQVE7OztJQUFSO0lBQ0EsQ0FBQzs7Ozs7SUFFTSw4Q0FBVzs7OztJQUFsQixVQUFtQixLQUFLOztZQUNoQixNQUFNLEdBQWEsbUJBQUEsS0FBSyxDQUFDLE1BQU0sRUFBWTs7WUFDM0MsS0FBSyxHQUFXLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUs7O1lBQzFDLEdBQUcsR0FBVyxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHO1FBQzVDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDO1lBQ3RCLElBQUksRUFBRSxNQUFNO1lBQ1osS0FBSyxFQUFFLEtBQUs7WUFDWixHQUFHLEVBQUUsR0FBRztTQUNULENBQUMsQ0FBQztRQUNILEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNYLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDakQsQ0FBQzs7Ozs7SUFFTSw2Q0FBVTs7OztJQUFqQixVQUFrQixHQUFVO1FBQzFCLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO0lBQ2pCLENBQUM7O2dCQTFERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtvQkFFM0IseU5BQWlEOztpQkFDbEQ7Ozt5QkFNRSxLQUFLOzBCQUNMLEtBQUs7eUJBT0wsS0FBSzs0QkFDTCxLQUFLO2dDQW1CTCxNQUFNOztJQXNCVCwrQkFBQztDQUFBLEFBNURELElBNERDO1NBdkRZLHdCQUF3Qjs7Ozs7O0lBRW5DLHVDQUFtQjs7Ozs7SUFDbkIsaURBQWtGOzs7OztJQUNsRix3Q0FBMkI7O0lBQzNCLDBDQUFvQzs7SUFDcEMsMkNBTUU7O0lBQ0YsMENBQW1DOztJQW9CbkMsaURBQThGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgKiBhcyBMIGZyb20gJ2xlYWZsZXQnO1xuaW1wb3J0ICdzdHlsZS1sb2FkZXIhbGVhZmxldC9kaXN0L2xlYWZsZXQuY3NzJztcbmltcG9ydCB7IGRlbGF5IH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgTGVhZmxldE1vZGVsIH0gZnJvbSAnLi4vbW9kZWxzL2xlYWZsZXQubW9kZWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd4YS1tYXBzLWxlYWZsZXQnLFxuICBzdHlsZVVybHM6IFsnLi9uZ3hhLW1hcHMtbGVhZmxldC5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vbmd4YS1tYXBzLWxlYWZsZXQuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBOZ3hhTWFwc0xlYWZsZXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHByaXZhdGUgbWFwOiBMLk1hcDtcbiAgcHJpdmF0ZSBkZWZhdWx0TGF0TG5nOiBMLkxhdExuZyA9IEwubGF0TG5nKHsgbGF0OiAtMi4zNjQxNzAxLCBsbmc6IDExNy43NjkwOTI3IH0pO1xuICBwcml2YXRlIHpvb206IG51bWJlciA9IDQuNTtcbiAgQElucHV0KCkgcHVibGljIGhlaWdodDogbnVtYmVyID0gMjU7XG4gIEBJbnB1dCgpIHB1YmxpYyBvcHRpb25zID0ge1xuICAgIGxheWVyczogW1xuICAgICAgTC50aWxlTGF5ZXIoJ2h0dHA6Ly97c30udGlsZS5vcGVuc3RyZWV0bWFwLm9yZy97en0ve3h9L3t5fS5wbmcnLCB7IG1heFpvb206IDE4LCBhdHRyaWJ1dGlvbjogJ0NpdmlsaWFucyBFbWVyZ2VuY3kgUmVwb3J0JyB9KSxcbiAgICBdLFxuICAgIHpvb206IHRoaXMuem9vbSxcbiAgICBjZW50ZXI6IHRoaXMuZGVmYXVsdExhdExuZyxcbiAgfTtcbiAgQElucHV0KCkgcHVibGljIGxheWVyczogYW55W10gPSBbXTtcbiAgQElucHV0KCkgcHVibGljIHNldCBtYXJrZXJzRm4obWFya2VyczogTGVhZmxldE1vZGVsW10pIHtcbiAgICBpZiAobWFya2Vycykge1xuICAgICAgdGhpcy5sYXllcnMgPSBbXTtcbiAgICAgIG1hcmtlcnMuZm9yRWFjaChtYXJrZXIgPT4ge1xuICAgICAgICB0aGlzLmxheWVycy5wdXNoKEwubWFya2VyKG1hcmtlci5tYXJrLCB7XG4gICAgICAgICAgaWNvbjogTC5pY29uKHtcbiAgICAgICAgICAgIGljb25Vcmw6IGAke2RvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdiYXNlJylbMF0uaHJlZn1hc3NldHMvbWFwL21hcmtlci1pY29uLnBuZ2AsXG4gICAgICAgICAgICBzaGFkb3dVcmw6IGAke2RvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdiYXNlJylbMF0uaHJlZn1hc3NldHMvbWFwL21hcmtlci1zaGFkb3cucG5nYCxcbiAgICAgICAgICAgIGljb25TaXplOiBbMjcuNSwgNDBdLFxuICAgICAgICAgICAgaWNvbkFuY2hvcjogWzIwLCA0MF0sXG4gICAgICAgICAgICBwb3B1cEFuY2hvcjogWzAsIC00MF0sXG4gICAgICAgICAgICBjbGFzc05hbWU6IG1hcmtlci5jbGFzc05hbWUsXG4gICAgICAgICAgfSksXG4gICAgICAgICAgdGl0bGU6IG1hcmtlci50aXRsZSxcbiAgICAgICAgICBhbHQ6IG1hcmtlci5hbHQsXG4gICAgICAgIH0pLm9uKCdjbGljaycsIHRoaXMubWFya2VyQ2xpY2suYmluZCh0aGlzKSkpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIEBPdXRwdXQoKSBwdWJsaWMgb25NYXJrZXJDbGljazogRXZlbnRFbWl0dGVyPExlYWZsZXRNb2RlbD4gPSBuZXcgRXZlbnRFbWl0dGVyPExlYWZsZXRNb2RlbD4oKTtcblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgfVxuXG4gIHB1YmxpYyBtYXJrZXJDbGljayhldmVudCk6IHZvaWQge1xuICAgIGNvbnN0IGxhdGxuZzogTC5MYXRMbmcgPSBldmVudC5sYXRsbmcgYXMgTC5MYXRMbmc7XG4gICAgY29uc3QgdGl0bGU6IHN0cmluZyA9IGV2ZW50LnRhcmdldC5vcHRpb25zLnRpdGxlO1xuICAgIGNvbnN0IGFsdDogc3RyaW5nID0gZXZlbnQudGFyZ2V0Lm9wdGlvbnMuYWx0O1xuICAgIHRoaXMub25NYXJrZXJDbGljay5lbWl0KHtcbiAgICAgIG1hcms6IGxhdGxuZyAsXG4gICAgICB0aXRsZTogdGl0bGUsXG4gICAgICBhbHQ6IGFsdCxcbiAgICB9KTtcbiAgICBkZWxheSgyMDApO1xuICAgIHRoaXMubWFwLnNldFZpZXcoW2xhdGxuZy5sYXQsIGxhdGxuZy5sbmddLCAxNSk7XG4gIH1cblxuICBwdWJsaWMgb25NYXBSZWFkeShtYXA6IEwuTWFwKTogdm9pZCB7XG4gICAgdGhpcy5tYXAgPSBtYXA7XG4gIH1cblxufVxuIl19