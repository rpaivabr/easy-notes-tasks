import { Injectable } from '@angular/core'
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from '@angular/fire/firestore'
import { from, Observable } from 'rxjs'
import { AuthService } from './auth.service'
import * as firebase from 'firebase/app'
import { Task } from 'src/app/shared/interface/task'

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private collection: AngularFirestoreCollection<
    Task
  > = this.firestore.collection<Task>('tasks', ref =>
    ref
      .where('email', '==', this.authService.currentUser.email)
      .orderBy('createdAt', 'desc')
  )
  private doc: AngularFirestoreDocument<Task>

  constructor (
    private authService: AuthService,
    private firestore: AngularFirestore
  ) {}

  getAllTasks (): Observable<Task[]> {
    return this.collection.valueChanges();
  }

  saveTask (task: Task): Observable<void> {
    task.email = this.authService.currentUser.email
    task.updatedAt = firebase.default.firestore.FieldValue.serverTimestamp()
    if (!task.uid) {
      task.uid = this.getUid()
      task.done = false
      task.createdAt = task.updatedAt;
      this.doc = this.firestore.doc<any>(`tasks/${task.uid}`)
      return from(this.doc.set(task))
    } else {
      this.doc = this.firestore.doc<any>(`tasks/${task.uid}`)
      return from(this.doc.update(task))
    }
  }

  removeTask(id: string): Observable<void> {
    this.doc = this.firestore.doc<any>(`tasks/${id}`);
    return from(this.doc.delete());
  }

  private getUid (): string {
    return this.firestore.createId()
  }
}
