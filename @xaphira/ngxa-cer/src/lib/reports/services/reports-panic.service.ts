import { Injectable } from '@angular/core';

@Injectable()
export class ReportsPanicService {

    private reports: any;

    public getReports(): any {
        return this.reports;
    }

    public setReports(reports: any) {
        this.reports = reports;
    }

}
