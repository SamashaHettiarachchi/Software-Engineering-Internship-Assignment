# Library Management System# Library Management System



A full-stack web application for managing library books with complete CRUD operations. This project demonstrates modern web development using C# .NET for the backend API and React with TypeScript for the frontend interface.A full-stack web application for managing library books with CRUD (Create, Read, Update, Delete) operations. Built with C# .NET Web API backend and React TypeScript frontend.



## Project Overview## 🎯 Project Overview



This Library Management System provides a comprehensive solution for managing book collections in a library. The application allows users to register accounts, log in securely, and perform all essential operations on book records including creating, viewing, updating, and deleting entries.This Library Management System allows users to:



Key features include:- ✅ Create new book records with title, author, and description

- User authentication with secure password hashing- ✅ View all books in the library

- Complete CRUD operations for book management- ✅ Update existing book information

- Input validation on both client and server side- ✅ Delete books from the collection

- Error handling with user-friendly feedback- ✅ Input validation and error handling

- Responsive design that works across different devices- ✅ Responsive and user-friendly interface

- RESTful API following industry best practices

## 🛠️ Technologies Used

## Technologies Used

### Backend

**Backend:**

- C# .NET 9.0 - Web API framework- **C# .NET 9.0** - Web API framework

- Entity Framework Core - Object-relational mapping- **Entity Framework Core** - ORM for database operations

- SQLite - Lightweight embedded database- **SQLite** - Lightweight database

- Swagger/OpenAPI - API documentation and testing- **Swagger/OpenAPI** - API documentation



**Frontend:**### Frontend

- React 18 - JavaScript library for building user interfaces

- TypeScript - Type-safe JavaScript- **React 18** - UI library

- Vite - Modern build tool and development server- **TypeScript** - Type-safe JavaScript

- Axios - HTTP client for API communication- **Vite** - Build tool and dev server

- CSS3 - Styling and responsive design- **Axios** - HTTP client for API calls

- **CSS3** - Styling with modern features

## Prerequisites

## 📋 Prerequisites

Before running this application, you need to have the following installed on your system:

Before running this application, ensure you have the following installed:

1. .NET 9.0 SDK or later

   - Download from: https://dotnet.microsoft.com/download1. **.NET 9.0 SDK** or later

   - Verify installation by running: dotnet --version

   - Download from: https://dotnet.microsoft.com/download

2. Node.js version 18 or higher with npm   - Verify installation: `dotnet --version`

   - Download from: https://nodejs.org/

   - Verify installation by running: node --version and npm --version2. **Node.js 18+** and npm



3. Git for version control (optional)   - Download from: https://nodejs.org/

   - Download from: https://git-scm.com/   - Verify installation: `node --version` and `npm --version`



## Installation and Setup3. **Git** (optional, for version control)

   - Download from: https://git-scm.com/

### Clone the Repository

## 🚀 Installation & Setup

```bash

git clone https://github.com/SamashaHettiarachchi/Software-Engineering-Internship-Assignment.git### Step 1: Clone or Download the Project

cd Software-Engineering-Internship-Assignment

``````bash

# If using Git

Alternatively, you can download the repository as a ZIP file and extract it.git clone https://github.com/SamashaHettiarachchi/Software-Engineering-Internship-Assignment.git

cd Software-Engineering-Internship-Assignment

### Backend Setup

# Or download and extract the ZIP file

1. Navigate to the backend directory:```

```powershell

cd Backend\LibraryAPI### Step 2: Backend Setup

```

1. Navigate to the backend directory:

2. Restore the required NuGet packages:

```powershell```powershell

dotnet restorecd Backend\LibraryAPI

``````



3. Build the project to ensure everything compiles correctly:2. Restore NuGet packages:

```powershell

dotnet build```powershell

```dotnet restore

```

4. Run the backend server:

```powershell3. Build the project:

dotnet run

``````powershell

dotnet build

The API will start and be accessible at:```

- HTTP: http://localhost:5001

- HTTPS: https://localhost:70014. Run the backend:

- Swagger UI: http://localhost:5001 or https://localhost:7001

```powershell

Note: The SQLite database file (library.db) will be created automatically in the Backend/LibraryAPI directory when you first run the application.dotnet run

```

### Frontend Setup

The API will start at:

1. Open a new terminal window (keep the backend server running in the first terminal)

- HTTP: `http://localhost:5001`

2. Navigate to the frontend directory:- HTTPS: `https://localhost:7001`

```powershell- Swagger UI: `http://localhost:5001` or `https://localhost:7001`

cd Frontend\library-frontend

```**Note:** The database (`library.db`) will be created automatically in the Backend/LibraryAPI folder on first run.



3. Install the required npm packages:### Step 3: Frontend Setup

```powershell

npm install1. Open a **new terminal/command prompt** (keep the backend running)

```

2. Navigate to the frontend directory:

4. Start the development server:

```powershell```powershell

npm run devcd Frontend\library-frontend

``````



The frontend application will start at: http://localhost:30003. Install dependencies:



## Using the Application```powershell

npm install

### Getting Started```



1. Open your web browser and navigate to http://localhost:30004. Start the development server:



2. Register a new account:```powershell

   - Click on "Register here" linknpm run dev

   - Enter a username (minimum 3 characters)```

   - Provide a valid email address

   - Create a password (minimum 6 characters)The frontend will start at: `http://localhost:3000`

   - Click "Register"

## 🎮 Using the Application

3. Log in to your account:

   - Enter your username or email1. Open your web browser and go to `http://localhost:3000`

   - Enter your password

   - Click "Login"2. **Register/Login:**



### Managing Books   - Create a new account by clicking "Register here"

   - Fill in username, email, and password (min 6 characters)

Once logged in, you can perform the following operations:   - Or login with existing credentials



**Adding a Book:**3. **Add a Book:**

- Fill in the form fields with the book information

- Title is required (maximum 200 characters)   - After logging in, fill in the form with Title (required), Author (required), and Description (optional)

- Author is required (maximum 100 characters)   - Click "Add Book"

- Description is optional (maximum 1000 characters)

- Click "Add Book" to save the new record4. **View Books:**



**Viewing Books:**   - All books are displayed in a card layout below the form

- All books are displayed in a card layout below the form   - Each card shows the title, author, description, and creation date

- Each card shows the title, author, description, and timestamps

- Books are automatically refreshed after any changes5. **Edit a Book:**



**Editing a Book:**   - Click the ✏️ (edit) button on any book card

- Click the edit button on the book card you want to modify   - The form will populate with the book's data

- The form will populate with the current book data   - Make changes and click "Update Book"

- Make your changes to any field

- Click "Update Book" to save the modifications6. **Delete a Book:**

- Click "Cancel" if you decide not to make changes   - Click the 🗑️ (delete) button on any book card

   - Confirm the deletion in the popup dialog

**Deleting a Book:**

- Click the delete button on the book card you want to remove## 📁 Project Structure

- A confirmation dialog will appear

- Click "OK" to confirm deletion or "Cancel" to abort```

SE_assignment/

## Project Structure│

├── Backend/

```│   └── LibraryAPI/

Software-Engineering-Internship-Assignment/│       ├── Controllers/

├── Backend/│       │   ├── AuthController.cs       # Authentication endpoints

│   └── LibraryAPI/│       │   └── BooksController.cs      # Book CRUD endpoints

│       ├── Controllers/│       ├── Data/

│       │   ├── AuthController.cs       - Authentication endpoints│       │   └── LibraryContext.cs       # Database context

│       │   └── BooksController.cs      - Book CRUD endpoints│       ├── Models/

│       ├── Data/│       │   ├── Book.cs                 # Book entity model

│       │   └── LibraryContext.cs       - Database context│       │   └── User.cs                 # User entity & DTOs

│       ├── Models/│       ├── Migrations/                 # EF Core migrations

│       │   ├── Book.cs                 - Book entity model│       ├── Properties/

│       │   └── User.cs                 - User entity and DTOs│       │   └── launchSettings.json     # Launch configuration

│       ├── Migrations/                 - EF Core migrations│       ├── Program.cs                  # Application entry point

│       ├── Properties/│       ├── appsettings.json            # Configuration

│       │   └── launchSettings.json     - Launch configuration│       ├── LibraryAPI.csproj           # Project file

│       ├── Program.cs                  - Application entry point│       └── library.db                  # SQLite database (auto-created)

│       ├── appsettings.json            - Configuration settings│

│       ├── LibraryAPI.csproj           - Project file├── Frontend/

│       └── library.db                  - SQLite database (auto-created)│   └── library-frontend/

││       ├── src/

└── Frontend/│       │   ├── components/

    └── library-frontend/│       │   │   ├── AuthForm.tsx        # Login/Register form

        ├── src/│       │   │   ├── AuthForm.css

        │   ├── components/│       │   │   ├── BookForm.tsx        # Book add/edit form

        │   │   ├── AuthForm.tsx        - Login/Register form│       │   │   ├── BookForm.css

        │   │   ├── AuthForm.css│       │   │   ├── BookList.tsx        # Book display component

        │   │   ├── BookForm.tsx        - Book add/edit form│       │   │   └── BookList.css

        │   │   ├── BookForm.css│       │   ├── services/

        │   │   ├── BookList.tsx        - Book display component│       │   │   ├── authService.ts      # Authentication API calls

        │   │   └── BookList.css│       │   │   └── bookService.ts      # Book API calls

        │   ├── services/│       │   ├── types/

        │   │   ├── authService.ts      - Authentication API calls│       │   │   ├── Book.ts             # Book interfaces

        │   │   └── bookService.ts      - Book API calls│       │   │   └── User.ts             # User interfaces

        │   ├── types/│       │   ├── App.tsx                 # Main app component

        │   │   ├── Book.ts             - Book type definitions│       │   ├── App.css

        │   │   └── User.ts             - User type definitions│       │   ├── main.tsx                # Entry point

        │   ├── App.tsx                 - Main application component│       │   └── index.css

        │   ├── App.css│       ├── index.html

        │   ├── main.tsx                - Application entry point│       ├── package.json

        │   └── index.css│       ├── tsconfig.json               # TypeScript config

        ├── index.html│       └── vite.config.ts              # Vite config

        ├── package.json                - Dependencies and scripts│

        ├── tsconfig.json               - TypeScript configuration├── .gitignore

        └── vite.config.ts              - Vite configuration└── README.md

``````



## API Endpoints## 🔌 API Endpoints



### Authentication Endpoints### Authentication API



**POST /api/auth/register**| Method | Endpoint             | Description       |

- Register a new user account| ------ | -------------------- | ----------------- |

- Request body: { username, email, password }| POST   | `/api/auth/register` | Register new user |

- Returns: User information and success message| POST   | `/api/auth/login`    | Login user        |



**POST /api/auth/login**### Books API

- Authenticate and log in a user

- Request body: { usernameOrEmail, password }| Method | Endpoint          | Description         |

- Returns: User information and success message| ------ | ----------------- | ------------------- |

| GET    | `/api/books`      | Get all books       |

### Book Management Endpoints| GET    | `/api/books/{id}` | Get a specific book |

| POST   | `/api/books`      | Create a new book   |

**GET /api/books**| PUT    | `/api/books/{id}` | Update a book       |

- Retrieve all books in the library| DELETE | `/api/books/{id}` | Delete a book       |

- Returns: Array of book objects

### Example API Request (Register)

**GET /api/books/{id}**

- Retrieve a specific book by ID```json

- Returns: Single book object or 404 if not found{

  "username": "johndoe",

**POST /api/books**  "email": "john@example.com",

- Create a new book record  "password": "password123"

- Request body: { title, author, description }}

- Returns: Created book object with 201 status```



**PUT /api/books/{id}**### Example API Request (Create Book)

- Update an existing book

- Request body: { id, title, author, description }```json

- Returns: 204 No Content on success{

  "title": "The Great Gatsby",

**DELETE /api/books/{id}**  "author": "F. Scott Fitzgerald",

- Delete a book from the library  "description": "A classic American novel"

- Returns: 204 No Content on success}

```

### Example API Requests

## 🧪 Testing the API

Register a new user:

```json### Using Swagger UI

{

  "username": "johndoe",1. Navigate to `http://localhost:5001` or `https://localhost:7001`

  "email": "john@example.com",2. You'll see the Swagger UI with all API endpoints

  "password": "securepass123"3. Click "Try it out" on any endpoint to test it

}

```### Using curl (PowerShell)



Create a new book:```powershell

```json# Get all books

{curl http://localhost:5001/api/books

  "title": "To Kill a Mockingbird",

  "author": "Harper Lee",# Create a book

  "description": "A classic novel about racial injustice in the American South"$body = @{

}    title = "Test Book"

```    author = "Test Author"

    description = "Test Description"

## Testing the API} | ConvertTo-Json



### Using Swagger UIInvoke-RestMethod -Uri "http://localhost:5001/api/books" -Method Post -Body $body -ContentType "application/json"

```

1. Navigate to http://localhost:5001 or https://localhost:7001 in your browser

2. You will see the Swagger UI interface with all available endpoints## 🎨 Features Implemented

3. Click on any endpoint to expand it

4. Click "Try it out" to enable the input fields### Backend Features

5. Enter the required data

6. Click "Execute" to send the request- ✅ RESTful API with proper HTTP methods

7. View the response below including status code and returned data- ✅ Entity Framework Core with SQLite

- ✅ **User Authentication** (Register/Login)

### Using PowerShell- ✅ Password hashing with SHA256

- ✅ Data validation with attributes

Test the API directly from PowerShell:- ✅ Error handling and logging

- ✅ CORS configuration for frontend access

```powershell- ✅ Swagger/OpenAPI documentation

# Get all books- ✅ Proper response codes (200, 201, 204, 400, 404, 500)

Invoke-RestMethod -Uri "http://localhost:5001/api/books" -Method Get

### Frontend Features

# Create a new book

$bookData = @{- ✅ React with TypeScript

    title = "1984"- ✅ **Authentication UI** (Login/Register forms)

    author = "George Orwell"- ✅ Session management with localStorage

    description = "Dystopian novel about totalitarianism"- ✅ Protected routes (login required)

} | ConvertTo-Json- ✅ Component-based architecture

- ✅ Service layer for API calls

Invoke-RestMethod -Uri "http://localhost:5001/api/books" -Method Post -Body $bookData -ContentType "application/json"- ✅ Form validation

```- ✅ Error handling and user feedback

- ✅ Loading states

## Features Implemented- ✅ Responsive design

- ✅ Modern UI with animations

### Backend Features- ✅ Confirmation dialogs



The backend implements a robust REST API with the following capabilities:## 🐛 Troubleshooting



- Complete RESTful API design following HTTP standards### Backend Issues

- Entity Framework Core integration with SQLite database

- User authentication system with registration and login**Problem:** Port already in use

- Secure password hashing using SHA256

- Model validation using data annotations```powershell

- Comprehensive error handling and logging# Kill the process using the port

- CORS configuration for cross-origin requestsnetstat -ano | findstr :5001

- Swagger/OpenAPI documentation for all endpointstaskkill /PID <process-id> /F

- Appropriate HTTP status codes for different scenarios```



### Frontend Features**Problem:** Database not created



The frontend provides an intuitive user interface with:- Ensure you have write permissions in the Backend/LibraryAPI folder

- Delete `library.db` if it exists and restart the application

- Modern React architecture with TypeScript for type safety

- User authentication interface with login and registration forms### Frontend Issues

- Session management using browser localStorage

- Protected routes that require authentication**Problem:** Cannot connect to API

- Component-based architecture for maintainability

- Dedicated service layer for API communication- Ensure the backend is running on port 5001

- Client-side form validation with real-time feedback- Check the `API_BASE_URL` in `src/services/bookService.ts`

- Error handling with user-friendly messages

- Loading states for better user experience**Problem:** npm install fails

- Responsive design that adapts to different screen sizes

- Clean and modern user interface with smooth animations- Try deleting `node_modules` and `package-lock.json`

- Confirmation dialogs for destructive operations- Run `npm install` again



## Troubleshooting## 📝 Code Quality



### Backend Issues### Backend



**Problem: Port is already in use**- **Clean Code:** Follows C# naming conventions and best practices

- **Comments:** Comprehensive XML documentation comments

Solution: Find and stop the process using the port- **Error Handling:** Try-catch blocks with proper logging

```powershell- **Validation:** Model validation with data annotations

netstat -ano | findstr :5001- **Architecture:** Separation of concerns (Controllers, Models, Data)

taskkill /PID <process-id> /F

```### Frontend



**Problem: Database file not created**- **TypeScript:** Strong typing throughout

- **Comments:** JSDoc comments for functions

Solution: Ensure you have write permissions in the Backend/LibraryAPI folder. If the database exists but has issues, delete library.db and restart the application to recreate it.- **Error Handling:** Try-catch with user-friendly messages

- **Component Structure:** Reusable, single-responsibility components

**Problem: Build errors**- **State Management:** React hooks (useState, useEffect)



Solution: Make sure you have .NET 9.0 SDK installed. Run dotnet --version to verify. If you have an older version, download the latest from the Microsoft website.## 🔮 Future Enhancements



### Frontend Issues- [ ] JWT token-based authentication

- [ ] Book categories/genres

**Problem: Cannot connect to backend API**- [ ] Search and filter functionality

- [ ] Pagination for large datasets

Solution: Verify the backend is running on port 5001. Check the console for any CORS errors. Ensure the API_BASE_URL in bookService.ts matches your backend URL.- [ ] Book cover image uploads

- [ ] ISBN validation

**Problem: npm install fails**- [ ] Barcode scanning

- [ ] Borrowing/lending system

Solution: Delete the node_modules folder and package-lock.json file, then run npm install again. Make sure you have a stable internet connection.- [ ] User roles (Admin/User)



**Problem: Application shows blank page**## 📧 Contact



Solution: Open browser developer tools (F12) and check the console for errors. Ensure both backend and frontend are running. Clear browser cache if needed.For questions or issues, please contact:



## Code Quality and Best Practices- Email: people@expernetic.com



### Backend Code Quality## 📄 License



The backend code follows C# and .NET best practices:This project is for educational purposes as part of a software engineering internship assignment.



- Consistent naming conventions (PascalCase for public members)---

- XML documentation comments for all public methods

- Proper use of async/await for asynchronous operations**Built with ❤️ using C# .NET and React TypeScript**

- Dependency injection for better testability
- Clear separation of concerns (Controllers, Models, Data layers)
- Model validation using data annotations
- Proper exception handling with try-catch blocks
- Logging for debugging and monitoring

### Frontend Code Quality

The frontend code adheres to React and TypeScript best practices:

- Strong typing throughout using TypeScript interfaces
- JSDoc comments for function documentation
- Consistent code formatting and naming conventions
- Component-based architecture with single responsibility
- Custom hooks for reusable logic
- Error boundaries for graceful error handling
- Proper state management using React hooks
- Service layer separation for API calls

## Future Enhancements

Potential improvements for future versions:

- Implement JWT token-based authentication for better security
- Add book categories and genres for better organization
- Implement search and filter functionality
- Add pagination for handling large book collections
- Enable book cover image uploads
- Add ISBN validation and lookup
- Implement barcode scanning for quick book entry
- Create user roles (Admin and regular User) with different permissions
- Add book borrowing and lending system
- Implement due date tracking and notifications

## Contact Information

For questions or issues related to this project, please contact:

Email: people@expernetic.com

## License

This project was developed as part of a software engineering internship assignment for educational purposes.

---

Developed as part of the Software Engineering Internship Assignment for Expernetic LLC.
