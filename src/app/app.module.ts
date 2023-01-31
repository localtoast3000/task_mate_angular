import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './modules/material.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { LogoComponent } from './shared/ui/logo/logo.component';
import { ToolbarComponent } from './shared/ui/toolbar/toolbar.component';
import { ThemeSwitchComponent } from './shared/ui/theme-switch/theme-switch.component';
import { AuthenticationComponent } from './shared/ui/layouts/authentication/authentication.component';
import { BinComponent } from './shared/ui/icons/bin/bin.component';
import { PencilComponent } from './shared/ui/icons/pencil/pencil.component';
import { PagesModule } from './modules/pages.module';
import { TaskCardComponent } from './shared/ui/task-card/task-card.component';
import { DashboardComponent } from './shared/ui/layouts/dashboard/dashboard.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
// import { HomeComponent } from './home/ui/home.component';
import { NewtaskComponent } from './newtask/newtask.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    LogoComponent,
    ToolbarComponent,
    ThemeSwitchComponent,
    AuthenticationComponent,
    BinComponent,
    DashboardComponent,
    PencilComponent,
    TaskCardComponent,
    IndexComponent,
    LoginComponent,
    SignupComponent,
    NewtaskComponent,
    PagesModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
