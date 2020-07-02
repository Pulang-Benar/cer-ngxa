/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
export class SearchInputComponent {
    constructor() {
        this.search = new EventEmitter();
        this.isInputShown = false;
    }
    /**
     * @return {?}
     */
    showInput() {
        this.isInputShown = true;
        this.input.nativeElement.focus();
    }
    /**
     * @return {?}
     */
    hideInput() {
        this.isInputShown = false;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    onInput(val) {
        this.search.emit(val);
    }
}
SearchInputComponent.decorators = [
    { type: Component, args: [{
                selector: 'xa-search-input',
                template: `
    <i class="control-icon ion ion-ios-search"
       (click)="showInput()"></i>
    <input placeholder="Type your search request here..."
           #input
           [class.hidden]="!isInputShown"
           (blur)="hideInput()"
           (input)="onInput($event)">
  `,
                styles: [":host{display:flex;align-items:center}:host i.control-icon::before{font-size:2.3rem}:host i.control-icon:hover{cursor:pointer}:host input{border:none;outline:0;margin-left:1rem;width:15rem;transition:width .2s}:host input.hidden{width:0;margin:0}:host ::ng-deep search-input input{background:0 0}"]
            }] }
];
SearchInputComponent.propDecorators = {
    input: [{ type: ViewChild, args: ['input', { static: true },] }],
    search: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    SearchInputComponent.prototype.input;
    /** @type {?} */
    SearchInputComponent.prototype.search;
    /** @type {?} */
    SearchInputComponent.prototype.isInputShown;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLWlucHV0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B4YXBoaXJhL25neGEtdGhlbWUvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9zZWFyY2gtaW5wdXQvc2VhcmNoLWlucHV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFldkYsTUFBTSxPQUFPLG9CQUFvQjtJQWJqQztRQWdCWSxXQUFNLEdBQXlCLElBQUksWUFBWSxFQUFVLENBQUM7UUFFcEUsaUJBQVksR0FBRyxLQUFLLENBQUM7SUFjdkIsQ0FBQzs7OztJQVpDLFNBQVM7UUFDUCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztRQUN6QixJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNuQyxDQUFDOzs7O0lBRUQsU0FBUztRQUNQLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO0lBQzVCLENBQUM7Ozs7O0lBRUQsT0FBTyxDQUFDLEdBQVc7UUFDakIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDeEIsQ0FBQzs7O1lBL0JGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUUzQixRQUFRLEVBQUU7Ozs7Ozs7O0dBUVQ7O2FBQ0Y7OztvQkFFRSxTQUFTLFNBQUMsT0FBTyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtxQkFFbkMsTUFBTTs7OztJQUZQLHFDQUF3RDs7SUFFeEQsc0NBQW9FOztJQUVwRSw0Q0FBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgT3V0cHV0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAneGEtc2VhcmNoLWlucHV0JyxcbiAgc3R5bGVVcmxzOiBbJy4vc2VhcmNoLWlucHV0LmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlOiBgXG4gICAgPGkgY2xhc3M9XCJjb250cm9sLWljb24gaW9uIGlvbi1pb3Mtc2VhcmNoXCJcbiAgICAgICAoY2xpY2spPVwic2hvd0lucHV0KClcIj48L2k+XG4gICAgPGlucHV0IHBsYWNlaG9sZGVyPVwiVHlwZSB5b3VyIHNlYXJjaCByZXF1ZXN0IGhlcmUuLi5cIlxuICAgICAgICAgICAjaW5wdXRcbiAgICAgICAgICAgW2NsYXNzLmhpZGRlbl09XCIhaXNJbnB1dFNob3duXCJcbiAgICAgICAgICAgKGJsdXIpPVwiaGlkZUlucHV0KClcIlxuICAgICAgICAgICAoaW5wdXQpPVwib25JbnB1dCgkZXZlbnQpXCI+XG4gIGAsXG59KVxuZXhwb3J0IGNsYXNzIFNlYXJjaElucHV0Q29tcG9uZW50IHtcbiAgQFZpZXdDaGlsZCgnaW5wdXQnLCB7IHN0YXRpYzogdHJ1ZSB9KSBpbnB1dDogRWxlbWVudFJlZjtcblxuICBAT3V0cHV0KCkgc2VhcmNoOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXG4gIGlzSW5wdXRTaG93biA9IGZhbHNlO1xuXG4gIHNob3dJbnB1dCgpIHtcbiAgICB0aGlzLmlzSW5wdXRTaG93biA9IHRydWU7XG4gICAgdGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gIH1cblxuICBoaWRlSW5wdXQoKSB7XG4gICAgdGhpcy5pc0lucHV0U2hvd24gPSBmYWxzZTtcbiAgfVxuXG4gIG9uSW5wdXQodmFsOiBzdHJpbmcpIHtcbiAgICB0aGlzLnNlYXJjaC5lbWl0KHZhbCk7XG4gIH1cbn1cbiJdfQ==