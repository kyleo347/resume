import { NgModule } from '@angular/core';
import { MatListModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatInput,
  MatFormFieldModule,
  MatExpansionModule,
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
    MatExpansionModule,
  ],
  exports: [
    MatListModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatInput,
    MatFormFieldModule,
    MatExpansionModule,
  ],
  declarations: []
})
export class MaterialModule { }
