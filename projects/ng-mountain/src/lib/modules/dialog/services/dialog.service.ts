import {Injectable, Injector} from '@angular/core';
import {ConnectionPositionPair, Overlay, OverlayConfig, PositionStrategy} from '@angular/cdk/overlay';
import {DialogParams} from "../models/dialog.model";
import {DialogRef} from "../models/dialog-ref.class";
import {ComponentPortal, PortalInjector} from "@angular/cdk/portal";
import {DialogComponent} from "../components/dialog/dialog.component";

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private overlay: Overlay,
              private injector: Injector) {
  }

  public open<T>(params: DialogParams<T>): DialogRef {
    const overlayRef = this.overlay.create(this.getOverlayConfig(params));
    const dialogRef = new DialogRef<T>(overlayRef, params.content, params.data);
    const injector = this.createInjector(dialogRef, this.injector);

    dialogRef.isPositioned = overlayRef.getConfig().backdropClass === 'popover-backdrop';

    overlayRef.attach(new ComponentPortal(DialogComponent, null, injector));

    return dialogRef;
  }

  private getOverlayConfig(params: DialogParams): OverlayConfig {
    let positionStrategy: any = this.overlay.position().global().centerHorizontally().centerVertically();
    let backdropClass = 'dialog-backdrop';

    if (params.origin) {
      positionStrategy = this.getOverlayPosition(params.origin);
      backdropClass = 'popover-backdrop'
    }

    return new OverlayConfig({
      width: params.width,
      height: params.height,
      hasBackdrop: true,
      backdropClass: backdropClass,
      positionStrategy: positionStrategy,
      scrollStrategy: this.overlay.scrollStrategies.reposition()
    })
  }

  private getOverlayPosition(origin: HTMLElement): PositionStrategy {
    return this.overlay.position()
      .flexibleConnectedTo(origin)
      .withPositions(this.getPositions())
      .withPush()
  }

  private getPositions(): ConnectionPositionPair[] {
    return [
      {
        originX: 'center',
        originY: 'top',
        overlayX: 'center',
        overlayY: 'bottom'
      },
      {
        originX: 'center',
        originY: 'bottom',
        overlayX: 'center',
        overlayY: 'top',
      },
    ];
  }

  private createInjector(dialogRef: DialogRef, injector: Injector): PortalInjector {
    const tokens = new WeakMap([[DialogRef, dialogRef]]);
    return new PortalInjector(injector, tokens);
  }
}
