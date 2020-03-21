import { Component, OnInit, Injector, OnDestroy, Inject } from '@angular/core';
import { BaseFormComponent } from '@xaphira/ngxa-common';
import { Router, ActivatedRoute } from '@angular/router';
import { ParameterService } from '../../services/parameter.service';
import { ParameterModel } from '../../models/parameter.model';

@Component({
  selector: 'xa-parameter-do-detail-page',
  styleUrls: ['./parameter-do-detail.component.scss'],
  templateUrl: './parameter-do-detail.component.html',
})
export class ParameterDoDetailPageComponent extends BaseFormComponent<any> implements OnInit, OnDestroy {

  public action: 'Add' | 'Edit' = 'Add';
  public parameter: ParameterModel = new ParameterModel();

  constructor(public injector: Injector,
    private router: Router,
    private parameterService: ParameterService,
    private route: ActivatedRoute) {
    super(injector,
      {
        'parameterCode': [],
        'parameterValue': [],
      });
    this.action = (this.route.snapshot.params['action'] === 'edit') ? 'Edit' : 'Add';
    if (this.parameterService.getParameter()) {
      this.parameter = this.parameterService.getParameter();
      this.formGroup.get('parameterCode').setValue(this.parameter.parameterCode);
      this.formGroup.get('parameterCode').disable({emitEvent: true});
      this.formGroup.get('parameterValue').setValue(this.parameter.parameterValue);
    } else {
      if (this.action === 'Edit') this.router.navigate(['/app/sysconf/parameter']);
    }
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {}

  onReset(): void {
    this.router.navigate(['/app/sysconf/parameter/detail']);
  }

}
