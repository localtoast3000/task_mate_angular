import { NgModule } from '@angular/core';
import { IndexComponent } from '../index/index.component';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';
import { HomeComponent } from '../home/ui/home.component';
import { NewtaskComponent } from '../newtask/newtask.component';

@NgModule({
  declarations: [
    IndexComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    NewtaskComponent,
  ],
  exports: [
    IndexComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    NewtaskComponent,
  ],
})
export class PagesModule {}
