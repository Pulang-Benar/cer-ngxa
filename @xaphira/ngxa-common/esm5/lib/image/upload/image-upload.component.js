/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Inject, Input, ViewEncapsulation, Optional, Self, LOCALE_ID, Output, EventEmitter, } from '@angular/core';
import { NgControl } from '@angular/forms';
import { NgxaValueAccessor } from '../../base/ngxa-value-accessor.component';
import { DomSanitizer } from '@angular/platform-browser';
var ImageUploadComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ImageUploadComponent, _super);
    function ImageUploadComponent(ngControl, locale, dom) {
        var _this = _super.call(this, ngControl, locale) || this;
        _this.locale = locale;
        _this.dom = dom;
        _this.onUpload = new EventEmitter();
        _this.onPreview = new EventEmitter();
        _this.height = 225;
        _this.width = 225;
        _this.radius = 0;
        _this.buttonUpload = true;
        _this.skeleton = false;
        _this.opacity = '0.5';
        _this.imageDefault = document.getElementsByTagName('base')[0].href + "/assets/images/avatars/default.png";
        return _this;
    }
    Object.defineProperty(ImageUploadComponent.prototype, "uploadFn", {
        set: /**
         * @param {?} finish
         * @return {?}
         */
        function (finish) {
            if (finish) {
                this.ngControl.control.markAsPristine();
                this.ngControl.control.markAsUntouched();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} value
     * @return {?}
     */
    ImageUploadComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (value instanceof File) {
            this.opacity = '0.8';
            this.image = URL.createObjectURL(value);
            this._value = value;
        }
        this.onChange(this.value);
        /** @type {?} */
        var control = this.ngControl.control;
        if (control) {
            control.updateValueAndValidity();
            control.markAsTouched();
            control.markAsDirty();
        }
    };
    /**
     * @param {?} files
     * @return {?}
     */
    ImageUploadComponent.prototype.upload = /**
     * @param {?} files
     * @return {?}
     */
    function (files) {
        this.opacity = '0.8';
        for (var index = 0; index < files.length; index++) {
            this.value = files[index];
        }
        this.image = URL.createObjectURL(this.value);
        this.onPreview.emit(this.value);
    };
    /**
     * @return {?}
     */
    ImageUploadComponent.prototype.doUpload = /**
     * @return {?}
     */
    function () {
        this.onUpload.emit(this.value);
    };
    /**
     * @return {?}
     */
    ImageUploadComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () { };
    /**
     * @return {?}
     */
    ImageUploadComponent.prototype.onInit = /**
     * @return {?}
     */
    function () {
        if (!this.image) {
            this.image = this.imageDefault;
        }
    };
    ImageUploadComponent.decorators = [
        { type: Component, args: [{
                    selector: 'xa-image-upload',
                    template: "<div class=\"body-upload\">\n  <div *ngIf=\"!skeleton; else contentskeleton\"\n    class=\"upload-container\"\n    (click)=\"img.click()\"\n    xaDragDrop\n    [opacity]=\"opacity\"\n    (onFileDropped)=\"upload($event)\"\n    [ngStyle]=\"{ \n      'background-image': 'url(' + (image? image: imageDefault) + ')',\n      'height':  height + 'px',\n      'width':  width + 'px',\n      'border-radius':  radius + '%'\n    }\">\n    <input\n      hidden\n      type=\"file\"\n      accept=\"image/png, image/jpeg, image/jpg\"\n      (change)=\"upload($event.target.files)\"\n      #img>\n  </div>\n  <ng-template #contentskeleton>\n    <div\n      class=\"upload-container\"\n      [ngStyle]=\"{ \n        'background-image': 'url(' + image + ')',\n        'height':  height + 'px',\n        'width':  width + 'px',\n        'border-radius':  radius + '%'\n      }\">\n    </div>\n  </ng-template>\n  <button *ngIf=\"buttonUpload\"\n    class=\"upload-bg\"\n    [size]=\"'small'\"\n    [shape]=\"'round'\"\n    [status]=\"'primary'\"\n    [disabled]=\"ngControl.pristine || disabled\"\n    (click)=\"doUpload()\"\n    nbButton\n    [ngStyle]=\"{ \n      'top': 'calc('+height+'px + 0.075rem)'\n    }\">\n    <nb-icon class=\"upload-icon\" icon=\"cloud-upload-outline\" pack=\"eva\"></nb-icon>\n    {{ 'Upload' | translate}}\n  </button>\n</div>",
                    encapsulation: ViewEncapsulation.None,
                    styles: [".upload-container{background-repeat:no-repeat;background-color:#f7f9fc;background-size:cover;margin:20px auto;border:2px dashed #d9dde5}.upload-container:hover{cursor:pointer}.body-upload{padding:15px}.upload-bg{position:absolute;left:50%;transform:translate(-50%);z-index:2}.nb-theme-default [nbButton].appearance-filled.status-primary[disabled]{background-color:#edf1f7;border-color:transparent;color:rgba(143,155,179,.48)}.upload-icon{font-size:5rem}"]
                }] }
    ];
    /** @nocollapse */
    ImageUploadComponent.ctorParameters = function () { return [
        { type: NgControl, decorators: [{ type: Optional }, { type: Self }] },
        { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] },
        { type: DomSanitizer }
    ]; };
    ImageUploadComponent.propDecorators = {
        onUpload: [{ type: Output }],
        onPreview: [{ type: Output }],
        image: [{ type: Input }],
        height: [{ type: Input }],
        width: [{ type: Input }],
        radius: [{ type: Input }],
        buttonUpload: [{ type: Input }],
        skeleton: [{ type: Input }],
        uploadFn: [{ type: Input }]
    };
    return ImageUploadComponent;
}(NgxaValueAccessor));
export { ImageUploadComponent };
if (false) {
    /** @type {?} */
    ImageUploadComponent.prototype.onUpload;
    /** @type {?} */
    ImageUploadComponent.prototype.onPreview;
    /** @type {?} */
    ImageUploadComponent.prototype.image;
    /** @type {?} */
    ImageUploadComponent.prototype.height;
    /** @type {?} */
    ImageUploadComponent.prototype.width;
    /** @type {?} */
    ImageUploadComponent.prototype.radius;
    /** @type {?} */
    ImageUploadComponent.prototype.buttonUpload;
    /** @type {?} */
    ImageUploadComponent.prototype.skeleton;
    /** @type {?} */
    ImageUploadComponent.prototype.opacity;
    /** @type {?} */
    ImageUploadComponent.prototype.imageDefault;
    /** @type {?} */
    ImageUploadComponent.prototype.locale;
    /** @type {?} */
    ImageUploadComponent.prototype.dom;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UtdXBsb2FkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B4YXBoaXJhL25neGEtY29tbW9uLyIsInNvdXJjZXMiOlsibGliL2ltYWdlL3VwbG9hZC9pbWFnZS11cGxvYWQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxNQUFNLEVBRU4sS0FBSyxFQUNMLGlCQUFpQixFQUNqQixRQUFRLEVBQ1IsSUFBSSxFQUNKLFNBQVMsRUFDVCxNQUFNLEVBQ04sWUFBWSxHQUNiLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFekQ7SUFNMEMsZ0RBQXNCO0lBa0I5RCw4QkFBZ0MsU0FBb0IsRUFDeEIsTUFBYyxFQUNqQyxHQUFpQjtRQUYxQixZQUdFLGtCQUFNLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FDekI7UUFIMkIsWUFBTSxHQUFOLE1BQU0sQ0FBUTtRQUNqQyxTQUFHLEdBQUgsR0FBRyxDQUFjO1FBbkJoQixjQUFRLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFDdEQsZUFBUyxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBRXhELFlBQU0sR0FBVyxHQUFHLENBQUM7UUFDckIsV0FBSyxHQUFXLEdBQUcsQ0FBQztRQUNwQixZQUFNLEdBQVcsQ0FBQyxDQUFDO1FBQ25CLGtCQUFZLEdBQVksSUFBSSxDQUFDO1FBQzdCLGNBQVEsR0FBWSxLQUFLLENBQUM7UUFPNUIsYUFBTyxHQUFXLEtBQUssQ0FBQztRQUN4QixrQkFBWSxHQUFjLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLHVDQUFvQyxDQUFDOztJQU1uSCxDQUFDO0lBYkQsc0JBQWEsMENBQVE7Ozs7O1FBQXJCLFVBQXNCLE1BQWU7WUFDbkMsSUFBSSxNQUFNLEVBQUU7Z0JBQ1YsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLENBQUM7Z0JBQ3hDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLGVBQWUsRUFBRSxDQUFDO2FBQzFDO1FBQ0gsQ0FBQzs7O09BQUE7Ozs7O0lBVU0seUNBQVU7Ozs7SUFBakIsVUFBa0IsS0FBVTtRQUMxQixJQUFJLEtBQUssWUFBWSxJQUFJLEVBQUU7WUFDekIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7WUFDckIsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3hDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1NBQ3JCO1FBQ0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7O1lBQ3BCLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU87UUFDdEMsSUFBSSxPQUFPLEVBQUU7WUFDVCxPQUFPLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztZQUNqQyxPQUFPLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDeEIsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3pCO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxxQ0FBTTs7OztJQUFOLFVBQU8sS0FBVTtRQUNmLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLEtBQUssSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxFQUFFO1lBQ2pELElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzNCO1FBQ0QsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbEMsQ0FBQzs7OztJQUVELHVDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqQyxDQUFDOzs7O0lBRUQsMENBQVc7OztJQUFYLGNBQXFCLENBQUM7Ozs7SUFFdEIscUNBQU07OztJQUFOO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7U0FDaEM7SUFDSCxDQUFDOztnQkFoRUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7b0JBRTNCLDAwQ0FBNEM7b0JBQzVDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOztpQkFDdEM7Ozs7Z0JBVFEsU0FBUyx1QkE0QkgsUUFBUSxZQUFJLElBQUk7NkNBQzFCLE1BQU0sU0FBQyxTQUFTO2dCQTNCWixZQUFZOzs7MkJBU2xCLE1BQU07NEJBQ04sTUFBTTt3QkFDTixLQUFLO3lCQUNMLEtBQUs7d0JBQ0wsS0FBSzt5QkFDTCxLQUFLOytCQUNMLEtBQUs7MkJBQ0wsS0FBSzsyQkFDTCxLQUFLOztJQW1EUiwyQkFBQztDQUFBLEFBbEVELENBTTBDLGlCQUFpQixHQTREMUQ7U0E1RFksb0JBQW9COzs7SUFDL0Isd0NBQWdFOztJQUNoRSx5Q0FBaUU7O0lBQ2pFLHFDQUF1Qjs7SUFDdkIsc0NBQThCOztJQUM5QixxQ0FBNkI7O0lBQzdCLHNDQUE0Qjs7SUFDNUIsNENBQXNDOztJQUN0Qyx3Q0FBbUM7O0lBT25DLHVDQUErQjs7SUFDL0IsNENBQW1IOztJQUdqSCxzQ0FBd0M7O0lBQ3hDLG1DQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5qZWN0LFxuICBPbkRlc3Ryb3ksXG4gIElucHV0LFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbiAgT3B0aW9uYWwsXG4gIFNlbGYsXG4gIExPQ0FMRV9JRCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTmd4YVZhbHVlQWNjZXNzb3IgfSBmcm9tICcuLi8uLi9iYXNlL25neGEtdmFsdWUtYWNjZXNzb3IuY29tcG9uZW50JztcbmltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd4YS1pbWFnZS11cGxvYWQnLFxuICBzdHlsZVVybHM6IFsnLi9pbWFnZS11cGxvYWQuY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2ltYWdlLXVwbG9hZC5jb21wb25lbnQuaHRtbCcsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG59KVxuZXhwb3J0IGNsYXNzIEltYWdlVXBsb2FkQ29tcG9uZW50IGV4dGVuZHMgTmd4YVZhbHVlQWNjZXNzb3I8YW55PiBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIEBPdXRwdXQoKSBvblVwbG9hZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIG9uUHJldmlldzogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQElucHV0KCkgaW1hZ2U6IHN0cmluZztcbiAgQElucHV0KCkgaGVpZ2h0OiBudW1iZXIgPSAyMjU7XG4gIEBJbnB1dCgpIHdpZHRoOiBudW1iZXIgPSAyMjU7XG4gIEBJbnB1dCgpIHJhZGl1czogbnVtYmVyID0gMDtcbiAgQElucHV0KCkgYnV0dG9uVXBsb2FkOiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCkgc2tlbGV0b246IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgc2V0IHVwbG9hZEZuKGZpbmlzaDogYm9vbGVhbikge1xuICAgIGlmIChmaW5pc2gpIHtcbiAgICAgIHRoaXMubmdDb250cm9sLmNvbnRyb2wubWFya0FzUHJpc3RpbmUoKTtcbiAgICAgIHRoaXMubmdDb250cm9sLmNvbnRyb2wubWFya0FzVW50b3VjaGVkKCk7XG4gICAgfVxuICB9XG4gIHB1YmxpYyBvcGFjaXR5OiBzdHJpbmcgPSAnMC41JztcbiAgcHVibGljIGltYWdlRGVmYXVsdDogc3RyaW5nID0gYCR7ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2Jhc2UnKVswXS5ocmVmfS9hc3NldHMvaW1hZ2VzL2F2YXRhcnMvZGVmYXVsdC5wbmdgO1xuXG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIEBTZWxmKCkgbmdDb250cm9sOiBOZ0NvbnRyb2wsXG4gICAgQEluamVjdChMT0NBTEVfSUQpIHB1YmxpYyBsb2NhbGU6IHN0cmluZyxcbiAgICBwdWJsaWMgZG9tOiBEb21TYW5pdGl6ZXIpIHtcbiAgICBzdXBlcihuZ0NvbnRyb2wsIGxvY2FsZSk7XG4gIH1cblxuICBwdWJsaWMgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgRmlsZSkge1xuICAgICAgdGhpcy5vcGFjaXR5ID0gJzAuOCc7XG4gICAgICB0aGlzLmltYWdlID0gVVJMLmNyZWF0ZU9iamVjdFVSTCh2YWx1ZSk7XG4gICAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgICB0aGlzLm9uQ2hhbmdlKHRoaXMudmFsdWUpO1xuICAgIGNvbnN0IGNvbnRyb2wgPSB0aGlzLm5nQ29udHJvbC5jb250cm9sO1xuICAgIGlmIChjb250cm9sKSB7XG4gICAgICAgIGNvbnRyb2wudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xuICAgICAgICBjb250cm9sLm1hcmtBc1RvdWNoZWQoKTtcbiAgICAgICAgY29udHJvbC5tYXJrQXNEaXJ0eSgpO1xuICAgIH1cbiAgfVxuXG4gIHVwbG9hZChmaWxlczogYW55KSB7XG4gICAgdGhpcy5vcGFjaXR5ID0gJzAuOCc7XG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGZpbGVzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgdGhpcy52YWx1ZSA9IGZpbGVzW2luZGV4XTtcbiAgICB9XG4gICAgdGhpcy5pbWFnZSA9IFVSTC5jcmVhdGVPYmplY3RVUkwodGhpcy52YWx1ZSk7XG4gICAgdGhpcy5vblByZXZpZXcuZW1pdCh0aGlzLnZhbHVlKTtcbiAgfVxuXG4gIGRvVXBsb2FkKCkge1xuICAgIHRoaXMub25VcGxvYWQuZW1pdCh0aGlzLnZhbHVlKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge31cblxuICBvbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmltYWdlKSB7XG4gICAgICB0aGlzLmltYWdlID0gdGhpcy5pbWFnZURlZmF1bHQ7XG4gICAgfVxuICB9XG5cbn1cbiJdfQ==