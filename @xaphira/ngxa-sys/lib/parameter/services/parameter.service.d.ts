import { ParameterGroupModel, ParameterModel } from '../models/parameter.model';
import { LocaleModel } from '../../language/models/locale.model';
export declare class ParameterService {
    private parameter;
    private parameterGroup;
    private locales;
    getParameter(): ParameterModel;
    setParameter(parameter: ParameterModel): void;
    getParameterGroup(): ParameterGroupModel;
    setParameterGroup(parameterGroup: ParameterGroupModel): void;
    getLocales(): LocaleModel[];
    setLocales(locales: LocaleModel[]): void;
}
