import {Subject} from "rxjs";
import {DialogCloseEvent, DialogConfig, DialogContent} from "./dialog.model";
import {OverlayRef} from "@angular/cdk/overlay";

export class DialogRef<T = any> {

  private afterClosedSource = new Subject<DialogCloseEvent<T>>();
  public afterClosed$ = this.afterClosedSource.asObservable();
  public isPositioned: boolean;

  constructor(public overlay: OverlayRef,
              public content: DialogContent,
              public data: T,
              public config: DialogConfig) {
    overlay.backdropClick().subscribe(() => this._close('backdropClick', data));
  }

  public close(data?: T): void {
    this._close('close', data);
  }

  private _close(type: 'backdropClick' | 'close', data: T): void {
    this.overlay.dispose();
    this.afterClosedSource.next({
      type,
      data
    });
    this.afterClosedSource.complete();
  }
}
