# Library Management System - Project Report

**Student Name:** Samasha Hettiarachchi  
**Project:** Library Management System  
**Date:** October 28, 2025  
**Repository:** [Software-Engineering-Internship-Assignment](https://github.com/SamashaHettiarachchi/Software-Engineering-Internship-Assignment)

---

## Executive Summary

This project is a full-stack Library Management System that demonstrates modern web development practices using .NET 9 for the backend and React with TypeScript for the frontend. The application provides user authentication and complete CRUD operations for book management, showcasing RESTful API design and responsive user interface development.

---

## 1. Project Overview

### 1.1 Objectives

- Develop a secure authentication system for users
- Implement comprehensive book management functionality
- Create a RESTful API following industry best practices
- Build a modern, responsive frontend interface
- Utilize Entity Framework Core for database operations

### 1.2 Technology Stack

**Backend:**

- .NET 9 (ASP.NET Core Web API)
- Entity Framework Core
- SQLite Database
- JWT Authentication (if implemented)

**Frontend:**

- React 18
- TypeScript
- Vite (Build tool)
- CSS3 for styling

---

## 2. Backend Implementation

### 2.1 Architecture

The backend follows a layered architecture pattern:

- **Controllers Layer:** Handles HTTP requests and responses
- **Data Layer:** Manages database context and migrations
- **Models Layer:** Defines entity structures

### 2.2 Key Components

#### 2.2.1 Database Context

- Implemented `LibraryContext` using Entity Framework Core
- Configured SQLite as the database provider
- Managed database schema through migrations

#### 2.2.2 Models

- **User Model:** Handles user authentication data (username, password)
- **Book Model:** Manages book information (title, author, ISBN, publication year, availability)

#### 2.2.3 Controllers

- **AuthController:** Manages user registration and login
- **BooksController:** Handles CRUD operations for books

#### 2.2.4 API Endpoints

| Method | Endpoint           | Description            |
| ------ | ------------------ | ---------------------- |
| POST   | /api/auth/register | Register new user      |
| POST   | /api/auth/login    | User authentication    |
| GET    | /api/books         | Retrieve all books     |
| GET    | /api/books/{id}    | Retrieve specific book |
| POST   | /api/books         | Create new book        |
| PUT    | /api/books/{id}    | Update existing book   |
| DELETE | /api/books/{id}    | Delete book            |

### 2.3 Database Migrations

- Initial migration created with authentication support
- Migration file: `20251026074151_InitialWithAuth`
- Successfully applied to SQLite database

---

## 3. Frontend Implementation

### 3.1 Architecture

The frontend follows a component-based architecture:

- **Components:** Reusable UI elements
- **Services:** API communication layer
- **Types:** TypeScript type definitions

### 3.2 Key Components

#### 3.2.1 AuthForm Component

- Handles user registration and login
- Form validation
- Authentication state management

#### 3.2.2 BookList Component

- Displays all books in the library
- Provides edit and delete functionality
- Responsive grid layout

#### 3.2.3 BookForm Component

- Create and update book entries
- Form validation
- User-friendly interface

### 3.3 Services Layer

#### 3.3.1 authService

- Manages user authentication API calls
- Handles token storage (if JWT implemented)
- User session management

#### 3.3.2 bookService

- Manages all book-related API calls
- Implements CRUD operations
- Error handling

### 3.4 Type Safety

TypeScript interfaces defined for:

- Book entity
- User entity
- API responses

---

## 4. Development Process

### 4.1 Setup Phase

1. Created .NET 9 Web API project
2. Configured Entity Framework Core with SQLite
3. Set up React project with Vite and TypeScript
4. Established project structure and organization

### 4.2 Backend Development

1. Designed database schema
2. Created entity models
3. Implemented Entity Framework migrations
4. Built API controllers
5. Tested endpoints using development tools

### 4.3 Frontend Development

1. Set up React components structure
2. Implemented service layer for API communication
3. Created form components with validation
4. Designed responsive UI with CSS
5. Integrated frontend with backend API

### 4.4 Testing & Debugging

1. Manual API testing
2. Frontend-backend integration testing
3. User flow validation
4. Error handling verification

---

## 5. Challenges Faced & Solutions

### 5.1 Challenge: Entity Framework Configuration

**Issue:** Initial setup of Entity Framework Core with SQLite required proper connection string configuration.

**Solution:** Configured `appsettings.json` with appropriate SQLite connection string and ensured proper DbContext registration in `Program.cs`.

### 5.2 Challenge: CORS Configuration

**Issue:** Cross-Origin Resource Sharing (CORS) errors when frontend tried to communicate with backend.

**Solution:** Implemented CORS policy in the backend to allow requests from the frontend development server.

### 5.3 Challenge: State Management

**Issue:** Managing authentication state across different components in React.

**Solution:** Implemented proper state lifting and service layer to handle authentication state consistently.

### 5.4 Challenge: TypeScript Integration

**Issue:** Ensuring type safety while communicating with the API.

**Solution:** Created comprehensive TypeScript interfaces matching backend models and API responses.

---

## 6. Additional Features

### 6.1 Responsive Design

- Mobile-friendly interface
- Adaptive layouts for different screen sizes
- Modern CSS styling

### 6.2 Form Validation

- Client-side validation for user inputs
- Error message display
- User-friendly feedback

### 6.3 Clean Architecture

- Separation of concerns
- Modular code structure
- Reusable components

---

## 7. Key Insights & Learning

### 7.1 Technical Insights

1. **Entity Framework Migrations:** Understanding of database schema versioning and migration management
2. **RESTful API Design:** Importance of following REST principles for scalable API development
3. **TypeScript Benefits:** Type safety significantly reduces runtime errors and improves code maintainability
4. **Component-Based Architecture:** React's component model promotes code reusability and maintainability

### 7.2 Best Practices Learned

1. **Separation of Concerns:** Keeping business logic, data access, and presentation layers separate
2. **Error Handling:** Implementing comprehensive error handling at both frontend and backend
3. **Code Organization:** Maintaining clear project structure for better maintainability
4. **Version Control:** Using Git for tracking changes and managing project history

### 7.3 Development Process Insights

1. **Planning Importance:** Initial planning saves significant debugging time
2. **Incremental Development:** Building features incrementally helps identify issues early
3. **Testing Early:** Regular testing during development prevents integration issues
4. **Documentation:** Clear documentation aids in development and future maintenance

---

## 8. Future Enhancements

### 8.1 Potential Improvements

1. **JWT Authentication:** Implement token-based authentication for better security
2. **Role-Based Access:** Add admin and user roles with different permissions
3. **Search Functionality:** Implement book search by title, author, or ISBN
4. **Pagination:** Add pagination for large book collections
5. **Book Categories:** Introduce book categorization and filtering
6. **User Profiles:** Extend user functionality with profiles and borrowing history
7. **Unit Tests:** Add comprehensive unit and integration tests
8. **Deployment:** Deploy to cloud platforms (Azure, AWS, etc.)

---

## 9. Conclusion

This Library Management System project successfully demonstrates full-stack development capabilities using modern technologies. The implementation showcases understanding of:

- RESTful API development with .NET Core
- Database design and Entity Framework Core
- React and TypeScript for frontend development
- Integration between frontend and backend systems
- Software engineering best practices

The project provides a solid foundation for a production-ready library management system and demonstrates key skills required for modern web application development.

---

## 10. References & Resources

- [ASP.NET Core Documentation](https://docs.microsoft.com/aspnet/core)
- [Entity Framework Core Documentation](https://docs.microsoft.com/ef/core)
- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [Vite Documentation](https://vitejs.dev)

---

**Project Repository:** https://github.com/SamashaHettiarachchi/Software-Engineering-Internship-Assignment

**Submission Date:** October 28, 2025
