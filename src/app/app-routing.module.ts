import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AuthGuard } from './core/guards/auth.guard'
import { HomeComponent } from './shared/layout/pages/home/home.component'
import { NotFoundComponent } from './shared/layout/pages/not-found/not-found.component'

const routes: Routes = [
  { path: '', redirectTo: '/notes', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'notes',
    loadChildren: () =>
      import('./features/notes/notes.module').then(m => m.NotesModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'tasks',
    loadChildren: () =>
      import('./features/tasks/tasks.module').then(m => m.TasksModule),
    canActivate: [AuthGuard]
  },
  { path: '**', component: NotFoundComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
