import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { UserStatus } from '../constants/user_status.enum';
import { FakeDb } from '../db/fakeDb';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  /**
   * Sign in a user
   * @param username 
   * @param password 
   * @returns 
   */
  signIn(username: string, password: string): Observable<User | any> {
    let users: User[] = FakeDb.users.filter(user => user.email === username && user.password === password);
    if (users.length) {
      let user: User = users[0];
      if (user.status === UserStatus.INACTIVE)
        return throwError(() => new Error('User is inactive'));
      if (user.status === UserStatus.BLOCKED)
        return throwError(() => new Error('User is blocked'));

      return of(user);
    }
    return throwError(() => new Error('Login failed'));
  }


  /**
   * Registers a user
   * @param user 
   */
  signUp(user: User): void { }

  /**
   * Sign out
   */
  signOut(): void {
    localStorage.removeItem('userInfo');
    localStorage.removeItem('token');
  }


  /**
   * Set user information in local storage
   */
  set UserInfo(user: User) {
    localStorage.setItem('userInfo', JSON.stringify(user));
  }


  /**
   * Get user information in local storage
   */
  get UserInfo(): User {
    return JSON.parse(localStorage.getItem('userInfo') as string) as User;
  }

  /**
   * Check if logged in
   * @returns boolean
   */
  isLoggedIn(): boolean {
    return (this.UserInfo?.id) ? true : false;
  }

  /**
   * Set bearer token in local
   */
  set Token(token: string) {
    localStorage.setItem('token', JSON.stringify(token));
  }

  /**
   * Get bearer token in local storage
   */
  get Token(): string {
    return JSON.parse(localStorage.getItem('token') as string);
  }



}
