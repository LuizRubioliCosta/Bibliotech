import { Book } from "../models/book.model";
import { Collection } from "../models/collection.model";
import { Register } from "../models/register.model";

export const mockedUser: Register = {
  email: "teste@teste.com",
  password: "testing1",
  firstName: "first name",
  lastName: "last name"
}

export const mockedCollection: Collection = {
  title: "title",
  description: "description",
  userId: "id"
}

export const mockedBook: Book = {
  title: 'title',
  authors: ['author'],
  publishedYear: 2024,
  description: 'description',
  edition: 'edition',
  isbn: 'isbn',
  pageCount: 190,
  categories: ['category'],
  read: 'read',
  collection: mockedCollection
}
