import { Injectable } from '@angular/core';
import { ParameterGroupModel, ParameterModel } from '../models/parameter.model';

@Injectable()
export class ParameterService {

    private parameter: ParameterModel;
    private parameterGroup: ParameterGroupModel;

    public getParameter(): ParameterModel {
        return this.parameter;
    }

    public setParameter(parameter: ParameterModel) {
        this.parameter = parameter;
    }

    public getParameterGroup(): ParameterGroupModel {
        return this.parameterGroup;
    }

    public setParameterGroup(parameterGroup: ParameterGroupModel) {
        this.parameterGroup = parameterGroup;
    }

}
