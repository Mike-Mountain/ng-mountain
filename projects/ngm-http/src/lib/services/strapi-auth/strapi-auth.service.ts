import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {NgmHttpService} from "../http-service/ngm-http.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StrapiAuthService extends NgmHttpService<any> {

  constructor(protected http: HttpClient) {
    super(http);
  }

  // TODO: Set up provider login (google, github, etc)

  public login(identifier: string, password: string): Observable<any> {
    const url = super.setUrl('auth/local');
    return super._post(url, {identifier, password});
  }


  public register(newUser: {email: string, username: string, password: string}): Observable<any> {
    const url = super.setUrl('auth/local/register');
    return super._post(url, newUser);
  }

  public validateUser(email: string): Observable<string> {
    const url = super.setUrl('auth/send-email-confirmation');
    return super._post(url, {email});
  }

  public forgotPassword(email: string): Observable<string> {
    const url = super.setUrl('auth/forgot-password');
    return super._post(url, {email});
  }

  public resetPassword(password: {code: string, password: string, passwordConfirm: string}): Observable<string> {
    const url = super.setUrl('auth/reset-password');
    return super._post(url, password);
  }
}
