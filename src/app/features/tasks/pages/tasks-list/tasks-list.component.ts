import { Component, OnInit, ViewChild } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { MatMenuTrigger } from '@angular/material/menu'
import { Observable } from 'rxjs'
import { TasksService } from 'src/app/core/services/tasks.service'
import { DialogComponent } from 'src/app/features/tasks/components/dialog/dialog.component'
import { Task } from 'src/app/shared/interface/task'

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
    this.tasks$.subscribe(tasks => console.log(tasks))
  }

  openDialog (task = null): void {
    console.log(task)
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: { ...task }
    })

    dialogRef.afterClosed().subscribe((task: Task) => {
      if (task) {
        this.addTask(task)
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
