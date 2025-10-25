import axios from "axios";
import { Book, CreateBookDto, UpdateBookDto } from "../types/Book";

/**
 * Base URL for the API
 * Update this if your backend runs on a different port
 */
const API_BASE_URL = "http://localhost:5001/api";

/**
 * Axios instance with default configuration
 */
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

/**
 * Service class for handling all book-related API calls
 */
class BookService {
  /**
   * Fetches all books from the API
   * @returns Promise with array of books
   */
  async getAllBooks(): Promise<Book[]> {
    try {
      const response = await apiClient.get<Book[]>("/books");
      return response.data;
    } catch (error) {
      console.error("Error fetching books:", error);
      throw new Error("Failed to fetch books. Please try again later.");
    }
  }

  /**
   * Fetches a single book by ID
   * @param id - Book ID
   * @returns Promise with book data
   */
  async getBookById(id: number): Promise<Book> {
    try {
      const response = await apiClient.get<Book>(`/books/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching book ${id}:`, error);
      throw new Error("Failed to fetch book details.");
    }
  }

  /**
   * Creates a new book
   * @param book - Book data without ID
   * @returns Promise with created book
   */
  async createBook(book: CreateBookDto): Promise<Book> {
    try {
      const response = await apiClient.post<Book>("/books", book);
      return response.data;
    } catch (error: any) {
      console.error("Error creating book:", error);
      if (error.response?.data?.errors) {
        const errorMessages = Object.values(error.response.data.errors)
          .flat()
          .join(", ");
        throw new Error(errorMessages);
      }
      throw new Error("Failed to create book. Please check your input.");
    }
  }

  /**
   * Updates an existing book
   * @param id - Book ID
   * @param book - Updated book data
   * @returns Promise with void
   */
  async updateBook(id: number, book: UpdateBookDto): Promise<void> {
    try {
      await apiClient.put(`/books/${id}`, book);
    } catch (error: any) {
      console.error(`Error updating book ${id}:`, error);
      if (error.response?.data?.errors) {
        const errorMessages = Object.values(error.response.data.errors)
          .flat()
          .join(", ");
        throw new Error(errorMessages);
      }
      throw new Error("Failed to update book. Please check your input.");
    }
  }

  /**
   * Deletes a book
   * @param id - Book ID to delete
   * @returns Promise with void
   */
  async deleteBook(id: number): Promise<void> {
    try {
      await apiClient.delete(`/books/${id}`);
    } catch (error) {
      console.error(`Error deleting book ${id}:`, error);
      throw new Error("Failed to delete book. Please try again.");
    }
  }
}

// Export a singleton instance
export default new BookService();
