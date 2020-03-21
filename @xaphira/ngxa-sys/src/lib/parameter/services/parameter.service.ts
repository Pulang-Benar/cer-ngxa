import { Injectable } from '@angular/core';
import { ParameterGroupModel } from '../models/parameter-group.model';

@Injectable()
export class ParameterService {

    private parameterGroup: ParameterGroupModel;

    public getParameterGroup(): ParameterGroupModel {
        return this.parameterGroup;
    }

    public setParameterGroup(value: ParameterGroupModel) {
        this.parameterGroup = value;
    }

}
