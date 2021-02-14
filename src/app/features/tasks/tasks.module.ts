import { NgModule } from '@angular/core'
import { SharedModule } from '../../shared/shared.module'
import { TasksComponent } from './tasks.component'

@NgModule({
  declarations: [TasksComponent],
  imports: [SharedModule]
})
export class TasksModule {}