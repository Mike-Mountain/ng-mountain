import {TemplateRef, Type} from "@angular/core";
import {OverlayConfig} from "@angular/cdk/overlay";

export interface NgmDialogParams<T = any> {
  origin?: HTMLElement;
  content?: any; // PopoverContent
  config?: NgmDialogConfig;
  data?: T;
  width?: string | number;
  height?: string | number;
}

export interface NgmDialogCloseEvent<T> {
  type: 'backdropClick' | 'close';
  data: T;
}

export type NgmDialogContent = TemplateRef<any> | Type<any> | string;

export class NgmDialogConfig extends OverlayConfig {
  dialogClass?: string;

  constructor(params: Partial<NgmDialogConfig>) {
    super(params);
    this.dialogClass = params?.dialogClass ?? '';
  }
}
