import { Injectable } from '@angular/core'
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from '@angular/fire/firestore'
import { from, Observable, of } from 'rxjs'
import { AuthService } from './auth.service'
import * as firebase from 'firebase/app'
import { Task } from 'src/app/shared/interface/task'
import { switchMap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private collection!: AngularFirestoreCollection<Task>
  private doc!: AngularFirestoreDocument<Task>
  private currentUserEmail!: string;

  constructor (
    private authService: AuthService,
    private firestore: AngularFirestore
  ) {}

  getAllTasks (): Observable<Task[]> {
    return this.authService.currentUser$.pipe(
      switchMap(user => {
        if (!user) {
          return of([])
        }
        this.currentUserEmail = user.email;
        this.collection = this.firestore.collection<Task>('tasks', ref =>
          ref.where('email', '==', user.email).orderBy('createdAt', 'desc')
        )
        return this.collection.valueChanges()
      })
    )
  }

  saveTask (task: Task): Observable<void> {
    task.email = this.currentUserEmail
    task.updatedAt = firebase.default.firestore.FieldValue.serverTimestamp()
    if (!task.uid) {
      task.uid = this.getUid()
      task.done = false
      task.createdAt = task.updatedAt
      this.doc = this.firestore.doc<any>(`tasks/${task.uid}`)
      return from(this.doc.set(task))
    } else {
      this.doc = this.firestore.doc<any>(`tasks/${task.uid}`)
      return from(this.doc.update(task))
    }
  }

  removeTask (id: string): Observable<void> {
    this.doc = this.firestore.doc<any>(`tasks/${id}`)
    return from(this.doc.delete())
  }

  private getUid (): string {
    return this.firestore.createId()
  }
}
