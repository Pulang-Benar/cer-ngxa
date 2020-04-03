import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { LeafletModel } from '@xaphira/ngxa-common';
import { PANIC, PanicFactoryService } from '@xaphira/shared';
import { PanicService } from '../../services/panic.service';

@Component({
  selector: 'xa-cer-monitoring',
  styleUrls: ['./ngxa-cer-monitoring-page.component.scss'],
  templateUrl: './ngxa-cer-monitoring-page.component.html',
})
export class NgxaCerMonitoringPageComponent implements OnInit, OnDestroy {

  public showDetail: boolean = false;
  public markers: LeafletModel;
  public markerSelected: LeafletModel = new LeafletModel();
  private destroy$: Subject<void> = new Subject<void>();

  constructor(@Inject(PANIC) private panicService: PanicFactoryService) {
    this.panicService.onCheckPanic()
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.getAllPanicStorage();
    });
  }

  ngOnInit(): void {
    this.getAllPanicStorage();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private getAllPanicStorage(): void {
    this.panicService.getAllPanic().subscribe((values: any[]) => {
      values.forEach((data: any) => {
        this.markers = {
          markers: [
            [ data['latestLatitude'], data['latestLongitude'] ],
          ],
          title: data['name'],
          alt: data['panicCode'],
          className: 'pulse',
        };
      });
    });
  }

  public onMarker(data: LeafletModel): void {
    this.markerSelected = data;
    this.showDetail = true;
  }

  public onToggleDetail(showDetail: boolean): void {
    this.showDetail = showDetail;
  }

}
