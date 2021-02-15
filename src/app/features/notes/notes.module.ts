import { NgModule } from '@angular/core'
import { SharedModule } from '../../shared/shared.module'
import { NotesComponent } from './notes.component';
import { NotesListComponent } from './pages/notes-list/notes-list.component'
import { NotesRoutingModule } from './notes-routing.module';
import { NoteComponent } from './components/note/note.component';
import { DialogNotesComponent } from './components/dialog-notes/dialog-notes.component';

@NgModule({
  declarations: [NotesComponent, NotesListComponent, NoteComponent, DialogNotesComponent],
  imports: [SharedModule, NotesRoutingModule]
})
export class NotesModule {}
