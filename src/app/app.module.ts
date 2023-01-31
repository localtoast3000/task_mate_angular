import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './core/modules/material.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { LogoComponent } from './shared/components/logo/logo.component';
import { ToolbarComponent } from './shared/components/toolbar/toolbar.component';
import { ThemeSwitchComponent } from './shared/components/theme-switch/theme-switch.component';
import { HomeComponent } from './core/pages/home/home.component';
import { IndexComponent } from './core/pages/index/index.component';
import { LoginComponent } from './core/pages/login/login.component';
import { SignupComponent } from './core/pages/signup/signup.component';
import { NewtaskComponent } from './core/pages/newtask/newtask.component';
import { DashboardComponent } from './shared/layouts/dashboard/dashboard.component';
import { AuthenticationComponent } from './shared/layouts/authentication/authentication.component';
import { TaskCardComponent } from './shared/components/task-card/task-card.component';
import { BinComponent } from './shared/icons/bin/bin.component';
import { PencilComponent } from './shared/icons/pencil/pencil.component';

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
    HomeComponent,
    IndexComponent,
    LoginComponent,
    SignupComponent,
    NewtaskComponent,
    DashboardComponent,
    AuthenticationComponent,
    TaskCardComponent,
    BinComponent,
    PencilComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
