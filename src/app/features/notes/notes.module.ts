import { NgModule } from '@angular/core'
import { SharedModule } from '../../shared/shared.module'
import { NotesComponent } from './notes.component'

@NgModule({
  declarations: [NotesComponent],
  imports: [SharedModule]
})
export class NotesModule {}
