import {TemplateRef, Type} from "@angular/core";

export interface DialogParams<T = any> {
  origin?: HTMLElement;
  content?: any; // PopoverContent
  data?: T;
  width?: string | number;
  height?: string | number;
}

export interface DialogCloseEvent<T> {
  type: 'backdropClick' | 'close';
  data: T;
}

export type DialogContent = TemplateRef<any> | Type<any> | string;
