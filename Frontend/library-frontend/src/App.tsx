import { useState, useEffect } from "react";
import BookList from "./components/BookList";
import BookForm from "./components/BookForm";
import AuthForm from "./components/AuthForm";
import { Book, CreateBookDto, UpdateBookDto } from "./types/Book";
import { RegisterData, LoginData, AuthResponse } from "./types/User";
import bookService from "./services/bookService";
import { authService } from "./services/authService";
import "./App.css";

function App() {
  const [books, setBooks] = useState<Book[]>([]);
  const [editingBook, setEditingBook] = useState<Book | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [currentUser, setCurrentUser] = useState<AuthResponse | null>(null);
  const [authMode, setAuthMode] = useState<"login" | "register">("login");
  const [authError, setAuthError] = useState<string>("");

  /**
   * Check if user is already logged in on component mount
   */
  useEffect(() => {
    const user = authService.getCurrentUser();
    if (user) {
      setCurrentUser(user);
    }
  }, []);

  /**
   * Fetch all books on component mount
   */
  useEffect(() => {
    if (currentUser) {
      fetchBooks();
    }
  }, [currentUser]);

  /**
   * Clear success message after 3 seconds
   */
  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => setSuccessMessage(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [successMessage]);

  /**
   * Fetches all books from the API
   */
  const fetchBooks = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await bookService.getAllBooks();
      setBooks(data);
    } catch (err: any) {
      setError(err.message || "Failed to load books");
      console.error("Error fetching books:", err);
    } finally {
      setLoading(false);
    }
  };

  /**
   * Handles creating a new book
   */
  const handleCreateBook = async (book: CreateBookDto) => {
    try {
      setError(null);
      await bookService.createBook(book);
      setSuccessMessage("Book created successfully!");
      await fetchBooks();
    } catch (err: any) {
      setError(err.message || "Failed to create book");
      throw err;
    }
  };

  /**
   * Handles updating an existing book
   */
  const handleUpdateBook = async (book: UpdateBookDto) => {
    try {
      setError(null);
      await bookService.updateBook(book.id, book);
      setSuccessMessage("Book updated successfully!");
      setEditingBook(null);
      await fetchBooks();
    } catch (err: any) {
      setError(err.message || "Failed to update book");
      throw err;
    }
  };

  /**
   * Handles deleting a book
   */
  const handleDeleteBook = async (id: number) => {
    if (!window.confirm("Are you sure you want to delete this book?")) {
      return;
    }

    try {
      setError(null);
      await bookService.deleteBook(id);
      setSuccessMessage("Book deleted successfully!");
      await fetchBooks();
    } catch (err: any) {
      setError(err.message || "Failed to delete book");
    }
  };

  /**
   * Handles editing a book
   */
  const handleEditBook = (book: Book) => {
    setEditingBook(book);
    setError(null);
    // Scroll to form
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  /**
   * Handles canceling edit mode
   */
  const handleCancelEdit = () => {
    setEditingBook(null);
    setError(null);
  };

  /**
   * Unified submit handler for both create and update
   */
  const handleSubmitBook = async (book: CreateBookDto | UpdateBookDto) => {
    if ("id" in book) {
      // It's an UpdateBookDto
      await handleUpdateBook(book);
    } else {
      // It's a CreateBookDto
      await handleCreateBook(book);
    }
  };

  /**
   * Handle user registration
   */
  const handleRegister = async (data: RegisterData) => {
    try {
      setAuthError("");
      const response = await authService.register(data);
      authService.saveUser(response);
      setCurrentUser(response);
      setSuccessMessage(response.message);
    } catch (err: any) {
      setAuthError(err.message);
    }
  };

  /**
   * Handle user login
   */
  const handleLogin = async (data: LoginData) => {
    try {
      setAuthError("");
      const response = await authService.login(data);
      authService.saveUser(response);
      setCurrentUser(response);
      setSuccessMessage(`Welcome back, ${response.username}!`);
    } catch (err: any) {
      setAuthError(err.message);
    }
  };

  /**
   * Handle user logout
   */
  const handleLogout = () => {
    authService.logout();
    setCurrentUser(null);
    setBooks([]);
    setEditingBook(null);
    setSuccessMessage("Logged out successfully");
  };

  /**
   * Switch between login and register modes
   */
  const handleSwitchAuthMode = () => {
    setAuthMode(authMode === "login" ? "register" : "login");
    setAuthError("");
  };

  /**
   * Handle auth form submission
   */
  const handleAuthSubmit = async (data: RegisterData | LoginData) => {
    if (authMode === "register") {
      await handleRegister(data as RegisterData);
    } else {
      await handleLogin(data as LoginData);
    }
  };

  // Show auth form if user is not logged in
  if (!currentUser) {
    return (
      <AuthForm
        mode={authMode}
        onSubmit={handleAuthSubmit}
        onSwitchMode={handleSwitchAuthMode}
        error={authError}
      />
    );
  }

  return (
    <div className="app">
      <header className="app-header">
        <div>
          <h1>
            <i
              className="fas fa-book-reader"
              style={{ marginRight: "0.75rem" }}
            ></i>
            Library Management System
          </h1>
          <p>
            <i className="fas fa-tasks" style={{ marginRight: "0.5rem" }}></i>
            Manage your book collection with ease
          </p>
        </div>
        <div className="user-info">
          <span className="welcome-text">
            <i
              className="fas fa-user-circle"
              style={{ marginRight: "0.5rem" }}
            ></i>
            {currentUser.username}
          </span>
          <button onClick={handleLogout} className="logout-btn">
            <i
              className="fas fa-sign-out-alt"
              style={{ marginRight: "0.5rem" }}
            ></i>
            Logout
          </button>
        </div>
      </header>

      <main className="app-main">
        {/* Success Message */}
        {successMessage && (
          <div className="alert alert-success">
            <i
              className="fas fa-check-circle"
              style={{ marginRight: "0.5rem" }}
            ></i>
            {successMessage}
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div className="alert alert-error">
            <i
              className="fas fa-exclamation-circle"
              style={{ marginRight: "0.5rem" }}
            ></i>
            {error}
          </div>
        )}

        {/* Book Form */}
        <section className="form-section">
          <h2>{editingBook ? "Edit Book" : "Add New Book"}</h2>
          <BookForm
            book={editingBook}
            onSubmit={handleSubmitBook}
            onCancel={editingBook ? handleCancelEdit : undefined}
          />
        </section>

        {/* Book List */}
        <section className="list-section">
          <h2>Book Collection</h2>
          {loading ? (
            <div className="loading">Loading books...</div>
          ) : (
            <BookList
              books={books}
              onEdit={handleEditBook}
              onDelete={handleDeleteBook}
            />
          )}
        </section>
      </main>

      <footer className="app-footer">
        <p>© 2025 Library Management System | Built with React & .NET</p>
      </footer>
    </div>
  );
}

export default App;
