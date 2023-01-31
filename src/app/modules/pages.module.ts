import { NgModule } from '@angular/core';
// import { IndexComponent } from '../index/index.component';
// import { LoginComponent } from '../login/login.component';
// import { SignupComponent } from '../signup/signup.component';
import { HomeModule } from '../home/ui/home.module';
// import { NewtaskComponent } from '../newtask/newtask.component';

@NgModule({
  imports: [HomeModule],
  exports: [HomeModule],
})
export class PagesModule {}
