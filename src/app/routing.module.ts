import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './containers/login/login.component';
import { RegisterComponent } from './containers/register/register.component';
import { AppComponent } from './app.component';
import { CollectionComponent } from './containers/collection/collection.component';
import { CollectionItemComponent } from './containers/collection-item/collection-item.component';
import { BooksComponent } from './containers/books/books.component';
import { BookDetailsComponent } from './containers/book-details/book-details.component';
import { BookEditionComponent } from './containers/book-edition/book-edition.component';
import { NewCollectionComponent } from './containers/new-collection/new-collection.component';
import { ReadingsComponent } from './containers/readings/readings.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        component: LandingPageComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'register/:opt',
        component: RegisterComponent,
      },
      {
        path: 'collection',
        component: CollectionComponent,
      },
      {
        path: 'collection-item',
        component: CollectionItemComponent,
      },
      {
        path: 'books',
        component: BooksComponent,
      },
      {
        path: 'book-details',
        component: BookDetailsComponent,
      },
      {
        path: 'book-edition',
        component: BookEditionComponent,
      },
      {
        path: 'new-collection',
        component: NewCollectionComponent,
      },
      {
        path: 'readings',
        component: ReadingsComponent,
      },
    ],
  },
];

@NgModule({
  imports:  [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class BibliotechRoutingModule {}
