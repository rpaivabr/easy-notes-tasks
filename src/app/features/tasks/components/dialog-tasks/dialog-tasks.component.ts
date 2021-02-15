import { Component, Inject } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { TasksService } from 'src/app/core/services/tasks.service';
import { Note } from 'src/app/shared/interface/note';

@Component({
  selector: 'app-dialog-tasks',
  templateUrl: './dialog-tasks.component.html',
  styleUrls: ['./dialog-tasks.component.scss']
})
export class DialogTasksComponent {
  taskForm!: FormGroup;

  constructor (
    private tasksService: TasksService,
    public dialogRef: MatDialogRef<DialogTasksComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Note
  ) {
    const { uid, title } = data;
    this.taskForm = new FormGroup({
      uid: new FormControl(''),
      title: new FormControl(''),
    })
    this.taskForm.patchValue({ uid, title })
  }

  delete (): void {
    const { uid } = this.taskForm.value;
    this.tasksService.removeTask(uid).subscribe()
    this.dialogRef.close()
  }
}
