import { NgModule } from '@angular/core';
// import { IndexComponent } from '../index/index.component';
// import { LoginComponent } from '../login/login.component';
// import { SignupComponent } from '../signup/signup.component';
// import { HomeComponent } from '../home/ui/home.component';
// import { NewtaskComponent } from '../newtask/newtask.component';
import { HomeModule } from '../home/ui/home.module';

@NgModule({
  imports: [HomeModule],
})
export class PagesModule {}
