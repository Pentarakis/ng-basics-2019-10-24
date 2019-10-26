import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './basic-layout/dashboard/dashboard.component';
import { BookListComponent } from './books/book-list/book-list.component';
import { CharacterListComponent } from './characters/character-list/character-list.component';
import { CharacterComponent } from './characters/character/character.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'books', component: BookListComponent },
  { path: 'characters', component: CharacterListComponent },
  { path: 'characters/:id', component: CharacterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
