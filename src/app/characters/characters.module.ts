import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterComponent } from './character/character.component';
import { CharacterListComponent } from './character-list/character-list.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule, MatTableModule } from '@angular/material';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CharacterComponent, CharacterListComponent],
  exports: [CharacterComponent, CharacterListComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatButtonModule,
    MatCardModule,
    RouterModule
  ]
})
export class CharactersModule { }
