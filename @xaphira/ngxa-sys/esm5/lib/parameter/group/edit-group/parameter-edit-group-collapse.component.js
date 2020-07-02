/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, } from '@angular/core';
import { trigger, state, style, animate, transition, } from '@angular/animations';
import { ReplaySubject } from 'rxjs';
import { map, take } from 'rxjs/operators';
var ParameterEditGroupCollapseComponent = /** @class */ (function () {
    function ParameterEditGroupCollapseComponent() {
        var _this = this;
        this.toggle = (/**
         * @return {?}
         */
        function () {
            _this.opened$.pipe(take(1)).subscribe((/**
             * @param {?} x
             * @return {?}
             */
            function (x) { return _this.openedSubject.next(!x); }));
        });
        this.openedSubject = new ReplaySubject(1);
        this.openedSubject.next(false);
        this.opened$ = this.openedSubject.asObservable();
        this.openedState$ = this.opened$.pipe(map((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return x ? 'expanded' : 'collapsed'; })));
    }
    ParameterEditGroupCollapseComponent.decorators = [
        { type: Component, args: [{
                    selector: 'xa-parameter-edit-group-collapse, [xa-parameter-edit-group-collapse]',
                    template: "<div class=\"row\"\n    [@openedState]=\"openedState$ | async\"\n    [ngClass]=\"openedState$ | async\">\n    <ng-content></ng-content>\n</div>",
                    animations: [
                        trigger('openedState', [
                            state('collapsed', style({
                                opacity: 0,
                                overflow: 'hidden',
                                height: '0px',
                                minHeight: '0',
                                padding: '0 0 0 1.25rem',
                            })),
                            state('expanded', style({
                                opacity: 1,
                                overflow: 'hidden',
                                height: '*',
                                padding: '0 1.25rem',
                            })),
                            transition('collapsed <=> expanded', animate('500ms ease-in-out')),
                        ]),
                    ],
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    ParameterEditGroupCollapseComponent.ctorParameters = function () { return []; };
    return ParameterEditGroupCollapseComponent;
}());
export { ParameterEditGroupCollapseComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ParameterEditGroupCollapseComponent.prototype.openedSubject;
    /** @type {?} */
    ParameterEditGroupCollapseComponent.prototype.opened$;
    /** @type {?} */
    ParameterEditGroupCollapseComponent.prototype.openedState$;
    /** @type {?} */
    ParameterEditGroupCollapseComponent.prototype.toggle;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyYW1ldGVyLWVkaXQtZ3JvdXAtY29sbGFwc2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHhhcGhpcmEvbmd4YS1zeXMvIiwic291cmNlcyI6WyJsaWIvcGFyYW1ldGVyL2dyb3VwL2VkaXQtZ3JvdXAvcGFyYW1ldGVyLWVkaXQtZ3JvdXAtY29sbGFwc2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxHQUVWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFDTCxPQUFPLEVBQ1AsS0FBSyxFQUNMLEtBQUssRUFDTCxPQUFPLEVBQ1AsVUFBVSxHQUNYLE1BQU0scUJBQXFCLENBQUM7QUFFN0IsT0FBTyxFQUFjLGFBQWEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNqRCxPQUFPLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDO0lBOEJFO1FBQUEsaUJBS0M7UUFFRCxXQUFNOzs7UUFBRztZQUNQLEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVM7Ozs7WUFBQyxVQUFBLENBQUMsSUFBSSxPQUFBLEtBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQTNCLENBQTJCLEVBQUMsQ0FBQztRQUN6RSxDQUFDLEVBQUE7UUFSQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQy9CLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNqRCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUc7Ozs7UUFBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQTVCLENBQTRCLEVBQUMsQ0FBQyxDQUFDO0lBQ2hGLENBQUM7O2dCQW5DRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHNFQUFzRTtvQkFFaEYsMkpBQTZEO29CQUM3RCxVQUFVLEVBQUU7d0JBQ1YsT0FBTyxDQUFDLGFBQWEsRUFBRTs0QkFDckIsS0FBSyxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQ3RCO2dDQUNFLE9BQU8sRUFBRSxDQUFDO2dDQUNWLFFBQVEsRUFBRSxRQUFRO2dDQUNsQixNQUFNLEVBQUUsS0FBSztnQ0FDYixTQUFTLEVBQUUsR0FBRztnQ0FDZCxPQUFPLEVBQUUsZUFBZTs2QkFDM0IsQ0FBQyxDQUFDOzRCQUNILEtBQUssQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUNyQjtnQ0FDRSxPQUFPLEVBQUUsQ0FBQztnQ0FDVixRQUFRLEVBQUUsUUFBUTtnQ0FDbEIsTUFBTSxFQUFFLEdBQUc7Z0NBQ1gsT0FBTyxFQUFFLFdBQVc7NkJBQ3ZCLENBQUMsQ0FBQzs0QkFDSCxVQUFVLENBQUMsd0JBQXdCLEVBQUUsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUM7eUJBQ25FLENBQUM7cUJBQ0g7O2lCQUNGOzs7O0lBaUJELDBDQUFDO0NBQUEsQUF6Q0QsSUF5Q0M7U0FoQlksbUNBQW1DOzs7Ozs7SUFDOUMsNERBQThDOztJQUM5QyxzREFBNkI7O0lBQzdCLDJEQUFpQzs7SUFTakMscURBRUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIHRyaWdnZXIsXG4gIHN0YXRlLFxuICBzdHlsZSxcbiAgYW5pbWF0ZSxcbiAgdHJhbnNpdGlvbixcbn0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUsIFJlcGxheVN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAneGEtcGFyYW1ldGVyLWVkaXQtZ3JvdXAtY29sbGFwc2UsIFt4YS1wYXJhbWV0ZXItZWRpdC1ncm91cC1jb2xsYXBzZV0nLFxuICBzdHlsZVVybHM6IFsnLi9wYXJhbWV0ZXItZWRpdC1ncm91cC1jb2xsYXBzZS5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vcGFyYW1ldGVyLWVkaXQtZ3JvdXAtY29sbGFwc2UuY29tcG9uZW50Lmh0bWwnLFxuICBhbmltYXRpb25zOiBbXG4gICAgdHJpZ2dlcignb3BlbmVkU3RhdGUnLCBbXG4gICAgICBzdGF0ZSgnY29sbGFwc2VkJywgc3R5bGUoXG4gICAgICAgIHtcbiAgICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgICBoZWlnaHQ6ICcwcHgnLFxuICAgICAgICAgIG1pbkhlaWdodDogJzAnLFxuICAgICAgICAgIHBhZGRpbmc6ICcwIDAgMCAxLjI1cmVtJyxcbiAgICAgIH0pKSxcbiAgICAgIHN0YXRlKCdleHBhbmRlZCcsIHN0eWxlKFxuICAgICAgICB7XG4gICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgICAgaGVpZ2h0OiAnKicsXG4gICAgICAgICAgcGFkZGluZzogJzAgMS4yNXJlbScsXG4gICAgICB9KSksXG4gICAgICB0cmFuc2l0aW9uKCdjb2xsYXBzZWQgPD0+IGV4cGFuZGVkJywgYW5pbWF0ZSgnNTAwbXMgZWFzZS1pbi1vdXQnKSksXG4gICAgXSksXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFBhcmFtZXRlckVkaXRHcm91cENvbGxhcHNlQ29tcG9uZW50IHtcbiAgcHJpdmF0ZSBvcGVuZWRTdWJqZWN0OiBSZXBsYXlTdWJqZWN0PGJvb2xlYW4+O1xuICBvcGVuZWQkOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICBvcGVuZWRTdGF0ZSQ6IE9ic2VydmFibGU8c3RyaW5nPjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLm9wZW5lZFN1YmplY3QgPSBuZXcgUmVwbGF5U3ViamVjdCgxKTtcbiAgICB0aGlzLm9wZW5lZFN1YmplY3QubmV4dChmYWxzZSk7XG4gICAgdGhpcy5vcGVuZWQkID0gdGhpcy5vcGVuZWRTdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xuICAgIHRoaXMub3BlbmVkU3RhdGUkID0gdGhpcy5vcGVuZWQkLnBpcGUobWFwKHggPT4geCA/ICdleHBhbmRlZCcgOiAnY29sbGFwc2VkJykpO1xuICB9XG5cbiAgdG9nZ2xlID0gKCkgPT4ge1xuICAgIHRoaXMub3BlbmVkJC5waXBlKHRha2UoMSkpLnN1YnNjcmliZSh4ID0+IHRoaXMub3BlbmVkU3ViamVjdC5uZXh0KCF4KSk7XG4gIH1cblxufVxuIl19