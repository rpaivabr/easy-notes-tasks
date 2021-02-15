import { Injectable } from '@angular/core'
import { AngularFireAuth } from '@angular/fire/auth'
import { Router } from '@angular/router'
import { from, Observable } from 'rxjs'
import { map, tap } from 'rxjs/operators'
import firebase from 'firebase/app'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser$: Observable<firebase.User> = this.auth.authState

  constructor (private router: Router, private auth: AngularFireAuth) {}

  isLogged (): Observable<boolean> {
    return this.currentUser$.pipe(map(user => !!user))
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
