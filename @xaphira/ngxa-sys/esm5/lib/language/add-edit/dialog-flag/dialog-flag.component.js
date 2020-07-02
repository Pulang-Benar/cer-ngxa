/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
var DialogFlagComponent = /** @class */ (function () {
    function DialogFlagComponent(ref) {
        this.ref = ref;
        this.flags = ['ad', 'ae', 'af', 'ag', 'ai', 'al', 'am', 'ao', 'aq', 'ar', 'as',
            'at', 'au', 'aw', 'ax', 'az', 'ba', 'bb', 'bd', 'be', 'bf', 'bg',
            'bh', 'bi', 'bj', 'bl', 'bm', 'bn', 'bo', 'bq', 'br', 'bs', 'bt',
            'bv', 'bw', 'by', 'bz', 'ca', 'cc', 'cd', 'cf', 'cg', 'ch', 'ci',
            'ck', 'cl', 'cm', 'cn', 'co', 'cr', 'cu', 'cv', 'cw', 'cx', 'cy',
            'cz', 'de', 'dj', 'dk', 'dm', 'do', 'dz', 'ec', 'ee', 'eg', 'eh',
            'er', 'es-ca', 'es', 'et', 'eu', 'fi', 'fj', 'fk', 'fm', 'fo', 'fr',
            'ga', 'gb-eng', 'gb-nir', 'gb-sct', 'gb-wls', 'gb', 'gd', 'ge', 'gf',
            'gg', 'gh', 'gi', 'gl', 'gm', 'gn', 'gp', 'gq', 'gr', 'gs', 'gt',
            'gu', 'gw', 'gy', 'hk', 'hm', 'hn', 'hr', 'ht', 'hu', 'id', 'ie',
            'il', 'im', 'in', 'io', 'iq', 'ir', 'is', 'it', 'je', 'jm', 'jo',
            'jp', 'ke', 'kg', 'kh', 'ki', 'km', 'kn', 'kp', 'kr', 'kw', 'ky',
            'kz', 'la', 'lb', 'lc', 'li', 'lk', 'lr', 'ls', 'lt', 'lu', 'lv',
            'ly', 'ma', 'mc', 'md', 'me', 'mf', 'mg', 'mh', 'mk', 'ml', 'mm',
            'mn', 'mo', 'mp', 'mq', 'mr', 'ms', 'mt', 'mu', 'mv', 'mw', 'mx',
            'my', 'mz', 'na', 'nc', 'ne', 'nf', 'ng', 'ni', 'nl', 'no', 'np',
            'nr', 'nu', 'nz', 'om', 'pa', 'pe', 'pf', 'pg', 'ph', 'pk', 'pl',
            'pm', 'pn', 'pr', 'ps', 'pt', 'pw', 'py', 'qa', 're', 'ro', 'rs',
            'ru', 'rw', 'sa', 'sb', 'sc', 'sd', 'se', 'sg', 'sh', 'si', 'sj',
            'sk', 'sl', 'sm', 'sn', 'so', 'sr', 'ss', 'st', 'sv', 'sx', 'sy',
            'sz', 'tc', 'td', 'tf', 'tg', 'th', 'tj', 'tk', 'tl', 'tm', 'tn',
            'to', 'tr', 'tt', 'tv', 'tw', 'tz', 'ua', 'ug', 'um', 'un', 'us',
            'uy', 'uz', 'va', 'vc', 've', 'vg', 'vi', 'vn', 'vu', 'wf', 'ws',
            'xk', 'ye', 'yt', 'za', 'zm', 'zw'];
    }
    /**
     * @param {?} flag
     * @return {?}
     */
    DialogFlagComponent.prototype.choose = /**
     * @param {?} flag
     * @return {?}
     */
    function (flag) {
        this.ref.close('flag-icon flag-icon-' + flag);
    };
    DialogFlagComponent.decorators = [
        { type: Component, args: [{
                    selector: 'xa-dialog-flag',
                    template: "<nb-card>\n  <nb-card-header>\n    {{ 'Choose Flag' | translate }}\n  </nb-card-header>\n  <nb-card-body>\n    <span class=\"flag-icon flag-icon-{{flag}} choose-flag\" (click)=\"choose(flag)\" *ngFor=\"let flag of flags\"></span>\n  </nb-card-body>\n</nb-card>\n",
                    styles: ["/*!\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */.nb-theme-default :host input.deactivated-password{max-width:unset;width:100%}.nb-theme-default :host .cancel{margin-right:1rem}.nb-theme-default :host button.deactivated-button{width:100%}.nb-theme-default :host .flag-icon{margin:.75rem}.nb-theme-default :host .choose-flag{cursor:pointer}.nb-theme-dark :host input.deactivated-password{max-width:unset;width:100%}.nb-theme-dark :host .cancel{margin-right:1rem}.nb-theme-dark :host button.deactivated-button{width:100%}.nb-theme-dark :host .flag-icon{margin:.75rem}.nb-theme-dark :host .choose-flag{cursor:pointer}.nb-theme-cosmic :host input.deactivated-password{max-width:unset;width:100%}.nb-theme-cosmic :host .cancel{margin-right:1rem}.nb-theme-cosmic :host button.deactivated-button{width:100%}.nb-theme-cosmic :host .flag-icon{margin:.75rem}.nb-theme-cosmic :host .choose-flag{cursor:pointer}.nb-theme-corporate :host input.deactivated-password{max-width:unset;width:100%}.nb-theme-corporate :host .cancel{margin-right:1rem}.nb-theme-corporate :host button.deactivated-button{width:100%}@media (max-width:767.98px){.nb-theme-default :host p{line-height:1.35rem;word-spacing:.15rem}.nb-theme-default :host button.deactivated-button{font-size:.6rem}.nb-theme-dark :host p{line-height:1.35rem;word-spacing:.15rem}.nb-theme-dark :host button.deactivated-button{font-size:.6rem}.nb-theme-cosmic :host p{line-height:1.35rem;word-spacing:.15rem}.nb-theme-cosmic :host button.deactivated-button{font-size:.6rem}.nb-theme-corporate :host p{line-height:1.35rem;word-spacing:.15rem}.nb-theme-corporate :host button.deactivated-button{font-size:.6rem}}.nb-theme-corporate :host .flag-icon{margin:.75rem}.nb-theme-corporate :host .choose-flag{cursor:pointer}"]
                }] }
    ];
    /** @nocollapse */
    DialogFlagComponent.ctorParameters = function () { return [
        { type: NbDialogRef }
    ]; };
    return DialogFlagComponent;
}());
export { DialogFlagComponent };
if (false) {
    /** @type {?} */
    DialogFlagComponent.prototype.flags;
    /**
     * @type {?}
     * @protected
     */
    DialogFlagComponent.prototype.ref;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWZsYWcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHhhcGhpcmEvbmd4YS1zeXMvIiwic291cmNlcyI6WyJsaWIvbGFuZ3VhZ2UvYWRkLWVkaXQvZGlhbG9nLWZsYWcvZGlhbG9nLWZsYWcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU3QztJQWdDRSw2QkFBc0IsR0FBcUM7UUFBckMsUUFBRyxHQUFILEdBQUcsQ0FBa0M7UUF6QnBELFVBQUssR0FBYSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO1lBQ2hFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO1lBQ2hFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO1lBQ2hFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO1lBQ2hFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO1lBQ2hFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO1lBQ2hFLElBQUksRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO1lBQ25FLElBQUksRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSTtZQUNwRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSTtZQUNoRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSTtZQUNoRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSTtZQUNoRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSTtZQUNoRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSTtZQUNoRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSTtZQUNoRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSTtZQUNoRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSTtZQUNoRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSTtZQUNoRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSTtZQUNoRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSTtZQUNoRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSTtZQUNoRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSTtZQUNoRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSTtZQUNoRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSTtZQUNoRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBRzlELENBQUM7Ozs7O0lBRUQsb0NBQU07Ozs7SUFBTixVQUFPLElBQVk7UUFDakIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsc0JBQXNCLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFDaEQsQ0FBQzs7Z0JBckNGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQixrUkFBeUM7O2lCQUUxQzs7OztnQkFOUSxXQUFXOztJQXdDcEIsMEJBQUM7Q0FBQSxBQXRDRCxJQXNDQztTQWpDWSxtQkFBbUI7OztJQUU5QixvQ0F1QjhEOzs7OztJQUVsRCxrQ0FBK0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5iRGlhbG9nUmVmIH0gZnJvbSAnQG5lYnVsYXIvdGhlbWUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd4YS1kaWFsb2ctZmxhZycsXG4gIHRlbXBsYXRlVXJsOiAnZGlhbG9nLWZsYWcuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnZGlhbG9nLWZsYWcuY29tcG9uZW50LnNjc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgRGlhbG9nRmxhZ0NvbXBvbmVudCB7XG5cbiAgcHVibGljIGZsYWdzOiBzdHJpbmdbXSA9IFsnYWQnLCAnYWUnLCAnYWYnLCAnYWcnLCAnYWknLCAnYWwnLCAnYW0nLCAnYW8nLCAnYXEnLCAnYXInLCAnYXMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdhdCcsICdhdScsICdhdycsICdheCcsICdheicsICdiYScsICdiYicsICdiZCcsICdiZScsICdiZicsICdiZycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2JoJywgJ2JpJywgJ2JqJywgJ2JsJywgJ2JtJywgJ2JuJywgJ2JvJywgJ2JxJywgJ2JyJywgJ2JzJywgJ2J0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYnYnLCAnYncnLCAnYnknLCAnYnonLCAnY2EnLCAnY2MnLCAnY2QnLCAnY2YnLCAnY2cnLCAnY2gnLCAnY2knLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjaycsICdjbCcsICdjbScsICdjbicsICdjbycsICdjcicsICdjdScsICdjdicsICdjdycsICdjeCcsICdjeScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2N6JywgJ2RlJywgJ2RqJywgJ2RrJywgJ2RtJywgJ2RvJywgJ2R6JywgJ2VjJywgJ2VlJywgJ2VnJywgJ2VoJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZXInLCAnZXMtY2EnLCAnZXMnLCAnZXQnLCAnZXUnLCAnZmknLCAnZmonLCAnZmsnLCAnZm0nLCAnZm8nLCAnZnInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdnYScsICdnYi1lbmcnLCAnZ2ItbmlyJywgJ2diLXNjdCcsICdnYi13bHMnLCAnZ2InLCAnZ2QnLCAnZ2UnLCAnZ2YnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdnZycsICdnaCcsICdnaScsICdnbCcsICdnbScsICdnbicsICdncCcsICdncScsICdncicsICdncycsICdndCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2d1JywgJ2d3JywgJ2d5JywgJ2hrJywgJ2htJywgJ2huJywgJ2hyJywgJ2h0JywgJ2h1JywgJ2lkJywgJ2llJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaWwnLCAnaW0nLCAnaW4nLCAnaW8nLCAnaXEnLCAnaXInLCAnaXMnLCAnaXQnLCAnamUnLCAnam0nLCAnam8nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdqcCcsICdrZScsICdrZycsICdraCcsICdraScsICdrbScsICdrbicsICdrcCcsICdrcicsICdrdycsICdreScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2t6JywgJ2xhJywgJ2xiJywgJ2xjJywgJ2xpJywgJ2xrJywgJ2xyJywgJ2xzJywgJ2x0JywgJ2x1JywgJ2x2JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbHknLCAnbWEnLCAnbWMnLCAnbWQnLCAnbWUnLCAnbWYnLCAnbWcnLCAnbWgnLCAnbWsnLCAnbWwnLCAnbW0nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdtbicsICdtbycsICdtcCcsICdtcScsICdtcicsICdtcycsICdtdCcsICdtdScsICdtdicsICdtdycsICdteCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ215JywgJ216JywgJ25hJywgJ25jJywgJ25lJywgJ25mJywgJ25nJywgJ25pJywgJ25sJywgJ25vJywgJ25wJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbnInLCAnbnUnLCAnbnonLCAnb20nLCAncGEnLCAncGUnLCAncGYnLCAncGcnLCAncGgnLCAncGsnLCAncGwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdwbScsICdwbicsICdwcicsICdwcycsICdwdCcsICdwdycsICdweScsICdxYScsICdyZScsICdybycsICdycycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3J1JywgJ3J3JywgJ3NhJywgJ3NiJywgJ3NjJywgJ3NkJywgJ3NlJywgJ3NnJywgJ3NoJywgJ3NpJywgJ3NqJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnc2snLCAnc2wnLCAnc20nLCAnc24nLCAnc28nLCAnc3InLCAnc3MnLCAnc3QnLCAnc3YnLCAnc3gnLCAnc3knLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdzeicsICd0YycsICd0ZCcsICd0ZicsICd0ZycsICd0aCcsICd0aicsICd0aycsICd0bCcsICd0bScsICd0bicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RvJywgJ3RyJywgJ3R0JywgJ3R2JywgJ3R3JywgJ3R6JywgJ3VhJywgJ3VnJywgJ3VtJywgJ3VuJywgJ3VzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndXknLCAndXonLCAndmEnLCAndmMnLCAndmUnLCAndmcnLCAndmknLCAndm4nLCAndnUnLCAnd2YnLCAnd3MnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd4aycsICd5ZScsICd5dCcsICd6YScsICd6bScsICd6dyddO1xuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCByZWY6IE5iRGlhbG9nUmVmPERpYWxvZ0ZsYWdDb21wb25lbnQ+KSB7XG4gIH1cblxuICBjaG9vc2UoZmxhZzogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5yZWYuY2xvc2UoJ2ZsYWctaWNvbiBmbGFnLWljb24tJyArIGZsYWcpO1xuICB9XG59XG4iXX0=