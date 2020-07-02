/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
export class ErrorHandlerService {
    /**
     * @param {?} error
     * @return {?}
     */
    handleError(error) {
        if (error.message) {
            if (error.message.includes('No loader found for file')) {
                // this.notification.show('DICOM', 'File Not Support', NbComponentStatus.DANGER);
                return Observable.empty();
            }
            else if (error.message.includes('mousedown') || error.message.includes('mousemove') ||
                error.message.includes('mouseup') || error.message.includes('mouseout') ||
                error.message.includes('mousewheel') || error.message.includes('DOMMouseScroll') ||
                error.message.includes('dblclick') || error.message.includes('touchstart') ||
                error.message.includes('touchmove') || error.message.includes('touchend')) {
                return Observable.empty();
            }
        }
        throw error;
    }
}
ErrorHandlerService.decorators = [
    { type: Injectable }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3ItaGFuZGxlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHhhcGhpcmEvbmd4YS10aGVtZS8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9lcnJvci1oYW5kbGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBZ0IsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFHbEMsTUFBTSxPQUFPLG1CQUFtQjs7Ozs7SUFFOUIsV0FBVyxDQUFDLEtBQVk7UUFDdEIsSUFBSSxLQUFLLENBQUMsT0FBTyxFQUFFO1lBQ2pCLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsMEJBQTBCLENBQUMsRUFBRTtnQkFDdEQsaUZBQWlGO2dCQUNqRixPQUFPLFVBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQzthQUMzQjtpQkFBTSxJQUFLLEtBQUssQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFRLEtBQUssQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQztnQkFDOUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLElBQVUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDO2dCQUM3RSxLQUFLLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsSUFBTyxLQUFLLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQztnQkFDbkYsS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLElBQVMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDO2dCQUMvRSxLQUFLLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBUSxLQUFLLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsRUFBRTtnQkFDekYsT0FBTyxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUM7YUFDM0I7U0FDRjtRQUNELE1BQU0sS0FBSyxDQUFDO0lBQ2QsQ0FBQzs7O1lBakJGLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFcnJvckhhbmRsZXIsIEluamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRXJyb3JIYW5kbGVyU2VydmljZSBpbXBsZW1lbnRzIEVycm9ySGFuZGxlciB7XG5cbiAgaGFuZGxlRXJyb3IoZXJyb3I6IEVycm9yKSB7XG4gICAgaWYgKGVycm9yLm1lc3NhZ2UpIHtcbiAgICAgIGlmIChlcnJvci5tZXNzYWdlLmluY2x1ZGVzKCdObyBsb2FkZXIgZm91bmQgZm9yIGZpbGUnKSkge1xuICAgICAgICAvLyB0aGlzLm5vdGlmaWNhdGlvbi5zaG93KCdESUNPTScsICdGaWxlIE5vdCBTdXBwb3J0JywgTmJDb21wb25lbnRTdGF0dXMuREFOR0VSKTtcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUuZW1wdHkoKTtcbiAgICAgIH0gZWxzZSBpZiAoIGVycm9yLm1lc3NhZ2UuaW5jbHVkZXMoJ21vdXNlZG93bicpICAgICB8fCBlcnJvci5tZXNzYWdlLmluY2x1ZGVzKCdtb3VzZW1vdmUnKSB8fFxuICAgICAgICAgICAgICAgICAgZXJyb3IubWVzc2FnZS5pbmNsdWRlcygnbW91c2V1cCcpICAgICAgIHx8IGVycm9yLm1lc3NhZ2UuaW5jbHVkZXMoJ21vdXNlb3V0JykgfHxcbiAgICAgICAgICAgICAgICAgIGVycm9yLm1lc3NhZ2UuaW5jbHVkZXMoJ21vdXNld2hlZWwnKSAgICB8fCBlcnJvci5tZXNzYWdlLmluY2x1ZGVzKCdET01Nb3VzZVNjcm9sbCcpIHx8XG4gICAgICAgICAgICAgICAgICBlcnJvci5tZXNzYWdlLmluY2x1ZGVzKCdkYmxjbGljaycpICAgICAgfHwgZXJyb3IubWVzc2FnZS5pbmNsdWRlcygndG91Y2hzdGFydCcpIHx8XG4gICAgICAgICAgICAgICAgICBlcnJvci5tZXNzYWdlLmluY2x1ZGVzKCd0b3VjaG1vdmUnKSAgICAgfHwgZXJyb3IubWVzc2FnZS5pbmNsdWRlcygndG91Y2hlbmQnKSkge1xuICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS5lbXB0eSgpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxuXG59XG4iXX0=