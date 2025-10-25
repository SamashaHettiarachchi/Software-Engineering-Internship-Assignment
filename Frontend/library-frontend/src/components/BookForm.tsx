import { useState, useEffect } from "react";
import { Book, CreateBookDto, UpdateBookDto } from "../types/Book";
import "./BookForm.css";

interface BookFormProps {
  book?: Book | null;
  onSubmit: (book: CreateBookDto | UpdateBookDto) => Promise<void>;
  onCancel?: () => void;
}

/**
 * Form component for creating or editing books
 */
function BookForm({ book, onSubmit, onCancel }: BookFormProps) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  /**
   * Update form when editing book changes
   */
  useEffect(() => {
    if (book) {
      setTitle(book.title);
      setAuthor(book.author);
      setDescription(book.description || "");
    } else {
      resetForm();
    }
  }, [book]);

  /**
   * Validates form inputs
   */
  const validateForm = (): boolean => {
    const newErrors: { [key: string]: string } = {};

    if (!title.trim()) {
      newErrors.title = "Title is required";
    } else if (title.length > 200) {
      newErrors.title = "Title cannot exceed 200 characters";
    }

    if (!author.trim()) {
      newErrors.author = "Author is required";
    } else if (author.length > 100) {
      newErrors.author = "Author name cannot exceed 100 characters";
    }

    if (description.length > 1000) {
      newErrors.description = "Description cannot exceed 1000 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /**
   * Handles form submission
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setSubmitting(true);
    try {
      if (book) {
        // Update existing book
        await onSubmit({
          id: book.id,
          title: title.trim(),
          author: author.trim(),
          description: description.trim() || undefined,
        });
      } else {
        // Create new book
        await onSubmit({
          title: title.trim(),
          author: author.trim(),
          description: description.trim() || undefined,
        });
      }
      resetForm();
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setSubmitting(false);
    }
  };

  /**
   * Resets form to initial state
   */
  const resetForm = () => {
    setTitle("");
    setAuthor("");
    setDescription("");
    setErrors({});
  };

  /**
   * Handles cancel button click
   */
  const handleCancel = () => {
    resetForm();
    if (onCancel) {
      onCancel();
    }
  };

  return (
    <form className="book-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="title">
          Title <span className="required">*</span>
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter book title"
          className={errors.title ? "error" : ""}
          maxLength={200}
        />
        {errors.title && <span className="error-message">{errors.title}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="author">
          Author <span className="required">*</span>
        </label>
        <input
          type="text"
          id="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Enter author name"
          className={errors.author ? "error" : ""}
          maxLength={100}
        />
        {errors.author && (
          <span className="error-message">{errors.author}</span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter book description (optional)"
          rows={4}
          className={errors.description ? "error" : ""}
          maxLength={1000}
        />
        {errors.description && (
          <span className="error-message">{errors.description}</span>
        )}
        <small>{description.length}/1000 characters</small>
      </div>

      <div className="form-actions">
        <button type="submit" className="btn btn-primary" disabled={submitting}>
          {submitting ? "Saving..." : book ? "Update Book" : "Add Book"}
        </button>
        {onCancel && (
          <button
            type="button"
            className="btn btn-secondary"
            onClick={handleCancel}
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}

export default BookForm;
