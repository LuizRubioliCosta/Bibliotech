import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BibliotechService } from './service/bibliotech.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './containers/login/login.component';
import { RegisterComponent } from './containers/register/register.component';
import { BibliotechRoutingModule } from './routing.module';

import { BookDetailsComponent } from './containers/book-details/book-details.component';
import { JwtInterceptor } from './utils/jwt-interceptor';
import { BookEditionComponent } from './containers/book-edition/book-edition.component';
import { BooksComponent } from './containers/books/books.component';
import { CollectionComponent } from './containers/collection/collection.component';
import { CollectionItemComponent } from './containers/collection-item/collection-item.component';
import { NavbarComponent } from './containers/navbar/navbar.component';
import { NewCollectionComponent } from './containers/new-collection/new-collection.component';
import { ReadingsComponent } from './containers/readings/readings.component';
import { LandingPageComponent } from './landing-page/landing-page.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    BookDetailsComponent,
    BookEditionComponent,
    BooksComponent,
    CollectionComponent,
    CollectionItemComponent,
    NavbarComponent,
    NewCollectionComponent,
    ReadingsComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    BibliotechRoutingModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }, BibliotechService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
