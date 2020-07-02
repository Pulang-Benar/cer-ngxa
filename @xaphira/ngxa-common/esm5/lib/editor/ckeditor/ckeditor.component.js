/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Inject, Input, ViewEncapsulation, Optional, Self, LOCALE_ID, } from '@angular/core';
import { NgControl } from '@angular/forms';
import { NgxaValueAccessor } from '../../base/ngxa-value-accessor.component';
var CaldeiraKnabbenEditorComponent = /** @class */ (function (_super) {
    tslib_1.__extends(CaldeiraKnabbenEditorComponent, _super);
    function CaldeiraKnabbenEditorComponent(ngControl, locale) {
        var _this = _super.call(this, ngControl, locale) || this;
        _this.locale = locale;
        _this.colLabel = 3;
        _this.colInput = 9;
        _this.minLength = 0;
        _this.maxLength = 100;
        _this.height = 320;
        _this.config = {
            skin: 'bootstrapck',
            height: _this.height,
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
            removeButtons: "Source,Save,NewPage,Preview,Print,Templates,Cut,Copy,Paste,\n                    PasteText,PasteFromWord,Undo,Redo,Find,Replace,SelectAll,Scayt,\n                    Form,Checkbox,Radio,TextField,Textarea,Select,Button,ImageButton,\n                    HiddenField,Strike,Subscript,Superscript,CopyFormatting,RemoveFormat,\n                    Outdent,Indent,CreateDiv,Blockquote,BidiLtr,BidiRtl,Language,Unlink,\n                    Anchor,Image,Flash,Table,HorizontalRule,Smiley,SpecialChar,PageBreak,\n                    Iframe,Maximize,ShowBlocks,About",
        };
        return _this;
    }
    /**
     * @param {?} element
     * @return {?}
     */
    CaldeiraKnabbenEditorComponent.prototype.editorChange = /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
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
    };
    /**
     * @return {?}
     */
    CaldeiraKnabbenEditorComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () { };
    CaldeiraKnabbenEditorComponent.decorators = [
        { type: Component, args: [{
                    selector: 'xa-ckeditor',
                    template: "<xa-container-outlet\n  [name]=\"name\" [label]=\"label\"\n  [colLabel]=\"colLabel\" [colContent]=\"colInput\"\n  [required]=\"required\" [hasErrors]=\"hasErrors\"\n  [errorMessages]=\"errorMessages\" [paramError]=\"paramError\"\n  [skeleton]=\"skeleton\">\n  <div class=\"col-sm-{{colInput}}\" *ngIf=\"!skeleton; else contentskeleton\">\n    <ckeditor\n        [config]=\"config\"\n        [readonly]=\"disabled\"\n        [required]=\"required\"\n        [(ngModel)]=\"value\"\n        (change)=\"onChange($event)\"\n        (blur)=\"onTouched($event)\"\n        (blur)=\"editorChange($event.editor.ui.contentsElement)\"\n        (focus)=\"editorChange($event.editor.ui.contentsElement)\"\n        (editorChange)=\"editorChange($event.editor.ui.contentsElement)\">\n    </ckeditor>\n  </div>\n  <ng-template #contentskeleton>\n    <div class=\"col-sm-{{colInput}}\">\n      <div\n        [ngClass]=\"{\n          'skeleton': skeleton\n        }\"\n        [ngStyle]=\"{ \n          'width':  '100%',\n          'height':  height + 'px'\n        }\">\n      </div>\n    </div>\n  </ng-template>\n</xa-container-outlet>",
                    encapsulation: ViewEncapsulation.None,
                    styles: [".cke_contents.status-danger{border:1px solid #ff3d71!important;box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 0 3px #fde6e8}"]
                }] }
    ];
    /** @nocollapse */
    CaldeiraKnabbenEditorComponent.ctorParameters = function () { return [
        { type: NgControl, decorators: [{ type: Optional }, { type: Self }] },
        { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] }
    ]; };
    CaldeiraKnabbenEditorComponent.propDecorators = {
        placeholder: [{ type: Input }],
        colLabel: [{ type: Input }],
        colInput: [{ type: Input }],
        minLength: [{ type: Input }],
        maxLength: [{ type: Input }],
        height: [{ type: Input }],
        config: [{ type: Input }]
    };
    return CaldeiraKnabbenEditorComponent;
}(NgxaValueAccessor));
export { CaldeiraKnabbenEditorComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2tlZGl0b3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHhhcGhpcmEvbmd4YS1jb21tb24vIiwic291cmNlcyI6WyJsaWIvZWRpdG9yL2NrZWRpdG9yL2NrZWRpdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsTUFBTSxFQUVOLEtBQUssRUFDTCxpQkFBaUIsRUFDakIsUUFBUSxFQUNSLElBQUksRUFDSixTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBRTdFO0lBTW9ELDBEQUF5QjtJQXdDM0Usd0NBQWdDLFNBQW9CLEVBQ3hCLE1BQWM7UUFEMUMsWUFFRSxrQkFBTSxTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQ3pCO1FBRjJCLFlBQU0sR0FBTixNQUFNLENBQVE7UUF2Q2pDLGNBQVEsR0FBVyxDQUFDLENBQUM7UUFDckIsY0FBUSxHQUFXLENBQUMsQ0FBQztRQUNyQixlQUFTLEdBQVcsQ0FBQyxDQUFDO1FBQ3RCLGVBQVMsR0FBVyxHQUFHLENBQUM7UUFDeEIsWUFBTSxHQUFXLEdBQUcsQ0FBQztRQUNyQixZQUFNLEdBQVE7WUFDckIsSUFBSSxFQUFFLGFBQWE7WUFDbkIsTUFBTSxFQUFFLEtBQUksQ0FBQyxNQUFNO1lBRW5CLGNBQWMsRUFBRSxLQUFLO1lBQ3JCLHFCQUFxQixFQUFFLElBQUk7WUFDM0IsVUFBVSxFQUFFLG9EQUFvRDtZQUNoRSxhQUFhLEVBQUU7Z0JBQ2IsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUUsVUFBVSxDQUFDLEVBQUU7Z0JBQzlELEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsQ0FBQyxXQUFXLEVBQUUs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OztJQUNqQyxnREFBOEI7O0lBQzlCLGdEQStCRTs7SUFHQSxnREFBd0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEluamVjdCxcbiAgT25EZXN0cm95LFxuICBJbnB1dCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG4gIE9wdGlvbmFsLFxuICBTZWxmLFxuICBMT0NBTEVfSUQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTmd4YVZhbHVlQWNjZXNzb3IgfSBmcm9tICcuLi8uLi9iYXNlL25neGEtdmFsdWUtYWNjZXNzb3IuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAneGEtY2tlZGl0b3InLFxuICBzdHlsZVVybHM6IFsnLi9ja2VkaXRvci5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vY2tlZGl0b3IuY29tcG9uZW50Lmh0bWwnLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxufSlcbmV4cG9ydCBjbGFzcyBDYWxkZWlyYUtuYWJiZW5FZGl0b3JDb21wb25lbnQgZXh0ZW5kcyBOZ3hhVmFsdWVBY2Nlc3NvcjxzdHJpbmc+IGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZztcbiAgQElucHV0KCkgY29sTGFiZWw6IG51bWJlciA9IDM7XG4gIEBJbnB1dCgpIGNvbElucHV0OiBudW1iZXIgPSA5O1xuICBASW5wdXQoKSBtaW5MZW5ndGg6IG51bWJlciA9IDA7XG4gIEBJbnB1dCgpIG1heExlbmd0aDogbnVtYmVyID0gMTAwO1xuICBASW5wdXQoKSBoZWlnaHQ6IG51bWJlciA9IDMyMDtcbiAgQElucHV0KCkgY29uZmlnOiBhbnkgPSB7XG4gICAgc2tpbjogJ2Jvb3RzdHJhcGNrJyxcbiAgICBoZWlnaHQ6IHRoaXMuaGVpZ2h0LFxuXG4gICAgYWxsb3dlZENvbnRlbnQ6IGZhbHNlLFxuICAgIGZvcmNlUGFzdGVBc1BsYWluVGV4dDogdHJ1ZSxcbiAgICBmb250X25hbWVzOiAnT3BlbiBTYW5zO3NhbnMtc2VyaWY7QXJpYWw7VGltZXMgTmV3IFJvbWFuO1ZlcmRhbmEnLFxuICAgIHRvb2xiYXJHcm91cHM6IFtcbiAgICAgIHsgbmFtZTogJ2RvY3VtZW50JywgZ3JvdXBzOiBbJ21vZGUnLCAnZG9jdW1lbnQnLCAnZG9jdG9vbHMnXSB9LFxuICAgICAgeyBuYW1lOiAnY2xpcGJvYXJkJywgZ3JvdXBzOiBbJ2NsaXBib2FyZCcsICd1bmRvJ10gfSxcbiAgICAgIHsgbmFtZTogJ2VkaXRpbmcnLCBncm91cHM6IFsnZmluZCcsICdzZWxlY3Rpb24nLCAnc3BlbGxjaGVja2VyJywgJ2VkaXRpbmcnXSB9LFxuICAgICAgeyBuYW1lOiAnZm9ybXMnLCBncm91cHM6IFsnZm9ybXMnXSB9LFxuICAgICAgJy8nLFxuICAgICAgeyBuYW1lOiAnYmFzaWNzdHlsZXMnLCBncm91cHM6IFsnYmFzaWNzdHlsZXMnLCAnY2xlYW51cCddIH0sXG4gICAgICB7IG5hbWU6ICdwYXJhZ3JhcGgnLCBncm91cHM6IFsnbGlzdCcsICdpbmRlbnQnLCAnYmxvY2tzJywgJ2FsaWduJywgJ2JpZGknLCAncGFyYWdyYXBoJ10gfSxcbiAgICAgIHsgbmFtZTogJ2xpbmtzJywgZ3JvdXBzOiBbJ2xpbmtzJ10gfSxcbiAgICAgIHsgbmFtZTogJ2luc2VydCcsIGdyb3VwczogWydpbnNlcnQnXSB9LFxuICAgICAgJy8nLFxuICAgICAgeyBuYW1lOiAnc3R5bGVzJywgZ3JvdXBzOiBbJ3N0eWxlcyddIH0sXG4gICAgICB7IG5hbWU6ICdjb2xvcnMnLCBncm91cHM6IFsnY29sb3JzJ10gfSxcbiAgICAgIHsgbmFtZTogJ3Rvb2xzJywgZ3JvdXBzOiBbJ3Rvb2xzJ10gfSxcbiAgICAgIHsgbmFtZTogJ290aGVycycsIGdyb3VwczogWydvdGhlcnMnXSB9LFxuICAgICAgeyBuYW1lOiAnYWJvdXQnLCBncm91cHM6IFsnYWJvdXQnXSB9LFxuICAgIF0sXG4gICAgcmVtb3ZlQnV0dG9uczogYFNvdXJjZSxTYXZlLE5ld1BhZ2UsUHJldmlldyxQcmludCxUZW1wbGF0ZXMsQ3V0LENvcHksUGFzdGUsXG4gICAgICAgICAgICAgICAgICAgIFBhc3RlVGV4dCxQYXN0ZUZyb21Xb3JkLFVuZG8sUmVkbyxGaW5kLFJlcGxhY2UsU2VsZWN0QWxsLFNjYXl0LFxuICAgICAgICAgICAgICAgICAgICBGb3JtLENoZWNrYm94LFJhZGlvLFRleHRGaWVsZCxUZXh0YXJlYSxTZWxlY3QsQnV0dG9uLEltYWdlQnV0dG9uLFxuICAgICAgICAgICAgICAgICAgICBIaWRkZW5GaWVsZCxTdHJpa2UsU3Vic2NyaXB0LFN1cGVyc2NyaXB0LENvcHlGb3JtYXR0aW5nLFJlbW92ZUZvcm1hdCxcbiAgICAgICAgICAgICAgICAgICAgT3V0ZGVudCxJbmRlbnQsQ3JlYXRlRGl2LEJsb2NrcXVvdGUsQmlkaUx0cixCaWRpUnRsLExhbmd1YWdlLFVubGluayxcbiAgICAgICAgICAgICAgICAgICAgQW5jaG9yLEltYWdlLEZsYXNoLFRhYmxlLEhvcml6b250YWxSdWxlLFNtaWxleSxTcGVjaWFsQ2hhcixQYWdlQnJlYWssXG4gICAgICAgICAgICAgICAgICAgIElmcmFtZSxNYXhpbWl6ZSxTaG93QmxvY2tzLEFib3V0YCxcbiAgfTtcblxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBAU2VsZigpIG5nQ29udHJvbDogTmdDb250cm9sLFxuICAgIEBJbmplY3QoTE9DQUxFX0lEKSBwdWJsaWMgbG9jYWxlOiBzdHJpbmcpIHtcbiAgICBzdXBlcihuZ0NvbnRyb2wsIGxvY2FsZSk7XG4gIH1cblxuICBlZGl0b3JDaGFuZ2UoZWxlbWVudDogRWxlbWVudCkge1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICBpZiAodGhpcy5uZ0NvbnRyb2wuaW52YWxpZCkge1xuICAgICAgICBpZiAoIWVsZW1lbnQuZ2V0QXR0cmlidXRlKCdjbGFzcycpLmVuZHNXaXRoKCdzdGF0dXMtZGFuZ2VyJykpXG4gICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykuY29uY2F0KCcgc3RhdHVzLWRhbmdlcicpKTtcbiAgICAgICAgdGhpcy5uZ0NvbnRyb2wuY29udHJvbC5tYXJrQXNUb3VjaGVkKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykuZW5kc1dpdGgoJ3N0YXR1cy1kYW5nZXInKSkge1xuICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdjbGFzcycsIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdjbGFzcycpLnJlcGxhY2UoJ3N0YXR1cy1kYW5nZXInLCAnJykpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7fVxuXG59XG4iXX0=