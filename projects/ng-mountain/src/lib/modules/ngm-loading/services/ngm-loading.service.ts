import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {NgmDialogConfig} from "../../ngm-dialog/models/ngm-dialog.model";

@Injectable({
  providedIn: 'root'
})
export class NgmLoadingService {

  public get dialogConfig(): NgmDialogConfig {
    return this._dialogConfig;
  }

  public set dialogConfig(value: NgmDialogConfig) {
    this._dialogConfig = value;
  }

  private _dialogConfig: NgmDialogConfig = new NgmDialogConfig({});
  private isLoadingSource = new BehaviorSubject<boolean>(undefined);

  constructor() {
  }

  getIsLoading(): Observable<boolean> {
    return this.isLoadingSource.asObservable();
  }

  setIsLoading(loading: boolean): void {
    this.isLoadingSource.next(loading);
  }
}
