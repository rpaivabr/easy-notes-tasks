import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { TasksComponent } from './tasks.component'
import { TasksListComponent } from './pages/tasks-list/tasks-list.component'

const routes: Routes = [
  { path: '', component: TasksComponent, children: [
    { path: '', component: TasksListComponent }
  ] },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule {}
