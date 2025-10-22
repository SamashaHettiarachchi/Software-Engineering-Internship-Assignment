# Library Management System - Project Report

**Software Engineering Internship Assignment**  
**Date:** October 25, 2025  
**Candidate:** [Your Name]  
**Submitted to:** Expernetic LLC

---

## Table of Contents

1. [Executive Summary](#executive-summary)
2. [Project Overview](#project-overview)
3. [System Architecture](#system-architecture)
4. [Backend Implementation](#backend-implementation)
5. [Frontend Implementation](#frontend-implementation)
6. [Database Design](#database-design)
7. [API Documentation](#api-documentation)
8. [Challenges and Solutions](#challenges-and-solutions)
9. [Testing and Quality Assurance](#testing-and-quality-assurance)
10. [Key Learnings and Insights](#key-learnings-and-insights)
11. [Future Enhancements](#future-enhancements)
12. [Conclusion](#conclusion)

---

## 1. Executive Summary

This report documents the development of a Library Management System, a full-stack web application designed to manage book records with complete CRUD (Create, Read, Update, Delete) functionality. The application was developed as part of the Software Engineering Internship assignment for Expernetic LLC.

### Key Deliverables:

- ✅ RESTful API backend built with C# .NET 8.0
- ✅ SQLite database with Entity Framework Core
- ✅ React TypeScript frontend with modern UI
- ✅ Complete CRUD operations
- ✅ Input validation and error handling
- ✅ Responsive design
- ✅ Comprehensive documentation

### Technologies Used:

- **Backend:** C# .NET 8.0, Entity Framework Core, SQLite, Swagger
- **Frontend:** React 18, TypeScript, Vite, Axios
- **Tools:** Visual Studio Code, Git, npm, dotnet CLI

---

## 2. Project Overview

### 2.1 Objective

The primary objective was to create a simple yet functional Library Management System that allows users to effectively manage book records through an intuitive web interface backed by a robust REST API.

### 2.2 Scope

The project scope included:

- Backend API with book CRUD operations
- SQLite database integration
- Frontend user interface
- Input validation and error handling
- Documentation and deployment instructions

### 2.3 Timeline

The project was completed within the one-week timeline as specified in the assignment requirements.

---

## 3. System Architecture

### 3.1 Architecture Pattern

The application follows a **three-tier architecture**:

```
┌─────────────────────────────────────────┐
│         Presentation Layer              │
│    (React TypeScript Frontend)          │
│  - Components (BookForm, BookList)      │
│  - Services (API communication)         │
│  - State Management (React Hooks)       │
└─────────────┬───────────────────────────┘
              │ HTTP/REST
              │
┌─────────────▼───────────────────────────┐
│         Application Layer               │
│      (ASP.NET Core Web API)             │
│  - Controllers (BooksController)        │
│  - Middleware (CORS, Error Handling)    │
│  - Validation                           │
└─────────────┬───────────────────────────┘
              │ Entity Framework Core
              │
┌─────────────▼───────────────────────────┐
│          Data Layer                     │
│       (SQLite Database)                 │
│  - Books Table                          │
│  - LibraryContext (DbContext)           │
└─────────────────────────────────────────┘
```

### 3.2 Communication Flow

1. User interacts with React UI
2. Frontend sends HTTP requests via Axios
3. ASP.NET Core API receives and validates requests
4. Entity Framework translates to SQL queries
5. SQLite database executes queries
6. Response flows back through the layers

---

## 4. Backend Implementation

### 4.1 Project Structure

The backend is organized using ASP.NET Core Web API best practices:

```
LibraryAPI/
├── Controllers/
│   └── BooksController.cs    # API endpoints
├── Data/
│   └── LibraryContext.cs     # DbContext
├── Models/
│   └── Book.cs               # Entity model
├── Program.cs                # Entry point
└── appsettings.json          # Configuration
```

### 4.2 Book Model

The `Book` model represents the core entity with the following properties:

```csharp
public class Book
{
    public int Id { get; set; }                    // Primary key
    public string Title { get; set; }              // Required, max 200 chars
    public string Author { get; set; }             // Required, max 100 chars
    public string? Description { get; set; }       // Optional, max 1000 chars
    public DateTime CreatedAt { get; set; }        // Auto-generated
    public DateTime UpdatedAt { get; set; }        // Auto-updated
}
```

**Validation Attributes:**

- `[Required]` - Ensures mandatory fields are provided
- `[StringLength]` - Enforces maximum character limits
- Error messages - Provides user-friendly validation feedback

### 4.3 Database Context

`LibraryContext` manages the database connection and entity configuration:

**Key Features:**

- Configures entity properties and constraints
- Implements seed data for initial testing
- Ensures database creation on application start
- Manages database migrations

### 4.4 API Controller

`BooksController` implements RESTful endpoints:

| Method | Endpoint          | Description     | Status Codes            |
| ------ | ----------------- | --------------- | ----------------------- |
| GET    | `/api/books`      | Get all books   | 200, 500                |
| GET    | `/api/books/{id}` | Get book by ID  | 200, 404, 500           |
| POST   | `/api/books`      | Create new book | 201, 400, 500           |
| PUT    | `/api/books/{id}` | Update book     | 204, 400, 404, 409, 500 |
| DELETE | `/api/books/{id}` | Delete book     | 204, 404, 500           |

**Error Handling Strategy:**

- Try-catch blocks for all operations
- Specific error messages for different scenarios
- Logging with ILogger for debugging
- Appropriate HTTP status codes

### 4.5 CORS Configuration

CORS is configured to allow frontend access:

```csharp
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReactApp", policy =>
    {
        policy.WithOrigins("http://localhost:3000")
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});
```

### 4.6 Swagger Integration

Swagger/OpenAPI provides interactive API documentation:

- Auto-generated from code
- Interactive testing interface
- Request/response examples
- Available at application root URL

---

## 5. Frontend Implementation

### 5.1 Project Structure

The frontend follows React best practices with TypeScript:

```
library-frontend/src/
├── components/
│   ├── BookForm.tsx          # Create/Edit form
│   ├── BookForm.css
│   ├── BookList.tsx          # Display books
│   └── BookList.css
├── services/
│   └── bookService.ts        # API communication
├── types/
│   └── Book.ts               # TypeScript interfaces
├── App.tsx                   # Main component
└── main.tsx                  # Entry point
```

### 5.2 Component Architecture

#### App Component (App.tsx)

**Responsibilities:**

- Main application state management
- Orchestrates data flow between components
- Handles success/error messaging
- Coordinates CRUD operations

**State Management:**

```typescript
const [books, setBooks] = useState<Book[]>([]);
const [editingBook, setEditingBook] = useState<Book | null>(null);
const [loading, setLoading] = useState<boolean>(true);
const [error, setError] = useState<string | null>(null);
const [successMessage, setSuccessMessage] = useState<string | null>(null);
```

#### BookForm Component

**Responsibilities:**

- Renders input form for book data
- Validates user input client-side
- Handles both create and edit modes
- Provides real-time character counting

**Validation Rules:**

- Title: Required, max 200 characters
- Author: Required, max 100 characters
- Description: Optional, max 1000 characters

#### BookList Component

**Responsibilities:**

- Displays books in a responsive grid
- Provides edit and delete actions
- Shows empty state when no books exist
- Formats dates for display

### 5.3 Service Layer

`bookService.ts` encapsulates all API communication:

**Benefits:**

- Centralized API logic
- Reusable across components
- Error handling in one place
- Type-safe with TypeScript interfaces

**Error Handling:**

```typescript
try {
  const response = await apiClient.get<Book[]>("/books");
  return response.data;
} catch (error) {
  console.error("Error fetching books:", error);
  throw new Error("Failed to fetch books. Please try again later.");
}
```

### 5.4 TypeScript Types

Strong typing throughout the application:

```typescript
export interface Book {
  id: number;
  title: string;
  author: string;
  description?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface CreateBookDto {
  title: string;
  author: string;
  description?: string;
}
```

### 5.5 Styling and UX

**Design Principles:**

- **Responsive:** Works on desktop, tablet, and mobile
- **Accessible:** Proper labels and semantic HTML
- **Modern:** Gradient headers, shadows, animations
- **User-friendly:** Clear feedback, confirmation dialogs

**CSS Features:**

- CSS custom properties (variables) for theming
- Flexbox and Grid for layouts
- Smooth transitions and hover effects
- Media queries for responsiveness

---

## 6. Database Design

### 6.1 Schema

The database consists of a single table for this assignment:

**Books Table:**

```
┌─────────────┬──────────────┬──────────────┬─────────┐
│ Column      │ Type         │ Constraints  │ Notes   │
├─────────────┼──────────────┼──────────────┼─────────┤
│ Id          │ INTEGER      │ PRIMARY KEY  │ Auto    │
│ Title       │ TEXT         │ NOT NULL     │ Max 200 │
│ Author      │ TEXT         │ NOT NULL     │ Max 100 │
│ Description │ TEXT         │ NULL         │ Max 1000│
│ CreatedAt   │ DATETIME     │ DEFAULT NOW  │         │
│ UpdatedAt   │ DATETIME     │ DEFAULT NOW  │         │
└─────────────┴──────────────┴──────────────┴─────────┘
```

### 6.2 Seed Data

Three sample books are seeded for testing:

1. "The Great Gatsby" by F. Scott Fitzgerald
2. "To Kill a Mockingbird" by Harper Lee
3. "1984" by George Orwell

### 6.3 Database File

- **Location:** `Backend/LibraryAPI/library.db`
- **Type:** SQLite
- **Size:** Lightweight, ~100KB
- **Creation:** Automatic on first run

---

## 7. API Documentation

### 7.1 Base URL

```
Development: http://localhost:5001/api
```

### 7.2 Endpoints

#### GET /api/books

**Description:** Retrieve all books

**Response (200):**

```json
[
  {
    "id": 1,
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "description": "A classic American novel",
    "createdAt": "2025-10-25T10:00:00Z",
    "updatedAt": "2025-10-25T10:00:00Z"
  }
]
```

#### GET /api/books/{id}

**Description:** Retrieve a specific book

**Response (200):**

```json
{
  "id": 1,
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "description": "A classic American novel",
  "createdAt": "2025-10-25T10:00:00Z",
  "updatedAt": "2025-10-25T10:00:00Z"
}
```

**Response (404):**

```json
{
  "message": "Book with ID 1 not found"
}
```

#### POST /api/books

**Description:** Create a new book

**Request Body:**

```json
{
  "title": "New Book",
  "author": "Author Name",
  "description": "Book description"
}
```

**Response (201):**

```json
{
  "id": 4,
  "title": "New Book",
  "author": "Author Name",
  "description": "Book description",
  "createdAt": "2025-10-25T12:00:00Z",
  "updatedAt": "2025-10-25T12:00:00Z"
}
```

**Response (400):**

```json
{
  "errors": {
    "Title": ["Title is required"]
  }
}
```

#### PUT /api/books/{id}

**Description:** Update an existing book

**Request Body:**

```json
{
  "id": 1,
  "title": "Updated Title",
  "author": "Updated Author",
  "description": "Updated description"
}
```

**Response (204):** No content

#### DELETE /api/books/{id}

**Description:** Delete a book

**Response (204):** No content

---

## 8. Challenges and Solutions

### 8.1 Challenge: CORS Issues

**Problem:** Frontend couldn't communicate with backend due to CORS policy.

**Solution:**

- Configured CORS in `Program.cs`
- Allowed specific origin (localhost:3000)
- Enabled all headers and methods

**Learning:** Understanding browser security policies and proper CORS configuration.

### 8.2 Challenge: Entity Framework Setup

**Problem:** First time using Entity Framework Core and SQLite together.

**Solution:**

- Researched EF Core documentation
- Used proper NuGet packages
- Implemented DbContext correctly
- Used EnsureCreated() for database initialization

**Learning:** ORM concepts and how EF Core abstracts database operations.

### 8.3 Challenge: TypeScript Type Safety

**Problem:** Maintaining type safety across async API calls.

**Solution:**

- Created comprehensive TypeScript interfaces
- Used generic types in Axios calls
- Implemented DTOs for different operations

**Learning:** Benefits of TypeScript in catching errors at compile-time.

### 8.4 Challenge: State Management

**Problem:** Coordinating state between multiple components.

**Solution:**

- Lifted state to App component
- Passed callbacks as props
- Used useEffect for side effects
- Implemented proper state updates

**Learning:** React state management patterns and component communication.

### 8.5 Challenge: Error Handling

**Problem:** Providing meaningful error messages to users.

**Solution:**

- Try-catch blocks throughout
- Specific error messages for scenarios
- User-friendly error display in UI
- Console logging for debugging

**Learning:** Importance of proper error handling for user experience.

---

## 9. Testing and Quality Assurance

### 9.1 Testing Approach

#### Manual Testing

Performed comprehensive manual testing for all CRUD operations:

**Create Operations:**

- ✅ Valid book creation
- ✅ Missing required fields validation
- ✅ Character limit validation
- ✅ Success message display

**Read Operations:**

- ✅ Display all books
- ✅ Empty state when no books
- ✅ Loading state while fetching

**Update Operations:**

- ✅ Edit form population
- ✅ Successful updates
- ✅ Validation during updates
- ✅ Cancel functionality

**Delete Operations:**

- ✅ Confirmation dialog
- ✅ Successful deletion
- ✅ UI update after deletion

#### API Testing

Used Swagger UI to test all endpoints:

- ✅ GET requests return correct data
- ✅ POST creates new resources
- ✅ PUT updates existing resources
- ✅ DELETE removes resources
- ✅ Error responses have correct status codes

### 9.2 Code Quality Measures

**Backend:**

- Consistent naming conventions (PascalCase)
- XML documentation comments
- Proper async/await usage
- Dependency injection
- Separation of concerns

**Frontend:**

- Component-based architecture
- TypeScript for type safety
- JSDoc comments
- Consistent formatting
- Reusable components

### 9.3 Browser Compatibility

Tested on:

- ✅ Google Chrome (latest)
- ✅ Microsoft Edge (latest)
- ✅ Firefox (latest)

### 9.4 Responsive Design Testing

Tested on various screen sizes:

- ✅ Desktop (1920x1080)
- ✅ Laptop (1366x768)
- ✅ Tablet (768x1024)
- ✅ Mobile (375x667)

---

## 10. Key Learnings and Insights

### 10.1 Technical Learnings

**C# and .NET:**

- Understanding of ASP.NET Core Web API architecture
- Entity Framework Core ORM patterns
- Dependency injection in .NET
- Middleware pipeline configuration
- Async programming with Task<T>

**React and TypeScript:**

- React hooks for state management
- TypeScript interface design
- Component composition patterns
- Props and callback patterns
- Effect hooks for side effects

**Database:**

- SQLite integration with EF Core
- Database migrations and seeding
- CRUD operations at database level
- Connection string configuration

**API Design:**

- RESTful API principles
- HTTP status code usage
- Request/response patterns
- API versioning considerations

### 10.2 Soft Skills Development

**Problem Solving:**

- Breaking down complex requirements
- Researching solutions independently
- Debugging systematic approach
- Testing methodologies

**Time Management:**

- Prioritizing features
- Meeting deadlines
- Balancing quality with speed

**Documentation:**

- Writing clear README files
- Code documentation practices
- Creating comprehensive reports

### 10.3 Best Practices Learned

1. **Separation of Concerns:** Keep different responsibilities in different files/classes
2. **Error Handling:** Always handle errors gracefully
3. **Validation:** Validate on both client and server
4. **Documentation:** Code should be self-documenting with comments
5. **Version Control:** Use Git for tracking changes
6. **User Experience:** Always think about the end user

---

## 11. Future Enhancements

### 11.1 Authentication and Authorization

**Description:** Implement user registration and login

**Benefits:**

- Multiple users can manage their own books
- Secure access to the system
- Role-based permissions

**Implementation:**

- ASP.NET Core Identity
- JWT tokens
- Login/Register components

### 11.2 Advanced Search and Filtering

**Description:** Add search functionality and filters

**Features:**

- Search by title, author, or description
- Filter by date added
- Sort options (A-Z, newest first, etc.)

### 11.3 Pagination

**Description:** Implement pagination for large datasets

**Benefits:**

- Better performance
- Improved UX with many books

**Implementation:**

- Server-side pagination
- Page controls in UI

### 11.4 Book Categories

**Description:** Add categories/genres for books

**Features:**

- Category management
- Filter by category
- Category statistics

### 11.5 Image Upload

**Description:** Allow book cover images

**Implementation:**

- File upload endpoint
- Image storage
- Image display in UI

### 11.6 Export Functionality

**Description:** Export book list to CSV/PDF

**Benefits:**

- Data backup
- Reporting capabilities

### 11.7 Dark Mode

**Description:** Add dark theme option

**Benefits:**

- Better UX in low light
- Modern look

---

## 12. Conclusion

### 12.1 Project Success

The Library Management System was successfully completed within the specified timeline. All core requirements have been met:

✅ **Backend:** Fully functional REST API with C# .NET
✅ **Database:** SQLite with Entity Framework Core integration
✅ **Frontend:** Modern React TypeScript UI
✅ **CRUD Operations:** Complete Create, Read, Update, Delete functionality
✅ **Validation:** Both client-side and server-side validation
✅ **Error Handling:** Comprehensive error handling throughout
✅ **Documentation:** Detailed README and this comprehensive report
✅ **Code Quality:** Clean, well-commented, and organized code

### 12.2 Personal Growth

This project provided significant learning opportunities:

1. **New Technology:** Learned C# and .NET from scratch
2. **Full-Stack Development:** Gained experience building both backend and frontend
3. **API Design:** Understood RESTful principles and best practices
4. **Problem-Solving:** Overcame various technical challenges independently
5. **Documentation:** Developed skills in technical writing

### 12.3 Application Readiness

The application is:

- ✅ **Functional:** All features work as expected
- ✅ **Tested:** Manually tested all scenarios
- ✅ **Documented:** Comprehensive documentation provided
- ✅ **Deployable:** Can be run locally following README instructions
- ✅ **Maintainable:** Clean code with comments for future developers

### 12.4 Final Thoughts

Building this Library Management System from scratch was a rewarding experience. Despite having no prior experience with .NET, I was able to learn the technology quickly and deliver a complete, functional application. The project demonstrates my ability to:

- Learn new technologies independently
- Follow best practices and coding standards
- Build a complete full-stack application
- Write clean, maintainable code
- Document work comprehensively

I am confident that this application meets all the assignment requirements and demonstrates my capabilities as a software engineer. I look forward to discussing the technical implementation details during the interview.

---

## Appendices

### Appendix A: Development Environment

- **OS:** Windows 11
- **IDE:** Visual Studio Code
- **.NET SDK:** 8.0
- **Node.js:** 18.x
- **Browser:** Chrome

### Appendix B: Package Versions

**Backend:**

- Microsoft.EntityFrameworkCore.Sqlite: 8.0.0
- Microsoft.EntityFrameworkCore.Design: 8.0.0
- Swashbuckle.AspNetCore: 6.5.0

**Frontend:**

- React: 18.2.0
- TypeScript: 5.2.2
- Vite: 5.0.8
- Axios: 1.6.0

### Appendix C: Git Repository Structure

```
main
├── Initial commit
├── Backend setup
├── Database configuration
├── API endpoints implementation
├── Frontend setup
├── Components implementation
├── Styling
└── Documentation
```

### Appendix D: Running Instructions Summary

**Backend:**

```powershell
cd Backend\LibraryAPI
dotnet restore
dotnet run
```

**Frontend:**

```powershell
cd Frontend\library-frontend
npm install
npm run dev
```

---

**Report Prepared By:** [Your Name]  
**Date:** October 25, 2025  
**Contact:** [Your Email]

**Submitted to:**  
Expernetic LLC  
people@expernetic.com

---

_This report is part of the Software Engineering Internship Assignment submission._
