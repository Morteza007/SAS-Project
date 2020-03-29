import {Subject} from 'rxjs/Subject';
import {Router} from '@angular/router'
import {User} from './user.model'
import { AuthData } from './auth-data.model';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService{

    constructor(private router: Router){
        
    }
    authChange = new Subject<boolean>();
    private user: User;

    registerUser(authData: AuthData){
        this.user = {
            userName: authData.userName,
            userID: Math.round(Math.random()*10000).toString(),
            password: "12345678"
        };
        this.authChange.next(true);
        this.router.navigate(['/']);
    }

    login(authData: AuthData){
        this.user = {
            userName: authData.userName,
            userID: Math.round(Math.random()*10000).toString(),
            password: "12345678"
        };
        this.authChange.next(true);
        this.router.navigate(['/']);
    }

    logout(){
        this.user = null;
        this.authChange.next(false);
        this.router.navigate(['/login']);
    }

    getUser(){
        return {...this.user};
    }

    isAuth(){
        return this.user != null;
    }
}