/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
var SearchInputComponent = /** @class */ (function () {
    function SearchInputComponent() {
        this.search = new EventEmitter();
        this.isInputShown = false;
    }
    /**
     * @return {?}
     */
    SearchInputComponent.prototype.showInput = /**
     * @return {?}
     */
    function () {
        this.isInputShown = true;
        this.input.nativeElement.focus();
    };
    /**
     * @return {?}
     */
    SearchInputComponent.prototype.hideInput = /**
     * @return {?}
     */
    function () {
        this.isInputShown = false;
    };
    /**
     * @param {?} val
     * @return {?}
     */
    SearchInputComponent.prototype.onInput = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        this.search.emit(val);
    };
    SearchInputComponent.decorators = [
        { type: Component, args: [{
                    selector: 'xa-search-input',
                    template: "\n    <i class=\"control-icon ion ion-ios-search\"\n       (click)=\"showInput()\"></i>\n    <input placeholder=\"Type your search request here...\"\n           #input\n           [class.hidden]=\"!isInputShown\"\n           (blur)=\"hideInput()\"\n           (input)=\"onInput($event)\">\n  ",
                    styles: [":host{display:flex;align-items:center}:host i.control-icon::before{font-size:2.3rem}:host i.control-icon:hover{cursor:pointer}:host input{border:none;outline:0;margin-left:1rem;width:15rem;transition:width .2s}:host input.hidden{width:0;margin:0}:host ::ng-deep search-input input{background:0 0}"]
                }] }
    ];
    SearchInputComponent.propDecorators = {
        input: [{ type: ViewChild, args: ['input', { static: true },] }],
        search: [{ type: Output }]
    };
    return SearchInputComponent;
}());
export { SearchInputComponent };
if (false) {
    /** @type {?} */
    SearchInputComponent.prototype.input;
    /** @type {?} */
    SearchInputComponent.prototype.search;
    /** @type {?} */
    SearchInputComponent.prototype.isInputShown;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWlucHV0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B4YXBoaXJhL25neGEtdGhlbWUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9zZWFyY2gtaW5wdXQvc2VhcmNoLWlucHV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFdkY7SUFBQTtRQWdCWSxXQUFNLEdBQXlCLElBQUksWUFBWSxFQUFVLENBQUM7UUFFcEUsaUJBQVksR0FBRyxLQUFLLENBQUM7SUFjdkIsQ0FBQzs7OztJQVpDLHdDQUFTOzs7SUFBVDtRQUNFLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ25DLENBQUM7Ozs7SUFFRCx3Q0FBUzs7O0lBQVQ7UUFDRSxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztJQUM1QixDQUFDOzs7OztJQUVELHNDQUFPOzs7O0lBQVAsVUFBUSxHQUFXO1FBQ2pCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3hCLENBQUM7O2dCQS9CRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtvQkFFM0IsUUFBUSxFQUFFLHNTQVFUOztpQkFDRjs7O3dCQUVFLFNBQVMsU0FBQyxPQUFPLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO3lCQUVuQyxNQUFNOztJQWdCVCwyQkFBQztDQUFBLEFBaENELElBZ0NDO1NBbkJZLG9CQUFvQjs7O0lBQy9CLHFDQUF3RDs7SUFFeEQsc0NBQW9FOztJQUVwRSw0Q0FBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgT3V0cHV0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAneGEtc2VhcmNoLWlucHV0JyxcbiAgc3R5bGVVcmxzOiBbJy4vc2VhcmNoLWlucHV0LmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlOiBgXG4gICAgPGkgY2xhc3M9XCJjb250cm9sLWljb24gaW9uIGlvbi1pb3Mtc2VhcmNoXCJcbiAgICAgICAoY2xpY2spPVwic2hvd0lucHV0KClcIj48L2k+XG4gICAgPGlucHV0IHBsYWNlaG9sZGVyPVwiVHlwZSB5b3VyIHNlYXJjaCByZXF1ZXN0IGhlcmUuLi5cIlxuICAgICAgICAgICAjaW5wdXRcbiAgICAgICAgICAgW2NsYXNzLmhpZGRlbl09XCIhaXNJbnB1dFNob3duXCJcbiAgICAgICAgICAgKGJsdXIpPVwiaGlkZUlucHV0KClcIlxuICAgICAgICAgICAoaW5wdXQpPVwib25JbnB1dCgkZXZlbnQpXCI+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIFNlYXJjaElucHV0Q29tcG9uZW50IHtcbiAgQFZpZXdDaGlsZCgnaW5wdXQnLCB7IHN0YXRpYzogdHJ1ZSB9KSBpbnB1dDogRWxlbWVudFJlZjtcblxuICBAT3V0cHV0KCkgc2VhcmNoOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXG4gIGlzSW5wdXRTaG93biA9IGZhbHNlO1xuXG4gIHNob3dJbnB1dCgpIHtcbiAgICB0aGlzLmlzSW5wdXRTaG93biA9IHRydWU7XG4gICAgdGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gIH1cblxuICBoaWRlSW5wdXQoKSB7XG4gICAgdGhpcy5pc0lucHV0U2hvd24gPSBmYWxzZTtcbiAgfVxuXG4gIG9uSW5wdXQodmFsOiBzdHJpbmcpIHtcbiAgICB0aGlzLnNlYXJjaC5lbWl0KHZhbCk7XG4gIH1cbn1cbiJdfQ==