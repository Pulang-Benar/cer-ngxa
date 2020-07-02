/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
export class DialogFlagComponent {
    /**
     * @param {?} ref
     */
    constructor(ref) {
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
    choose(flag) {
        this.ref.close('flag-icon flag-icon-' + flag);
    }
}
DialogFlagComponent.decorators = [
    { type: Component, args: [{
                selector: 'xa-dialog-flag',
                template: "<nb-card>\n  <nb-card-header>\n    {{ 'Choose Flag' | translate }}\n  </nb-card-header>\n  <nb-card-body>\n    <span class=\"flag-icon flag-icon-{{flag}} choose-flag\" (click)=\"choose(flag)\" *ngFor=\"let flag of flags\"></span>\n  </nb-card-body>\n</nb-card>\n",
                styles: ["/*!\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */.nb-theme-default :host input.deactivated-password{max-width:unset;width:100%}.nb-theme-default :host .cancel{margin-right:1rem}.nb-theme-default :host button.deactivated-button{width:100%}.nb-theme-default :host .flag-icon{margin:.75rem}.nb-theme-default :host .choose-flag{cursor:pointer}.nb-theme-dark :host input.deactivated-password{max-width:unset;width:100%}.nb-theme-dark :host .cancel{margin-right:1rem}.nb-theme-dark :host button.deactivated-button{width:100%}.nb-theme-dark :host .flag-icon{margin:.75rem}.nb-theme-dark :host .choose-flag{cursor:pointer}.nb-theme-cosmic :host input.deactivated-password{max-width:unset;width:100%}.nb-theme-cosmic :host .cancel{margin-right:1rem}.nb-theme-cosmic :host button.deactivated-button{width:100%}.nb-theme-cosmic :host .flag-icon{margin:.75rem}.nb-theme-cosmic :host .choose-flag{cursor:pointer}.nb-theme-corporate :host input.deactivated-password{max-width:unset;width:100%}.nb-theme-corporate :host .cancel{margin-right:1rem}.nb-theme-corporate :host button.deactivated-button{width:100%}@media (max-width:767.98px){.nb-theme-default :host p{line-height:1.35rem;word-spacing:.15rem}.nb-theme-default :host button.deactivated-button{font-size:.6rem}.nb-theme-dark :host p{line-height:1.35rem;word-spacing:.15rem}.nb-theme-dark :host button.deactivated-button{font-size:.6rem}.nb-theme-cosmic :host p{line-height:1.35rem;word-spacing:.15rem}.nb-theme-cosmic :host button.deactivated-button{font-size:.6rem}.nb-theme-corporate :host p{line-height:1.35rem;word-spacing:.15rem}.nb-theme-corporate :host button.deactivated-button{font-size:.6rem}}.nb-theme-corporate :host .flag-icon{margin:.75rem}.nb-theme-corporate :host .choose-flag{cursor:pointer}"]
            }] }
];
/** @nocollapse */
DialogFlagComponent.ctorParameters = () => [
    { type: NbDialogRef }
];
if (false) {
    /** @type {?} */
    DialogFlagComponent.prototype.flags;
    /**
     * @type {?}
     * @protected
     */
    DialogFlagComponent.prototype.ref;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWZsYWcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHhhcGhpcmEvbmd4YS1zeXMvIiwic291cmNlcyI6WyJsaWIvbGFuZ3VhZ2UvYWRkLWVkaXQvZGlhbG9nLWZsYWcvZGlhbG9nLWZsYWcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQU83QyxNQUFNLE9BQU8sbUJBQW1COzs7O0lBMkI5QixZQUFzQixHQUFxQztRQUFyQyxRQUFHLEdBQUgsR0FBRyxDQUFrQztRQXpCcEQsVUFBSyxHQUFhLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUk7WUFDaEUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUk7WUFDaEUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUk7WUFDaEUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUk7WUFDaEUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUk7WUFDaEUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUk7WUFDaEUsSUFBSSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUk7WUFDbkUsSUFBSSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO1lBQ3BFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO1lBQ2hFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO1lBQ2hFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO1lBQ2hFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO1lBQ2hFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO1lBQ2hFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO1lBQ2hFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO1lBQ2hFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO1lBQ2hFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO1lBQ2hFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO1lBQ2hFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO1lBQ2hFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO1lBQ2hFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO1lBQ2hFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO1lBQ2hFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJO1lBQ2hFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFHOUQsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsSUFBWTtRQUNqQixJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxzQkFBc0IsR0FBRyxJQUFJLENBQUMsQ0FBQztJQUNoRCxDQUFDOzs7WUFyQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLGtSQUF5Qzs7YUFFMUM7Ozs7WUFOUSxXQUFXOzs7O0lBU2xCLG9DQXVCOEQ7Ozs7O0lBRWxELGtDQUErQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmJEaWFsb2dSZWYgfSBmcm9tICdAbmVidWxhci90aGVtZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3hhLWRpYWxvZy1mbGFnJyxcbiAgdGVtcGxhdGVVcmw6ICdkaWFsb2ctZmxhZy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydkaWFsb2ctZmxhZy5jb21wb25lbnQuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBEaWFsb2dGbGFnQ29tcG9uZW50IHtcblxuICBwdWJsaWMgZmxhZ3M6IHN0cmluZ1tdID0gWydhZCcsICdhZScsICdhZicsICdhZycsICdhaScsICdhbCcsICdhbScsICdhbycsICdhcScsICdhcicsICdhcycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2F0JywgJ2F1JywgJ2F3JywgJ2F4JywgJ2F6JywgJ2JhJywgJ2JiJywgJ2JkJywgJ2JlJywgJ2JmJywgJ2JnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYmgnLCAnYmknLCAnYmonLCAnYmwnLCAnYm0nLCAnYm4nLCAnYm8nLCAnYnEnLCAnYnInLCAnYnMnLCAnYnQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdidicsICdidycsICdieScsICdieicsICdjYScsICdjYycsICdjZCcsICdjZicsICdjZycsICdjaCcsICdjaScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NrJywgJ2NsJywgJ2NtJywgJ2NuJywgJ2NvJywgJ2NyJywgJ2N1JywgJ2N2JywgJ2N3JywgJ2N4JywgJ2N5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY3onLCAnZGUnLCAnZGonLCAnZGsnLCAnZG0nLCAnZG8nLCAnZHonLCAnZWMnLCAnZWUnLCAnZWcnLCAnZWgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdlcicsICdlcy1jYScsICdlcycsICdldCcsICdldScsICdmaScsICdmaicsICdmaycsICdmbScsICdmbycsICdmcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2dhJywgJ2diLWVuZycsICdnYi1uaXInLCAnZ2Itc2N0JywgJ2diLXdscycsICdnYicsICdnZCcsICdnZScsICdnZicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2dnJywgJ2doJywgJ2dpJywgJ2dsJywgJ2dtJywgJ2duJywgJ2dwJywgJ2dxJywgJ2dyJywgJ2dzJywgJ2d0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZ3UnLCAnZ3cnLCAnZ3knLCAnaGsnLCAnaG0nLCAnaG4nLCAnaHInLCAnaHQnLCAnaHUnLCAnaWQnLCAnaWUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpbCcsICdpbScsICdpbicsICdpbycsICdpcScsICdpcicsICdpcycsICdpdCcsICdqZScsICdqbScsICdqbycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2pwJywgJ2tlJywgJ2tnJywgJ2toJywgJ2tpJywgJ2ttJywgJ2tuJywgJ2twJywgJ2tyJywgJ2t3JywgJ2t5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAna3onLCAnbGEnLCAnbGInLCAnbGMnLCAnbGknLCAnbGsnLCAnbHInLCAnbHMnLCAnbHQnLCAnbHUnLCAnbHYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdseScsICdtYScsICdtYycsICdtZCcsICdtZScsICdtZicsICdtZycsICdtaCcsICdtaycsICdtbCcsICdtbScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ21uJywgJ21vJywgJ21wJywgJ21xJywgJ21yJywgJ21zJywgJ210JywgJ211JywgJ212JywgJ213JywgJ214JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbXknLCAnbXonLCAnbmEnLCAnbmMnLCAnbmUnLCAnbmYnLCAnbmcnLCAnbmknLCAnbmwnLCAnbm8nLCAnbnAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICducicsICdudScsICdueicsICdvbScsICdwYScsICdwZScsICdwZicsICdwZycsICdwaCcsICdwaycsICdwbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3BtJywgJ3BuJywgJ3ByJywgJ3BzJywgJ3B0JywgJ3B3JywgJ3B5JywgJ3FhJywgJ3JlJywgJ3JvJywgJ3JzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAncnUnLCAncncnLCAnc2EnLCAnc2InLCAnc2MnLCAnc2QnLCAnc2UnLCAnc2cnLCAnc2gnLCAnc2knLCAnc2onLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdzaycsICdzbCcsICdzbScsICdzbicsICdzbycsICdzcicsICdzcycsICdzdCcsICdzdicsICdzeCcsICdzeScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3N6JywgJ3RjJywgJ3RkJywgJ3RmJywgJ3RnJywgJ3RoJywgJ3RqJywgJ3RrJywgJ3RsJywgJ3RtJywgJ3RuJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndG8nLCAndHInLCAndHQnLCAndHYnLCAndHcnLCAndHonLCAndWEnLCAndWcnLCAndW0nLCAndW4nLCAndXMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd1eScsICd1eicsICd2YScsICd2YycsICd2ZScsICd2ZycsICd2aScsICd2bicsICd2dScsICd3ZicsICd3cycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3hrJywgJ3llJywgJ3l0JywgJ3phJywgJ3ptJywgJ3p3J107XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIHJlZjogTmJEaWFsb2dSZWY8RGlhbG9nRmxhZ0NvbXBvbmVudD4pIHtcbiAgfVxuXG4gIGNob29zZShmbGFnOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnJlZi5jbG9zZSgnZmxhZy1pY29uIGZsYWctaWNvbi0nICsgZmxhZyk7XG4gIH1cbn1cbiJdfQ==