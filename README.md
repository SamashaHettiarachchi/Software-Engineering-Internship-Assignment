# Library Management System

A full-stack library management application built with .NET 9 and React + TypeScript.

## Features

- User authentication (register/login)
- Book management (CRUD operations)
- RESTful API with Entity Framework Core
- Modern React frontend with Vite

## Tech Stack

**Backend:** .NET 9, ASP.NET Core Web API, Entity Framework Core, SQLite  
**Frontend:** React 18, TypeScript, Vite

## Prerequisites

Before running this application, ensure you have the following installed:

- [.NET 9 SDK](https://dotnet.microsoft.com/download/dotnet/9.0)
- [Node.js](https://nodejs.org/) (v18 or higher)
- [Git](https://git-scm.com/)

## Getting Started

### Backend Setup

```bash
cd Backend/LibraryAPI
dotnet restore
dotnet ef database update
dotnet run
```

### Frontend Setup

```bash
cd Frontend/library-frontend
npm install
npm run dev
```

## API Endpoints

- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login
- `GET /api/books` - Get all books
- `POST /api/books` - Create new book
- `PUT /api/books/{id}` - Update book
- `DELETE /api/books/{id}` - Delete book

## Author

Samasha Hettiarachchi
