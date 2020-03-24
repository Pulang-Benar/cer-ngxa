import { Component, OnInit, Injector, OnDestroy, Inject } from '@angular/core';
import { BaseFormComponent } from '@xaphira/ngxa-common';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiBaseResponse, ResponseCode } from '@xaphira/shared';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'xa-parameter-add-group-page',
  styleUrls: ['./parameter-add-group-page.component.scss'],
  templateUrl: './parameter-add-group-page.component.html',
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

  onSubmit(): void {
    (super.onSubmit(this.formGroup.value, 'master', 'post-parameter-group')  as Observable<ApiBaseResponse>)
      .pipe(takeUntil(this.destroy$))
      .subscribe(response => {
        if (response.respStatusCode === ResponseCode.OK_SCR009.toString()) {
          this.router.navigate(['/app/sysconf/parameter']);
        }
      });
  }

}
