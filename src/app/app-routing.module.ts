import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './basic-layout/dashboard/dashboard.component';
import { BookListComponent } from './books/book-list/book-list.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'books', component: BookListComponent },
  { path: 'characters',
    loadChildren: () => import('./characters/characters.module')
      .then(m => m.CharactersModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
