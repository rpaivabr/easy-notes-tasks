import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { NotesListComponent } from './pages/notes-list/notes-list.component'
import { NotesComponent } from './notes.component'

const routes: Routes = [
  { path: '', component: NotesComponent, children: [
    { path: '', component: NotesListComponent }
  ] },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotesRoutingModule {}
