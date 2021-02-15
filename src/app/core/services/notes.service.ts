import { Injectable } from '@angular/core'
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from '@angular/fire/firestore'
import { from, Observable, of } from 'rxjs'
import { AuthService } from './auth.service'
import * as firebase from 'firebase/app'
import { Note } from 'src/app/shared/interface/note'
import { switchMap, tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  private collection!: AngularFirestoreCollection<Note>
  private doc!: AngularFirestoreDocument<Note>
  private currentUserEmail!: string

  constructor (
    private authService: AuthService,
    private firestore: AngularFirestore
  ) {}

  getAllNotes (): Observable<Note[]> {
    return this.authService.currentUser$.pipe(
      switchMap(user => {
        if (!user) {
          return of([])
        }
        this.currentUserEmail = user.email
        this.collection = this.firestore.collection<Note>('notes', ref =>
          ref.where('email', '==', user.email).orderBy('createdAt', 'desc')
        )
        return this.collection.valueChanges()
      })
    )
  }

  saveNote (note: Note): Observable<void> {
    note.email = this.currentUserEmail
    note.updatedAt = firebase.default.firestore.FieldValue.serverTimestamp()
    if (!note.uid) {
      note.uid = this.getUid()
      note.createdAt = note.updatedAt
      this.doc = this.firestore.doc<any>(`notes/${note.uid}`)
      return from(this.doc.set(note))
    } else {
      this.doc = this.firestore.doc<any>(`notes/${note.uid}`)
      return from(this.doc.update(note))
    }
  }

  removeNote (id: string): Observable<void> {
    this.doc = this.firestore.doc<any>(`notes/${id}`)
    return from(this.doc.delete())
  }

  private getUid (): string {
    return this.firestore.createId()
  }
}
