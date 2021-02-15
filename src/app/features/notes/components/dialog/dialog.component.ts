import { Component, Inject } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { NotesService } from 'src/app/core/services/notes.service';
import { Color } from 'src/app/shared/enums/color.enum';
import { Note } from 'src/app/shared/interface/note';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  Color = Color;
  noteForm!: FormGroup;
  colors = [
    { value: 'grey', text: 'Grey' },
    { value: 'green', text: 'Green' },
    { value: 'yellow', text: 'Yellow' },
    { value: 'pink', text: 'Pink' },
    { value: 'blue', text: 'Blue' },
  ]

  // grey = '#CEE2D7',
  // green = '#73CAC4',
  // yellow = '#FFF9A5',
  // pink = '#F9B8BC',
  // blue = '#B0CDEB',

  constructor (
    private notesService: NotesService,
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Note
  ) {
    const { uid, title, text, color } = data;
    this.noteForm = new FormGroup({
      uid: new FormControl(''),
      title: new FormControl(''),
      text: new FormControl(''),
      color: new FormControl(''),
    })
    this.noteForm.patchValue({ uid, title, text, color })
  }

  delete (): void {
    const { uid } = this.noteForm.value;
    this.notesService.removeNote(uid).subscribe()
    this.dialogRef.close()
  }
}
