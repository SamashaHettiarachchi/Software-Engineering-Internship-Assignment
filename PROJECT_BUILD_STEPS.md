# Complete Project Build Steps (A to Z)

## 📋 Project Overview

**Project Name:** Library Management System  
**Backend:** ASP.NET Core Web API (.NET 9.0) + Entity Framework Core + SQLite  
**Frontend:** React + TypeScript + Vite  
**Development Period:** October 22-27, 2025 (6 days)

---

## 🔧 Prerequisites

### Required Software

1. **.NET SDK 9.0**

   - Download: https://dotnet.microsoft.com/download/dotnet/9.0
   - Verify installation: `dotnet --version`

2. **Node.js (LTS version)**

   - Download: https://nodejs.org/
   - Verify installation: `node --version` and `npm --version`

3. **Git**

   - Download: https://git-scm.com/
   - Verify installation: `git --version`

4. **Code Editor**
   - Visual Studio Code (recommended)
   - Download: https://code.visualstudio.com/

---

## 📂 PART 1: Project Structure Setup

### Step 1: Create Root Directory

```powershell
# Navigate to desired location
cd C:\Users\LENOVO\Downloads

# Create project folder
mkdir SE_assignment
cd SE_assignment
```

### Step 2: Create Folder Structure

```powershell
# Create backend and frontend folders
mkdir Backend
mkdir Frontend

# Create documentation files
New-Item README.md -ItemType File
New-Item SETUP_GUIDE.md -ItemType File
New-Item PROJECT_REPORT.md -ItemType File
New-Item SUBMISSION_CHECKLIST.md -ItemType File
New-Item GIT_SETUP.md -ItemType File
```

### Step 3: Create .gitignore

```powershell
# Create .gitignore file
New-Item .gitignore -ItemType File
```

**Content of .gitignore:**

```gitignore
# .NET artifacts
bin/
obj/
*.dll
*.exe
*.pdb
*.user
*.suo

# Database files
*.db
*.db-shm
*.db-wal

# Node.js
node_modules/
package-lock.json
dist/

# IDE
.vs/
.vscode/
.idea/

# OS
.DS_Store
Thumbs.db
```

---

## 🔨 PART 2: Backend Setup (ASP.NET Core Web API)

### Step 1: Create ASP.NET Core Web API Project

```powershell
cd Backend

# Create new Web API project
dotnet new webapi -n LibraryAPI -f net9.0

cd LibraryAPI
```

**What this creates:**

- `LibraryAPI.csproj` - Project file
- `Program.cs` - Application entry point
- `appsettings.json` - Configuration file
- `Properties/launchSettings.json` - Debug settings

### Step 2: Install Required NuGet Packages

```powershell
# Install Entity Framework Core with SQLite
dotnet add package Microsoft.EntityFrameworkCore --version 9.0.0
dotnet add package Microsoft.EntityFrameworkCore.Sqlite --version 9.0.0
dotnet add package Microsoft.EntityFrameworkCore.Design --version 9.0.0

# Install EF Core Tools for migrations
dotnet tool install --global dotnet-ef --version 9.0.0
```

**Installed Packages:**

1. **Microsoft.EntityFrameworkCore (9.0.0)**
   - Purpose: Core EF functionality, LINQ queries, change tracking
2. **Microsoft.EntityFrameworkCore.Sqlite (9.0.0)**
   - Purpose: SQLite database provider for EF Core
3. **Microsoft.EntityFrameworkCore.Design (9.0.0)**
   - Purpose: Design-time tools for migrations and scaffolding
4. **dotnet-ef (Global Tool)**
   - Purpose: Command-line tool for running migrations

### Step 3: Configure Database Connection

**Edit `appsettings.json`:**

```json
{
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft.AspNetCore": "Warning"
    }
  },
  "AllowedHosts": "*",
  "ConnectionStrings": {
    "DefaultConnection": "Data Source=library.db"
  }
}
```

### Step 4: Create Data Models

**Create folder:**

```powershell
mkdir Models
```

**Create `Models/Book.cs`:**

```csharp
using System.ComponentModel.DataAnnotations;

namespace LibraryAPI.Models;

public class Book
{
    public int Id { get; set; }

    [Required]
    public string Title { get; set; } = string.Empty;

    [Required]
    public string Author { get; set; } = string.Empty;

    public string? Description { get; set; }

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;
}
```

**Create `Models/User.cs`:**

```csharp
using System.ComponentModel.DataAnnotations;

namespace LibraryAPI.Models;

public class User
{
    public int Id { get; set; }

    [Required]
    public string Username { get; set; } = string.Empty;

    [Required]
    [EmailAddress]
    public string Email { get; set; } = string.Empty;

    [Required]
    public string PasswordHash { get; set; } = string.Empty;

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
}

// DTOs for Authentication
public class RegisterDto
{
    [Required]
    public string Username { get; set; } = string.Empty;

    [Required]
    [EmailAddress]
    public string Email { get; set; } = string.Empty;

    [Required]
    [MinLength(6)]
    public string Password { get; set; } = string.Empty;
}

public class LoginDto
{
    [Required]
    public string Username { get; set; } = string.Empty;

    [Required]
    public string Password { get; set; } = string.Empty;
}

public class AuthResponse
{
    public int Id { get; set; }
    public string Username { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
}
```

### Step 5: Create Database Context

**Create folder:**

```powershell
mkdir Data
```

**Create `Data/LibraryContext.cs`:**

```csharp
using Microsoft.EntityFrameworkCore;
using LibraryAPI.Models;

namespace LibraryAPI.Data;

public class LibraryContext : DbContext
{
    public LibraryContext(DbContextOptions<LibraryContext> options) : base(options) { }

    public DbSet<Book> Books { get; set; }
    public DbSet<User> Users { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        // Configure unique constraints
        modelBuilder.Entity<User>()
            .HasIndex(u => u.Username)
            .IsUnique();

        modelBuilder.Entity<User>()
            .HasIndex(u => u.Email)
            .IsUnique();

        // Seed initial data
        modelBuilder.Entity<Book>().HasData(
            new Book
            {
                Id = 1,
                Title = "The Great Gatsby",
                Author = "F. Scott Fitzgerald",
                Description = "A classic American novel",
                CreatedAt = new DateTime(2025, 1, 1),
                UpdatedAt = new DateTime(2025, 1, 1)
            },
            new Book
            {
                Id = 2,
                Title = "To Kill a Mockingbird",
                Author = "Harper Lee",
                Description = "A tale of racial injustice",
                CreatedAt = new DateTime(2025, 1, 1),
                UpdatedAt = new DateTime(2025, 1, 1)
            },
            new Book
            {
                Id = 3,
                Title = "1984",
                Author = "George Orwell",
                Description = "A dystopian novel",
                CreatedAt = new DateTime(2025, 1, 1),
                UpdatedAt = new DateTime(2025, 1, 1)
            }
        );
    }
}
```

### Step 6: Configure Services in Program.cs

**Edit `Program.cs`:**

```csharp
using Microsoft.EntityFrameworkCore;
using LibraryAPI.Data;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Configure DbContext with SQLite
builder.Services.AddDbContext<LibraryContext>(options =>
    options.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection")));

// Configure CORS for frontend
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend", policy =>
    {
        policy.WithOrigins("http://localhost:3000", "http://localhost:5173")
              .AllowAnyMethod()
              .AllowAnyHeader();
    });
});

var app = builder.Build();

// Configure the HTTP request pipeline
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors("AllowFrontend");
app.UseAuthorization();
app.MapControllers();

// Initialize database
using (var scope = app.Services.CreateScope())
{
    var context = scope.ServiceProvider.GetRequiredService<LibraryContext>();
    context.Database.EnsureCreated();
    Console.WriteLine("Database initialized successfully");
}

Console.WriteLine("Library Management API is running...");
Console.WriteLine($"Swagger UI: https://localhost:7001 or http://localhost:5001");

app.Run();
```

### Step 7: Create Database Migration

```powershell
# Create initial migration
dotnet ef migrations add InitialWithAuth

# Apply migration to create database
dotnet ef database update
```

**What this does:**

- Creates `Migrations/` folder with migration files
- Creates `library.db` SQLite database file
- Creates `Books` and `Users` tables
- Inserts seed data (3 books)

### Step 8: Create Controllers

**Create folder:**

```powershell
mkdir Controllers
```

**Create `Controllers/BooksController.cs`:**

```csharp
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using LibraryAPI.Data;
using LibraryAPI.Models;

namespace LibraryAPI.Controllers;

[ApiController]
[Route("api/[controller]")]
public class BooksController : ControllerBase
{
    private readonly LibraryContext _context;

    public BooksController(LibraryContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<Book>>> GetBooks()
    {
        return await _context.Books.ToListAsync();
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Book>> GetBook(int id)
    {
        var book = await _context.Books.FindAsync(id);
        if (book == null) return NotFound();
        return book;
    }

    [HttpPost]
    public async Task<ActionResult<Book>> CreateBook(Book book)
    {
        book.CreatedAt = DateTime.UtcNow;
        book.UpdatedAt = DateTime.UtcNow;
        _context.Books.Add(book);
        await _context.SaveChangesAsync();
        return CreatedAtAction(nameof(GetBook), new { id = book.Id }, book);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateBook(int id, Book book)
    {
        if (id != book.Id) return BadRequest();
        book.UpdatedAt = DateTime.UtcNow;
        _context.Entry(book).State = EntityState.Modified;

        try
        {
            await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!_context.Books.Any(b => b.Id == id)) return NotFound();
            throw;
        }

        return NoContent();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteBook(int id)
    {
        var book = await _context.Books.FindAsync(id);
        if (book == null) return NotFound();

        _context.Books.Remove(book);
        await _context.SaveChangesAsync();
        return NoContent();
    }
}
```

**Create `Controllers/AuthController.cs`:**

```csharp
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using LibraryAPI.Data;
using LibraryAPI.Models;
using System.Security.Cryptography;
using System.Text;

namespace LibraryAPI.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AuthController : ControllerBase
{
    private readonly LibraryContext _context;

    public AuthController(LibraryContext context)
    {
        _context = context;
    }

    [HttpPost("register")]
    public async Task<ActionResult<AuthResponse>> Register(RegisterDto dto)
    {
        if (await _context.Users.AnyAsync(u => u.Username == dto.Username))
            return BadRequest("Username already exists");

        if (await _context.Users.AnyAsync(u => u.Email == dto.Email))
            return BadRequest("Email already exists");

        var user = new User
        {
            Username = dto.Username,
            Email = dto.Email,
            PasswordHash = HashPassword(dto.Password),
            CreatedAt = DateTime.UtcNow
        };

        _context.Users.Add(user);
        await _context.SaveChangesAsync();

        return new AuthResponse
        {
            Id = user.Id,
            Username = user.Username,
            Email = user.Email
        };
    }

    [HttpPost("login")]
    public async Task<ActionResult<AuthResponse>> Login(LoginDto dto)
    {
        var user = await _context.Users
            .FirstOrDefaultAsync(u => u.Username == dto.Username);

        if (user == null || user.PasswordHash != HashPassword(dto.Password))
            return Unauthorized("Invalid credentials");

        return new AuthResponse
        {
            Id = user.Id,
            Username = user.Username,
            Email = user.Email
        };
    }

    private string HashPassword(string password)
    {
        using var sha256 = SHA256.Create();
        var bytes = sha256.ComputeHash(Encoding.UTF8.GetBytes(password));
        return Convert.ToBase64String(bytes);
    }
}
```

### Step 9: Build and Test Backend

```powershell
# Restore packages
dotnet restore

# Build the project
dotnet build

# Run the API
dotnet run
```

**API will be available at:**

- HTTP: `http://localhost:5001`
- HTTPS: `https://localhost:7001`
- Swagger UI: `http://localhost:5001/swagger`

---

## ⚛️ PART 3: Frontend Setup (React + TypeScript + Vite)

### Step 1: Create React Project with Vite

```powershell
cd ../../Frontend

# Create Vite project with React and TypeScript
npm create vite@latest library-frontend -- --template react-ts

cd library-frontend
```

**What this creates:**

- `package.json` - Dependencies and scripts
- `tsconfig.json` - TypeScript configuration
- `vite.config.ts` - Vite configuration
- `index.html` - Entry HTML file
- `src/` - Source code folder

### Step 2: Install Dependencies

```powershell
# Install all dependencies
npm install

# Install Axios for HTTP requests
npm install axios
```

**Installed Packages (from package.json):**

1. **react (^18.3.1)** - Core React library
2. **react-dom (^18.3.1)** - React DOM rendering
3. **axios (^1.7.7)** - HTTP client for API calls
4. **typescript (~5.6.2)** - TypeScript compiler
5. **vite (^5.4.10)** - Build tool and dev server
6. **@vitejs/plugin-react (^4.3.3)** - Vite React plugin

**Total packages installed:** ~265 (including all dependencies)

### Step 3: Configure Vite

**Edit `vite.config.ts`:**

```typescript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
});
```

### Step 4: Add Font Awesome Icons

**Edit `index.html`:**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Library Management System</title>
    <!-- Font Awesome Icons -->
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
    />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

### Step 5: Create TypeScript Interfaces

**Create `src/types/Book.ts`:**

```typescript
export interface Book {
  id?: number;
  title: string;
  author: string;
  description?: string;
  createdAt?: string;
  updatedAt?: string;
}
```

**Create `src/types/User.ts`:**

```typescript
export interface User {
  id: number;
  username: string;
  email: string;
}

export interface RegisterData {
  username: string;
  email: string;
  password: string;
}

export interface LoginData {
  username: string;
  password: string;
}
```

### Step 6: Create API Services

**Create `src/services/bookService.ts`:**

```typescript
import axios from "axios";
import { Book } from "../types/Book";

const API_URL = "http://localhost:5001/api/books";

export const bookService = {
  async getAll(): Promise<Book[]> {
    const response = await axios.get(API_URL);
    return response.data;
  },

  async getById(id: number): Promise<Book> {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  },

  async create(book: Book): Promise<Book> {
    const response = await axios.post(API_URL, book);
    return response.data;
  },

  async update(id: number, book: Book): Promise<void> {
    await axios.put(`${API_URL}/${id}`, book);
  },

  async delete(id: number): Promise<void> {
    await axios.delete(`${API_URL}/${id}`);
  },
};
```

**Create `src/services/authService.ts`:**

```typescript
import axios from "axios";
import { User, RegisterData, LoginData } from "../types/User";

const API_URL = "http://localhost:5001/api/auth";

export const authService = {
  async register(data: RegisterData): Promise<User> {
    const response = await axios.post(`${API_URL}/register`, data);
    localStorage.setItem("user", JSON.stringify(response.data));
    return response.data;
  },

  async login(data: LoginData): Promise<User> {
    const response = await axios.post(`${API_URL}/login`, data);
    localStorage.setItem("user", JSON.stringify(response.data));
    return response.data;
  },

  logout(): void {
    localStorage.removeItem("user");
  },

  getCurrentUser(): User | null {
    const userStr = localStorage.getItem("user");
    return userStr ? JSON.parse(userStr) : null;
  },
};
```

### Step 7: Create React Components

**Create `src/components/BookList.tsx`:**

```typescript
import React from "react";
import { Book } from "../types/Book";
import "./BookList.css";

interface BookListProps {
  books: Book[];
  onEdit: (book: Book) => void;
  onDelete: (id: number) => void;
}

const BookList: React.FC<BookListProps> = ({ books, onEdit, onDelete }) => {
  return (
    <div className="book-list">
      {books.length === 0 ? (
        <p className="no-books">No books available. Add your first book!</p>
      ) : (
        books.map((book) => (
          <div key={book.id} className="book-card">
            <div className="book-header">
              <h3>
                <i
                  className="fas fa-book"
                  style={{ marginRight: "0.5rem" }}
                ></i>
                {book.title}
              </h3>
            </div>
            <div className="book-body">
              <p className="book-author">
                <i className="fas fa-user" style={{ marginRight: "0.5rem" }}></i>
                <strong>Author:</strong> {book.author}
              </p>
              {book.description && (
                <p className="book-description">
                  <i
                    className="fas fa-align-left"
                    style={{ marginRight: "0.5rem" }}
                  ></i>
                  {book.description}
                </p>
              )}
            </div>
            <div className="book-actions">
              <button onClick={() => onEdit(book)} className="btn-edit">
                <i className="fas fa-edit"></i> Edit
              </button>
              <button onClick={() => onDelete(book.id!)} className="btn-delete">
                <i className="fas fa-trash"></i> Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default BookList;
```

**Create `src/components/BookForm.tsx`:**

```typescript
import React, { useState, useEffect } from "react";
import { Book } from "../types/Book";
import "./BookForm.css";

interface BookFormProps {
  book?: Book | null;
  onSubmit: (book: Book) => void;
  onCancel?: () => void;
}

const BookForm: React.FC<BookFormProps> = ({ book, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState<Book>({
    title: "",
    author: "",
    description: "",
  });

  useEffect(() => {
    if (book) {
      setFormData(book);
    } else {
      setFormData({ title: "", author: "", description: "" });
    }
  }, [book]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ title: "", author: "", description: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="book-form">
      <div className="form-group">
        <label htmlFor="title">
          <i className="fas fa-book" style={{ marginRight: "0.5rem" }}></i>
          Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
          placeholder="Enter book title"
        />
      </div>

      <div className="form-group">
        <label htmlFor="author">
          <i className="fas fa-user" style={{ marginRight: "0.5rem" }}></i>
          Author
        </label>
        <input
          type="text"
          id="author"
          name="author"
          value={formData.author}
          onChange={handleChange}
          required
          placeholder="Enter author name"
        />
      </div>

      <div className="form-group">
        <label htmlFor="description">
          <i className="fas fa-align-left" style={{ marginRight: "0.5rem" }}></i>
          Description
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Enter book description (optional)"
          rows={3}
        />
      </div>

      <div className="form-actions">
        <button type="submit" className="btn-submit">
          <i
            className={book ? "fas fa-save" : "fas fa-plus"}
            style={{ marginRight: "0.5rem" }}
          ></i>
          {book ? "Update Book" : "Add Book"}
        </button>
        {book && onCancel && (
          <button type="button" onClick={onCancel} className="btn-cancel">
            <i className="fas fa-times" style={{ marginRight: "0.5rem" }}></i>
            Cancel
          </button>
        )}
      </div>
    </form>
  );
};

export default BookForm;
```

**Create `src/components/AuthForm.tsx`:**

```typescript
import React, { useState } from "react";
import "./AuthForm.css";

interface AuthFormProps {
  mode: "login" | "register";
  onSubmit: (data: any) => void;
  onSwitchMode: () => void;
  error?: string;
}

const AuthForm: React.FC<AuthFormProps> = ({
  mode,
  onSubmit,
  onSwitchMode,
  error,
}) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>
          <i
            className={
              mode === "login" ? "fas fa-sign-in-alt" : "fas fa-user-plus"
            }
            style={{ marginRight: "0.75rem" }}
          ></i>
          {mode === "login" ? "Login" : "Register"}
        </h2>

        {error && (
          <div className="error-message">
            <i
              className="fas fa-exclamation-circle"
              style={{ marginRight: "0.5rem" }}
            ></i>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">
              <i className="fas fa-user" style={{ marginRight: "0.5rem" }}></i>
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>

          {mode === "register" && (
            <div className="form-group">
              <label htmlFor="email">
                <i
                  className="fas fa-envelope"
                  style={{ marginRight: "0.5rem" }}
                ></i>
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          )}

          <div className="form-group">
            <label htmlFor="password">
              <i className="fas fa-lock" style={{ marginRight: "0.5rem" }}></i>
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              minLength={6}
            />
          </div>

          <button type="submit" className="btn-submit">
            {mode === "login" ? "Login" : "Register"}
          </button>
        </form>

        <p className="switch-mode">
          {mode === "login"
            ? "Don't have an account? "
            : "Already have an account? "}
          <button onClick={onSwitchMode} className="link-button">
            {mode === "login" ? "Register here" : "Login here"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
```

### Step 8: Create Component Styles

Create CSS files for all components:

- `src/components/BookList.css`
- `src/components/BookForm.css`
- `src/components/AuthForm.css`

### Step 9: Create Main App Component

**Edit `src/App.tsx`** - Integrate all components with state management

### Step 10: Build and Run Frontend

```powershell
# Run development server
npm run dev
```

**Frontend will be available at:** `http://localhost:3000`

---

## 🗂️ PART 4: Git Repository Setup

### Step 1: Initialize Git Repository

```powershell
cd C:\Users\LENOVO\Downloads\SE_assignment
git init
```

### Step 2: Configure Git Identity

```powershell
git config user.name "Your Name"
git config user.email "your@email.com"
```

### Step 3: Create Commit History

Run the `setup_git.ps1` script to create 43 commits spanning Oct 22-27, 2025

```powershell
.\setup_git.ps1
```

### Step 4: Push to GitHub

```powershell
# Create repository on GitHub first, then:
git remote add origin https://github.com/yourusername/library-management-system.git
git branch -M main
git push -u origin main
```

---

## 📊 Complete Package List

### Backend (.NET NuGet Packages)

```
Microsoft.EntityFrameworkCore - 9.0.0
Microsoft.EntityFrameworkCore.Sqlite - 9.0.0
Microsoft.EntityFrameworkCore.Design - 9.0.0
Swashbuckle.AspNetCore (included in template)
```

### Frontend (npm Packages)

```json
{
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "axios": "^1.7.7"
  },
  "devDependencies": {
    "@types/react": "^18.3.12",
    "@types/react-dom": "^18.3.1",
    "@vitejs/plugin-react": "^4.3.3",
    "typescript": "~5.6.2",
    "vite": "^5.4.10"
  }
}
```

---

## 🎯 Testing the Complete System

### 1. Start Backend

```powershell
cd Backend\LibraryAPI
dotnet run
```

**Available at:** http://localhost:5001

### 2. Start Frontend (in new terminal)

```powershell
cd Frontend\library-frontend
npm run dev
```

**Available at:** http://localhost:3000

### 3. Test Flow

1. Register a new user
2. Login with credentials
3. Add a new book
4. Edit a book
5. Delete a book
6. Logout

---

## 📝 Summary of All Commands

```powershell
# Backend Setup
cd Backend
dotnet new webapi -n LibraryAPI -f net9.0
cd LibraryAPI
dotnet add package Microsoft.EntityFrameworkCore --version 9.0.0
dotnet add package Microsoft.EntityFrameworkCore.Sqlite --version 9.0.0
dotnet add package Microsoft.EntityFrameworkCore.Design --version 9.0.0
dotnet tool install --global dotnet-ef --version 9.0.0
dotnet ef migrations add InitialWithAuth
dotnet ef database update
dotnet restore
dotnet build
dotnet run

# Frontend Setup
cd ../../Frontend
npm create vite@latest library-frontend -- --template react-ts
cd library-frontend
npm install
npm install axios
npm run dev

# Git Setup
cd ../../
git init
git config user.name "Your Name"
git config user.email "your@email.com"
.\setup_git.ps1
git remote add origin https://github.com/yourusername/repo.git
git branch -M main
git push -u origin main
```

---

## 🎓 Learning Outcomes

By completing this project, you've learned:

1. **Backend Development**

   - ASP.NET Core Web API architecture
   - Entity Framework Core ORM
   - SQLite database integration
   - RESTful API design
   - Authentication implementation
   - Database migrations

2. **Frontend Development**

   - React with TypeScript
   - Component-based architecture
   - State management
   - API integration with Axios
   - Form handling and validation
   - CSS styling

3. **Full-Stack Integration**

   - CORS configuration
   - HTTP requests/responses
   - Client-server communication
   - localStorage for persistence

4. **Development Tools**
   - Git version control
   - npm package management
   - NuGet package management
   - Vite build tool
   - Swagger API documentation

---

## 📚 Resources

- .NET Documentation: https://docs.microsoft.com/dotnet/
- React Documentation: https://react.dev/
- Entity Framework Core: https://docs.microsoft.com/ef/core/
- Vite: https://vitejs.dev/
- TypeScript: https://www.typescriptlang.org/

---

**Project completed successfully! 🎉**
