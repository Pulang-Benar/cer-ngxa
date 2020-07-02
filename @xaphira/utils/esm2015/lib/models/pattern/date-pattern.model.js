/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const DatePattern = {
    SLASH: '^(?:(?:31(\\/)(?:0?[13578]|1[02]))' +
        '\\1|(?:(?:29|30)(\\/)(?:0?[13-9]|1[0-2])' +
        '\\2))(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$|^(?:29(\\/)0?2' +
        '\\3(?:(?:(?:1[6-9]|[2-9]\\d)?(?:0[48]|[2468][048]|[13579][26])|' +
        '(?:(?:16|[2468][048]|[3579][26])00))))$|' +
        '^(?:0?[1-9]|1\\d|2[0-8])(\\/)(?:(?:0?[1-9])|(?:1[0-2]))' +
        '\\4(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$',
    DASH: '^(?:(?:31(-)(?:0?[13578]|1[02]))' +
        '\\1|(?:(?:29|30)(-)(?:0?[13-9]|1[0-2])' +
        '\\2))(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$|^(?:29(-)0?2' +
        '\\3(?:(?:(?:1[6-9]|[2-9]\\d)?(?:0[48]|[2468][048]|[13579][26])|' +
        '(?:(?:16|[2468][048]|[3579][26])00))))$|' +
        '^(?:0?[1-9]|1\\d|2[0-8])(-)(?:(?:0?[1-9])|(?:1[0-2]))' +
        '\\4(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$',
    DOT: '^(?:(?:31(\\.)(?:0?[13578]|1[02]))' +
        '\\1|(?:(?:29|30)(\\.)(?:0?[13-9]|1[0-2])' +
        '\\2))(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$|^(?:29(\\.)0?2' +
        '\\3(?:(?:(?:1[6-9]|[2-9]\\d)?(?:0[48]|[2468][048]|[13579][26])|' +
        '(?:(?:16|[2468][048]|[3579][26])00))))$|' +
        '^(?:0?[1-9]|1\\d|2[0-8])(\\.)(?:(?:0?[1-9])|(?:1[0-2]))' +
        '\\4(?:(?:1[6-9]|[2-9]\\d)?\\d{2})$',
};
export { DatePattern };
/** @enum {string} */
const DateFormat = {
    DATE: 'dd/MM/yyyy',
    DATETIME: 'dd/MM/yyyy HH:mm:ss.S',
};
export { DateFormat };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1wYXR0ZXJuLm1vZGVsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHhhcGhpcmEvdXRpbHMvIiwic291cmNlcyI6WyJsaWIvbW9kZWxzL3BhdHRlcm4vZGF0ZS1wYXR0ZXJuLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztJQUNJLE9BQVEsb0NBQW9DO1FBQ3BDLDBDQUEwQztRQUMxQyxxREFBcUQ7UUFDckQsaUVBQWlFO1FBQ2pFLDBDQUEwQztRQUMxQyx5REFBeUQ7UUFDekQsb0NBQW9DO0lBQzVDLE1BQU8sa0NBQWtDO1FBQ2pDLHdDQUF3QztRQUN4QyxtREFBbUQ7UUFDbkQsaUVBQWlFO1FBQ2pFLDBDQUEwQztRQUMxQyx1REFBdUQ7UUFDdkQsb0NBQW9DO0lBQzVDLEtBQU0sb0NBQW9DO1FBQ2xDLDBDQUEwQztRQUMxQyxxREFBcUQ7UUFDckQsaUVBQWlFO1FBQ2pFLDBDQUEwQztRQUMxQyx5REFBeUQ7UUFDekQsb0NBQW9DOzs7OztJQUl4QyxNQUFPLFlBQVk7SUFDbkIsVUFBVyx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZW51bSBEYXRlUGF0dGVybiB7XG4gICAgU0xBU0ggPSAnXig/Oig/OjMxKFxcXFwvKSg/OjA/WzEzNTc4XXwxWzAyXSkpJyArXG4gICAgICAgICAgICAnXFxcXDF8KD86KD86Mjl8MzApKFxcXFwvKSg/OjA/WzEzLTldfDFbMC0yXSknICtcbiAgICAgICAgICAgICdcXFxcMikpKD86KD86MVs2LTldfFsyLTldXFxcXGQpP1xcXFxkezJ9KSR8Xig/OjI5KFxcXFwvKTA/MicgK1xuICAgICAgICAgICAgJ1xcXFwzKD86KD86KD86MVs2LTldfFsyLTldXFxcXGQpPyg/OjBbNDhdfFsyNDY4XVswNDhdfFsxMzU3OV1bMjZdKXwnICtcbiAgICAgICAgICAgICcoPzooPzoxNnxbMjQ2OF1bMDQ4XXxbMzU3OV1bMjZdKTAwKSkpKSR8JyArXG4gICAgICAgICAgICAnXig/OjA/WzEtOV18MVxcXFxkfDJbMC04XSkoXFxcXC8pKD86KD86MD9bMS05XSl8KD86MVswLTJdKSknICtcbiAgICAgICAgICAgICdcXFxcNCg/Oig/OjFbNi05XXxbMi05XVxcXFxkKT9cXFxcZHsyfSkkJyxcbiAgICBEQVNIID0gJ14oPzooPzozMSgtKSg/OjA/WzEzNTc4XXwxWzAyXSkpJyArXG4gICAgICAgICAgICAnXFxcXDF8KD86KD86Mjl8MzApKC0pKD86MD9bMTMtOV18MVswLTJdKScgK1xuICAgICAgICAgICAgJ1xcXFwyKSkoPzooPzoxWzYtOV18WzItOV1cXFxcZCk/XFxcXGR7Mn0pJHxeKD86MjkoLSkwPzInICtcbiAgICAgICAgICAgICdcXFxcMyg/Oig/Oig/OjFbNi05XXxbMi05XVxcXFxkKT8oPzowWzQ4XXxbMjQ2OF1bMDQ4XXxbMTM1NzldWzI2XSl8JyArXG4gICAgICAgICAgICAnKD86KD86MTZ8WzI0NjhdWzA0OF18WzM1NzldWzI2XSkwMCkpKSkkfCcgK1xuICAgICAgICAgICAgJ14oPzowP1sxLTldfDFcXFxcZHwyWzAtOF0pKC0pKD86KD86MD9bMS05XSl8KD86MVswLTJdKSknICtcbiAgICAgICAgICAgICdcXFxcNCg/Oig/OjFbNi05XXxbMi05XVxcXFxkKT9cXFxcZHsyfSkkJyxcbiAgICBET1QgPSAnXig/Oig/OjMxKFxcXFwuKSg/OjA/WzEzNTc4XXwxWzAyXSkpJyArXG4gICAgICAgICAgICAnXFxcXDF8KD86KD86Mjl8MzApKFxcXFwuKSg/OjA/WzEzLTldfDFbMC0yXSknICtcbiAgICAgICAgICAgICdcXFxcMikpKD86KD86MVs2LTldfFsyLTldXFxcXGQpP1xcXFxkezJ9KSR8Xig/OjI5KFxcXFwuKTA/MicgK1xuICAgICAgICAgICAgJ1xcXFwzKD86KD86KD86MVs2LTldfFsyLTldXFxcXGQpPyg/OjBbNDhdfFsyNDY4XVswNDhdfFsxMzU3OV1bMjZdKXwnICtcbiAgICAgICAgICAgICcoPzooPzoxNnxbMjQ2OF1bMDQ4XXxbMzU3OV1bMjZdKTAwKSkpKSR8JyArXG4gICAgICAgICAgICAnXig/OjA/WzEtOV18MVxcXFxkfDJbMC04XSkoXFxcXC4pKD86KD86MD9bMS05XSl8KD86MVswLTJdKSknICtcbiAgICAgICAgICAgICdcXFxcNCg/Oig/OjFbNi05XXxbMi05XVxcXFxkKT9cXFxcZHsyfSkkJyxcbn1cblxuZXhwb3J0IGVudW0gRGF0ZUZvcm1hdCB7XG4gICAgICAgIERBVEUgPSAnZGQvTU0veXl5eScsXG4gICAgICAgIERBVEVUSU1FID0gJ2RkL01NL3l5eXkgSEg6bW06c3MuUycsXG59XG4iXX0=