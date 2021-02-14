import { NgModule } from '@angular/core'
import { FirebaseModule } from './firebase/firebase.module';

@NgModule({
  imports: [FirebaseModule],
  exports: [FirebaseModule],
})
export class CoreModule {}