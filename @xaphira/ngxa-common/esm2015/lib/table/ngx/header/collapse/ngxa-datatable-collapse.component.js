/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, } from '@angular/core';
import { trigger, state, style, animate, transition, } from '@angular/animations';
import { ReplaySubject } from 'rxjs';
import { map, take } from 'rxjs/operators';
export class NgxaDatatableCollapseComponent {
    constructor() {
        this.toggle = (/**
         * @return {?}
         */
        () => {
            this.opened$.pipe(take(1)).subscribe((/**
             * @param {?} x
             * @return {?}
             */
            x => this.openedSubject.next(!x)));
        });
        this.openedSubject = new ReplaySubject(1);
        this.openedSubject.next(false);
        this.opened$ = this.openedSubject.asObservable();
        this.openedState$ = this.opened$.pipe(map((/**
         * @param {?} x
         * @return {?}
         */
        x => x ? 'expanded' : 'collapsed')));
    }
}
NgxaDatatableCollapseComponent.decorators = [
    { type: Component, args: [{
                selector: 'xa-datatable-collapse, [xa-datatable-collapse]',
                template: "<div\n    [@openedState]=\"openedState$ | async\"\n    [ngClass]=\"openedState$ | async\">\n    <ng-content></ng-content>\n</div>",
                animations: [
                    trigger('openedState', [
                        state('collapsed', style({
                            opacity: 0,
                            overflow: 'hidden',
                            height: '0px',
                            minHeight: '0',
                            padding: '0 0 0 0.5rem',
                        })),
                        state('expanded', style({
                            opacity: 1,
                            overflow: 'hidden',
                            height: '*',
                            padding: '1.5rem 0 0.5rem 0.5rem',
                            'border-bottom': '1px solid #d1d4d7',
                        })),
                        transition('collapsed <=> expanded', animate('500ms ease-in-out')),
                    ]),
                ],
                styles: [""]
            }] }
];
/** @nocollapse */
NgxaDatatableCollapseComponent.ctorParameters = () => [];
if (false) {
    /**
     * @type {?}
     * @private
     */
    NgxaDatatableCollapseComponent.prototype.openedSubject;
    /** @type {?} */
    NgxaDatatableCollapseComponent.prototype.opened$;
    /** @type {?} */
    NgxaDatatableCollapseComponent.prototype.openedState$;
    /** @type {?} */
    NgxaDatatableCollapseComponent.prototype.toggle;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4YS1kYXRhdGFibGUtY29sbGFwc2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHhhcGhpcmEvbmd4YS1jb21tb24vIiwic291cmNlcyI6WyJsaWIvdGFibGUvbmd4L2hlYWRlci9jb2xsYXBzZS9uZ3hhLWRhdGF0YWJsZS1jb2xsYXBzZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEdBRVYsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUNMLE9BQU8sRUFDUCxLQUFLLEVBQ0wsS0FBSyxFQUNMLE9BQU8sRUFDUCxVQUFVLEdBQ1gsTUFBTSxxQkFBcUIsQ0FBQztBQUU3QixPQUFPLEVBQWMsYUFBYSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUE0QjNDLE1BQU0sT0FBTyw4QkFBOEI7SUFLekM7UUFPQSxXQUFNOzs7UUFBRyxHQUFHLEVBQUU7WUFDWixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTOzs7O1lBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUM7UUFDekUsQ0FBQyxFQUFBO1FBUkMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDakQsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFDLENBQUMsQ0FBQztJQUNoRixDQUFDOzs7WUFwQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnREFBZ0Q7Z0JBRTFELDZJQUF1RDtnQkFDdkQsVUFBVSxFQUFFO29CQUNWLE9BQU8sQ0FBQyxhQUFhLEVBQUU7d0JBQ3JCLEtBQUssQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUN0Qjs0QkFDRSxPQUFPLEVBQUUsQ0FBQzs0QkFDVixRQUFRLEVBQUUsUUFBUTs0QkFDbEIsTUFBTSxFQUFFLEtBQUs7NEJBQ2IsU0FBUyxFQUFFLEdBQUc7NEJBQ2QsT0FBTyxFQUFFLGNBQWM7eUJBQzFCLENBQUMsQ0FBQzt3QkFDSCxLQUFLLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FDckI7NEJBQ0UsT0FBTyxFQUFFLENBQUM7NEJBQ1YsUUFBUSxFQUFFLFFBQVE7NEJBQ2xCLE1BQU0sRUFBRSxHQUFHOzRCQUNYLE9BQU8sRUFBRSx3QkFBd0I7NEJBQ2pDLGVBQWUsRUFBRSxtQkFBbUI7eUJBQ3ZDLENBQUMsQ0FBQzt3QkFDSCxVQUFVLENBQUMsd0JBQXdCLEVBQUUsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUM7cUJBQ25FLENBQUM7aUJBQ0g7O2FBQ0Y7Ozs7Ozs7OztJQUVDLHVEQUE4Qzs7SUFDOUMsaURBQTZCOztJQUM3QixzREFBaUM7O0lBU2pDLGdEQUVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICB0cmlnZ2VyLFxuICBzdGF0ZSxcbiAgc3R5bGUsXG4gIGFuaW1hdGUsXG4gIHRyYW5zaXRpb24sXG59IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBSZXBsYXlTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3hhLWRhdGF0YWJsZS1jb2xsYXBzZSwgW3hhLWRhdGF0YWJsZS1jb2xsYXBzZV0nLFxuICBzdHlsZVVybHM6IFsnLi9uZ3hhLWRhdGF0YWJsZS1jb2xsYXBzZS5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vbmd4YS1kYXRhdGFibGUtY29sbGFwc2UuY29tcG9uZW50Lmh0bWwnLFxuICBhbmltYXRpb25zOiBbXG4gICAgdHJpZ2dlcignb3BlbmVkU3RhdGUnLCBbXG4gICAgICBzdGF0ZSgnY29sbGFwc2VkJywgc3R5bGUoXG4gICAgICAgIHtcbiAgICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgICBoZWlnaHQ6ICcwcHgnLFxuICAgICAgICAgIG1pbkhlaWdodDogJzAnLFxuICAgICAgICAgIHBhZGRpbmc6ICcwIDAgMCAwLjVyZW0nLFxuICAgICAgfSkpLFxuICAgICAgc3RhdGUoJ2V4cGFuZGVkJywgc3R5bGUoXG4gICAgICAgIHtcbiAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgICBoZWlnaHQ6ICcqJyxcbiAgICAgICAgICBwYWRkaW5nOiAnMS41cmVtIDAgMC41cmVtIDAuNXJlbScsXG4gICAgICAgICAgJ2JvcmRlci1ib3R0b20nOiAnMXB4IHNvbGlkICNkMWQ0ZDcnLFxuICAgICAgfSkpLFxuICAgICAgdHJhbnNpdGlvbignY29sbGFwc2VkIDw9PiBleHBhbmRlZCcsIGFuaW1hdGUoJzUwMG1zIGVhc2UtaW4tb3V0JykpLFxuICAgIF0pLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBOZ3hhRGF0YXRhYmxlQ29sbGFwc2VDb21wb25lbnQge1xuICBwcml2YXRlIG9wZW5lZFN1YmplY3Q6IFJlcGxheVN1YmplY3Q8Ym9vbGVhbj47XG4gIG9wZW5lZCQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gIG9wZW5lZFN0YXRlJDogT2JzZXJ2YWJsZTxzdHJpbmc+O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMub3BlbmVkU3ViamVjdCA9IG5ldyBSZXBsYXlTdWJqZWN0KDEpO1xuICAgIHRoaXMub3BlbmVkU3ViamVjdC5uZXh0KGZhbHNlKTtcbiAgICB0aGlzLm9wZW5lZCQgPSB0aGlzLm9wZW5lZFN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XG4gICAgdGhpcy5vcGVuZWRTdGF0ZSQgPSB0aGlzLm9wZW5lZCQucGlwZShtYXAoeCA9PiB4ID8gJ2V4cGFuZGVkJyA6ICdjb2xsYXBzZWQnKSk7XG4gIH1cblxuICB0b2dnbGUgPSAoKSA9PiB7XG4gICAgdGhpcy5vcGVuZWQkLnBpcGUodGFrZSgxKSkuc3Vic2NyaWJlKHggPT4gdGhpcy5vcGVuZWRTdWJqZWN0Lm5leHQoIXgpKTtcbiAgfVxuXG59XG4iXX0=