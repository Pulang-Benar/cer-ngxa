import { OnDestroy, AfterViewInit, ElementRef, EventEmitter } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { Environment } from '@xaphira/shared';
export declare class MCECoreComponent implements OnDestroy, AfterViewInit, ControlValueAccessor {
    private host;
    envi: Environment;
    plugins: string[];
    height: number;
    readonly: boolean;
    _value: any;
    change: EventEmitter<any>;
    editorchange: EventEmitter<any>;
    focus: EventEmitter<any>;
    blur: EventEmitter<any>;
    onChange: (_: any) => void;
    onTouched: (_?: any) => void;
    editor: any;
    constructor(host: ElementRef, envi: Environment);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    value: any;
    writeValue(value: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
}
