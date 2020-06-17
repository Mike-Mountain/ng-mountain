import {Injectable, Injector} from '@angular/core';
import {ConnectionPositionPair, Overlay, PositionStrategy} from '@angular/cdk/overlay';
import {NgmDialogConfig, NgmDialogParams} from "../models/ngm-dialog.model";
import {NgmDialogRef} from "../models/ngm-dialog-ref.class";
import {ComponentPortal, PortalInjector} from "@angular/cdk/portal";
import {NgmDialogComponent} from "../components/ngm-dialog/ngm-dialog.component";

@Injectable({
  providedIn: 'root'
})
export class NgmDialogService {

  constructor(private overlay: Overlay,
              private injector: Injector) {
  }

  public open<T>(params: NgmDialogParams<T>): NgmDialogRef {
    const overlayRef = this.overlay.create(this.getOverlayConfig(params));
    const dialogRef = new NgmDialogRef<T>(overlayRef, params.content, params.data, params?.config);
    const injector = this.createInjector(dialogRef, this.injector);

    dialogRef.isPositioned = overlayRef.getConfig().backdropClass === 'popover-backdrop';

    overlayRef.attach(new ComponentPortal(NgmDialogComponent, null, injector));

    return dialogRef;
  }

  private getOverlayConfig(params: NgmDialogParams): NgmDialogConfig {
    let positionStrategy: any = this.overlay.position().global().centerHorizontally().centerVertically();
    let backdropClass = 'dialog-backdrop';

    if (params.origin) {
      positionStrategy = this.getOverlayPosition(params.origin);
      backdropClass = 'popover-backdrop'
    }

    return new NgmDialogConfig({
      width: params.width,
      height: params.height,
      hasBackdrop: true,
      backdropClass: backdropClass,
      dialogClass: params?.config?.dialogClass,
      positionStrategy: positionStrategy,
      scrollStrategy: this.overlay.scrollStrategies.reposition()
    })
  }

  private getOverlayPosition(origin: HTMLElement): PositionStrategy {
    return this.overlay.position()
      .flexibleConnectedTo(origin)
      .withFlexibleDimensions()
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

  private createInjector(dialogRef: NgmDialogRef, injector: Injector): PortalInjector {
    const tokens = new WeakMap([[NgmDialogRef, dialogRef]]);
    return new PortalInjector(injector, tokens);
  }
}
