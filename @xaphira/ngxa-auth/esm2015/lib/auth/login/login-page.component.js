/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthTokenService } from '../../services/auth-token.service';
export class LoginPageComponent {
    /**
     * @param {?} router
     * @param {?} authTokenService
     */
    constructor(router, authTokenService) {
        this.router = router;
        this.authTokenService = authTokenService;
        this.buttonLogin = false;
        this.progressBar = 25;
        this.form = new FormGroup({
            username: new FormControl(),
            password: new FormControl(),
        });
    }
    /**
     * @return {?}
     */
    login() {
        if (!this.form.invalid) {
            document.querySelectorAll('.pace-done').forEach((/**
             * @param {?} pace
             * @return {?}
             */
            pace => {
                pace.className = pace.className.replace('pace-done pace-done', 'pace-running');
                pace.className = pace.className.replace('pace-done', 'pace-running');
            }));
            document.querySelectorAll('.pace-inactive').forEach((/**
             * @param {?} pace
             * @return {?}
             */
            pace => {
                pace.className = pace.className.replace('pace-inactive pace-inactive', 'pace-active');
                pace.className = pace.className.replace('pace-inactive', 'pace-active');
            }));
            /** @type {?} */
            const progressDOM = (/** @type {?} */ (document.getElementsByClassName('pace-progress').item(0)));
            if (this.progressBar < 35) {
                this.progressBar = 35;
                progressDOM.style.transform = 'translate3d(' + this.progressBar + '%, 0px, 0px)';
                progressDOM.getAttributeNode('data-progress-text').value = this.progressBar + '%';
                progressDOM.getAttributeNode('data-progress').value = this.progressBar.toString();
            }
            this.buttonLogin = true;
            this.authTokenService.login(this.form.get('username').value, this.form.get('password').value)
                .then((/**
             * @return {?}
             */
            () => {
                this.progressBar = 90;
                progressDOM.style.transform = 'translate3d(' + this.progressBar + '%, 0px, 0px)';
                progressDOM.getAttributeNode('data-progress-text').value = this.progressBar + '%';
                progressDOM.getAttributeNode('data-progress').value = this.progressBar.toString();
                this.progressBar = 0;
                this.router.navigate(['/app/home']);
            }))
                .catch((/**
             * @param {?} error
             * @return {?}
             */
            (error) => {
                if (!(error instanceof HttpErrorResponse)) {
                    /** @type {?} */
                    const response = ((/** @type {?} */ (error)));
                    this.responseError = response.respStatusMessage[response.respStatusCode];
                }
                this.buttonLogin = false;
                this.progressBar = 85;
                progressDOM.style.transform = 'translate3d(' + this.progressBar + '%, 0px, 0px)';
                progressDOM.getAttributeNode('data-progress-text').value = this.progressBar + '%';
                progressDOM.getAttributeNode('data-progress').value = this.progressBar.toString();
                document.querySelectorAll('.pace-running').forEach((/**
                 * @param {?} pace
                 * @return {?}
                 */
                pace => {
                    pace.className = pace.className.replace('pace-running', 'pace-done');
                }));
                document.querySelectorAll('.pace-active').forEach((/**
                 * @param {?} pace
                 * @return {?}
                 */
                pace => {
                    pace.className = pace.className.replace('pace-active', 'pace-inactive');
                }));
                this.progressBar = 0;
            }));
            if (this.progressBar >= 35 && this.progressBar < 65) {
                this.progressBar = 65;
                progressDOM.style.transform = 'translate3d(' + this.progressBar + '%, 0px, 0px)';
                progressDOM.getAttributeNode('data-progress-text').value = this.progressBar + '%';
                progressDOM.getAttributeNode('data-progress').value = this.progressBar.toString();
            }
        }
    }
    /**
     * @return {?}
     */
    get hasErrorUsername() {
        return (this.form.controls['username'] &&
            this.form.controls['username'].invalid &&
            this.form.controls['username'].touched);
    }
    /**
     * @return {?}
     */
    get hasSuccessUsername() {
        return (this.form.controls['username'] &&
            this.form.controls['username'].valid &&
            this.form.controls['username'].touched);
    }
    /**
     * @return {?}
     */
    get hasErrorPassword() {
        return (this.form.controls['password'] &&
            this.form.controls['password'].invalid &&
            this.form.controls['password'].touched);
    }
    /**
     * @return {?}
     */
    get hasSuccessPassword() {
        return (this.form.controls['password'] &&
            this.form.controls['password'].valid &&
            this.form.controls['password'].touched);
    }
}
LoginPageComponent.decorators = [
    { type: Component, args: [{
                selector: 'xa-login-page',
                template: "<h1 id=\"title\" class=\"title\">{{ 'Login' | translate }}</h1>\n<p class=\"sub-title\">{{ 'subtitle.login' | translate }}</p>\n<nb-alert *ngIf=\"responseError\" outline=\"danger\" role=\"alert\">\n  <p class=\"alert-title\"><b>{{ 'alert.title.login' | translate }}</b></p>\n  <ul class=\"alert-message-list\">\n    <li class=\"alert-message\">{{ responseError }}</li>\n  </ul>\n</nb-alert>\n\n<form [formGroup]=\"form\" (ngSubmit)=\"login()\" aria-labelledby=\"title\">\n  <div class=\"form-control-group\">\n    <label class=\"label\">{{ 'Username' | translate }} :</label>\n    <input [formControlName]=\"'username'\"\n          [required]=\"true\"\n          [ngClass]=\"{\n            'status-danger': hasErrorUsername,\n            'status-success': hasSuccessUsername\n          }\"\n          name=\"username\"\n          id=\"inputUsername\"\n          placeholder=\"{{ 'Username' | translate }}\"\n          fieldSize=\"large\"\n          autofocus\n          nbInput\n          fullWidth>\n    <ng-container *ngIf=\"hasErrorUsername\">\n      <span class=\"caption status-danger\">{{'error.username' | translate}}</span>\n    </ng-container>\n  </div>\n\n  <div class=\"form-control-group\">\n    <label class=\"label\">{{ 'Password' | translate }} :</label>\n    <input [formControlName]=\"'password'\"\n          [required]=\"true\"\n          [ngClass]=\"{\n            'status-danger': hasErrorPassword,\n            'status-success': hasSuccessPassword\n          }\"\n          name=\"password\"\n          type=\"password\"\n          id=\"inputPassword\"\n          placeholder=\"{{ 'Password' | translate }}\"\n          fieldSize=\"large\"\n          nbInput\n          fullWidth>\n    <ng-container *ngIf=\"hasErrorPassword\">\n      <span class=\"caption status-danger\">{{ 'error.password' | translate}}</span>\n    </ng-container>\n  </div>\n\n  <button [disabled]=\"form.invalid || buttonLogin\"\n          fullWidth\n          nbButton\n          status=\"primary\"\n          size=\"large\"\n          [class.btn-pulse]=\"form.invalid || buttonLogin\">\n    {{ 'Login' | translate }}\n  </button>\n</form>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
LoginPageComponent.ctorParameters = () => [
    { type: Router },
    { type: AuthTokenService }
];
if (false) {
    /** @type {?} */
    LoginPageComponent.prototype.responseError;
    /** @type {?} */
    LoginPageComponent.prototype.buttonLogin;
    /**
     * @type {?}
     * @private
     */
    LoginPageComponent.prototype.progressBar;
    /** @type {?} */
    LoginPageComponent.prototype.form;
    /**
     * @type {?}
     * @private
     */
    LoginPageComponent.prototype.router;
    /**
     * @type {?}
     * @private
     */
    LoginPageComponent.prototype.authTokenService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4tcGFnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AeGFwaGlyYS9uZ3hhLWF1dGgvIiwic291cmNlcyI6WyJsaWIvYXV0aC9sb2dpbi9sb2dpbi1wYWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUV6RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQU9yRSxNQUFNLE9BQU8sa0JBQWtCOzs7OztJQVc3QixZQUFvQixNQUFjLEVBQVUsZ0JBQWtDO1FBQTFELFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBUnZFLGdCQUFXLEdBQVksS0FBSyxDQUFDO1FBQzVCLGdCQUFXLEdBQVcsRUFBRSxDQUFDO1FBRTFCLFNBQUksR0FBYyxJQUFJLFNBQVMsQ0FBQztZQUNyQyxRQUFRLEVBQUUsSUFBSSxXQUFXLEVBQUU7WUFDM0IsUUFBUSxFQUFFLElBQUksV0FBVyxFQUFFO1NBQzVCLENBQUMsQ0FBQztJQUU4RSxDQUFDOzs7O0lBRTNFLEtBQUs7UUFDVixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDdEIsUUFBUSxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxDQUFDLE9BQU87Ozs7WUFBQyxJQUFJLENBQUMsRUFBRTtnQkFDckQsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsRUFBRSxjQUFjLENBQUMsQ0FBQztnQkFDL0Us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QUV6QixtbUVBQXdDOzthQUMzQzs7OztZQVRRLE1BQU07WUFHTixnQkFBZ0I7Ozs7SUFTdkIsMkNBQTBCOztJQUMxQix5Q0FBb0M7Ozs7O0lBQ3BDLHlDQUFpQzs7SUFFakMsa0NBR0c7Ozs7O0lBRVMsb0NBQXNCOzs7OztJQUFFLDhDQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBIdHRwRXJyb3JSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEFwaUJhc2VSZXNwb25zZSB9IGZyb20gJ0B4YXBoaXJhL3NoYXJlZCc7XG5pbXBvcnQgeyBBdXRoVG9rZW5TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYXV0aC10b2tlbi5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICd4YS1sb2dpbi1wYWdlJyxcbiAgICBzdHlsZVVybHM6IFsnbG9naW4tcGFnZS5jb21wb25lbnQuc2NzcyddLFxuICAgIHRlbXBsYXRlVXJsOiAnbG9naW4tcGFnZS5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIExvZ2luUGFnZUNvbXBvbmVudCB7XG5cbiAgcHVibGljIHJlc3BvbnNlRXJyb3I6IGFueTtcbiAgcHVibGljIGJ1dHRvbkxvZ2luOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgcHJvZ3Jlc3NCYXI6IG51bWJlciA9IDI1O1xuXG4gIHB1YmxpYyBmb3JtOiBGb3JtR3JvdXAgPSBuZXcgRm9ybUdyb3VwKHtcbiAgICB1c2VybmFtZTogbmV3IEZvcm1Db250cm9sKCksXG4gICAgcGFzc3dvcmQ6IG5ldyBGb3JtQ29udHJvbCgpLFxuICB9KTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIGF1dGhUb2tlblNlcnZpY2U6IEF1dGhUb2tlblNlcnZpY2UpIHt9XG5cbiAgcHVibGljIGxvZ2luKCkge1xuICAgIGlmICghdGhpcy5mb3JtLmludmFsaWQpIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wYWNlLWRvbmUnKS5mb3JFYWNoKHBhY2UgPT4ge1xuICAgICAgICBwYWNlLmNsYXNzTmFtZSA9IHBhY2UuY2xhc3NOYW1lLnJlcGxhY2UoJ3BhY2UtZG9uZSBwYWNlLWRvbmUnLCAncGFjZS1ydW5uaW5nJyk7XG4gICAgICAgIHBhY2UuY2xhc3NOYW1lID0gcGFjZS5jbGFzc05hbWUucmVwbGFjZSgncGFjZS1kb25lJywgJ3BhY2UtcnVubmluZycpO1xuICAgICAgfSk7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGFjZS1pbmFjdGl2ZScpLmZvckVhY2gocGFjZSA9PiB7XG4gICAgICAgIHBhY2UuY2xhc3NOYW1lID0gcGFjZS5jbGFzc05hbWUucmVwbGFjZSgncGFjZS1pbmFjdGl2ZSBwYWNlLWluYWN0aXZlJywgJ3BhY2UtYWN0aXZlJyk7XG4gICAgICAgIHBhY2UuY2xhc3NOYW1lID0gcGFjZS5jbGFzc05hbWUucmVwbGFjZSgncGFjZS1pbmFjdGl2ZScsICdwYWNlLWFjdGl2ZScpO1xuICAgICAgfSk7XG4gICAgICBjb25zdCBwcm9ncmVzc0RPTSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3BhY2UtcHJvZ3Jlc3MnKS5pdGVtKDApIGFzIEhUTUxFbGVtZW50O1xuICAgICAgaWYgKHRoaXMucHJvZ3Jlc3NCYXIgPCAzNSkge1xuICAgICAgICB0aGlzLnByb2dyZXNzQmFyID0gMzU7XG4gICAgICAgIHByb2dyZXNzRE9NLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGUzZCgnICsgdGhpcy5wcm9ncmVzc0JhciArICclLCAwcHgsIDBweCknO1xuICAgICAgICBwcm9ncmVzc0RPTS5nZXRBdHRyaWJ1dGVOb2RlKCdkYXRhLXByb2dyZXNzLXRleHQnKS52YWx1ZSA9IHRoaXMucHJvZ3Jlc3NCYXIgKyAnJSc7XG4gICAgICAgIHByb2dyZXNzRE9NLmdldEF0dHJpYnV0ZU5vZGUoJ2RhdGEtcHJvZ3Jlc3MnKS52YWx1ZSA9IHRoaXMucHJvZ3Jlc3NCYXIudG9TdHJpbmcoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuYnV0dG9uTG9naW4gPSB0cnVlO1xuICAgICAgdGhpcy5hdXRoVG9rZW5TZXJ2aWNlLmxvZ2luKFxuICAgICAgICB0aGlzLmZvcm0uZ2V0KCd1c2VybmFtZScpLnZhbHVlLFxuICAgICAgICB0aGlzLmZvcm0uZ2V0KCdwYXNzd29yZCcpLnZhbHVlKVxuICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnByb2dyZXNzQmFyID0gOTA7XG4gICAgICAgICAgICBwcm9ncmVzc0RPTS5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlM2QoJyArIHRoaXMucHJvZ3Jlc3NCYXIgKyAnJSwgMHB4LCAwcHgpJztcbiAgICAgICAgICAgIHByb2dyZXNzRE9NLmdldEF0dHJpYnV0ZU5vZGUoJ2RhdGEtcHJvZ3Jlc3MtdGV4dCcpLnZhbHVlID0gdGhpcy5wcm9ncmVzc0JhciArICclJztcbiAgICAgICAgICAgIHByb2dyZXNzRE9NLmdldEF0dHJpYnV0ZU5vZGUoJ2RhdGEtcHJvZ3Jlc3MnKS52YWx1ZSA9IHRoaXMucHJvZ3Jlc3NCYXIudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3NCYXIgPSAwO1xuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvYXBwL2hvbWUnXSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4ge1xuICAgICAgICAgICAgaWYgKCEoZXJyb3IgaW5zdGFuY2VvZiBIdHRwRXJyb3JSZXNwb25zZSkpIHtcbiAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2U6IEFwaUJhc2VSZXNwb25zZSA9ICg8QXBpQmFzZVJlc3BvbnNlPiBlcnJvcik7XG4gICAgICAgICAgICAgIHRoaXMucmVzcG9uc2VFcnJvciA9IHJlc3BvbnNlLnJlc3BTdGF0dXNNZXNzYWdlW3Jlc3BvbnNlLnJlc3BTdGF0dXNDb2RlXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuYnV0dG9uTG9naW4gPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3NCYXIgPSA4NTtcbiAgICAgICAgICAgIHByb2dyZXNzRE9NLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGUzZCgnICsgdGhpcy5wcm9ncmVzc0JhciArICclLCAwcHgsIDBweCknO1xuICAgICAgICAgICAgcHJvZ3Jlc3NET00uZ2V0QXR0cmlidXRlTm9kZSgnZGF0YS1wcm9ncmVzcy10ZXh0JykudmFsdWUgPSB0aGlzLnByb2dyZXNzQmFyICsgJyUnO1xuICAgICAgICAgICAgcHJvZ3Jlc3NET00uZ2V0QXR0cmlidXRlTm9kZSgnZGF0YS1wcm9ncmVzcycpLnZhbHVlID0gdGhpcy5wcm9ncmVzc0Jhci50b1N0cmluZygpO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBhY2UtcnVubmluZycpLmZvckVhY2gocGFjZSA9PiB7XG4gICAgICAgICAgICAgIHBhY2UuY2xhc3NOYW1lID0gcGFjZS5jbGFzc05hbWUucmVwbGFjZSgncGFjZS1ydW5uaW5nJywgJ3BhY2UtZG9uZScpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGFjZS1hY3RpdmUnKS5mb3JFYWNoKHBhY2UgPT4ge1xuICAgICAgICAgICAgICBwYWNlLmNsYXNzTmFtZSA9IHBhY2UuY2xhc3NOYW1lLnJlcGxhY2UoJ3BhY2UtYWN0aXZlJywgJ3BhY2UtaW5hY3RpdmUnKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5wcm9ncmVzc0JhciA9IDA7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAodGhpcy5wcm9ncmVzc0JhciA+PSAzNSAmJiB0aGlzLnByb2dyZXNzQmFyIDwgNjUpIHtcbiAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3NCYXIgPSA2NTtcbiAgICAgICAgICAgIHByb2dyZXNzRE9NLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGUzZCgnICsgdGhpcy5wcm9ncmVzc0JhciArICclLCAwcHgsIDBweCknO1xuICAgICAgICAgICAgcHJvZ3Jlc3NET00uZ2V0QXR0cmlidXRlTm9kZSgnZGF0YS1wcm9ncmVzcy10ZXh0JykudmFsdWUgPSB0aGlzLnByb2dyZXNzQmFyICsgJyUnO1xuICAgICAgICAgICAgcHJvZ3Jlc3NET00uZ2V0QXR0cmlidXRlTm9kZSgnZGF0YS1wcm9ncmVzcycpLnZhbHVlID0gdGhpcy5wcm9ncmVzc0Jhci50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0IGhhc0Vycm9yVXNlcm5hbWUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuZm9ybS5jb250cm9sc1sndXNlcm5hbWUnXSAmJlxuICAgICAgdGhpcy5mb3JtLmNvbnRyb2xzWyd1c2VybmFtZSddLmludmFsaWQgJiZcbiAgICAgIHRoaXMuZm9ybS5jb250cm9sc1sndXNlcm5hbWUnXS50b3VjaGVkXG4gICAgKTtcbiAgfVxuXG4gIGdldCBoYXNTdWNjZXNzVXNlcm5hbWUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuZm9ybS5jb250cm9sc1sndXNlcm5hbWUnXSAmJlxuICAgICAgdGhpcy5mb3JtLmNvbnRyb2xzWyd1c2VybmFtZSddLnZhbGlkICYmXG4gICAgICB0aGlzLmZvcm0uY29udHJvbHNbJ3VzZXJuYW1lJ10udG91Y2hlZFxuICAgICk7XG4gIH1cblxuICBnZXQgaGFzRXJyb3JQYXNzd29yZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5mb3JtLmNvbnRyb2xzWydwYXNzd29yZCddICYmXG4gICAgICB0aGlzLmZvcm0uY29udHJvbHNbJ3Bhc3N3b3JkJ10uaW52YWxpZCAmJlxuICAgICAgdGhpcy5mb3JtLmNvbnRyb2xzWydwYXNzd29yZCddLnRvdWNoZWRcbiAgICApO1xuICB9XG5cbiAgZ2V0IGhhc1N1Y2Nlc3NQYXNzd29yZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5mb3JtLmNvbnRyb2xzWydwYXNzd29yZCddICYmXG4gICAgICB0aGlzLmZvcm0uY29udHJvbHNbJ3Bhc3N3b3JkJ10udmFsaWQgJiZcbiAgICAgIHRoaXMuZm9ybS5jb250cm9sc1sncGFzc3dvcmQnXS50b3VjaGVkXG4gICAgKTtcbiAgfVxuXG59XG4iXX0=