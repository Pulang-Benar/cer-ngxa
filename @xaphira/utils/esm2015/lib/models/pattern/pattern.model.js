/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const Pattern = {
    EMAIL: '.+@.+\..+',
    PHONE_NUMBER: '^(([+]([0-9]{1,2}))|([0-9]{1}))([0-9]{2}-?)([0-9]{4}-?)([0-9]{1,6}-?)$',
    PASSWORD_MEDIUM: '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]{8,}$',
    PASSWORD_STRONG: '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&])[A-Za-z0-9@$!%*?&]{8,}$',
    LOCALE: '^en-US$|^id-ID$',
};
export { Pattern };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF0dGVybi5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B4YXBoaXJhL3V0aWxzLyIsInNvdXJjZXMiOlsibGliL21vZGVscy9wYXR0ZXJuL3BhdHRlcm4ubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0lBQ0ksT0FBUSxXQUFXO0lBQ25CLGNBQWUsd0VBQXdFO0lBQ3ZGLGlCQUFrQixvREFBb0Q7SUFDdEUsaUJBQWtCLDBFQUEwRTtJQUM1RixRQUFTLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBlbnVtIFBhdHRlcm4ge1xuICAgIEVNQUlMID0gJy4rQC4rXFwuLisnLFxuICAgIFBIT05FX05VTUJFUiA9ICdeKChbK10oWzAtOV17MSwyfSkpfChbMC05XXsxfSkpKFswLTldezJ9LT8pKFswLTldezR9LT8pKFswLTldezEsNn0tPykkJyxcbiAgICBQQVNTV09SRF9NRURJVU0gPSAnXig/PS4qW2Etel0pKD89LipbQS1aXSkoPz0uKlswLTldKVthLXpBLVowLTldezgsfSQnLFxuICAgIFBBU1NXT1JEX1NUUk9ORyA9ICdeKD89LipbYS16XSkoPz0uKltBLVpdKSg/PS4qWzAtOV0pKD89LipbQCQhJSo/Jl0pW0EtWmEtejAtOUAkISUqPyZdezgsfSQnLFxuICAgIExPQ0FMRSA9ICdeZW4tVVMkfF5pZC1JRCQnLFxufVxuIl19