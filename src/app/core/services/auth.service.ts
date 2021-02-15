import { Injectable } from '@angular/core'
import { AngularFireAuth } from '@angular/fire/auth'
import { Router } from '@angular/router'
import { from, Observable, of } from 'rxjs'
import { map, switchMap, tap } from 'rxjs/operators'
import firebase from 'firebase/app'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser$: Observable<firebase.User> = this.auth.authState
  currentUser!: firebase.User;

  constructor (private router: Router, private auth: AngularFireAuth) {
    this.currentUser$
    .pipe(
      switchMap(user => {
        if (!user) {
          this.currentUser = null;
          return of(null);
        }
        return of(user)
      })
    )
    .subscribe(user => this.currentUser = user)
  }

  isLogged (): Observable<boolean> {
    return this.auth.authState.pipe(map(user => !!user))
  }

  signInWithGoogleAuthProvider (): Observable<any> {
    return from(
      this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    ).pipe(tap(() => this.router.navigateByUrl('/notes')))
  }

  signOut (): Observable<void> {
    return from(this.auth.signOut())
  }
}
