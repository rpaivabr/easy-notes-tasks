import { Injectable } from '@angular/core'
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from '@angular/fire/firestore'
import { from, Observable } from 'rxjs'
import { AuthService } from './auth.service'
import * as firebase from 'firebase/app'
import { Note } from 'src/app/shared/interface/note'

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  private collection: AngularFirestoreCollection<
    Note
  > = this.firestore.collection<Note>('notes', ref =>
    ref
      .where('email', '==', this.authService.currentUser.email)
      .orderBy('createdAt', 'desc')
  )
  private doc: AngularFirestoreDocument<Note>

  constructor (
    private authService: AuthService,
    private firestore: AngularFirestore
  ) {}

  getAllNotes (): Observable<Note[]> {
    return this.collection.valueChanges()
  }

  saveNote (note: Note): Observable<void> {
    note.email = this.authService.currentUser.email
    note.updatedAt = firebase.default.firestore.FieldValue.serverTimestamp()
    if (!note.uid) {
      note.uid = this.getUid()
      note.createdAt = note.updatedAt;
      this.doc = this.firestore.doc<any>(`notes/${note.uid}`)
      return from(this.doc.set(note))
    } else {
      this.doc = this.firestore.doc<any>(`notes/${note.uid}`)
      return from(this.doc.update(note))
    }
  }

  removeNote(id: string): Observable<void> {
    this.doc = this.firestore.doc<any>(`notes/${id}`);
    return from(this.doc.delete());
  }

  private getUid (): string {
    return this.firestore.createId()
  }
}
