import { NgModule } from '@angular/core'
import { SharedModule } from '../../shared/shared.module'
import { TasksComponent } from './tasks.component';
import { TasksListComponent } from './pages/tasks-list/tasks-list.component'
import { TasksRoutingModule } from './tasks-routing.module';
import { DialogComponent } from './components/dialog/dialog.component';

@NgModule({
  declarations: [TasksComponent, TasksListComponent, DialogComponent],
  imports: [SharedModule, TasksRoutingModule]
})
export class TasksModule {}