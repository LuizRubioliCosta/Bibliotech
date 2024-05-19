import { Collection } from "./collection.model";

export interface Book {
      id?: number;
      title: string,
      authors: string[],
      publishedYear: number,
      description: string,
      edition: string,
      isbn: string,
      pageCount: number,
      categories: string[],
      read: string,
      collection: Collection,
}
