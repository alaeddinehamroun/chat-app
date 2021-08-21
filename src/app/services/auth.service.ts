import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import * as moment from "moment";
import { Observable } from "rxjs";
import { shareReplay, tap } from 'rxjs/operators';
import { environment } from "src/environments/environment";
import { IUser } from "../models/user.model";

@Injectable({
    providedIn: 'root'
  })

export class AuthService {
    private SERVER_URL = environment.SERVER_URL;
    user!: IUser;

    constructor(private http: HttpClient){}

    login(email: string, passsword: string): Observable<any>{
        return this.http.post<any>(this.SERVER_URL + '/user/login',{email: email, password: passsword}).pipe(tap(res => this.setSession(res)),shareReplay())
    }
    
    register(username:string, email: string, passsword: string): Observable<any>{
        return this.http.post<any>(this.SERVER_URL + '/user/register',{username: username,email: email, password: passsword}).pipe(tap(res => this.setSession(res)),shareReplay())
    }

    private setSession(authResult: any) {

        const expiresAt = moment().add(authResult.expiresIn,'second');
        localStorage.setItem('id_token', authResult.token)
        localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()))

    }

    logout() {
        localStorage.removeItem("id_token");
        localStorage.removeItem("expires_at");
    }

    public isLoggedIn() {
        return moment().isBefore(this.getExpiration());
    }

    isLoggedOut() {
        return !this.isLoggedIn();
    }

    getExpiration() {
        const expiration = localStorage.getItem("expires_at");
        if(expiration){
            const expiresAt = JSON.parse(expiration);
            return moment(expiresAt);
        } else {
            return(0)
        }
    }    

    getUserInfos(): Observable<IUser>{
        return this.http.get<IUser>(this.SERVER_URL + '/user/')
    }

}