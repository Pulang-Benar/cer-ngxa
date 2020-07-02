import { LocaleModel } from '../models/locale.model';
export declare class LanguageService {
    private locale;
    getLocale(): LocaleModel;
    setLocale(locale: LocaleModel): void;
}
