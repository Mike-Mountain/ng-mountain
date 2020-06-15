import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {DialogConfig} from "../../dialog/models/dialog.model";

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  public get dialogConfig(): DialogConfig {
    return this._dialogConfig;
  }

  public set dialogConfig(value: DialogConfig) {
    this._dialogConfig = value;
  }

  private _dialogConfig: DialogConfig = new DialogConfig({});
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
