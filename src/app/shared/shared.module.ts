import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HeaderComponent } from './layout/components/header/header.component'
import { MaterialModule } from './material/material.module'
import { NotFoundComponent } from './layout/pages/not-found/not-found.component'
import { HomeComponent } from './layout/pages/home/home.component'
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [HeaderComponent, NotFoundComponent, HomeComponent],
  imports: [MaterialModule, CommonModule, ReactiveFormsModule],
  exports: [
    MaterialModule,
    CommonModule,
    ReactiveFormsModule,
    HeaderComponent,
    NotFoundComponent,
    HomeComponent
  ]
})
export class SharedModule {}
