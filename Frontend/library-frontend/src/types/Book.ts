/**
 * Book interface representing a book entity
 */
export interface Book {
  id: number;
  title: string;
  author: string;
  description?: string;
  createdAt?: string;
  updatedAt?: string;
}

/**
 * Interface for creating a new book (without id)
 */
export interface CreateBookDto {
  title: string;
  author: string;
  description?: string;
}

/**
 * Interface for updating an existing book
 */
export interface UpdateBookDto {
  id: number;
  title: string;
  author: string;
  description?: string;
}
