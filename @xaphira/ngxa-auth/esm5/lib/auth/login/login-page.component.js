/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthTokenService } from '../../services/auth-token.service';
var LoginPageComponent = /** @class */ (function () {
    function LoginPageComponent(router, authTokenService) {
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
    LoginPageComponent.prototype.login = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.form.invalid) {
            document.querySelectorAll('.pace-done').forEach((/**
             * @param {?} pace
             * @return {?}
             */
            function (pace) {
                pace.className = pace.className.replace('pace-done pace-done', 'pace-running');
                pace.className = pace.className.replace('pace-done', 'pace-running');
            }));
            document.querySelectorAll('.pace-inactive').forEach((/**
             * @param {?} pace
             * @return {?}
             */
            function (pace) {
                pace.className = pace.className.replace('pace-inactive pace-inactive', 'pace-active');
                pace.className = pace.className.replace('pace-inactive', 'pace-active');
            }));
            /** @type {?} */
            var progressDOM_1 = (/** @type {?} */ (document.getElementsByClassName('pace-progress').item(0)));
            if (this.progressBar < 35) {
                this.progressBar = 35;
                progressDOM_1.style.transform = 'translate3d(' + this.progressBar + '%, 0px, 0px)';
                progressDOM_1.getAttributeNode('data-progress-text').value = this.progressBar + '%';
                progressDOM_1.getAttributeNode('data-progress').value = this.progressBar.toString();
            }
            this.buttonLogin = true;
            this.authTokenService.login(this.form.get('username').value, this.form.get('password').value)
                .then((/**
             * @return {?}
             */
            function () {
                _this.progressBar = 90;
                progressDOM_1.style.transform = 'translate3d(' + _this.progressBar + '%, 0px, 0px)';
                progressDOM_1.getAttributeNode('data-progress-text').value = _this.progressBar + '%';
                progressDOM_1.getAttributeNode('data-progress').value = _this.progressBar.toString();
                _this.progressBar = 0;
                _this.router.navigate(['/app/home']);
            }))
                .catch((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                if (!(error instanceof HttpErrorResponse)) {
                    /** @type {?} */
                    var response = ((/** @type {?} */ (error)));
                    _this.responseError = response.respStatusMessage[response.respStatusCode];
                }
                _this.buttonLogin = false;
                _this.progressBar = 85;
                progressDOM_1.style.transform = 'translate3d(' + _this.progressBar + '%, 0px, 0px)';
                progressDOM_1.getAttributeNode('data-progress-text').value = _this.progressBar + '%';
                progressDOM_1.getAttributeNode('data-progress').value = _this.progressBar.toString();
                document.querySelectorAll('.pace-running').forEach((/**
                 * @param {?} pace
                 * @return {?}
                 */
                function (pace) {
                    pace.className = pace.className.replace('pace-running', 'pace-done');
                }));
                document.querySelectorAll('.pace-active').forEach((/**
                 * @param {?} pace
                 * @return {?}
                 */
                function (pace) {
                    pace.className = pace.className.replace('pace-active', 'pace-inactive');
                }));
                _this.progressBar = 0;
            }));
            if (this.progressBar >= 35 && this.progressBar < 65) {
                this.progressBar = 65;
                progressDOM_1.style.transform = 'translate3d(' + this.progressBar + '%, 0px, 0px)';
                progressDOM_1.getAttributeNode('data-progress-text').value = this.progressBar + '%';
                progressDOM_1.getAttributeNode('data-progress').value = this.progressBar.toString();
            }
        }
    };
    Object.defineProperty(LoginPageComponent.prototype, "hasErrorUsername", {
        get: /**
         * @return {?}
         */
        function () {
            return (this.form.controls['username'] &&
                this.form.controls['username'].invalid &&
                this.form.controls['username'].touched);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginPageComponent.prototype, "hasSuccessUsername", {
        get: /**
         * @return {?}
         */
        function () {
            return (this.form.controls['username'] &&
                this.form.controls['username'].valid &&
                this.form.controls['username'].touched);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginPageComponent.prototype, "hasErrorPassword", {
        get: /**
         * @return {?}
         */
        function () {
            return (this.form.controls['password'] &&
                this.form.controls['password'].invalid &&
                this.form.controls['password'].touched);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginPageComponent.prototype, "hasSuccessPassword", {
        get: /**
         * @return {?}
         */
        function () {
            return (this.form.controls['password'] &&
                this.form.controls['password'].valid &&
                this.form.controls['password'].touched);
        },
        enumerable: true,
        configurable: true
    });
    LoginPageComponent.decorators = [
        { type: Component, args: [{
                    selector: 'xa-login-page',
                    template: "<h1 id=\"title\" class=\"title\">{{ 'Login' | translate }}</h1>\n<p class=\"sub-title\">{{ 'subtitle.login' | translate }}</p>\n<nb-alert *ngIf=\"responseError\" outline=\"danger\" role=\"alert\">\n  <p class=\"alert-title\"><b>{{ 'alert.title.login' | translate }}</b></p>\n  <ul class=\"alert-message-list\">\n    <li class=\"alert-message\">{{ responseError }}</li>\n  </ul>\n</nb-alert>\n\n<form [formGroup]=\"form\" (ngSubmit)=\"login()\" aria-labelledby=\"title\">\n  <div class=\"form-control-group\">\n    <label class=\"label\">{{ 'Username' | translate }} :</label>\n    <input [formControlName]=\"'username'\"\n          [required]=\"true\"\n          [ngClass]=\"{\n            'status-danger': hasErrorUsername,\n            'status-success': hasSuccessUsername\n          }\"\n          name=\"username\"\n          id=\"inputUsername\"\n          placeholder=\"{{ 'Username' | translate }}\"\n          fieldSize=\"large\"\n          autofocus\n          nbInput\n          fullWidth>\n    <ng-container *ngIf=\"hasErrorUsername\">\n      <span class=\"caption status-danger\">{{'error.username' | translate}}</span>\n    </ng-container>\n  </div>\n\n  <div class=\"form-control-group\">\n    <label class=\"label\">{{ 'Password' | translate }} :</label>\n    <input [formControlName]=\"'password'\"\n          [required]=\"true\"\n          [ngClass]=\"{\n            'status-danger': hasErrorPassword,\n            'status-success': hasSuccessPassword\n          }\"\n          name=\"password\"\n          type=\"password\"\n          id=\"inputPassword\"\n          placeholder=\"{{ 'Password' | translate }}\"\n          fieldSize=\"large\"\n          nbInput\n          fullWidth>\n    <ng-container *ngIf=\"hasErrorPassword\">\n      <span class=\"caption status-danger\">{{ 'error.password' | translate}}</span>\n    </ng-container>\n  </div>\n\n  <button [disabled]=\"form.invalid || buttonLogin\"\n          fullWidth\n          nbButton\n          status=\"primary\"\n          size=\"large\"\n          [class.btn-pulse]=\"form.invalid || buttonLogin\">\n    {{ 'Login' | translate }}\n  </button>\n</form>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    LoginPageComponent.ctorParameters = function () { return [
        { type: Router },
        { type: AuthTokenService }
    ]; };
    return LoginPageComponent;
}());
export { LoginPageComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4tcGFnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AeGFwaGlyYS9uZ3hhLWF1dGgvIiwic291cmNlcyI6WyJsaWIvYXV0aC9sb2dpbi9sb2dpbi1wYWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUV6RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUVyRTtJQWdCRSw0QkFBb0IsTUFBYyxFQUFVLGdCQUFrQztRQUExRCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQVJ2RSxnQkFBVyxHQUFZLEtBQUssQ0FBQztRQUM1QixnQkFBVyxHQUFXLEVBQUUsQ0FBQztRQUUxQixTQUFJLEdBQWMsSUFBSSxTQUFTLENBQUM7WUFDckMsUUFBUSxFQUFFLElBQUksV0FBVyxFQUFFO1lBQzNCLFFBQVEsRUFBRSxJQUFJLFdBQVcsRUFBRTtTQUM1QixDQUFDLENBQUM7SUFFOEUsQ0FBQzs7OztJQUUzRSxrQ0FBSzs7O0lBQVo7UUFBQSxpQkFzREM7UUFyREMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ3RCLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsQ0FBQyxPQUFPOzs7O1lBQUMsVUFBQSxJQUFJO2dCQUNsRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLHFCQUFxQixFQUFFLGNBQWMsQ0FBQyxDQUFDO2dCQUMvRSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxjQUFjLENBQUMsQ0FBQztZQUN2RSxDQUFDLEVBQUMsQ0FBQztZQUNILFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLE9BQU87Ozs7WUFBQyxVQUFBLElBQUk7Z0JBQ3RELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsNkJBQTZCLEVBQUUsYUFBYSxDQUFDLENBQUM7Z0JBQ3RGLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsZUFBZSxFQUFFLGFBQWEsQ0FBQyxDQUFDO1lBQzFFLENBQUMsRUFBQyxDQUFDOztnQkFDRyxhQUFXLEdBQUcsbUJBQUEsUUFBUSxDQUFDLHNCQUFzQixDQUFDLGVBQWUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBZTtZQUMzRixJQUFJLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxFQUFFO2dCQUN6QixJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztnQkFDdEIsYUFBVyxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsY0FBYyxHQUFHLElBQUksQ0FBQyxXQUFXLEdBQUcsY0FBYyxDQUFDO2dCQUNqRixhQUFXLENBQUMsZ0JBQWdCLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUM7Z0JBQ2xGLGFBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQzthQUNuRjtZQUNELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1lBQ3hCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQ3pCLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEtBQUssRUFDL0IsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsS0FBSyxDQUFDO2lCQUMvQixJQUFJOzs7WUFBQztnQkFDRixLQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztnQkFDdEIsYUFBVyxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsY0FBYyxHQUFHLEtBQUksQ0FBQyxXQUFXLEdBQUcsY0FBYyxDQUFDO2dCQUNqRixhQUFXLENBQUMsZ0JBQWdCLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxLQUFLLEdBQUcsS0FBSSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUM7Z0JBQ2xGLGFBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsQ0FBQyxLQUFLLEdBQUcsS0FBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDbEYsS0FBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7Z0JBQ3JCLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztZQUN4QyxDQUFDLEVBQUM7aUJBQ0QsS0FBSzs7OztZQUFDLFVBQUMsS0FBVTtnQkFDZCxJQUFJLENBQUMsQ0FBQyxLQUFLLFlBQVksaUJBQWlCLENBQUMsRUFBRTs7d0JBQ25DLFFBQVEsR0FBb0IsQ0FBQyxtQkFBa0IsS0FBSyxFQUFBLENBQUM7b0JBQzNELEtBQUksQ0FBQyxhQUFhLEdBQUcsUUFBUSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsQ0FBQztpQkFDMUU7Z0JBQ0QsS0FBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7Z0JBQ3pCLEtBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO2dCQUN0QixhQUFXLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxjQUFjLEdBQUcsS0FBSSxDQUFDLFdBQVcsR0FBRyxjQUFjLENBQUM7Z0JBQ2pGLGFBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLEtBQUssR0FBRyxLQUFJLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQztnQkFDbEYsYUFBVyxDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxDQUFDLEtBQUssR0FBRyxLQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUNsRixRQUFRLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLENBQUMsT0FBTzs7OztnQkFBQyxVQUFBLElBQUk7b0JBQ3JELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLFdBQVcsQ0FBQyxDQUFDO2dCQUN2RSxDQUFDLEVBQUMsQ0FBQztnQkFDSCxRQUFRLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLENBQUMsT0FBTzs7OztnQkFBQyxVQUFBLElBQUk7b0JBQ3BELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLGVBQWUsQ0FBQyxDQUFDO2dCQUMxRSxDQUFDLEVBQUMsQ0FBQztnQkFDSCxLQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztZQUN6QixDQUFDLEVBQUMsQ0FBQztZQUNILElBQUksSUFBSSxDQUFDLFdBQVcsSUFBSSxFQUFFLElBQUksSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLEVBQUU7Z0JBQ2pELElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO2dCQUN0QixhQUFXLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxjQUFjLEdBQUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxjQUFjLENBQUM7Z0JBQ2pGLGFBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQztnQkFDbEYsYUFBVyxDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDO2FBQ3JGO1NBQ0o7SUFDSCxDQUFDO0lBRUQsc0JBQUksZ0RBQWdCOzs7O1FBQXBCO1lBQ0UsT0FBTyxDQUNMLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQztnQkFDOUIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsT0FBTztnQkFDdEMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsT0FBTyxDQUN2QyxDQUFDO1FBQ0osQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxrREFBa0I7Ozs7UUFBdEI7WUFDRSxPQUFPLENBQ0wsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDO2dCQUM5QixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxLQUFLO2dCQUNwQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxPQUFPLENBQ3ZDLENBQUM7UUFDSixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLGdEQUFnQjs7OztRQUFwQjtZQUNFLE9BQU8sQ0FDTCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUM7Z0JBQzlCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDLE9BQU87Z0JBQ3RDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDLE9BQU8sQ0FDdkMsQ0FBQztRQUNKLENBQUM7OztPQUFBO0lBRUQsc0JBQUksa0RBQWtCOzs7O1FBQXRCO1lBQ0UsT0FBTyxDQUNMLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQztnQkFDOUIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsS0FBSztnQkFDcEMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsT0FBTyxDQUN2QyxDQUFDO1FBQ0osQ0FBQzs7O09BQUE7O2dCQXhHRixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLGVBQWU7b0JBRXpCLG1tRUFBd0M7O2lCQUMzQzs7OztnQkFUUSxNQUFNO2dCQUdOLGdCQUFnQjs7SUE0R3pCLHlCQUFDO0NBQUEsQUExR0QsSUEwR0M7U0FyR1ksa0JBQWtCOzs7SUFFN0IsMkNBQTBCOztJQUMxQix5Q0FBb0M7Ozs7O0lBQ3BDLHlDQUFpQzs7SUFFakMsa0NBR0c7Ozs7O0lBRVMsb0NBQXNCOzs7OztJQUFFLDhDQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBIdHRwRXJyb3JSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEFwaUJhc2VSZXNwb25zZSB9IGZyb20gJ0B4YXBoaXJhL3NoYXJlZCc7XG5pbXBvcnQgeyBBdXRoVG9rZW5TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYXV0aC10b2tlbi5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICd4YS1sb2dpbi1wYWdlJyxcbiAgICBzdHlsZVVybHM6IFsnbG9naW4tcGFnZS5jb21wb25lbnQuc2NzcyddLFxuICAgIHRlbXBsYXRlVXJsOiAnbG9naW4tcGFnZS5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIExvZ2luUGFnZUNvbXBvbmVudCB7XG5cbiAgcHVibGljIHJlc3BvbnNlRXJyb3I6IGFueTtcbiAgcHVibGljIGJ1dHRvbkxvZ2luOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgcHJvZ3Jlc3NCYXI6IG51bWJlciA9IDI1O1xuXG4gIHB1YmxpYyBmb3JtOiBGb3JtR3JvdXAgPSBuZXcgRm9ybUdyb3VwKHtcbiAgICB1c2VybmFtZTogbmV3IEZvcm1Db250cm9sKCksXG4gICAgcGFzc3dvcmQ6IG5ldyBGb3JtQ29udHJvbCgpLFxuICB9KTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIGF1dGhUb2tlblNlcnZpY2U6IEF1dGhUb2tlblNlcnZpY2UpIHt9XG5cbiAgcHVibGljIGxvZ2luKCkge1xuICAgIGlmICghdGhpcy5mb3JtLmludmFsaWQpIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wYWNlLWRvbmUnKS5mb3JFYWNoKHBhY2UgPT4ge1xuICAgICAgICBwYWNlLmNsYXNzTmFtZSA9IHBhY2UuY2xhc3NOYW1lLnJlcGxhY2UoJ3BhY2UtZG9uZSBwYWNlLWRvbmUnLCAncGFjZS1ydW5uaW5nJyk7XG4gICAgICAgIHBhY2UuY2xhc3NOYW1lID0gcGFjZS5jbGFzc05hbWUucmVwbGFjZSgncGFjZS1kb25lJywgJ3BhY2UtcnVubmluZycpO1xuICAgICAgfSk7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGFjZS1pbmFjdGl2ZScpLmZvckVhY2gocGFjZSA9PiB7XG4gICAgICAgIHBhY2UuY2xhc3NOYW1lID0gcGFjZS5jbGFzc05hbWUucmVwbGFjZSgncGFjZS1pbmFjdGl2ZSBwYWNlLWluYWN0aXZlJywgJ3BhY2UtYWN0aXZlJyk7XG4gICAgICAgIHBhY2UuY2xhc3NOYW1lID0gcGFjZS5jbGFzc05hbWUucmVwbGFjZSgncGFjZS1pbmFjdGl2ZScsICdwYWNlLWFjdGl2ZScpO1xuICAgICAgfSk7XG4gICAgICBjb25zdCBwcm9ncmVzc0RPTSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3BhY2UtcHJvZ3Jlc3MnKS5pdGVtKDApIGFzIEhUTUxFbGVtZW50O1xuICAgICAgaWYgKHRoaXMucHJvZ3Jlc3NCYXIgPCAzNSkge1xuICAgICAgICB0aGlzLnByb2dyZXNzQmFyID0gMzU7XG4gICAgICAgIHByb2dyZXNzRE9NLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGUzZCgnICsgdGhpcy5wcm9ncmVzc0JhciArICclLCAwcHgsIDBweCknO1xuICAgICAgICBwcm9ncmVzc0RPTS5nZXRBdHRyaWJ1dGVOb2RlKCdkYXRhLXByb2dyZXNzLXRleHQnKS52YWx1ZSA9IHRoaXMucHJvZ3Jlc3NCYXIgKyAnJSc7XG4gICAgICAgIHByb2dyZXNzRE9NLmdldEF0dHJpYnV0ZU5vZGUoJ2RhdGEtcHJvZ3Jlc3MnKS52YWx1ZSA9IHRoaXMucHJvZ3Jlc3NCYXIudG9TdHJpbmcoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuYnV0dG9uTG9naW4gPSB0cnVlO1xuICAgICAgdGhpcy5hdXRoVG9rZW5TZXJ2aWNlLmxvZ2luKFxuICAgICAgICB0aGlzLmZvcm0uZ2V0KCd1c2VybmFtZScpLnZhbHVlLFxuICAgICAgICB0aGlzLmZvcm0uZ2V0KCdwYXNzd29yZCcpLnZhbHVlKVxuICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnByb2dyZXNzQmFyID0gOTA7XG4gICAgICAgICAgICBwcm9ncmVzc0RPTS5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlM2QoJyArIHRoaXMucHJvZ3Jlc3NCYXIgKyAnJSwgMHB4LCAwcHgpJztcbiAgICAgICAgICAgIHByb2dyZXNzRE9NLmdldEF0dHJpYnV0ZU5vZGUoJ2RhdGEtcHJvZ3Jlc3MtdGV4dCcpLnZhbHVlID0gdGhpcy5wcm9ncmVzc0JhciArICclJztcbiAgICAgICAgICAgIHByb2dyZXNzRE9NLmdldEF0dHJpYnV0ZU5vZGUoJ2RhdGEtcHJvZ3Jlc3MnKS52YWx1ZSA9IHRoaXMucHJvZ3Jlc3NCYXIudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3NCYXIgPSAwO1xuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvYXBwL2hvbWUnXSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4ge1xuICAgICAgICAgICAgaWYgKCEoZXJyb3IgaW5zdGFuY2VvZiBIdHRwRXJyb3JSZXNwb25zZSkpIHtcbiAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2U6IEFwaUJhc2VSZXNwb25zZSA9ICg8QXBpQmFzZVJlc3BvbnNlPiBlcnJvcik7XG4gICAgICAgICAgICAgIHRoaXMucmVzcG9uc2VFcnJvciA9IHJlc3BvbnNlLnJlc3BTdGF0dXNNZXNzYWdlW3Jlc3BvbnNlLnJlc3BTdGF0dXNDb2RlXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuYnV0dG9uTG9naW4gPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3NCYXIgPSA4NTtcbiAgICAgICAgICAgIHByb2dyZXNzRE9NLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGUzZCgnICsgdGhpcy5wcm9ncmVzc0JhciArICclLCAwcHgsIDBweCknO1xuICAgICAgICAgICAgcHJvZ3Jlc3NET00uZ2V0QXR0cmlidXRlTm9kZSgnZGF0YS1wcm9ncmVzcy10ZXh0JykudmFsdWUgPSB0aGlzLnByb2dyZXNzQmFyICsgJyUnO1xuICAgICAgICAgICAgcHJvZ3Jlc3NET00uZ2V0QXR0cmlidXRlTm9kZSgnZGF0YS1wcm9ncmVzcycpLnZhbHVlID0gdGhpcy5wcm9ncmVzc0Jhci50b1N0cmluZygpO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBhY2UtcnVubmluZycpLmZvckVhY2gocGFjZSA9PiB7XG4gICAgICAgICAgICAgIHBhY2UuY2xhc3NOYW1lID0gcGFjZS5jbGFzc05hbWUucmVwbGFjZSgncGFjZS1ydW5uaW5nJywgJ3BhY2UtZG9uZScpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGFjZS1hY3RpdmUnKS5mb3JFYWNoKHBhY2UgPT4ge1xuICAgICAgICAgICAgICBwYWNlLmNsYXNzTmFtZSA9IHBhY2UuY2xhc3NOYW1lLnJlcGxhY2UoJ3BhY2UtYWN0aXZlJywgJ3BhY2UtaW5hY3RpdmUnKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5wcm9ncmVzc0JhciA9IDA7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAodGhpcy5wcm9ncmVzc0JhciA+PSAzNSAmJiB0aGlzLnByb2dyZXNzQmFyIDwgNjUpIHtcbiAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3NCYXIgPSA2NTtcbiAgICAgICAgICAgIHByb2dyZXNzRE9NLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGUzZCgnICsgdGhpcy5wcm9ncmVzc0JhciArICclLCAwcHgsIDBweCknO1xuICAgICAgICAgICAgcHJvZ3Jlc3NET00uZ2V0QXR0cmlidXRlTm9kZSgnZGF0YS1wcm9ncmVzcy10ZXh0JykudmFsdWUgPSB0aGlzLnByb2dyZXNzQmFyICsgJyUnO1xuICAgICAgICAgICAgcHJvZ3Jlc3NET00uZ2V0QXR0cmlidXRlTm9kZSgnZGF0YS1wcm9ncmVzcycpLnZhbHVlID0gdGhpcy5wcm9ncmVzc0Jhci50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0IGhhc0Vycm9yVXNlcm5hbWUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuZm9ybS5jb250cm9sc1sndXNlcm5hbWUnXSAmJlxuICAgICAgdGhpcy5mb3JtLmNvbnRyb2xzWyd1c2VybmFtZSddLmludmFsaWQgJiZcbiAgICAgIHRoaXMuZm9ybS5jb250cm9sc1sndXNlcm5hbWUnXS50b3VjaGVkXG4gICAgKTtcbiAgfVxuXG4gIGdldCBoYXNTdWNjZXNzVXNlcm5hbWUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuZm9ybS5jb250cm9sc1sndXNlcm5hbWUnXSAmJlxuICAgICAgdGhpcy5mb3JtLmNvbnRyb2xzWyd1c2VybmFtZSddLnZhbGlkICYmXG4gICAgICB0aGlzLmZvcm0uY29udHJvbHNbJ3VzZXJuYW1lJ10udG91Y2hlZFxuICAgICk7XG4gIH1cblxuICBnZXQgaGFzRXJyb3JQYXNzd29yZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5mb3JtLmNvbnRyb2xzWydwYXNzd29yZCddICYmXG4gICAgICB0aGlzLmZvcm0uY29udHJvbHNbJ3Bhc3N3b3JkJ10uaW52YWxpZCAmJlxuICAgICAgdGhpcy5mb3JtLmNvbnRyb2xzWydwYXNzd29yZCddLnRvdWNoZWRcbiAgICApO1xuICB9XG5cbiAgZ2V0IGhhc1N1Y2Nlc3NQYXNzd29yZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5mb3JtLmNvbnRyb2xzWydwYXNzd29yZCddICYmXG4gICAgICB0aGlzLmZvcm0uY29udHJvbHNbJ3Bhc3N3b3JkJ10udmFsaWQgJiZcbiAgICAgIHRoaXMuZm9ybS5jb250cm9sc1sncGFzc3dvcmQnXS50b3VjaGVkXG4gICAgKTtcbiAgfVxuXG59XG4iXX0=