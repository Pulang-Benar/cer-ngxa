import { EventEmitter, OnChanges, TemplateRef } from '@angular/core';
import { TreeNode } from './tree-node.model';
export declare class NgxaTreeNodeComponent implements OnChanges {
    label: string;
    model: any;
    node: TreeNode;
    children: any[];
    disabled: boolean;
    expandable: boolean;
    expanded: boolean;
    selectable: boolean;
    template: TemplateRef<any>;
    icons: {
        collapse: string;
        expand: string;
    };
    activate: EventEmitter<{}>;
    deactivate: EventEmitter<{}>;
    selectNode: EventEmitter<{}>;
    select: EventEmitter<{}>;
    expand: EventEmitter<{}>;
    collapse: EventEmitter<{}>;
    data: any;
    ngOnChanges(): void;
    onExpandClick(): void;
    onClick(event: any): void;
}
