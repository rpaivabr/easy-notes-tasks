import { NgModule } from '@angular/core'
import { HeaderComponent } from './layout/header/header.component'
import { MaterialModule } from './material/material.module'

@NgModule({
  declarations: [HeaderComponent],
  imports: [MaterialModule],
  exports: [MaterialModule, HeaderComponent]
})
export class SharedModule {}
