# Library Management System - Project Report# Library Management System - Project Report# Library Management System - Project Report

**Software Engineering Internship Assignment**

**Submitted by:** Samasha Hettiarachchi

**Date:** October 28, 2025 **Software Engineering Internship Assignment** **Software Engineering Internship Assignment**

**Submitted to:** Expernetic LLC

**Submitted by:** Samasha Hettiarachchi **Date:** October 25, 2025

---

**Date:** October 28, 2025 **Candidate:** [Your Name]

## Executive Summary

**Submitted to:** Expernetic LLC**Submitted to:** Expernetic LLC

This report documents the development of a Library Management System, a full-stack web application created as part of the Software Engineering Internship assignment for Expernetic LLC.

The application provides complete CRUD functionality for managing library book records. It includes user authentication, input validation, error handling, and a responsive user interface.

---

**Technologies Used:**

- Backend: C# .NET 9.0, Entity Framework Core 9.0, SQLite

- Frontend: React 18, TypeScript, Vite, Axios

- Tools: Visual Studio Code, Git, Swagger## Table of Contents## Table of Contents

**Key Deliverables:**

- REST API with authentication

- React TypeScript frontend1. Executive Summary1. [Executive Summary](#executive-summary)

- SQLite database integration

- Complete documentation2. Introduction2. [Project Overview](#project-overview)

- Clean, maintainable code

3. System Architecture3. [System Architecture](#system-architecture)

---

4. Backend Implementation4. [Backend Implementation](#backend-implementation)

## 1. Introduction

5. Frontend Implementation5. [Frontend Implementation](#frontend-implementation)

### 1.1 Project Objective

6. Database Design6. [Database Design](#database-design)

The primary objective was to develop a Library Management System that allows users to manage book collections through a web interface with all CRUD operations and secure authentication.

7. Development Process7. [API Documentation](#api-documentation)

### 1.2 Scope

8. Challenges and Solutions8. [Challenges and Solutions](#challenges-and-solutions)

The project included:

- Backend REST API with book management9. Testing and Quality Assurance9. [Testing and Quality Assurance](#testing-and-quality-assurance)

- User authentication system

- SQLite database with Entity Framework10. Key Insights and Learnings10. [Key Learnings and Insights](#key-learnings-and-insights)

- React frontend with TypeScript

- Input validation on both client and server11. Conclusion11. [Future Enhancements](#future-enhancements)

- Error handling throughout

- Responsive design12. [Conclusion](#conclusion)

### 1.3 Timeline---

The project was completed within one week from October 22 to October 28, 2025.---

---## 1. Executive Summary

## 2. System Architecture## 1. Executive Summary

The application follows a three-tier architecture:This report documents the development of a Library Management System, a full-stack web application created as part of the Software Engineering Internship assignment for Expernetic LLC. The project demonstrates proficiency in modern web development technologies and best practices.

**Presentation Layer:**This report documents the development of a Library Management System, a full-stack web application designed to manage book records with complete CRUD (Create, Read, Update, Delete) functionality. The application was developed as part of the Software Engineering Internship assignment for Expernetic LLC.

- React components for UI

- TypeScript for type safetyThe application provides complete CRUD (Create, Read, Update, Delete) functionality for managing book records in a library. It includes user authentication, input validation, error handling, and a responsive user interface.

- Service layer for API communication

- State management with React hooks### Key Deliverables:

**Application Layer:\*\***Technologies Used:\*\*

- ASP.NET Core Web API

- Controllers for HTTP requests- Backend: C# .NET 9.0, Entity Framework Core, SQLite- ✅ RESTful API backend built with C# .NET 8.0

- Middleware for CORS and error handling

- Model validation- Frontend: React 18, TypeScript, Vite- ✅ SQLite database with Entity Framework Core

**Data Layer:**- Tools: Git, Visual Studio Code, Swagger- ✅ React TypeScript frontend with modern UI

- SQLite database

- Entity Framework Core for data access- ✅ Complete CRUD operations

- DbContext for database operations

- Migration system for schema management**Key Deliverables:**- ✅ Input validation and error handling

**Communication Flow:**- Fully functional REST API with authentication- ✅ Responsive design

1. User interacts with React UI

2. Frontend sends HTTP requests via Axios- React-based user interface with TypeScript- ✅ Comprehensive documentation

3. Backend validates and processes requests

4. Entity Framework translates to SQL- SQLite database with Entity Framework integration

5. SQLite executes operations

6. Response flows back through layers- Comprehensive documentation### Technologies Used:

7. UI updates with results

- Clean, maintainable code

---

- **Backend:** C# .NET 8.0, Entity Framework Core, SQLite, Swagger

## 3. Backend Implementation

---- **Frontend:** React 18, TypeScript, Vite, Axios

### 3.1 Technology Stack

- **Tools:** Visual Studio Code, Git, npm, dotnet CLI

- C# .NET 9.0 Web API

- Entity Framework Core 9.0## 2. Introduction

- SQLite database

- Swashbuckle for Swagger documentation---

### 3.2 Project Structure### 2.1 Project Objective

```## 2. Project Overview

LibraryAPI/

├── Controllers/The primary objective was to develop a Library Management System that allows users to effectively manage book collections through a web interface. The system needed to support all basic CRUD operations and provide a secure, user-friendly experience.

│   ├── AuthController.cs

│   └── BooksController.cs### 2.1 Objective

├── Data/

│   └── LibraryContext.cs### 2.2 Scope

├── Models/

│   ├── Book.csThe primary objective was to create a simple yet functional Library Management System that allows users to effectively manage book records through an intuitive web interface backed by a robust REST API.

│   └── User.cs

├── Migrations/The project scope included:

├── Program.cs

└── appsettings.json- Backend REST API with book management endpoints### 2.2 Scope

```

- User authentication system (optional feature, implemented)

### 3.3 Models

- SQLite database integrationThe project scope included:

**Book Model:**

- Id (int): Primary key, auto-generated- React frontend with TypeScript

- Title (string): Required, max 200 characters

- Author (string): Required, max 100 characters- Input validation on both client and server- Backend API with book CRUD operations

- Description (string): Optional, max 1000 characters

- CreatedAt (DateTime): Auto-generated timestamp- Error handling throughout the application- SQLite database integration

- UpdatedAt (DateTime): Auto-updated timestamp

- Responsive design for multiple devices- Frontend user interface

**User Model:**

- Id (int): Primary key- Input validation and error handling

- Username (string): Required, unique, 3-50 characters

- Email (string): Required, unique, valid email### 2.3 Timeline- Documentation and deployment instructions

- PasswordHash (string): SHA256 hashed password

- CreatedAt (DateTime): Registration timestamp

### 3.4 ControllersThe project was completed within one week as specified in the assignment requirements, from October 22 to October 28, 2025.### 2.3 Timeline

**BooksController - CRUD Endpoints:**

- GET /api/books - Returns all books

- GET /api/books/{id} - Returns specific book---The project was completed within the one-week timeline as specified in the assignment requirements.

- POST /api/books - Creates new book

- PUT /api/books/{id} - Updates book

- DELETE /api/books/{id} - Deletes book

## 3. System Architecture---

Each endpoint includes:

- Async/await for non-blocking operations

- Try-catch blocks for error handling

- Appropriate HTTP status codes### 3.1 Architecture Overview## 3. System Architecture

- Model validation

- Logging

**AuthController - Authentication:**The application follows a three-tier architecture pattern:### 3.1 Architecture Pattern

- POST /api/auth/register - User registration

- POST /api/auth/login - User login

Features:**Presentation Layer (Frontend):**The application follows a **three-tier architecture**:

- Password hashing with SHA256

- Duplicate username/email checking- React components for user interface

- Input validation

- Error messages- TypeScript for type safety```

### 3.5 Database Context- Service layer for API communication┌─────────────────────────────────────────┐

LibraryContext manages:- State management using React hooks│ Presentation Layer │

- Entity relationship configuration

- Unique indexes for username and email│ (React TypeScript Frontend) │

- Database connection management

- Migration handling**Application Layer (Backend):**│ - Components (BookForm, BookList) │

### 3.6 Configuration- ASP.NET Core Web API│ - Services (API communication) │

**CORS:** Configured to allow requests from localhost:3000 for frontend communication.- Controllers for handling HTTP requests│ - State Management (React Hooks) │

**Swagger:** Interactive API documentation available at the root URL.- Middleware for CORS and error handling└─────────────┬───────────────────────────┘

---- Model validation │ HTTP/REST

## 4. Frontend Implementation │

### 4.1 Technology Stack**Data Layer:**┌─────────────▼───────────────────────────┐

- React 18- SQLite database│ Application Layer │

- TypeScript 5

- Vite (build tool)- Entity Framework Core for data access│ (ASP.NET Core Web API) │

- Axios (HTTP client)

- CSS3 (styling)- DbContext for database operations│ - Controllers (BooksController) │

### 4.2 Project Structure- Migration system for schema management│ - Middleware (CORS, Error Handling) │

````│ - Validation                           │

library-frontend/src/

├── components/### 3.2 Communication Flow└─────────────┬───────────────────────────┘

│   ├── AuthForm.tsx

│   ├── BookForm.tsx              │ Entity Framework Core

│   └── BookList.tsx

├── services/1. User interacts with React UI components              │

│   ├── authService.ts

│   └── bookService.ts2. Frontend sends HTTP requests via Axios┌─────────────▼───────────────────────────┐

├── types/

│   ├── Book.ts3. Backend API receives and validates requests│          Data Layer                     │

│   └── User.ts

├── App.tsx4. Entity Framework translates to SQL queries│       (SQLite Database)                 │

└── main.tsx

```5. SQLite database executes operations│  - Books Table                          │



### 4.3 Components6. Response flows back through the layers│  - LibraryContext (DbContext)           │



**App Component:**7. UI updates with the results└─────────────────────────────────────────┘

- Manages global application state

- Handles authentication state```

- Coordinates data flow

- Manages success and error messages---

- Controls component visibility based on login

### 3.2 Communication Flow

**AuthForm Component:**

- Switches between login and register modes## 4. Backend Implementation

- Validates user input

- Communicates with authentication API1. User interacts with React UI

- Displays error messages

- Redirects after successful authentication### 4.1 Technology Stack2. Frontend sends HTTP requests via Axios



**BookForm Component:**3. ASP.NET Core API receives and validates requests

- Handles book creation and editing

- Validates form fieldsThe backend was built using:4. Entity Framework translates to SQL queries

- Displays character counters

- Handles both add and edit modes- C# .NET 9.0 Web API5. SQLite database executes queries

- Provides cancel functionality

- Entity Framework Core 9.06. Response flows back through the layers

**BookList Component:**

- Displays books in grid layout- SQLite database

- Provides edit and delete buttons

- Shows confirmation dialogs- Swashbuckle for Swagger/OpenAPI documentation---

- Displays empty state when no books

- Formats dates for display



### 4.4 Services### 4.2 Project Structure## 4. Backend Implementation



**authService:**

- register() - Creates new user

- login() - Authenticates user```### 4.1 Project Structure

- saveUser() - Stores in localStorage

- getCurrentUser() - Retrieves logged-in userLibraryAPI/

- logout() - Clears session

- isAuthenticated() - Checks login status├── Controllers/The backend is organized using ASP.NET Core Web API best practices:



**bookService:**│   ├── AuthController.cs

- getAllBooks() - Fetches all books

- getBook() - Fetches single book│   └── BooksController.cs```

- createBook() - Creates new book

- updateBook() - Updates book├── Data/LibraryAPI/

- deleteBook() - Removes book

│   └── LibraryContext.cs├── Controllers/

All methods include error handling.

├── Models/│   └── BooksController.cs    # API endpoints

### 4.5 TypeScript Types

│   ├── Book.cs├── Data/

Interfaces for type safety:

- Book interface│   └── User.cs│   └── LibraryContext.cs     # DbContext

- CreateBookDto

- UpdateBookDto├── Migrations/├── Models/

- User interface

- RegisterData├── Program.cs│   └── Book.cs               # Entity model

- LoginData

- AuthResponse└── appsettings.json├── Program.cs                # Entry point



### 4.6 Styling```└── appsettings.json          # Configuration



CSS features:```

- Responsive grid layouts

- Form styling with validation feedback### 4.3 Models

- Button hover effects

- Card-based book display### 4.2 Book Model

- Consistent color scheme

- Mobile-responsive breakpoints**Book Model:**



---The Book entity represents a library book with the following properties:The `Book` model represents the core entity with the following properties:



## 5. Database Design- Id (int): Primary key, auto-generated



### 5.1 Schema- Title (string): Required, maximum 200 characters```csharp



**Books Table:**- Author (string): Required, maximum 100 characterspublic class Book

- Id (INTEGER, PRIMARY KEY)

- Title (TEXT, NOT NULL)- Description (string): Optional, maximum 1000 characters{

- Author (TEXT, NOT NULL)

- Description (TEXT, NULL)- CreatedAt (DateTime): Auto-generated timestamp    public int Id { get; set; }                    // Primary key

- CreatedAt (DATETIME)

- UpdatedAt (DATETIME)- UpdatedAt (DateTime): Auto-updated timestamp    public string Title { get; set; }              // Required, max 200 chars



**Users Table:**    public string Author { get; set; }             // Required, max 100 chars

- Id (INTEGER, PRIMARY KEY)

- Username (TEXT, NOT NULL, UNIQUE)**User Model:**    public string? Description { get; set; }       // Optional, max 1000 chars

- Email (TEXT, NOT NULL, UNIQUE)

- PasswordHash (TEXT, NOT NULL)The User entity supports authentication:    public DateTime CreatedAt { get; set; }        // Auto-generated

- CreatedAt (DATETIME)

- Id (int): Primary key    public DateTime UpdatedAt { get; set; }        // Auto-updated

### 5.2 Indexes

- Username (string): Required, unique, 3-50 characters}

Unique indexes on:

- Users.Username- Email (string): Required, unique, valid email format```

- Users.Email

- PasswordHash (string): Hashed password using SHA256

These ensure data integrity and improve query performance.

- CreatedAt (DateTime): Registration timestamp**Validation Attributes:**

---



## 6. Development Process

### 4.4 Controllers- `[Required]` - Ensures mandatory fields are provided

### 6.1 Backend Development (Days 1-3)

- `[StringLength]` - Enforces maximum character limits

1. Created ASP.NET Core Web API project

2. Designed Book model with validation**BooksController:**- Error messages - Provides user-friendly validation feedback

3. Set up Entity Framework DbContext

4. Created database migrationImplements all CRUD operations for books:

5. Implemented BooksController with CRUD

6. Configured CORS- GET /api/books - Returns all books### 4.3 Database Context

7. Added Swagger documentation

8. Created User model and AuthController- GET /api/books/{id} - Returns specific book

9. Added password hashing

10. Tested all endpoints- POST /api/books - Creates new book`LibraryContext` manages the database connection and entity configuration:



### 6.2 Frontend Development (Days 4-6)- PUT /api/books/{id} - Updates existing book



1. Initialized React project with Vite- DELETE /api/books/{id} - Deletes book**Key Features:**

2. Set up TypeScript configuration

3. Created type definitions

4. Implemented bookService

5. Built BookForm componentEach endpoint includes:- Configures entity properties and constraints

6. Built BookList component

7. Created styling- Async/await for non-blocking operations- Implements seed data for initial testing

8. Implemented authService

9. Created AuthForm component- Try-catch blocks for error handling- Ensures database creation on application start

10. Integrated authentication

11. Protected routes- Appropriate HTTP status codes- Manages database migrations

12. Added session management

- Model validation

### 6.3 Final Polish (Day 7)

- Logging for debugging### 4.4 API Controller

1. Improved UI styling

2. Added error handling

3. Implemented loading states

4. Created documentation**AuthController:**`BooksController` implements RESTful endpoints:

5. Final testing

6. Code cleanupHandles user authentication:



### 6.4 Version Control- POST /api/auth/register - User registration| Method | Endpoint          | Description     | Status Codes            |



Used Git throughout with:- POST /api/auth/login - User login| ------ | ----------------- | --------------- | ----------------------- |

- Regular commits with descriptive messages

- Organized commit history| GET    | `/api/books`      | Get all books   | 200, 500                |

- Pushed to GitHub

- Clean repository structureFeatures:| GET    | `/api/books/{id}` | Get book by ID  | 200, 404, 500           |



---- Password hashing with SHA256| POST   | `/api/books`      | Create new book | 201, 400, 500           |



## 7. Challenges and Solutions- Duplicate username/email checking| PUT    | `/api/books/{id}` | Update book     | 204, 400, 404, 409, 500 |



### 7.1 CORS Configuration- Input validation| DELETE | `/api/books/{id}` | Delete book     | 204, 404, 500           |



**Problem:** Frontend could not communicate with backend due to CORS policy.- Error messages for failed operations



**Solution:** Configured CORS in Program.cs to allow requests from localhost:3000.**Error Handling Strategy:**



**Learning:** Understanding browser security policies and proper CORS configuration.### 4.5 Database Context



### 7.2 Entity Framework Setup- Try-catch blocks for all operations



**Problem:** First time using Entity Framework Core with SQLite.LibraryContext manages database operations:- Specific error messages for different scenarios



**Solution:** - Configures entity relationships- Logging with ILogger for debugging

- Researched EF Core documentation

- Used EnsureCreated() for database generation- Sets up unique indexes for username and email- Appropriate HTTP status codes

- Properly configured DbContext

- Implemented migrations- Manages database connection



**Learning:** ORM concepts and EF Core abstractions.- Handles migrations### 4.5 CORS Configuration



### 7.3 TypeScript Type Safety



**Problem:** Maintaining type safety across async operations.### 4.6 API ConfigurationCORS is configured to allow frontend access:



**Solution:**

- Created comprehensive interfaces

- Used generic types in Axios calls**CORS Configuration:**```csharp

- Defined DTOs for different operations

- Properly typed all props and stateConfigured to allow requests from the React frontend running on localhost:3000. This enables cross-origin requests during development.builder.Services.AddCors(options =>



**Learning:** Benefits of TypeScript in catching errors at compile-time.{



### 7.4 State Management**Swagger Integration:**    options.AddPolicy("AllowReactApp", policy =>



**Problem:** Coordinating state between multiple components.Swagger UI provides interactive API documentation and testing interface, accessible at the root URL when the backend runs.    {



**Solution:**        policy.WithOrigins("http://localhost:3000")

- Lifted state to App component

- Used React hooks properly---              .AllowAnyHeader()

- Passed callbacks as props

- Implemented localStorage for persistence              .AllowAnyMethod();



**Learning:** React state management patterns.## 5. Frontend Implementation    });



### 7.5 Password Security});



**Problem:** Implementing secure password storage.### 5.1 Technology Stack```



**Solution:**

- Implemented SHA256 hashing

- Never stored plain text passwordsThe frontend was built using:### 4.6 Swagger Integration

- Used secure comparison

- Validated requirements on both sides- React 18



**Learning:** While SHA256 was sufficient for this assignment, production systems should use bcrypt.- TypeScript 5Swagger/OpenAPI provides interactive API documentation:



---- Vite (build tool)



## 8. Testing and Quality Assurance- Axios (HTTP client)- Auto-generated from code



### 8.1 Manual Testing- CSS3 (styling)- Interactive testing interface



Performed comprehensive testing:- Request/response examples



**Create Operations:**### 5.2 Project Structure- Available at application root URL

- Valid book creation

- Missing required fields validation

- Character limit validation

- Success message display```---



**Read Operations:**library-frontend/src/

- Display all books

- Empty state handling├── components/## 5. Frontend Implementation

- Data refresh after operations

│   ├── AuthForm.tsx

**Update Operations:**

- Edit form population│   ├── AuthForm.css### 5.1 Project Structure

- Successful updates

- Validation during updates│   ├── BookForm.tsx

- Cancel functionality

│   ├── BookForm.cssThe frontend follows React best practices with TypeScript:

**Delete Operations:**

- Successful deletion│   ├── BookList.tsx

- Confirmation dialog

- UI updates after deletion│   └── BookList.css```



**Authentication:**├── services/library-frontend/src/

- User registration

- Duplicate validation│   ├── authService.ts├── components/

- Login with valid credentials

- Invalid credentials rejection│   └── bookService.ts│   ├── BookForm.tsx          # Create/Edit form

- Logout functionality

- Session persistence├── types/│   ├── BookForm.css



### 8.2 API Testing│   ├── Book.ts│   ├── BookList.tsx          # Display books



Used Swagger UI:│   └── User.ts│   └── BookList.css

- Tested all endpoints

- Verified HTTP status codes├── App.tsx├── services/

- Checked error responses

- Validated response structure├── App.css│   └── bookService.ts        # API communication



### 8.3 Browser Testing└── main.tsx├── types/



Tested on:```│   └── Book.ts               # TypeScript interfaces

- Google Chrome (latest)

- Microsoft Edge (latest)├── App.tsx                   # Main component

- Firefox (latest)

### 5.3 Components└── main.tsx                  # Entry point

### 8.4 Responsive Design

````

Tested on various screen sizes:

- Desktop (1920x1080)**App Component:**

- Laptop (1366x768)

- Tablet (768px)Main application component that:### 5.2 Component Architecture

- Mobile (375px)

- Manages global application state

---

- Handles authentication state#### App Component (App.tsx)

## 9. Key Learnings and Insights

- Coordinates data flow between components

### 9.1 Technical Learnings

- Manages success and error messages**Responsibilities:**

**C# and .NET:**

- ASP.NET Core Web API architecture- Controls component visibility based on login state

- Entity Framework Core patterns

- C# language features (async/await, LINQ)- Main application state management

- Dependency injection

- Middleware pipeline**AuthForm Component:**- Orchestrates data flow between components

- RESTful API design

Handles user authentication:- Handles success/error messaging

**React and TypeScript:**

- React hooks for state management- Switches between login and register modes- Coordinates CRUD operations

- Component composition

- TypeScript type system- Validates user input

- Effect hooks for side effects

- Props patterns- Communicates with backend authentication API**State Management:**

**Database:**- Displays error messages

- SQLite as embedded database

- Entity Framework migrations- Redirects after successful authentication```typescript

- Database schema design

- CRUD operationsconst [books, setBooks] = useState<Book[]>([]);

**Web Development:\*\***BookForm Component:\*\*const [editingBook, setEditingBook] = useState<Book | null>(null);

- Full-stack architecture

- Client-server communicationManages book creation and editing:const [loading, setLoading] = useState<boolean>(true);

- API design and documentation

- Authentication flows- Accepts book data inputconst [error, setError] = useState<string | null>(null);

- Error handling strategies

- Validates form fieldsconst [successMessage, setSuccessMessage] = useState<string | null>(null);

### 9.2 Problem-Solving Skills

- Displays character counters```

**Independent Learning:**

Successfully learned .NET from scratch, demonstrating ability to:- Handles both add and edit modes

- Read technical documentation

- Research solutions- Provides cancel functionality#### BookForm Component

- Apply new knowledge quickly

- Debug systematically- Shows validation errors

**Code Organization:\*\***Responsibilities:\*\*

- Separation of concerns

- Consistent code structure**BookList Component:**

- Meaningful naming

- Code documentationDisplays book collection:- Renders input form for book data

**Testing:**- Renders books in a grid layout- Validates user input client-side

- Testing edge cases

- Validating user input- Provides edit and delete buttons- Handles both create and edit modes

- Handling errors gracefully

- Thinking about user experience- Shows confirmation dialogs- Provides real-time character counting

### 9.3 Best Practices- Displays empty state when no books exist

**Backend:**- Formats dates for display**Validation Rules:**

- Async/await consistently

- Proper exception handling

- Data validation at model level

- RESTful conventions### 5.4 Services- Title: Required, max 200 characters

- Dependency injection

- Logging for debugging- Author: Required, max 100 characters

**Frontend:\*\***authService:\*\*- Description: Optional, max 1000 characters

- Strong typing with TypeScript

- Reusable componentsCentralized authentication logic:

- Separated business logic into services

- Consistent error handling- register() - Creates new user account#### BookList Component

- Responsive design

- React best practices- login() - Authenticates existing user

**General:**- saveUser() - Stores user in localStorage**Responsibilities:**

- Effective version control

- Clear commit messages- getCurrentUser() - Retrieves logged-in user

- Comprehensive documentation

- Clean code- logout() - Clears user session- Displays books in a responsive grid

- Commented complex logic

- isAuthenticated() - Checks login status- Provides edit and delete actions

### 9.4 Soft Skills

- Shows empty state when no books exist

**Time Management:**

- Broke down project into tasks**bookService:**- Formats dates for display

- Prioritized core features

- Allocated time effectivelyCentralized book API communication:

- Stayed focused on objectives

- getAllBooks() - Fetches all books### 5.3 Service Layer

**Self-Direction:**

- Worked independently- getBook() - Fetches single book

- Made technical decisions

- Solved problems without guidance- createBook() - Creates new book`bookService.ts` encapsulates all API communication:

- Delivered complete solution

- updateBook() - Updates existing book

**Documentation:**

- Clear README instructions- deleteBook() - Removes book**Benefits:**

- Comprehensive report

- Code comments

- API documentation

All service methods include error handling and return appropriate error messages.- Centralized API logic

---

- Reusable across components

## 10. Conclusion

### 5.5 Type Safety- Error handling in one place

### 10.1 Project Success

- Type-safe with TypeScript interfaces

All requirements were met:

- Backend REST API with CRUD operationsTypeScript interfaces ensure type safety:

- C# .NET 9.0 implementation

- SQLite with Entity Framework Core- Book interface for book objects**Error Handling:**

- React TypeScript frontend

- Input validation on both sides- CreateBookDto for creating books

- Error handling throughout

- Responsive UI- UpdateBookDto for updating books```typescript

- Complete documentation

- User authentication (optional feature)- User interface for user objectstry {

### 10.2 Technical Achievement- RegisterData for registration const response = await apiClient.get<Book[]>("/books");

The project demonstrates:- LoginData for login return response.data;

- Ability to learn new technologies quickly

- Understanding of full-stack development- AuthResponse for authentication responses} catch (error) {

- Knowledge of modern web practices

- Capability to build complete applications console.error("Error fetching books:", error);

- Proficiency in problem-solving

### 5.6 Styling throw new Error("Failed to fetch books. Please try again later.");

### 10.3 Code Quality

}

The codebase exhibits:

- Clean, readable codeCSS provides:```

- Consistent formatting

- Proper error handling- Responsive grid layouts

- Comprehensive comments

- Logical organization- Form styling with validation feedback### 5.4 TypeScript Types

- Best practices implementation

- Button hover effects

### 10.4 Personal Growth

- Card-based book displayStrong typing throughout the application:

Enhanced skills in:

- Full-stack web development- Color scheme for consistency

- Working with new frameworks

- Building RESTful APIs- Mobile-responsive breakpoints```typescript

- Database design

- Frontend developmentexport interface Book {

- Problem-solving

- Technical documentation--- id: number;

### 10.5 Future Enhancements title: string;

Potential improvements:## 6. Database Design author: string;

- JWT token authentication

- Book categories and tags description?: string;

- Search and filter functionality

- Pagination### 6.1 Schema createdAt?: string;

- Book cover images

- User roles and permissions updatedAt?: string;

- Borrowing system

- Email notificationsThe database consists of two main tables:}

- Export functionality

### 10.6 Final Thoughts

**Books Table:**export interface CreateBookDto {

Building this Library Management System was an excellent learning experience. Despite having no prior .NET experience, I successfully delivered a complete, functional application that meets all requirements and includes optional features.

- Id (INTEGER, PRIMARY KEY) title: string;

The project demonstrated my ability to:

- Learn independently- Title (TEXT, NOT NULL) author: string;

- Work with unfamiliar technologies

- Follow best practices- Author (TEXT, NOT NULL) description?: string;

- Deliver quality code

- Meet deadlines- Description (TEXT, NULL)}

- Document work thoroughly

- CreatedAt (DATETIME, DEFAULT NOW)```

I am confident this project showcases my capabilities as a software engineer and readiness to contribute to a development team.

- UpdatedAt (DATETIME, DEFAULT NOW)

---

### 5.5 Styling and UX

## Appendices

**Users Table:**

### Appendix A: Development Environment

- Id (INTEGER, PRIMARY KEY)**Design Principles:**

- Operating System: Windows 11

- IDE: Visual Studio Code- Username (TEXT, NOT NULL, UNIQUE)

- .NET SDK: 9.0

- Node.js: 18.x- Email (TEXT, NOT NULL, UNIQUE)- **Responsive:** Works on desktop, tablet, and mobile

- Browser: Google Chrome

- Version Control: Git- PasswordHash (TEXT, NOT NULL)- **Accessible:** Proper labels and semantic HTML

### Appendix B: Dependencies- CreatedAt (DATETIME, DEFAULT NOW)- **Modern:** Gradient headers, shadows, animations

**Backend:**- **User-friendly:** Clear feedback, confirmation dialogs

- Microsoft.EntityFrameworkCore.Sqlite: 9.0.0

- Microsoft.EntityFrameworkCore.Design: 9.0.10### 6.2 Relationships

- Microsoft.EntityFrameworkCore.Tools: 9.0.0

- Swashbuckle.AspNetCore: 6.5.0**CSS Features:**

**Frontend:**Currently, the schema maintains separate tables without foreign key relationships. This design keeps the implementation simple for the assignment scope.

- React: 18.2.0

- TypeScript: 5.2.2- CSS custom properties (variables) for theming

- Vite: 5.0.8

- Axios: 1.6.0Future enhancements could include:- Flexbox and Grid for layouts

### Appendix C: Repository- User-to-Book relationships for ownership- Smooth transitions and hover effects

- Repository: Software-Engineering-Internship-Assignment- Borrowing records linking users and books- Media queries for responsiveness

- Owner: SamashaHettiarachchi

- URL: https://github.com/SamashaHettiarachchi/Software-Engineering-Internship-Assignment- Categories table with many-to-many relationships

---

**Report Submitted By:** Samasha Hettiarachchi ### 6.3 Indexes

**Date:** October 28, 2025

**Submitted To:** Expernetic LLC ## 6. Database Design

**Email:** people@expernetic.com

Unique indexes on:

---

- Users.Username### 6.1 Schema

_This report was prepared as part of the Software Engineering Internship Assignment for Expernetic LLC. All code was written independently without the use of AI tools or external assistance._

- Users.Email

The database consists of a single table for this assignment:

These indexes ensure data integrity and improve query performance.

**Books Table:**

---

````

## 7. Development Process┌─────────────┬──────────────┬──────────────┬─────────┐

│ Column      │ Type         │ Constraints  │ Notes   │

### 7.1 Planning Phase├─────────────┼──────────────┼──────────────┼─────────┤

│ Id          │ INTEGER      │ PRIMARY KEY  │ Auto    │

The development began with careful analysis of the assignment requirements. I identified the core features needed and planned the architecture to support both mandatory and optional features.│ Title       │ TEXT         │ NOT NULL     │ Max 200 │

│ Author      │ TEXT         │ NOT NULL     │ Max 100 │

### 7.2 Backend Development│ Description │ TEXT         │ NULL         │ Max 1000│

│ CreatedAt   │ DATETIME     │ DEFAULT NOW  │         │

**Day 1-2: Backend Foundation**│ UpdatedAt   │ DATETIME     │ DEFAULT NOW  │         │

1. Created ASP.NET Core Web API project└─────────────┴──────────────┴──────────────┴─────────┘

2. Designed Book model with validation attributes```

3. Set up Entity Framework DbContext

4. Created initial database migration### 6.2 Seed Data

5. Implemented BooksController with all CRUD endpoints

6. Configured CORS for frontend accessThree sample books are seeded for testing:

7. Added Swagger documentation

8. Tested all endpoints using Swagger UI1. "The Great Gatsby" by F. Scott Fitzgerald

2. "To Kill a Mockingbird" by Harper Lee

**Day 3: Authentication Implementation**3. "1984" by George Orwell

1. Created User model and DTOs

2. Implemented AuthController### 6.3 Database File

3. Added password hashing

4. Created authentication endpoints- **Location:** `Backend/LibraryAPI/library.db`

5. Updated database with Users table- **Type:** SQLite

6. Tested authentication flow- **Size:** Lightweight, ~100KB

- **Creation:** Automatic on first run

### 7.3 Frontend Development

---

**Day 4-5: Frontend Foundation**

1. Initialized React project with Vite## 7. API Documentation

2. Set up TypeScript configuration

3. Created type definitions### 7.1 Base URL

4. Implemented bookService for API calls

5. Built BookForm component```

6. Built BookList componentDevelopment: http://localhost:5001/api

7. Created basic styling```



**Day 6: Authentication UI**### 7.2 Endpoints

1. Implemented authService

2. Created AuthForm component#### GET /api/books

3. Added login/register functionality

4. Integrated authentication with main app**Description:** Retrieve all books

5. Protected routes requiring login

6. Added session management**Response (200):**



**Day 7: Polish and Documentation**```json

1. Improved UI styling[

2. Added error handling  {

3. Implemented loading states    "id": 1,

4. Created README documentation    "title": "The Great Gatsby",

5. Final testing    "author": "F. Scott Fitzgerald",

6. Code cleanup    "description": "A classic American novel",

    "createdAt": "2025-10-25T10:00:00Z",

### 7.4 Version Control    "updatedAt": "2025-10-25T10:00:00Z"

  }

Used Git throughout development:]

- Regular commits with descriptive messages```

- Organized commit history

- Pushed to GitHub repository#### GET /api/books/{id}

- Maintained clean repository structure

**Description:** Retrieve a specific book

---

**Response (200):**

## 8. Challenges and Solutions

```json

### 8.1 Challenge: CORS Configuration{

  "id": 1,

**Problem:**  "title": "The Great Gatsby",

Initial frontend-backend communication failed due to CORS policy blocking cross-origin requests.  "author": "F. Scott Fitzgerald",

  "description": "A classic American novel",

**Solution:**  "createdAt": "2025-10-25T10:00:00Z",

Configured CORS in the backend Program.cs to specifically allow requests from localhost:3000. Added proper middleware ordering to ensure CORS was applied before other middleware.  "updatedAt": "2025-10-25T10:00:00Z"

}

**Learning:**```

Understanding browser security policies and proper CORS configuration is essential for web applications.

**Response (404):**

### 8.2 Challenge: Entity Framework Configuration

```json

**Problem:**{

First time using Entity Framework Core with SQLite. Encountered issues with database creation and migrations.  "message": "Book with ID 1 not found"

}

**Solution:**```

- Studied Entity Framework Core documentation

- Used EnsureCreated() for automatic database generation#### POST /api/books

- Properly configured DbContext with correct connection string

- Implemented migrations for schema changes**Description:** Create a new book



**Learning:****Request Body:**

Entity Framework Core provides a powerful abstraction over database operations, making it easier to work with databases in C#.

```json

### 8.3 Challenge: TypeScript Type Safety{

  "title": "New Book",

**Problem:**  "author": "Author Name",

Maintaining type safety across async operations and API calls was initially challenging.  "description": "Book description"

}

**Solution:**```

- Created comprehensive TypeScript interfaces

- Used generic types in Axios calls**Response (201):**

- Defined separate DTOs for different operations

- Properly typed all component props and state```json

{

**Learning:**  "id": 4,

TypeScript's type system catches many errors at compile-time, significantly improving code quality and developer experience.  "title": "New Book",

  "author": "Author Name",

### 8.4 Challenge: State Management  "description": "Book description",

  "createdAt": "2025-10-25T12:00:00Z",

**Problem:**  "updatedAt": "2025-10-25T12:00:00Z"

Coordinating state between multiple components and managing authentication state.}

````

**Solution:**

- Lifted state to the App component**Response (400):**

- Used React hooks (useState, useEffect) properly

- Passed callbacks as props for child-to-parent communication```json

- Implemented localStorage for persistent authentication{

  "errors": {

**Learning:** "Title": ["Title is required"]

React's component model and hooks provide elegant solutions for state management in single-page applications. }

}

### 8.5 Challenge: Password Security```

**Problem:**#### PUT /api/books/{id}

Needed to implement secure password storage without using third-party authentication libraries.

**Description:** Update an existing book

**Solution:**

- Implemented SHA256 hashing for passwords**Request Body:**

- Never stored plain text passwords

- Used secure comparison for password verification```json

- Validated password requirements on both client and server{

  "id": 1,

**Learning:** "title": "Updated Title",

While SHA256 was sufficient for this assignment, production systems should use bcrypt or similar algorithms designed specifically for password hashing. "author": "Updated Author",

"description": "Updated description"

---}

```

## 9. Testing and Quality Assurance

**Response (204):** No content

### 9.1 Manual Testing

#### DELETE /api/books/{id}

Performed comprehensive manual testing for all features:

**Description:** Delete a book

**Create Operations:**

- Created books with valid data**Response (204):** No content

- Tested validation for missing required fields

- Verified character limit enforcement---

- Confirmed success messages display correctly

## 8. Challenges and Solutions

**Read Operations:**

- Verified all books display correctly### 8.1 Challenge: CORS Issues

- Tested empty state when no books exist

- Confirmed data refresh after operations**Problem:** Frontend couldn't communicate with backend due to CORS policy.



**Update Operations:****Solution:**

- Edited existing books successfully

- Verified form population with current data- Configured CORS in `Program.cs`

- Tested validation during updates- Allowed specific origin (localhost:3000)

- Confirmed cancel functionality works- Enabled all headers and methods



**Delete Operations:****Learning:** Understanding browser security policies and proper CORS configuration.

- Deleted books successfully

- Verified confirmation dialog appears### 8.2 Challenge: Entity Framework Setup

- Confirmed UI updates after deletion

**Problem:** First time using Entity Framework Core and SQLite together.

**Authentication:**

- Registered new users successfully**Solution:**

- Tested duplicate username/email validation

- Logged in with valid credentials- Researched EF Core documentation

- Verified invalid credentials are rejected- Used proper NuGet packages

- Tested logout functionality- Implemented DbContext correctly

- Confirmed session persistence- Used EnsureCreated() for database initialization



### 9.2 API Testing**Learning:** ORM concepts and how EF Core abstracts database operations.



Used Swagger UI extensively:### 8.3 Challenge: TypeScript Type Safety

- Tested all endpoints with various inputs

- Verified correct HTTP status codes**Problem:** Maintaining type safety across async API calls.

- Checked error responses

- Validated response data structure**Solution:**



### 9.3 Browser Testing- Created comprehensive TypeScript interfaces

- Used generic types in Axios calls

Tested the application in:- Implemented DTOs for different operations

- Google Chrome (latest version)

- Microsoft Edge (latest version)**Learning:** Benefits of TypeScript in catching errors at compile-time.

- Firefox (latest version)

### 8.4 Challenge: State Management

All browsers displayed and functioned correctly.

**Problem:** Coordinating state between multiple components.

### 9.4 Responsive Design Testing

**Solution:**

Tested on various screen sizes:

- Desktop (1920x1080)- Lifted state to App component

- Laptop (1366x768)- Passed callbacks as props

- Tablet (768px width)- Used useEffect for side effects

- Mobile (375px width)- Implemented proper state updates



The responsive design worked correctly on all sizes.**Learning:** React state management patterns and component communication.



---### 8.5 Challenge: Error Handling



## 10. Key Insights and Learnings**Problem:** Providing meaningful error messages to users.



### 10.1 Technical Learnings**Solution:**



**C# and .NET:**- Try-catch blocks throughout

This was my first experience with C# and the .NET framework. I learned:- Specific error messages for scenarios

- ASP.NET Core Web API architecture and conventions- User-friendly error display in UI

- Entity Framework Core ORM patterns and best practices- Console logging for debugging

- C# language features including async/await, LINQ, and properties

- Dependency injection principles in .NET**Learning:** Importance of proper error handling for user experience.

- Middleware pipeline configuration

- RESTful API design principles---



**React and TypeScript:**## 9. Testing and Quality Assurance

Enhanced my understanding of:

- React hooks for state management### 9.1 Testing Approach

- Component composition and reusability

- TypeScript type system and interfaces#### Manual Testing

- Effect hooks for side effects and data fetching

- Props patterns and component communicationPerformed comprehensive manual testing for all CRUD operations:



**Database Management:****Create Operations:**

Gained practical experience with:

- SQLite as an embedded database solution- ✅ Valid book creation

- Entity Framework Core migrations- ✅ Missing required fields validation

- Database schema design- ✅ Character limit validation

- CRUD operations at the data layer- ✅ Success message display



**Web Development:****Read Operations:**

Improved understanding of:

- Full-stack application architecture- ✅ Display all books

- Client-server communication- ✅ Empty state when no books

- API design and documentation- ✅ Loading state while fetching

- Authentication flows

- Error handling strategies**Update Operations:**



### 10.2 Problem-Solving Skills- ✅ Edit form population

- ✅ Successful updates

**Independent Learning:**- ✅ Validation during updates

Successfully learned a new framework (.NET) from scratch within the project timeline. This demonstrated my ability to:- ✅ Cancel functionality

- Read and understand technical documentation

- Research solutions to problems**Delete Operations:**

- Apply new knowledge quickly

- Debug issues systematically- ✅ Confirmation dialog

- ✅ Successful deletion

**Code Organization:**- ✅ UI update after deletion

Learned the importance of:

- Separation of concerns#### API Testing

- Consistent code structure

- Meaningful naming conventionsUsed Swagger UI to test all endpoints:

- Code documentation

- ✅ GET requests return correct data

**Testing Mindset:**- ✅ POST creates new resources

Developed better testing habits:- ✅ PUT updates existing resources

- Testing edge cases- ✅ DELETE removes resources

- Validating user input- ✅ Error responses have correct status codes

- Handling errors gracefully

- Thinking about user experience### 9.2 Code Quality Measures



### 10.3 Best Practices Applied**Backend:**



**Backend:**- Consistent naming conventions (PascalCase)

- Used async/await consistently for non-blocking operations- XML documentation comments

- Implemented proper exception handling- Proper async/await usage

- Applied data validation at the model level- Dependency injection

- Followed RESTful API conventions- Separation of concerns

- Used dependency injection

- Added logging for debugging**Frontend:**



**Frontend:**- Component-based architecture

- Implemented strong typing with TypeScript- TypeScript for type safety

- Created reusable components- JSDoc comments

- Separated business logic into services- Consistent formatting

- Used consistent error handling- Reusable components

- Applied responsive design principles

- Followed React best practices### 9.3 Browser Compatibility



**General:**Tested on:

- Used version control effectively

- Wrote clear commit messages- ✅ Google Chrome (latest)

- Created comprehensive documentation- ✅ Microsoft Edge (latest)

- Maintained clean code- ✅ Firefox (latest)

- Commented complex logic

### 9.4 Responsive Design Testing

### 10.4 Soft Skills Development

Tested on various screen sizes:

**Time Management:**

Successfully completed all requirements within the one-week deadline by:- ✅ Desktop (1920x1080)

- Breaking down the project into manageable tasks- ✅ Laptop (1366x768)

- Prioritizing core features first- ✅ Tablet (768x1024)

- Allocating time effectively- ✅ Mobile (375x667)

- Staying focused on objectives

---

**Self-Direction:**

Demonstrated ability to:## 10. Key Learnings and Insights

- Work independently

- Make technical decisions### 10.1 Technical Learnings

- Solve problems without guidance

- Deliver a complete solution**C# and .NET:**



**Documentation:**- Understanding of ASP.NET Core Web API architecture

Improved technical writing skills by:- Entity Framework Core ORM patterns

- Creating clear README instructions- Dependency injection in .NET

- Writing this comprehensive report- Middleware pipeline configuration

- Adding code comments- Async programming with Task<T>

- Documenting API endpoints

**React and TypeScript:**

---

- React hooks for state management

## 11. Conclusion- TypeScript interface design

- Component composition patterns

### 11.1 Project Success- Props and callback patterns

- Effect hooks for side effects

The Library Management System was successfully completed within the specified timeline with all requirements met:

**Database:**

**Core Requirements Completed:**

- Backend REST API with all CRUD operations- SQLite integration with EF Core

- C# .NET implementation with proper architecture- Database migrations and seeding

- SQLite database with Entity Framework Core- CRUD operations at database level

- React TypeScript frontend- Connection string configuration

- Input validation on both client and server

- Error handling throughout the application**API Design:**

- Responsive user interface

- Complete documentation- RESTful API principles

- HTTP status code usage

**Optional Features Implemented:**- Request/response patterns

- User authentication system- API versioning considerations

- Secure password hashing

- Login and registration functionality### 10.2 Soft Skills Development

- Session management

- Protected routes**Problem Solving:**



### 11.2 Technical Achievement- Breaking down complex requirements

- Researching solutions independently

The project demonstrates:- Debugging systematic approach

- Ability to learn new technologies quickly- Testing methodologies

- Understanding of full-stack development

- Knowledge of modern web development practices**Time Management:**

- Capability to build a complete, functional application

- Proficiency in problem-solving and debugging- Prioritizing features

- Meeting deadlines

### 11.3 Code Quality- Balancing quality with speed



The codebase exhibits:**Documentation:**

- Clean, readable code

- Consistent formatting and naming- Writing clear README files

- Proper error handling- Code documentation practices

- Comprehensive comments- Creating comprehensive reports

- Logical organization

- Best practices implementation### 10.3 Best Practices Learned



### 11.4 Personal Growth1. **Separation of Concerns:** Keep different responsibilities in different files/classes

2. **Error Handling:** Always handle errors gracefully

This project significantly enhanced my skills in:3. **Validation:** Validate on both client and server

- Full-stack web development4. **Documentation:** Code should be self-documenting with comments

- Working with new frameworks and languages5. **Version Control:** Use Git for tracking changes

- Building RESTful APIs6. **User Experience:** Always think about the end user

- Database design and management

- Frontend development with modern frameworks---

- Problem-solving and debugging

- Technical documentation## 11. Future Enhancements



### 11.5 Future Enhancements### 11.1 Authentication and Authorization



Potential improvements for future versions:**Description:** Implement user registration and login

- JWT token-based authentication for better security

- Book categories and tags**Benefits:**

- Search and filter functionality

- Pagination for large datasets- Multiple users can manage their own books

- Book cover image uploads- Secure access to the system

- User roles and permissions- Role-based permissions

- Book borrowing system

- Email notifications**Implementation:**

- Export functionality

- ASP.NET Core Identity

### 11.6 Final Thoughts- JWT tokens

- Login/Register components

Building this Library Management System from scratch was an excellent learning experience. Despite having no prior experience with .NET, I successfully delivered a complete, functional application that meets all requirements and includes optional features.

### 11.2 Advanced Search and Filtering

The project demonstrated my ability to:

- Learn independently**Description:** Add search functionality and filters

- Work with unfamiliar technologies

- Follow best practices**Features:**

- Deliver quality code

- Meet deadlines- Search by title, author, or description

- Document work thoroughly- Filter by date added

- Sort options (A-Z, newest first, etc.)

I am confident this project showcases my capabilities as a software engineer and my readiness to contribute effectively to a development team.

### 11.3 Pagination

---

**Description:** Implement pagination for large datasets

## Appendices

**Benefits:**

### Appendix A: Development Environment

- Better performance

- Operating System: Windows 11- Improved UX with many books

- IDE: Visual Studio Code

- .NET SDK: 9.0**Implementation:**

- Node.js: 18.x

- Browser: Google Chrome- Server-side pagination

- Version Control: Git- Page controls in UI



### Appendix B: Dependencies### 11.4 Book Categories



**Backend Packages:****Description:** Add categories/genres for books

- Microsoft.EntityFrameworkCore.Sqlite: 9.0.0

- Microsoft.EntityFrameworkCore.Design: 9.0.10**Features:**

- Microsoft.EntityFrameworkCore.Tools: 9.0.0

- Swashbuckle.AspNetCore: 6.5.0- Category management

- Filter by category

**Frontend Packages:**- Category statistics

- React: 18.2.0

- TypeScript: 5.2.2### 11.5 Image Upload

- Vite: 5.0.8

- Axios: 1.6.0**Description:** Allow book cover images



### Appendix C: Repository Information**Implementation:**



- Repository: Software-Engineering-Internship-Assignment- File upload endpoint

- Owner: SamashaHettiarachchi- Image storage

- URL: https://github.com/SamashaHettiarachchi/Software-Engineering-Internship-Assignment- Image display in UI



---### 11.6 Export Functionality



**Report Submitted By:**  **Description:** Export book list to CSV/PDF

Samasha Hettiarachchi

**Benefits:**

**Date:**

October 28, 2025- Data backup

- Reporting capabilities

**Submitted To:**

Expernetic LLC  ### 11.7 Dark Mode

Email: people@expernetic.com

**Description:** Add dark theme option

---

**Benefits:**

*This report was prepared as part of the Software Engineering Internship Assignment for Expernetic LLC. All code was written independently without the use of AI tools or external assistance.*

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

````

### Appendix D: Running Instructions Summary

**Backend:**

```powershell
cd Backend\LibraryAPI
dotnet restore
dotnet run
````

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
