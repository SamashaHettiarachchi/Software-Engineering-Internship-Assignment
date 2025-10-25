import { Book } from "../types/Book";
import "./BookList.css";

interface BookListProps {
  books: Book[];
  onEdit: (book: Book) => void;
  onDelete: (id: number) => void;
}

/**
 * Component for displaying a list of books
 */
function BookList({ books, onEdit, onDelete }: BookListProps) {
  if (books.length === 0) {
    return (
      <div className="empty-state">
        <i
          className="fas fa-book-open"
          style={{ fontSize: "3rem", marginBottom: "1rem", color: "#2563eb" }}
        ></i>
        <p>No books in the library yet.</p>
        <p>Start by adding your first book above!</p>
      </div>
    );
  }

  return (
    <div className="book-list">
      {books.map((book) => (
        <div key={book.id} className="book-card">
          <div className="book-header">
            <h3>
              <i
                className="fas fa-book"
                style={{ marginRight: "0.5rem", color: "#2563eb" }}
              ></i>
              {book.title}
            </h3>
            <div className="book-actions">
              <button
                className="btn-icon btn-edit"
                onClick={() => onEdit(book)}
                title="Edit book"
              >
                <i className="fas fa-edit"></i>
              </button>
              <button
                className="btn-icon btn-delete"
                onClick={() => onDelete(book.id)}
                title="Delete book"
              >
                <i className="fas fa-trash-alt"></i>
              </button>
            </div>
          </div>
          <div className="book-body">
            <p className="book-author">
              <i
                className="fas fa-user"
                style={{ marginRight: "0.5rem", color: "#2563eb" }}
              ></i>
              <strong>Author:</strong> {book.author}
            </p>
            {book.description && (
              <p className="book-description">
                <i
                  className="fas fa-info-circle"
                  style={{ marginRight: "0.5rem", color: "#2563eb" }}
                ></i>
                <strong>Description:</strong> {book.description}
              </p>
            )}
            <div className="book-meta">
              <small>
                <i
                  className="far fa-calendar-alt"
                  style={{ marginRight: "0.5rem" }}
                ></i>
                Added:{" "}
                {book.createdAt
                  ? new Date(book.createdAt).toLocaleDateString()
                  : "N/A"}
              </small>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BookList;
