/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Inject, Input, ViewEncapsulation, Optional, Self, LOCALE_ID, Output, EventEmitter, } from '@angular/core';
import { NgControl } from '@angular/forms';
import { NgxaValueAccessor } from '../../base/ngxa-value-accessor.component';
import { DomSanitizer } from '@angular/platform-browser';
export class ImageUploadComponent extends NgxaValueAccessor {
    /**
     * @param {?} ngControl
     * @param {?} locale
     * @param {?} dom
     */
    constructor(ngControl, locale, dom) {
        super(ngControl, locale);
        this.locale = locale;
        this.dom = dom;
        this.onUpload = new EventEmitter();
        this.onPreview = new EventEmitter();
        this.height = 225;
        this.width = 225;
        this.radius = 0;
        this.buttonUpload = true;
        this.skeleton = false;
        this.opacity = '0.5';
        this.imageDefault = `${document.getElementsByTagName('base')[0].href}/assets/images/avatars/default.png`;
    }
    /**
     * @param {?} finish
     * @return {?}
     */
    set uploadFn(finish) {
        if (finish) {
            this.ngControl.control.markAsPristine();
            this.ngControl.control.markAsUntouched();
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        if (value instanceof File) {
            this.opacity = '0.8';
            this.image = URL.createObjectURL(value);
            this._value = value;
        }
        this.onChange(this.value);
        /** @type {?} */
        const control = this.ngControl.control;
        if (control) {
            control.updateValueAndValidity();
            control.markAsTouched();
            control.markAsDirty();
        }
    }
    /**
     * @param {?} files
     * @return {?}
     */
    upload(files) {
        this.opacity = '0.8';
        for (let index = 0; index < files.length; index++) {
            this.value = files[index];
        }
        this.image = URL.createObjectURL(this.value);
        this.onPreview.emit(this.value);
    }
    /**
     * @return {?}
     */
    doUpload() {
        this.onUpload.emit(this.value);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() { }
    /**
     * @return {?}
     */
    onInit() {
        if (!this.image) {
            this.image = this.imageDefault;
        }
    }
}
ImageUploadComponent.decorators = [
    { type: Component, args: [{
                selector: 'xa-image-upload',
                template: "<div class=\"body-upload\">\n  <div *ngIf=\"!skeleton; else contentskeleton\"\n    class=\"upload-container\"\n    (click)=\"img.click()\"\n    xaDragDrop\n    [opacity]=\"opacity\"\n    (onFileDropped)=\"upload($event)\"\n    [ngStyle]=\"{ \n      'background-image': 'url(' + (image? image: imageDefault) + ')',\n      'height':  height + 'px',\n      'width':  width + 'px',\n      'border-radius':  radius + '%'\n    }\">\n    <input\n      hidden\n      type=\"file\"\n      accept=\"image/png, image/jpeg, image/jpg\"\n      (change)=\"upload($event.target.files)\"\n      #img>\n  </div>\n  <ng-template #contentskeleton>\n    <div\n      class=\"upload-container\"\n      [ngStyle]=\"{ \n        'background-image': 'url(' + image + ')',\n        'height':  height + 'px',\n        'width':  width + 'px',\n        'border-radius':  radius + '%'\n      }\">\n    </div>\n  </ng-template>\n  <button *ngIf=\"buttonUpload\"\n    class=\"upload-bg\"\n    [size]=\"'small'\"\n    [shape]=\"'round'\"\n    [status]=\"'primary'\"\n    [disabled]=\"ngControl.pristine || disabled\"\n    (click)=\"doUpload()\"\n    nbButton\n    [ngStyle]=\"{ \n      'top': 'calc('+height+'px + 0.075rem)'\n    }\">\n    <nb-icon class=\"upload-icon\" icon=\"cloud-upload-outline\" pack=\"eva\"></nb-icon>\n    {{ 'Upload' | translate}}\n  </button>\n</div>",
                encapsulation: ViewEncapsulation.None,
                styles: [".upload-container{background-repeat:no-repeat;background-color:#f7f9fc;background-size:cover;margin:20px auto;border:2px dashed #d9dde5}.upload-container:hover{cursor:pointer}.body-upload{padding:15px}.upload-bg{position:absolute;left:50%;transform:translate(-50%);z-index:2}.nb-theme-default [nbButton].appearance-filled.status-primary[disabled]{background-color:#edf1f7;border-color:transparent;color:rgba(143,155,179,.48)}.upload-icon{font-size:5rem}"]
            }] }
];
/** @nocollapse */
ImageUploadComponent.ctorParameters = () => [
    { type: NgControl, decorators: [{ type: Optional }, { type: Self }] },
    { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] },
    { type: DomSanitizer }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UtdXBsb2FkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B4YXBoaXJhL25neGEtY29tbW9uLyIsInNvdXJjZXMiOlsibGliL2ltYWdlL3VwbG9hZC9pbWFnZS11cGxvYWQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULE1BQU0sRUFFTixLQUFLLEVBQ0wsaUJBQWlCLEVBQ2pCLFFBQVEsRUFDUixJQUFJLEVBQ0osU0FBUyxFQUNULE1BQU0sRUFDTixZQUFZLEdBQ2IsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQVF6RCxNQUFNLE9BQU8sb0JBQXFCLFNBQVEsaUJBQXNCOzs7Ozs7SUFrQjlELFlBQWdDLFNBQW9CLEVBQ3hCLE1BQWMsRUFDakMsR0FBaUI7UUFDeEIsS0FBSyxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUZDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDakMsUUFBRyxHQUFILEdBQUcsQ0FBYztRQW5CaEIsYUFBUSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ3RELGNBQVMsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUV4RCxXQUFNLEdBQVcsR0FBRyxDQUFDO1FBQ3JCLFVBQUssR0FBVyxHQUFHLENBQUM7UUFDcEIsV0FBTSxHQUFXLENBQUMsQ0FBQztRQUNuQixpQkFBWSxHQUFZLElBQUksQ0FBQztRQUM3QixhQUFRLEdBQVksS0FBSyxDQUFDO1FBTzVCLFlBQU8sR0FBVyxLQUFLLENBQUM7UUFDeEIsaUJBQVksR0FBVyxHQUFHLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLG9DQUFvQyxDQUFDO0lBTW5ILENBQUM7Ozs7O0lBYkQsSUFBYSxRQUFRLENBQUMsTUFBZTtRQUNuQyxJQUFJLE1BQU0sRUFBRTtZQUNWLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3hDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLGVBQWUsRUFBRSxDQUFDO1NBQzFDO0lBQ0gsQ0FBQzs7Ozs7SUFVTSxVQUFVLENBQUMsS0FBVTtRQUMxQixJQUFJLEtBQUssWUFBWSxJQUFJLEVBQUU7WUFDekIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7WUFDckIsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3hDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1NBQ3JCO1FBQ0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7O2NBQ3BCLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU87UUFDdEMsSUFBSSxPQUFPLEVBQUU7WUFDVCxPQUFPLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztZQUNqQyxPQUFPLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDeEIsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3pCO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsS0FBVTtRQUNmLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLEtBQUssSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxFQUFFO1lBQ2pELElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzNCO1FBQ0QsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbEMsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakMsQ0FBQzs7OztJQUVELFdBQVcsS0FBVSxDQUFDOzs7O0lBRXRCLE1BQU07UUFDSixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNmLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztTQUNoQztJQUNILENBQUM7OztZQWhFRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtnQkFFM0IsMDBDQUE0QztnQkFDNUMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O2FBQ3RDOzs7O1lBVFEsU0FBUyx1QkE0QkgsUUFBUSxZQUFJLElBQUk7eUNBQzFCLE1BQU0sU0FBQyxTQUFTO1lBM0JaLFlBQVk7Ozt1QkFTbEIsTUFBTTt3QkFDTixNQUFNO29CQUNOLEtBQUs7cUJBQ0wsS0FBSztvQkFDTCxLQUFLO3FCQUNMLEtBQUs7MkJBQ0wsS0FBSzt1QkFDTCxLQUFLO3VCQUNMLEtBQUs7Ozs7SUFSTix3Q0FBZ0U7O0lBQ2hFLHlDQUFpRTs7SUFDakUscUNBQXVCOztJQUN2QixzQ0FBOEI7O0lBQzlCLHFDQUE2Qjs7SUFDN0Isc0NBQTRCOztJQUM1Qiw0Q0FBc0M7O0lBQ3RDLHdDQUFtQzs7SUFPbkMsdUNBQStCOztJQUMvQiw0Q0FBbUg7O0lBR2pILHNDQUF3Qzs7SUFDeEMsbUNBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbmplY3QsXG4gIE9uRGVzdHJveSxcbiAgSW5wdXQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxuICBPcHRpb25hbCxcbiAgU2VsZixcbiAgTE9DQUxFX0lELFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ0NvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBOZ3hhVmFsdWVBY2Nlc3NvciB9IGZyb20gJy4uLy4uL2Jhc2Uvbmd4YS12YWx1ZS1hY2Nlc3Nvci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3hhLWltYWdlLXVwbG9hZCcsXG4gIHN0eWxlVXJsczogWycuL2ltYWdlLXVwbG9hZC5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vaW1hZ2UtdXBsb2FkLmNvbXBvbmVudC5odG1sJyxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgSW1hZ2VVcGxvYWRDb21wb25lbnQgZXh0ZW5kcyBOZ3hhVmFsdWVBY2Nlc3Nvcjxhbnk+IGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgQE91dHB1dCgpIG9uVXBsb2FkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgb25QcmV2aWV3OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBASW5wdXQoKSBpbWFnZTogc3RyaW5nO1xuICBASW5wdXQoKSBoZWlnaHQ6IG51bWJlciA9IDIyNTtcbiAgQElucHV0KCkgd2lkdGg6IG51bWJlciA9IDIyNTtcbiAgQElucHV0KCkgcmFkaXVzOiBudW1iZXIgPSAwO1xuICBASW5wdXQoKSBidXR0b25VcGxvYWQ6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKSBza2VsZXRvbjogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBzZXQgdXBsb2FkRm4oZmluaXNoOiBib29sZWFuKSB7XG4gICAgaWYgKGZpbmlzaCkge1xuICAgICAgdGhpcy5uZ0NvbnRyb2wuY29udHJvbC5tYXJrQXNQcmlzdGluZSgpO1xuICAgICAgdGhpcy5uZ0NvbnRyb2wuY29udHJvbC5tYXJrQXNVbnRvdWNoZWQoKTtcbiAgICB9XG4gIH1cbiAgcHVibGljIG9wYWNpdHk6IHN0cmluZyA9ICcwLjUnO1xuICBwdWJsaWMgaW1hZ2VEZWZhdWx0OiBzdHJpbmcgPSBgJHtkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYmFzZScpWzBdLmhyZWZ9L2Fzc2V0cy9pbWFnZXMvYXZhdGFycy9kZWZhdWx0LnBuZ2A7XG5cbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQFNlbGYoKSBuZ0NvbnRyb2w6IE5nQ29udHJvbCxcbiAgICBASW5qZWN0KExPQ0FMRV9JRCkgcHVibGljIGxvY2FsZTogc3RyaW5nLFxuICAgIHB1YmxpYyBkb206IERvbVNhbml0aXplcikge1xuICAgIHN1cGVyKG5nQ29udHJvbCwgbG9jYWxlKTtcbiAgfVxuXG4gIHB1YmxpYyB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBGaWxlKSB7XG4gICAgICB0aGlzLm9wYWNpdHkgPSAnMC44JztcbiAgICAgIHRoaXMuaW1hZ2UgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKHZhbHVlKTtcbiAgICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gICAgfVxuICAgIHRoaXMub25DaGFuZ2UodGhpcy52YWx1ZSk7XG4gICAgY29uc3QgY29udHJvbCA9IHRoaXMubmdDb250cm9sLmNvbnRyb2w7XG4gICAgaWYgKGNvbnRyb2wpIHtcbiAgICAgICAgY29udHJvbC51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XG4gICAgICAgIGNvbnRyb2wubWFya0FzVG91Y2hlZCgpO1xuICAgICAgICBjb250cm9sLm1hcmtBc0RpcnR5KCk7XG4gICAgfVxuICB9XG5cbiAgdXBsb2FkKGZpbGVzOiBhbnkpIHtcbiAgICB0aGlzLm9wYWNpdHkgPSAnMC44JztcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZmlsZXMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICB0aGlzLnZhbHVlID0gZmlsZXNbaW5kZXhdO1xuICAgIH1cbiAgICB0aGlzLmltYWdlID0gVVJMLmNyZWF0ZU9iamVjdFVSTCh0aGlzLnZhbHVlKTtcbiAgICB0aGlzLm9uUHJldmlldy5lbWl0KHRoaXMudmFsdWUpO1xuICB9XG5cbiAgZG9VcGxvYWQoKSB7XG4gICAgdGhpcy5vblVwbG9hZC5lbWl0KHRoaXMudmFsdWUpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7fVxuXG4gIG9uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuaW1hZ2UpIHtcbiAgICAgIHRoaXMuaW1hZ2UgPSB0aGlzLmltYWdlRGVmYXVsdDtcbiAgICB9XG4gIH1cblxufVxuIl19