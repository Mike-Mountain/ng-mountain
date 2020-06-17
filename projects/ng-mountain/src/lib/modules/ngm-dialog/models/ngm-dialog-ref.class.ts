import {Subject} from "rxjs";
import {NgmDialogCloseEvent, NgmDialogConfig, NgmDialogContent} from "./ngm-dialog.model";
import {OverlayRef} from "@angular/cdk/overlay";

export class NgmDialogRef<T = any> {

  private afterClosedSource = new Subject<NgmDialogCloseEvent<T>>();
  public afterClosed$ = this.afterClosedSource.asObservable();
  public isPositioned: boolean;

  constructor(public overlay: OverlayRef,
              public content: NgmDialogContent,
              public data: T,
              public config: NgmDialogConfig) {
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
