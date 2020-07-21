import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NgmHttpService<T> {

  _apiUrl: string;

  constructor(protected http: HttpClient) {
  }

  setUrl(partial?: string): string {
    return `${this._apiUrl}/${partial}`
  }

  setHeaders(headers: {}): HttpHeaders {
    return new HttpHeaders(headers);
  }

  _get(url: string, headers?: HttpHeaders): Observable<T> {
    return this.http.get<T>(url, {headers});
  }

  _put(url: string, item: T, headers?: HttpHeaders): Observable<T> {
    return this.http.put<T>(url, item, {headers});
  }

  _post(url: string, item: T, headers?: HttpHeaders): Observable<T> {
    return this.http.post<T>(url, item, {headers});
  }

  _delete(url: string): Observable<any> {
    return this.http.delete<T>(url);
  }
}
