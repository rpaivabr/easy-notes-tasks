import { Component, OnInit, ViewChild } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { MatMenuTrigger } from '@angular/material/menu'
import { Observable } from 'rxjs'
import { TasksService } from 'src/app/core/services/tasks.service'
import { Task } from 'src/app/shared/interface/task'
import { DialogTasksComponent } from '../../components/dialog-tasks/dialog-tasks.component'

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss']
})
export class TasksListComponent implements OnInit {
  tasks$: Observable<Task[]>
  @ViewChild('matMenuTrigger') matMenuTrigger: MatMenuTrigger

  constructor (private tasksService: TasksService, public dialog: MatDialog) {}

  ngOnInit (): void {
    this.tasks$ = this.tasksService.getAllTasks()
  }

  openDialog (task = null): void {
    const dialogRef = this.dialog.open(DialogTasksComponent, {
      width: '250px',
      data: { ...task }
    })

    dialogRef.afterClosed().subscribe((t: Task) => {
      if (t) {
        this.addTask(t)
      }
    })
  }

  updateDone (task: Task) {
    const updatedTask = { ...task, done: !task.done }
    this.addTask(updatedTask)
  }

  private addTask (task: Task) {
    this.tasksService.saveTask(task).subscribe()
  }
}
