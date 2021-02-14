import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HeaderComponent } from './layout/components/header/header.component'
import { MaterialModule } from './material/material.module'
import { NotFoundComponent } from './layout/pages/not-found/not-found.component'
import { HomeComponent } from './layout/pages/home/home.component'

@NgModule({
  declarations: [HeaderComponent, NotFoundComponent, HomeComponent],
  imports: [MaterialModule, CommonModule],
  exports: [MaterialModule, HeaderComponent, NotFoundComponent, HomeComponent]
})
export class SharedModule {}
