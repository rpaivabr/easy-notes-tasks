import { Component, OnInit } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { Observable } from 'rxjs'
import { NotesService } from 'src/app/core/services/notes.service'
import { Note } from 'src/app/shared/interface/note'
import { DialogNotesComponent } from '../../components/dialog-notes/dialog-notes.component'

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss']
})
export class NotesListComponent implements OnInit {
  notes$: Observable<Note[]>

  constructor (private notesService: NotesService, public dialog: MatDialog) {}

  ngOnInit (): void {
    this.notes$ = this.notesService.getAllNotes()
  }

  openDialog (note = null): void {
    const dialogRef = this.dialog.open(DialogNotesComponent, {
      width: '250px',
      data: { ...note }
    })

    dialogRef.afterClosed().subscribe((n: Note) => {
      if (n) {
        this.addNote(n)
      }
    })
  }

  private addNote (note: Note) {
    this.notesService.saveNote(note).subscribe()
  }
}
