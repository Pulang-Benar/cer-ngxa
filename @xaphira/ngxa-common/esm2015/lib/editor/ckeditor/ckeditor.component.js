/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Inject, Input, ViewEncapsulation, Optional, Self, LOCALE_ID, } from '@angular/core';
import { NgControl } from '@angular/forms';
import { NgxaValueAccessor } from '../../base/ngxa-value-accessor.component';
export class CaldeiraKnabbenEditorComponent extends NgxaValueAccessor {
    /**
     * @param {?} ngControl
     * @param {?} locale
     */
    constructor(ngControl, locale) {
        super(ngControl, locale);
        this.locale = locale;
        this.colLabel = 3;
        this.colInput = 9;
        this.minLength = 0;
        this.maxLength = 100;
        this.height = 320;
        this.config = {
            skin: 'bootstrapck',
            height: this.height,
            allowedContent: false,
            forcePasteAsPlainText: true,
            font_names: 'Open Sans;sans-serif;Arial;Times New Roman;Verdana',
            toolbarGroups: [
                { name: 'document', groups: ['mode', 'document', 'doctools'] },
                { name: 'clipboard', groups: ['clipboard', 'undo'] },
                { name: 'editing', groups: ['find', 'selection', 'spellchecker', 'editing'] },
                { name: 'forms', groups: ['forms'] },
                '/',
                { name: 'basicstyles', groups: ['basicstyles', 'cleanup'] },
                { name: 'paragraph', groups: ['list', 'indent', 'blocks', 'align', 'bidi', 'paragraph'] },
                { name: 'links', groups: ['links'] },
                { name: 'insert', groups: ['insert'] },
                '/',
                { name: 'styles', groups: ['styles'] },
                { name: 'colors', groups: ['colors'] },
                { name: 'tools', groups: ['tools'] },
                { name: 'others', groups: ['others'] },
                { name: 'about', groups: ['about'] },
            ],
            removeButtons: `Source,Save,NewPage,Preview,Print,Templates,Cut,Copy,Paste,
                    PasteText,PasteFromWord,Undo,Redo,Find,Replace,SelectAll,Scayt,
                    Form,Checkbox,Radio,TextField,Textarea,Select,Button,ImageButton,
                    HiddenField,Strike,Subscript,Superscript,CopyFormatting,RemoveFormat,
                    Outdent,Indent,CreateDiv,Blockquote,BidiLtr,BidiRtl,Language,Unlink,
                    Anchor,Image,Flash,Table,HorizontalRule,Smiley,SpecialChar,PageBreak,
                    Iframe,Maximize,ShowBlocks,About`,
        };
    }
    /**
     * @param {?} element
     * @return {?}
     */
    editorChange(element) {
        if (element) {
            if (this.ngControl.invalid) {
                if (!element.getAttribute('class').endsWith('status-danger'))
                    element.setAttribute('class', element.getAttribute('class').concat(' status-danger'));
                this.ngControl.control.markAsTouched();
            }
            else {
                if (element.getAttribute('class').endsWith('status-danger')) {
                    element.setAttribute('class', element.getAttribute('class').replace('status-danger', ''));
                }
            }
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() { }
}
CaldeiraKnabbenEditorComponent.decorators = [
    { type: Component, args: [{
                selector: 'xa-ckeditor',
                template: "<xa-container-outlet\n  [name]=\"name\" [label]=\"label\"\n  [colLabel]=\"colLabel\" [colContent]=\"colInput\"\n  [required]=\"required\" [hasErrors]=\"hasErrors\"\n  [errorMessages]=\"errorMessages\" [paramError]=\"paramError\"\n  [skeleton]=\"skeleton\">\n  <div class=\"col-sm-{{colInput}}\" *ngIf=\"!skeleton; else contentskeleton\">\n    <ckeditor\n        [config]=\"config\"\n        [readonly]=\"disabled\"\n        [required]=\"required\"\n        [(ngModel)]=\"value\"\n        (change)=\"onChange($event)\"\n        (blur)=\"onTouched($event)\"\n        (blur)=\"editorChange($event.editor.ui.contentsElement)\"\n        (focus)=\"editorChange($event.editor.ui.contentsElement)\"\n        (editorChange)=\"editorChange($event.editor.ui.contentsElement)\">\n    </ckeditor>\n  </div>\n  <ng-template #contentskeleton>\n    <div class=\"col-sm-{{colInput}}\">\n      <div\n        [ngClass]=\"{\n          'skeleton': skeleton\n        }\"\n        [ngStyle]=\"{ \n          'width':  '100%',\n          'height':  height + 'px'\n        }\">\n      </div>\n    </div>\n  </ng-template>\n</xa-container-outlet>",
                encapsulation: ViewEncapsulation.None,
                styles: [".cke_contents.status-danger{border:1px solid #ff3d71!important;box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 0 3px #fde6e8}"]
            }] }
];
/** @nocollapse */
CaldeiraKnabbenEditorComponent.ctorParameters = () => [
    { type: NgControl, decorators: [{ type: Optional }, { type: Self }] },
    { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] }
];
CaldeiraKnabbenEditorComponent.propDecorators = {
    placeholder: [{ type: Input }],
    colLabel: [{ type: Input }],
    colInput: [{ type: Input }],
    minLength: [{ type: Input }],
    maxLength: [{ type: Input }],
    height: [{ type: Input }],
    config: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    CaldeiraKnabbenEditorComponent.prototype.placeholder;
    /** @type {?} */
    CaldeiraKnabbenEditorComponent.prototype.colLabel;
    /** @type {?} */
    CaldeiraKnabbenEditorComponent.prototype.colInput;
    /** @type {?} */
    CaldeiraKnabbenEditorComponent.prototype.minLength;
    /** @type {?} */
    CaldeiraKnabbenEditorComponent.prototype.maxLength;
    /** @type {?} */
    CaldeiraKnabbenEditorComponent.prototype.height;
    /** @type {?} */
    CaldeiraKnabbenEditorComponent.prototype.config;
    /** @type {?} */
    CaldeiraKnabbenEditorComponent.prototype.locale;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2tlZGl0b3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHhhcGhpcmEvbmd4YS1jb21tb24vIiwic291cmNlcyI6WyJsaWIvZWRpdG9yL2NrZWRpdG9yL2NrZWRpdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxNQUFNLEVBRU4sS0FBSyxFQUNMLGlCQUFpQixFQUNqQixRQUFRLEVBQ1IsSUFBSSxFQUNKLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFRN0UsTUFBTSxPQUFPLDhCQUErQixTQUFRLGlCQUF5Qjs7Ozs7SUF3QzNFLFlBQWdDLFNBQW9CLEVBQ3hCLE1BQWM7UUFDeEMsS0FBSyxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztRQURDLFdBQU0sR0FBTixNQUFNLENBQVE7UUF2Q2pDLGFBQVEsR0FBVyxDQUFDLENBQUM7UUFDckIsYUFBUSxHQUFXLENBQUMsQ0FBQztRQUNyQixjQUFTLEdBQVcsQ0FBQyxDQUFDO1FBQ3RCLGNBQVMsR0FBVyxHQUFHLENBQUM7UUFDeEIsV0FBTSxHQUFXLEdBQUcsQ0FBQztRQUNyQixXQUFNLEdBQVE7WUFDckIsSUFBSSxFQUFFLGFBQWE7WUFDbkIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBRW5CLGNBQWMsRUFBRSxLQUFLO1lBQ3JCLHFCQUFxQixFQUFFLElBQUk7WUFDM0IsVUFBVSxFQUFFLG9EQUFvRDtZQUNoRSxhQUFhLEVBQUU7Z0JBQ2IsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUUsVUFBVSxDQUFDLEVBQUU7Z0JBQzlELEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUs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OlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbmplY3QsXG4gIE9uRGVzdHJveSxcbiAgSW5wdXQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxuICBPcHRpb25hbCxcbiAgU2VsZixcbiAgTE9DQUxFX0lELFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE5neGFWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnLi4vLi4vYmFzZS9uZ3hhLXZhbHVlLWFjY2Vzc29yLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3hhLWNrZWRpdG9yJyxcbiAgc3R5bGVVcmxzOiBbJy4vY2tlZGl0b3IuY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2NrZWRpdG9yLmNvbXBvbmVudC5odG1sJyxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgQ2FsZGVpcmFLbmFiYmVuRWRpdG9yQ29tcG9uZW50IGV4dGVuZHMgTmd4YVZhbHVlQWNjZXNzb3I8c3RyaW5nPiBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGNvbExhYmVsOiBudW1iZXIgPSAzO1xuICBASW5wdXQoKSBjb2xJbnB1dDogbnVtYmVyID0gOTtcbiAgQElucHV0KCkgbWluTGVuZ3RoOiBudW1iZXIgPSAwO1xuICBASW5wdXQoKSBtYXhMZW5ndGg6IG51bWJlciA9IDEwMDtcbiAgQElucHV0KCkgaGVpZ2h0OiBudW1iZXIgPSAzMjA7XG4gIEBJbnB1dCgpIGNvbmZpZzogYW55ID0ge1xuICAgIHNraW46ICdib290c3RyYXBjaycsXG4gICAgaGVpZ2h0OiB0aGlzLmhlaWdodCxcblxuICAgIGFsbG93ZWRDb250ZW50OiBmYWxzZSxcbiAgICBmb3JjZVBhc3RlQXNQbGFpblRleHQ6IHRydWUsXG4gICAgZm9udF9uYW1lczogJ09wZW4gU2FucztzYW5zLXNlcmlmO0FyaWFsO1RpbWVzIE5ldyBSb21hbjtWZXJkYW5hJyxcbiAgICB0b29sYmFyR3JvdXBzOiBbXG4gICAgICB7IG5hbWU6ICdkb2N1bWVudCcsIGdyb3VwczogWydtb2RlJywgJ2RvY3VtZW50JywgJ2RvY3Rvb2xzJ10gfSxcbiAgICAgIHsgbmFtZTogJ2NsaXBib2FyZCcsIGdyb3VwczogWydjbGlwYm9hcmQnLCAndW5kbyddIH0sXG4gICAgICB7IG5hbWU6ICdlZGl0aW5nJywgZ3JvdXBzOiBbJ2ZpbmQnLCAnc2VsZWN0aW9uJywgJ3NwZWxsY2hlY2tlcicsICdlZGl0aW5nJ10gfSxcbiAgICAgIHsgbmFtZTogJ2Zvcm1zJywgZ3JvdXBzOiBbJ2Zvcm1zJ10gfSxcbiAgICAgICcvJyxcbiAgICAgIHsgbmFtZTogJ2Jhc2ljc3R5bGVzJywgZ3JvdXBzOiBbJ2Jhc2ljc3R5bGVzJywgJ2NsZWFudXAnXSB9LFxuICAgICAgeyBuYW1lOiAncGFyYWdyYXBoJywgZ3JvdXBzOiBbJ2xpc3QnLCAnaW5kZW50JywgJ2Jsb2NrcycsICdhbGlnbicsICdiaWRpJywgJ3BhcmFncmFwaCddIH0sXG4gICAgICB7IG5hbWU6ICdsaW5rcycsIGdyb3VwczogWydsaW5rcyddIH0sXG4gICAgICB7IG5hbWU6ICdpbnNlcnQnLCBncm91cHM6IFsnaW5zZXJ0J10gfSxcbiAgICAgICcvJyxcbiAgICAgIHsgbmFtZTogJ3N0eWxlcycsIGdyb3VwczogWydzdHlsZXMnXSB9LFxuICAgICAgeyBuYW1lOiAnY29sb3JzJywgZ3JvdXBzOiBbJ2NvbG9ycyddIH0sXG4gICAgICB7IG5hbWU6ICd0b29scycsIGdyb3VwczogWyd0b29scyddIH0sXG4gICAgICB7IG5hbWU6ICdvdGhlcnMnLCBncm91cHM6IFsnb3RoZXJzJ10gfSxcbiAgICAgIHsgbmFtZTogJ2Fib3V0JywgZ3JvdXBzOiBbJ2Fib3V0J10gfSxcbiAgICBdLFxuICAgIHJlbW92ZUJ1dHRvbnM6IGBTb3VyY2UsU2F2ZSxOZXdQYWdlLFByZXZpZXcsUHJpbnQsVGVtcGxhdGVzLEN1dCxDb3B5LFBhc3RlLFxuICAgICAgICAgICAgICAgICAgICBQYXN0ZVRleHQsUGFzdGVGcm9tV29yZCxVbmRvLFJlZG8sRmluZCxSZXBsYWNlLFNlbGVjdEFsbCxTY2F5dCxcbiAgICAgICAgICAgICAgICAgICAgRm9ybSxDaGVja2JveCxSYWRpbyxUZXh0RmllbGQsVGV4dGFyZWEsU2VsZWN0LEJ1dHRvbixJbWFnZUJ1dHRvbixcbiAgICAgICAgICAgICAgICAgICAgSGlkZGVuRmllbGQsU3RyaWtlLFN1YnNjcmlwdCxTdXBlcnNjcmlwdCxDb3B5Rm9ybWF0dGluZyxSZW1vdmVGb3JtYXQsXG4gICAgICAgICAgICAgICAgICAgIE91dGRlbnQsSW5kZW50LENyZWF0ZURpdixCbG9ja3F1b3RlLEJpZGlMdHIsQmlkaVJ0bCxMYW5ndWFnZSxVbmxpbmssXG4gICAgICAgICAgICAgICAgICAgIEFuY2hvcixJbWFnZSxGbGFzaCxUYWJsZSxIb3Jpem9udGFsUnVsZSxTbWlsZXksU3BlY2lhbENoYXIsUGFnZUJyZWFrLFxuICAgICAgICAgICAgICAgICAgICBJZnJhbWUsTWF4aW1pemUsU2hvd0Jsb2NrcyxBYm91dGAsXG4gIH07XG5cbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQFNlbGYoKSBuZ0NvbnRyb2w6IE5nQ29udHJvbCxcbiAgICBASW5qZWN0KExPQ0FMRV9JRCkgcHVibGljIGxvY2FsZTogc3RyaW5nKSB7XG4gICAgc3VwZXIobmdDb250cm9sLCBsb2NhbGUpO1xuICB9XG5cbiAgZWRpdG9yQ2hhbmdlKGVsZW1lbnQ6IEVsZW1lbnQpIHtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgaWYgKHRoaXMubmdDb250cm9sLmludmFsaWQpIHtcbiAgICAgICAgaWYgKCFlbGVtZW50LmdldEF0dHJpYnV0ZSgnY2xhc3MnKS5lbmRzV2l0aCgnc3RhdHVzLWRhbmdlcicpKVxuICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdjbGFzcycsIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdjbGFzcycpLmNvbmNhdCgnIHN0YXR1cy1kYW5nZXInKSk7XG4gICAgICAgIHRoaXMubmdDb250cm9sLmNvbnRyb2wubWFya0FzVG91Y2hlZCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdjbGFzcycpLmVuZHNXaXRoKCdzdGF0dXMtZGFuZ2VyJykpIHtcbiAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBlbGVtZW50LmdldEF0dHJpYnV0ZSgnY2xhc3MnKS5yZXBsYWNlKCdzdGF0dXMtZGFuZ2VyJywgJycpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge31cblxufVxuIl19