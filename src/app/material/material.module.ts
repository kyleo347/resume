import { NgModule } from '@angular/core';
import { MatListModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatInput,
  MatFormFieldModule,
  } from '@angular/material';

@NgModule({
  imports: [
    MatListModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  exports: [
    MatListModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatInput,
    MatFormFieldModule,
  ],
  declarations: []
})
export class MaterialModule { }
