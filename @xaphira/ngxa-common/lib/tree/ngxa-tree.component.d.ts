import { EventEmitter, TemplateRef, QueryList, ChangeDetectorRef, OnDestroy, AfterContentInit } from '@angular/core';
import { NgxaTreeNodeComponent } from './ngxa-tree-node.component';
import { TreeNode } from './tree-node.model';
export declare class NgxaTreeComponent implements AfterContentInit, OnDestroy {
    private readonly _cdr;
    nodes: TreeNode[];
    _templateInput: TemplateRef<any>;
    icons: {
        collapse: string;
        expand: string;
    };
    _templateQuery: TemplateRef<any>;
    readonly nodeElms: QueryList<NgxaTreeNodeComponent>;
    expand: EventEmitter<{}>;
    collapse: EventEmitter<{}>;
    activate: EventEmitter<{}>;
    deactivate: EventEmitter<{}>;
    selectNode: EventEmitter<{}>;
    readonly hasOneLeaf: boolean;
    readonly template: TemplateRef<any>;
    private readonly _destroy$;
    constructor(_cdr: ChangeDetectorRef);
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
}
