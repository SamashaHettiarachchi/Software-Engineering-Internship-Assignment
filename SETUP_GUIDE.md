# Quick Start Guide - Library Management System

## 🎯 Complete Setup in 5 Minutes

Follow these steps to get the Library Management System up and running on your machine.

---

## ✅ Prerequisites Checklist

Before starting, ensure you have these installed:

- [ ] **.NET 8.0 SDK** - [Download here](https://dotnet.microsoft.com/download)
- [ ] **Node.js 18+** - [Download here](https://nodejs.org/)
- [ ] **A code editor** (VS Code recommended)
- [ ] **A web browser** (Chrome, Edge, or Firefox)

### Verify Installations

Open PowerShell and run:

```powershell
# Check .NET
dotnet --version
# Should show: 8.0.x or higher

# Check Node.js
node --version
# Should show: v18.x or higher

# Check npm
npm --version
# Should show: 9.x or higher
```

If any command fails, install the missing software from the links above.

---

## 🚀 Step-by-Step Setup

### Step 1: Open Project Folder

```powershell
# Navigate to your project directory
cd C:\Users\LENOVO\Downloads\SE_assignment
```

### Step 2: Start the Backend

Open a PowerShell terminal:

```powershell
# Navigate to backend
cd Backend\LibraryAPI

# Restore dependencies
dotnet restore

# Run the API
dotnet run
```

**Expected output:**

```
info: Microsoft.Hosting.Lifetime[14]
      Now listening on: http://localhost:5001
info: Microsoft.Hosting.Lifetime[14]
      Now listening on: https://localhost:7001
Database initialized successfully
Library Management API is running...
```

✅ **Backend is running!** Keep this terminal open.

### Step 3: Start the Frontend

Open a **NEW** PowerShell terminal (keep backend running):

```powershell
# Navigate to project directory
cd C:\Users\LENOVO\Downloads\SE_assignment

# Navigate to frontend
cd Frontend\library-frontend

# Install dependencies (first time only)
npm install

# Start the development server
npm run dev
```

**Expected output:**

```
  VITE v5.0.8  ready in 500 ms

  ➜  Local:   http://localhost:3000/
  ➜  Network: use --host to expose
  ➜  press h to show help
```

✅ **Frontend is running!**

### Step 4: Open the Application

Open your browser and go to: **http://localhost:3000**

You should see the Library Management System interface! 🎉

---

## 🎮 Quick Test

Try these actions to verify everything works:

1. **View existing books** - You should see 3 sample books
2. **Add a new book:**
   - Title: "Test Book"
   - Author: "Test Author"
   - Description: "This is a test"
   - Click "Add Book"
3. **Edit a book** - Click the ✏️ icon on any book
4. **Delete a book** - Click the 🗑️ icon and confirm

---

## 🐛 Troubleshooting

### Problem: "Port already in use"

**Backend (Port 5001):**

```powershell
# Find process using port 5001
netstat -ano | findstr :5001

# Kill the process (replace XXXX with PID from above)
taskkill /PID XXXX /F

# Try running again
cd Backend\LibraryAPI
dotnet run
```

**Frontend (Port 3000):**

```powershell
# Find process using port 3000
netstat -ano | findstr :3000

# Kill the process (replace XXXX with PID from above)
taskkill /PID XXXX /F

# Try running again
cd Frontend\library-frontend
npm run dev
```

### Problem: "dotnet: command not found"

**Solution:** Install .NET SDK

1. Download from: https://dotnet.microsoft.com/download
2. Install the SDK (not just runtime)
3. Restart PowerShell
4. Verify: `dotnet --version`

### Problem: "npm: command not found"

**Solution:** Install Node.js

1. Download from: https://nodejs.org/
2. Install (includes npm)
3. Restart PowerShell
4. Verify: `npm --version`

### Problem: "npm install fails"

**Solution 1 - Clear cache:**

```powershell
npm cache clean --force
npm install
```

**Solution 2 - Delete and reinstall:**

```powershell
# Delete node_modules and package-lock.json
Remove-Item -Recurse -Force node_modules
Remove-Item package-lock.json

# Reinstall
npm install
```

### Problem: "Cannot connect to API"

**Checklist:**

- [ ] Backend is running (check terminal)
- [ ] Backend shows "Now listening on: http://localhost:5001"
- [ ] No firewall blocking port 5001
- [ ] Check `src/services/bookService.ts` has correct URL

### Problem: "Database error"

**Solution:** Delete and recreate database

```powershell
cd Backend\LibraryAPI

# Delete existing database
Remove-Item library.db

# Run again (database will be recreated)
dotnet run
```

---

## 📁 Project Structure Overview

```
SE_assignment/
│
├── Backend/
│   └── LibraryAPI/          ← .NET API (Port 5001)
│       ├── Controllers/
│       ├── Data/
│       ├── Models/
│       └── library.db       ← Database (auto-created)
│
├── Frontend/
│   └── library-frontend/    ← React App (Port 3000)
│       ├── src/
│       │   ├── components/
│       │   ├── services/
│       │   └── types/
│       └── node_modules/    ← Dependencies (after npm install)
│
├── README.md                ← Main documentation
├── PROJECT_REPORT.md        ← Comprehensive report
└── SETUP_GUIDE.md           ← This file
```

---

## 🔍 Verify Installation

### Backend Health Check

Open browser: **http://localhost:5001/api/books**

Expected response:

```json
[
  {
    "id": 1,
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "description": "A classic American novel set in the Jazz Age",
    ...
  },
  ...
]
```

### Frontend Health Check

Open browser: **http://localhost:3000**

You should see:

- Header with "📚 Library Management System"
- A form to add books
- A list of existing books
- Edit and delete buttons on each book

### Swagger UI (Bonus)

Open browser: **http://localhost:5001**

You should see interactive API documentation where you can test endpoints.

---

## 📊 API Endpoints Summary

| Method | URL                               | Purpose        |
| ------ | --------------------------------- | -------------- |
| GET    | http://localhost:5001/api/books   | Get all books  |
| GET    | http://localhost:5001/api/books/1 | Get book by ID |
| POST   | http://localhost:5001/api/books   | Create book    |
| PUT    | http://localhost:5001/api/books/1 | Update book    |
| DELETE | http://localhost:5001/api/books/1 | Delete book    |

---

## 🛑 Stopping the Application

### Stop Backend

In the backend PowerShell terminal:

- Press `Ctrl + C`
- Type `Y` if prompted

### Stop Frontend

In the frontend PowerShell terminal:

- Press `Ctrl + C`
- Type `Y` if prompted

---

## 🔄 Restarting

To restart after stopping:

**Backend:**

```powershell
cd C:\Users\LENOVO\Downloads\SE_assignment\Backend\LibraryAPI
dotnet run
```

**Frontend:**

```powershell
cd C:\Users\LENOVO\Downloads\SE_assignment\Frontend\library-frontend
npm run dev
```

---

## 📝 Important Notes

### First Time Setup

- `npm install` only needs to be run once (installs dependencies)
- Database is created automatically on first run
- Sample data is seeded automatically

### Subsequent Runs

- Just run `dotnet run` in backend
- Just run `npm run dev` in frontend
- No need to reinstall or restore

### Development Mode

- Frontend has hot reload (changes reflect immediately)
- Backend requires restart for code changes
- Database persists between runs

---

## 🎓 Learning Resources

**C# .NET:**

- Official Docs: https://learn.microsoft.com/en-us/dotnet/
- Entity Framework: https://learn.microsoft.com/en-us/ef/

**React + TypeScript:**

- React Docs: https://react.dev/
- TypeScript: https://www.typescriptlang.org/docs/

**REST APIs:**

- REST API Tutorial: https://restfulapi.net/

---

## ✉️ Need Help?

If you encounter issues not covered here:

1. Check the full **README.md** for detailed information
2. Review the **PROJECT_REPORT.md** for technical details
3. Contact: people@expernetic.com

---

## ✅ Success Checklist

Before submitting or presenting, verify:

- [ ] Backend runs without errors
- [ ] Frontend runs without errors
- [ ] Can view existing books
- [ ] Can create a new book
- [ ] Can edit an existing book
- [ ] Can delete a book
- [ ] Swagger UI is accessible
- [ ] No console errors in browser
- [ ] Application is responsive on mobile

---

**You're all set! Happy coding! 🚀**

If everything is working, you're ready to demonstrate or submit your Library Management System.

For detailed technical information, refer to:

- **README.md** - Complete documentation
- **PROJECT_REPORT.md** - Comprehensive technical report
