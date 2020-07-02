import { OnDestroy, EventEmitter } from '@angular/core';
import { NgControl } from '@angular/forms';
import { NgxaValueAccessor } from '../../base/ngxa-value-accessor.component';
import { DomSanitizer } from '@angular/platform-browser';
export declare class ImageUploadComponent extends NgxaValueAccessor<any> implements OnDestroy {
    locale: string;
    dom: DomSanitizer;
    onUpload: EventEmitter<any>;
    onPreview: EventEmitter<any>;
    image: string;
    height: number;
    width: number;
    radius: number;
    buttonUpload: boolean;
    skeleton: boolean;
    uploadFn: boolean;
    opacity: string;
    imageDefault: string;
    constructor(ngControl: NgControl, locale: string, dom: DomSanitizer);
    writeValue(value: any): void;
    upload(files: any): void;
    doUpload(): void;
    ngOnDestroy(): void;
    onInit(): void;
}
