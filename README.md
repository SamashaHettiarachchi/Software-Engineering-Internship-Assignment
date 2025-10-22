# Library Management System

A full-stack web application for managing library books with CRUD (Create, Read, Update, Delete) operations. Built with C# .NET Web API backend and React TypeScript frontend.

## 🎯 Project Overview

This Library Management System allows users to:

- ✅ Create new book records with title, author, and description
- ✅ View all books in the library
- ✅ Update existing book information
- ✅ Delete books from the collection
- ✅ Input validation and error handling
- ✅ Responsive and user-friendly interface

## 🛠️ Technologies Used

### Backend

- **C# .NET 8.0** - Web API framework
- **Entity Framework Core** - ORM for database operations
- **SQLite** - Lightweight database
- **Swagger/OpenAPI** - API documentation

### Frontend

- **React 18** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Build tool and dev server
- **Axios** - HTTP client for API calls
- **CSS3** - Styling with modern features

## 📋 Prerequisites

Before running this application, ensure you have the following installed:

1. **.NET 8.0 SDK** or later

   - Download from: https://dotnet.microsoft.com/download
   - Verify installation: `dotnet --version`

2. **Node.js 18+** and npm

   - Download from: https://nodejs.org/
   - Verify installation: `node --version` and `npm --version`

3. **Git** (optional, for version control)
   - Download from: https://git-scm.com/

## 🚀 Installation & Setup

### Step 1: Clone or Download the Project

```bash
# If using Git
git clone <your-repository-url>
cd SE_assignment

# Or download and extract the ZIP file
```

### Step 2: Backend Setup

1. Navigate to the backend directory:

```powershell
cd Backend\LibraryAPI
```

2. Restore NuGet packages:

```powershell
dotnet restore
```

3. Build the project:

```powershell
dotnet build
```

4. Run the backend:

```powershell
dotnet run
```

The API will start at:

- HTTP: `http://localhost:5001`
- HTTPS: `https://localhost:7001`
- Swagger UI: `http://localhost:5001` or `https://localhost:7001`

**Note:** The database (`library.db`) will be created automatically in the Backend/LibraryAPI folder on first run with sample data.

### Step 3: Frontend Setup

1. Open a **new terminal/command prompt** (keep the backend running)

2. Navigate to the frontend directory:

```powershell
cd Frontend\library-frontend
```

3. Install dependencies:

```powershell
npm install
```

4. Start the development server:

```powershell
npm run dev
```

The frontend will start at: `http://localhost:3000`

## 🎮 Using the Application

1. Open your web browser and go to `http://localhost:3000`

2. **Add a Book:**

   - Fill in the form with Title (required), Author (required), and Description (optional)
   - Click "Add Book"

3. **View Books:**

   - All books are displayed in a card layout below the form
   - Each card shows the title, author, description, and creation date

4. **Edit a Book:**

   - Click the ✏️ (edit) button on any book card
   - The form will populate with the book's data
   - Make changes and click "Update Book"

5. **Delete a Book:**
   - Click the 🗑️ (delete) button on any book card
   - Confirm the deletion in the popup dialog

## 📁 Project Structure

```
SE_assignment/
│
├── Backend/
│   └── LibraryAPI/
│       ├── Controllers/
│       │   └── BooksController.cs      # REST API endpoints
│       ├── Data/
│       │   └── LibraryContext.cs       # Database context
│       ├── Models/
│       │   └── Book.cs                 # Book entity model
│       ├── Properties/
│       │   └── launchSettings.json     # Launch configuration
│       ├── Program.cs                  # Application entry point
│       ├── appsettings.json            # Configuration
│       ├── LibraryAPI.csproj           # Project file
│       └── library.db                  # SQLite database (created on run)
│
├── Frontend/
│   └── library-frontend/
│       ├── public/                     # Static assets
│       ├── src/
│       │   ├── components/
│       │   │   ├── BookForm.tsx        # Form component
│       │   │   ├── BookForm.css
│       │   │   ├── BookList.tsx        # List component
│       │   │   └── BookList.css
│       │   ├── services/
│       │   │   └── bookService.ts      # API service layer
│       │   ├── types/
│       │   │   └── Book.ts             # TypeScript interfaces
│       │   ├── App.tsx                 # Main app component
│       │   ├── App.css
│       │   ├── main.tsx                # Entry point
│       │   └── index.css
│       ├── index.html
│       ├── package.json
│       ├── tsconfig.json               # TypeScript config
│       └── vite.config.ts              # Vite config
│
├── .gitignore
└── README.md
```

## 🔌 API Endpoints

### Books API

| Method | Endpoint          | Description         |
| ------ | ----------------- | ------------------- |
| GET    | `/api/books`      | Get all books       |
| GET    | `/api/books/{id}` | Get a specific book |
| POST   | `/api/books`      | Create a new book   |
| PUT    | `/api/books/{id}` | Update a book       |
| DELETE | `/api/books/{id}` | Delete a book       |

### Example API Request (POST)

```json
{
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "description": "A classic American novel"
}
```

## 🧪 Testing the API

### Using Swagger UI

1. Navigate to `http://localhost:5001` or `https://localhost:7001`
2. You'll see the Swagger UI with all API endpoints
3. Click "Try it out" on any endpoint to test it

### Using curl (PowerShell)

```powershell
# Get all books
curl http://localhost:5001/api/books

# Create a book
$body = @{
    title = "Test Book"
    author = "Test Author"
    description = "Test Description"
} | ConvertTo-Json

Invoke-RestMethod -Uri "http://localhost:5001/api/books" -Method Post -Body $body -ContentType "application/json"
```

## 🎨 Features Implemented

### Backend Features

- ✅ RESTful API with proper HTTP methods
- ✅ Entity Framework Core with SQLite
- ✅ Data validation with attributes
- ✅ Error handling and logging
- ✅ CORS configuration for frontend access
- ✅ Swagger/OpenAPI documentation
- ✅ Seed data for testing
- ✅ Proper response codes (200, 201, 204, 400, 404, 500)

### Frontend Features

- ✅ React with TypeScript
- ✅ Component-based architecture
- ✅ Service layer for API calls
- ✅ Form validation
- ✅ Error handling and user feedback
- ✅ Loading states
- ✅ Responsive design
- ✅ Modern UI with animations
- ✅ Confirmation dialogs

## 🐛 Troubleshooting

### Backend Issues

**Problem:** Port already in use

```powershell
# Kill the process using the port
netstat -ano | findstr :5001
taskkill /PID <process-id> /F
```

**Problem:** Database not created

- Ensure you have write permissions in the Backend/LibraryAPI folder
- Delete `library.db` if it exists and restart the application

### Frontend Issues

**Problem:** Cannot connect to API

- Ensure the backend is running on port 5001
- Check the `API_BASE_URL` in `src/services/bookService.ts`

**Problem:** npm install fails

- Try deleting `node_modules` and `package-lock.json`
- Run `npm install` again

## 📝 Code Quality

### Backend

- **Clean Code:** Follows C# naming conventions and best practices
- **Comments:** Comprehensive XML documentation comments
- **Error Handling:** Try-catch blocks with proper logging
- **Validation:** Model validation with data annotations
- **Architecture:** Separation of concerns (Controllers, Models, Data)

### Frontend

- **TypeScript:** Strong typing throughout
- **Comments:** JSDoc comments for functions
- **Error Handling:** Try-catch with user-friendly messages
- **Component Structure:** Reusable, single-responsibility components
- **State Management:** React hooks (useState, useEffect)

## 🔮 Future Enhancements (Optional)

- [ ] User authentication and authorization
- [ ] Book categories/genres
- [ ] Search and filter functionality
- [ ] Pagination for large datasets
- [ ] Book cover image uploads
- [ ] ISBN validation
- [ ] Barcode scanning
- [ ] Borrowing/lending system

## 📧 Contact

For questions or issues, please contact:

- Email: people@expernetic.com

## 📄 License

This project is for educational purposes as part of a software engineering internship assignment.

---

**Built with ❤️ using C# .NET and React TypeScript**
