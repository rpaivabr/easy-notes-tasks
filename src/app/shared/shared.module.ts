import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HeaderComponent } from './layout/components/header/header.component'
import { MaterialModule } from './material/material.module'
import { NotFoundComponent } from './layout/pages/not-found/not-found.component'
import { HomeComponent } from './layout/pages/home/home.component'
import { ReactiveFormsModule } from '@angular/forms';
import { LoadingComponent } from './layout/components/loading/loading.component'

@NgModule({
  declarations: [HeaderComponent, NotFoundComponent, HomeComponent, LoadingComponent],
  imports: [MaterialModule, CommonModule, ReactiveFormsModule],
  exports: [
    MaterialModule,
    CommonModule,
    ReactiveFormsModule,
    HeaderComponent,
    NotFoundComponent,
    HomeComponent,
    LoadingComponent
  ]
})
export class SharedModule {}
