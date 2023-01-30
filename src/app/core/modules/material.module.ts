import { NgModule } from '@angular/core';
import { MatToolbarModule, MatToolbar } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [MatToolbarModule],
  exports: [MatIconModule, MatButtonModule, MatToolbar],
})
export class MaterialModule {}
