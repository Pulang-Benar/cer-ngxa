import { OnInit } from '@angular/core';
import { APIModel, HttpFactoryService } from '@xaphira/shared';
import { DomSanitizer } from '@angular/platform-browser';
export declare class NgxaCerMonitoringPreviewComponent implements OnInit {
    private apiPath;
    private httpBaseService;
    sanitizer: DomSanitizer;
    url: any;
    checksum: any;
    user: any;
    fileType: any;
    constructor(apiPath: APIModel, httpBaseService: HttpFactoryService, sanitizer: DomSanitizer);
    ngOnInit(): void;
    private getEvidence;
}
