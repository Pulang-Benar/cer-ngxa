/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function SecurityResourceModel() { }
if (false) {
    /** @type {?} */
    SecurityResourceModel.prototype.client_id;
    /** @type {?} */
    SecurityResourceModel.prototype.client_secret;
    /** @type {?} */
    SecurityResourceModel.prototype.grant_type;
    /** @type {?|undefined} */
    SecurityResourceModel.prototype.private_key;
    /** @type {?|undefined} */
    SecurityResourceModel.prototype.aes_key;
    /** @type {?|undefined} */
    SecurityResourceModel.prototype.session_idle;
    /** @type {?|undefined} */
    SecurityResourceModel.prototype.session_timeout;
    /** @type {?|undefined} */
    SecurityResourceModel.prototype.signature;
    /** @type {?|undefined} */
    SecurityResourceModel.prototype.vapid;
}
/** @type {?} */
export var oauthInfo = {
    access_token: 'access_token',
    refresh_token: 'refresh_token',
    token_type: 'token_type',
    public_key: 'xrkey',
    expires_in: 'expires_in',
    authority: 'authority',
    image: 'image',
    email: 'email',
    menus: 'menus',
    extras: 'extras',
    server_date: 'server_date',
    locale: 'locale',
    theme: 'theme',
    name: 'name',
};
/** @enum {string} */
var TypeDataOauth = {
    OAUTH: 'oauth',
    PROFILE: 'profile',
    SETTINGS: 'settings',
    LOCALSTORAGE: 'localstorage',
};
export { TypeDataOauth };
/** @type {?} */
export var oauthInfoModels = [
    { key: oauthInfo.access_token, enc: true, type: TypeDataOauth.OAUTH, string: true },
    { key: oauthInfo.refresh_token, enc: true, type: TypeDataOauth.OAUTH, string: true },
    { key: oauthInfo.token_type, enc: true, type: TypeDataOauth.OAUTH, string: true },
    { key: oauthInfo.public_key, enc: true, type: TypeDataOauth.OAUTH, string: true },
    { key: oauthInfo.expires_in, enc: true, type: TypeDataOauth.OAUTH, string: false },
    { key: oauthInfo.authority, enc: true, type: TypeDataOauth.OAUTH, string: false },
    { key: oauthInfo.menus, enc: true, type: TypeDataOauth.OAUTH, string: false },
    { key: oauthInfo.extras, enc: true, type: TypeDataOauth.OAUTH, string: false },
    { key: oauthInfo.name, enc: false, type: TypeDataOauth.PROFILE, string: true },
    { key: oauthInfo.email, enc: false, type: TypeDataOauth.PROFILE, string: true },
    { key: oauthInfo.image, enc: false, type: TypeDataOauth.PROFILE, string: true },
    { key: oauthInfo.locale, enc: false, type: TypeDataOauth.SETTINGS, string: true },
    { key: oauthInfo.theme, enc: false, type: TypeDataOauth.SETTINGS, string: true },
    { key: oauthInfo.server_date, enc: false, type: TypeDataOauth.SETTINGS, string: true },
];
/**
 * @record
 */
export function OauthInfoModel() { }
if (false) {
    /** @type {?} */
    OauthInfoModel.prototype.key;
    /** @type {?} */
    OauthInfoModel.prototype.enc;
    /** @type {?} */
    OauthInfoModel.prototype.type;
    /** @type {?} */
    OauthInfoModel.prototype.string;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VjdXJpdHktcmVzb3VyY2UubW9kZWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AeGFwaGlyYS9zaGFyZWQvIiwic291cmNlcyI6WyJsaWIvbW9kZWxzL3NlY3VyaXR5LXJlc291cmNlLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSwyQ0FVQzs7O0lBVEcsMENBQWtCOztJQUNsQiw4Q0FBc0I7O0lBQ3RCLDJDQUFtQjs7SUFDbkIsNENBQXFCOztJQUNyQix3Q0FBaUI7O0lBQ2pCLDZDQUFzQjs7SUFDdEIsZ0RBQXlCOztJQUN6QiwwQ0FBb0I7O0lBQ3BCLHNDQUFlOzs7QUFHbkIsTUFBTSxLQUFPLFNBQVMsR0FBRztJQUNyQixZQUFZLEVBQUUsY0FBYztJQUM1QixhQUFhLEVBQUUsZUFBZTtJQUM5QixVQUFVLEVBQUUsWUFBWTtJQUN4QixVQUFVLEVBQUUsT0FBTztJQUNuQixVQUFVLEVBQUUsWUFBWTtJQUN4QixTQUFTLEVBQUUsV0FBVztJQUN0QixLQUFLLEVBQUUsT0FBTztJQUNkLEtBQUssRUFBRSxPQUFPO0lBQ2QsS0FBSyxFQUFFLE9BQU87SUFDZCxNQUFNLEVBQUUsUUFBUTtJQUNoQixXQUFXLEVBQUUsYUFBYTtJQUMxQixNQUFNLEVBQUUsUUFBUTtJQUNoQixLQUFLLEVBQUUsT0FBTztJQUNkLElBQUksRUFBRSxNQUFNO0NBQ2Y7OztJQUdHLE9BQVEsT0FBTztJQUNmLFNBQVUsU0FBUztJQUNuQixVQUFXLFVBQVU7SUFDckIsY0FBZSxjQUFjOzs7O0FBR2pDLE1BQU0sS0FBTyxlQUFlLEdBQXFCO0lBQzdDLEVBQUUsR0FBRyxFQUFFLFNBQVMsQ0FBQyxZQUFZLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsYUFBYSxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO0lBQ25GLEVBQUUsR0FBRyxFQUFFLFNBQVMsQ0FBQyxhQUFhLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsYUFBYSxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO0lBQ3BGLEVBQUUsR0FBRyxFQUFFLFNBQVMsQ0FBQyxVQUFVLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsYUFBYSxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO0lBQ2pGLEVBQUUsR0FBRyxFQUFFLFNBQVMsQ0FBQyxVQUFVLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsYUFBYSxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO0lBQ2pGLEVBQUUsR0FBRyxFQUFFLFNBQVMsQ0FBQyxVQUFVLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsYUFBYSxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO0lBQ2xGLEVBQUUsR0FBRyxFQUFFLFNBQVMsQ0FBQyxTQUFTLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsYUFBYSxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO0lBQ2pGLEVBQUUsR0FBRyxFQUFFLFNBQVMsQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsYUFBYSxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO0lBQzdFLEVBQUUsR0FBRyxFQUFFLFNBQVMsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsYUFBYSxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO0lBQzlFLEVBQUUsR0FBRyxFQUFFLFNBQVMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsYUFBYSxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO0lBQzlFLEVBQUUsR0FBRyxFQUFFLFNBQVMsQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsYUFBYSxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO0lBQy9FLEVBQUUsR0FBRyxFQUFFLFNBQVMsQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsYUFBYSxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO0lBQy9FLEVBQUUsR0FBRyxFQUFFLFNBQVMsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsYUFBYSxDQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO0lBQ2pGLEVBQUUsR0FBRyxFQUFFLFNBQVMsQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsYUFBYSxDQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO0lBQ2hGLEVBQUUsR0FBRyxFQUFFLFNBQVMsQ0FBQyxXQUFXLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsYUFBYSxDQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO0NBQ3pGOzs7O0FBRUQsb0NBS0M7OztJQUpHLDZCQUFZOztJQUNaLDZCQUFhOztJQUNiLDhCQUFvQjs7SUFDcEIsZ0NBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGludGVyZmFjZSBTZWN1cml0eVJlc291cmNlTW9kZWwge1xuICAgIGNsaWVudF9pZDogc3RyaW5nO1xuICAgIGNsaWVudF9zZWNyZXQ6IHN0cmluZztcbiAgICBncmFudF90eXBlOiBzdHJpbmc7XG4gICAgcHJpdmF0ZV9rZXk/OiBzdHJpbmc7XG4gICAgYWVzX2tleT86IHN0cmluZztcbiAgICBzZXNzaW9uX2lkbGU/OiBudW1iZXI7XG4gICAgc2Vzc2lvbl90aW1lb3V0PzogbnVtYmVyO1xuICAgIHNpZ25hdHVyZT86IGJvb2xlYW47XG4gICAgdmFwaWQ/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBvYXV0aEluZm8gPSB7XG4gICAgYWNjZXNzX3Rva2VuOiAnYWNjZXNzX3Rva2VuJyxcbiAgICByZWZyZXNoX3Rva2VuOiAncmVmcmVzaF90b2tlbicsXG4gICAgdG9rZW5fdHlwZTogJ3Rva2VuX3R5cGUnLFxuICAgIHB1YmxpY19rZXk6ICd4cmtleScsXG4gICAgZXhwaXJlc19pbjogJ2V4cGlyZXNfaW4nLFxuICAgIGF1dGhvcml0eTogJ2F1dGhvcml0eScsXG4gICAgaW1hZ2U6ICdpbWFnZScsXG4gICAgZW1haWw6ICdlbWFpbCcsXG4gICAgbWVudXM6ICdtZW51cycsXG4gICAgZXh0cmFzOiAnZXh0cmFzJyxcbiAgICBzZXJ2ZXJfZGF0ZTogJ3NlcnZlcl9kYXRlJyxcbiAgICBsb2NhbGU6ICdsb2NhbGUnLFxuICAgIHRoZW1lOiAndGhlbWUnLFxuICAgIG5hbWU6ICduYW1lJyxcbn07XG5cbmV4cG9ydCBlbnVtIFR5cGVEYXRhT2F1dGgge1xuICAgIE9BVVRIID0gJ29hdXRoJyxcbiAgICBQUk9GSUxFID0gJ3Byb2ZpbGUnLFxuICAgIFNFVFRJTkdTID0gJ3NldHRpbmdzJyxcbiAgICBMT0NBTFNUT1JBR0UgPSAnbG9jYWxzdG9yYWdlJyxcbn1cblxuZXhwb3J0IGNvbnN0IG9hdXRoSW5mb01vZGVsczogT2F1dGhJbmZvTW9kZWxbXSA9IFtcbiAgICB7IGtleTogb2F1dGhJbmZvLmFjY2Vzc190b2tlbiwgZW5jOiB0cnVlLCB0eXBlOiBUeXBlRGF0YU9hdXRoLk9BVVRILCBzdHJpbmc6IHRydWUgfSxcbiAgICB7IGtleTogb2F1dGhJbmZvLnJlZnJlc2hfdG9rZW4sIGVuYzogdHJ1ZSwgdHlwZTogVHlwZURhdGFPYXV0aC5PQVVUSCwgc3RyaW5nOiB0cnVlIH0sXG4gICAgeyBrZXk6IG9hdXRoSW5mby50b2tlbl90eXBlLCBlbmM6IHRydWUsIHR5cGU6IFR5cGVEYXRhT2F1dGguT0FVVEgsIHN0cmluZzogdHJ1ZSB9LFxuICAgIHsga2V5OiBvYXV0aEluZm8ucHVibGljX2tleSwgZW5jOiB0cnVlLCB0eXBlOiBUeXBlRGF0YU9hdXRoLk9BVVRILCBzdHJpbmc6IHRydWUgfSxcbiAgICB7IGtleTogb2F1dGhJbmZvLmV4cGlyZXNfaW4sIGVuYzogdHJ1ZSwgdHlwZTogVHlwZURhdGFPYXV0aC5PQVVUSCwgc3RyaW5nOiBmYWxzZSB9LFxuICAgIHsga2V5OiBvYXV0aEluZm8uYXV0aG9yaXR5LCBlbmM6IHRydWUsIHR5cGU6IFR5cGVEYXRhT2F1dGguT0FVVEgsIHN0cmluZzogZmFsc2UgfSxcbiAgICB7IGtleTogb2F1dGhJbmZvLm1lbnVzLCBlbmM6IHRydWUsIHR5cGU6IFR5cGVEYXRhT2F1dGguT0FVVEgsIHN0cmluZzogZmFsc2UgfSxcbiAgICB7IGtleTogb2F1dGhJbmZvLmV4dHJhcywgZW5jOiB0cnVlLCB0eXBlOiBUeXBlRGF0YU9hdXRoLk9BVVRILCBzdHJpbmc6IGZhbHNlIH0sXG4gICAgeyBrZXk6IG9hdXRoSW5mby5uYW1lLCBlbmM6IGZhbHNlLCB0eXBlOiBUeXBlRGF0YU9hdXRoLlBST0ZJTEUsIHN0cmluZzogdHJ1ZSB9LFxuICAgIHsga2V5OiBvYXV0aEluZm8uZW1haWwsIGVuYzogZmFsc2UsIHR5cGU6IFR5cGVEYXRhT2F1dGguUFJPRklMRSwgc3RyaW5nOiB0cnVlIH0sXG4gICAgeyBrZXk6IG9hdXRoSW5mby5pbWFnZSwgZW5jOiBmYWxzZSwgdHlwZTogVHlwZURhdGFPYXV0aC5QUk9GSUxFLCBzdHJpbmc6IHRydWUgfSxcbiAgICB7IGtleTogb2F1dGhJbmZvLmxvY2FsZSwgZW5jOiBmYWxzZSwgdHlwZTogVHlwZURhdGFPYXV0aC5TRVRUSU5HUywgc3RyaW5nOiB0cnVlIH0sXG4gICAgeyBrZXk6IG9hdXRoSW5mby50aGVtZSwgZW5jOiBmYWxzZSwgdHlwZTogVHlwZURhdGFPYXV0aC5TRVRUSU5HUywgc3RyaW5nOiB0cnVlIH0sXG4gICAgeyBrZXk6IG9hdXRoSW5mby5zZXJ2ZXJfZGF0ZSwgZW5jOiBmYWxzZSwgdHlwZTogVHlwZURhdGFPYXV0aC5TRVRUSU5HUywgc3RyaW5nOiB0cnVlIH0sXG5dO1xuXG5leHBvcnQgaW50ZXJmYWNlIE9hdXRoSW5mb01vZGVsIHtcbiAgICBrZXk6IHN0cmluZztcbiAgICBlbmM6IGJvb2xlYW47XG4gICAgdHlwZTogVHlwZURhdGFPYXV0aDtcbiAgICBzdHJpbmc6IGJvb2xlYW47XG59XG4iXX0=