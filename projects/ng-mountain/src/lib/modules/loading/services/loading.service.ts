import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  isLoadingSource = new BehaviorSubject<boolean>(true);

  constructor() {
  }

  getIsLoading(): Observable<boolean> {
    return this.isLoadingSource.asObservable();
  }

  setIsLoading(loading: boolean): void {
    this.isLoadingSource.next(loading);
  }
}
