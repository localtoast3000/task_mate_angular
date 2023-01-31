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
import { TaskCardComponent } from './shared/ui/task-card/task-card.component';
import { BinComponent } from './shared/ui/icons/bin/bin.component';
import { PencilComponent } from './shared/ui/icons/pencil/pencil.component';
import { PagesModule } from './modules/pages.module';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    PagesModule,
  ],
  declarations: [
    AppComponent,
    LogoComponent,
    ToolbarComponent,
    ThemeSwitchComponent,
    AuthenticationComponent,
    TaskCardComponent,
    BinComponent,
    PencilComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
