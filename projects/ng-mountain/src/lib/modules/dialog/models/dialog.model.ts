import {TemplateRef, Type} from "@angular/core";
import {OverlayConfig} from "@angular/cdk/overlay";

export interface DialogParams<T = any> {
  origin?: HTMLElement;
  content?: any; // PopoverContent
  config?: DialogConfig;
  data?: T;
  width?: string | number;
  height?: string | number;
}

export interface DialogCloseEvent<T> {
  type: 'backdropClick' | 'close';
  data: T;
}

export type DialogContent = TemplateRef<any> | Type<any> | string;

export class DialogConfig extends OverlayConfig {
  dialogClass?: string;

  constructor(params: Partial<DialogConfig>) {
    super(params);
    this.dialogClass = params?.dialogClass ?? '';
  }
}
