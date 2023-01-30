import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './core/modules/material.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { LogoComponent } from './shared/components/logo/logo.component';
import { ToolbarComponent } from './core/components/toolbar/toolbar.component';
import { ThemeSwitchComponent } from './shared/components/theme-switch/theme-switch.component';
import { SystemThemeDirective } from './shared/components/theme-switch/system-theme.directive';
import { StoreModule, Store } from '@ngrx/store';
import { darkModeReducer } from './core/components/toolbar/toolbar.reducer';
import { TesterComponent } from './core/components/tester/tester.component'

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    StoreModule.forRoot({darkMode: darkModeReducer}),
  ],
  declarations: [
    AppComponent,
    LogoComponent,
    ToolbarComponent,
    ThemeSwitchComponent,
    SystemThemeDirective,
    TesterComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  
}
