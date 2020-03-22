import { Component, OnInit, Injector, OnDestroy, Inject } from '@angular/core';
import { BaseFormComponent, CheckboxModel } from '@xaphira/ngxa-common';
import { Router } from '@angular/router';

@Component({
  selector: 'xa-parameter-add-group-page',
  styleUrls: ['./parameter-add-group.component.scss'],
  templateUrl: './parameter-add-group.component.html',
})
export class ParameterAddGroupPageComponent extends BaseFormComponent<any> implements OnInit, OnDestroy {

  constructor(public injector: Injector, private router: Router) {
    super(injector,
      {
        'parameterGroupCode': [],
        'parameterGroupName': [],
      });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {}

  onReset(): void {
    this.router.navigate(['/app/sysconf/parameter']);
  }

}
