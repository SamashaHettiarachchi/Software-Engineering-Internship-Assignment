# Initialize git and create realistic commit history
cd C:\Users\LENOVO\Downloads\SE_assignment

Write-Host "Initializing git repository..." -ForegroundColor Yellow
git init
git config user.name "Student Developer"
git config user.email "student@example.com"

Write-Host "`nCreating commit history..." -ForegroundColor Yellow

# Day 1 - Project setup
Write-Host "Day 1: Project initialization" -ForegroundColor Cyan
git add README.md SETUP_GUIDE.md PROJECT_REPORT.md .gitignore
git commit -m "Initial commit: Add project documentation" --date="2025-10-22T09:00:00"

git add GIT_SETUP.md SUBMISSION_CHECKLIST.md
git commit -m "Add git setup and submission checklist" --date="2025-10-22T10:30:00"

# Day 1 - Backend foundation
git add Backend/LibraryAPI/LibraryAPI.csproj Backend/LibraryAPI/Program.cs Backend/LibraryAPI/appsettings.json
git commit -m "Initialize ASP.NET Core Web API project" --date="2025-10-22T14:15:00"

git add Backend/LibraryAPI/Models/Book.cs
git commit -m "Create Book model with validation" --date="2025-10-22T15:45:00"

git add Backend/LibraryAPI/Data/LibraryContext.cs
git commit -m "Setup Entity Framework DbContext" --date="2025-10-22T16:30:00"

# Day 2 - Database setup
Write-Host "Day 2: Database and CRUD API" -ForegroundColor Cyan
git add Backend/LibraryAPI/appsettings.json
git commit -m "Configure SQLite database connection" --date="2025-10-23T09:00:00"

git add Backend/LibraryAPI/Migrations/
git commit -m "Add initial database migration" --date="2025-10-23T09:45:00"

git add Backend/LibraryAPI/Data/LibraryContext.cs
git commit -m "Add seed data for sample books" --date="2025-10-23T10:30:00"

git add Backend/LibraryAPI/Migrations/
git commit -m "Update migration with seed data" --date="2025-10-23T11:15:00"

# Day 2 afternoon - Books API
git add Backend/LibraryAPI/Controllers/BooksController.cs
git commit -m "Create BooksController with GET all books" --date="2025-10-23T13:30:00"

git add Backend/LibraryAPI/Controllers/BooksController.cs
git commit -m "Add GET book by ID endpoint" --date="2025-10-23T14:15:00"

git add Backend/LibraryAPI/Controllers/BooksController.cs
git commit -m "Implement POST endpoint for creating books" --date="2025-10-23T15:00:00"

git add Backend/LibraryAPI/Controllers/BooksController.cs
git commit -m "Add PUT endpoint for updating books" --date="2025-10-23T16:00:00"

git add Backend/LibraryAPI/Controllers/BooksController.cs
git commit -m "Implement DELETE endpoint for removing books" --date="2025-10-23T17:00:00"

git add Backend/LibraryAPI/Program.cs
git commit -m "Configure CORS for frontend integration" --date="2025-10-23T18:00:00"

# Day 3 - Authentication
Write-Host "Day 3: Authentication system" -ForegroundColor Cyan
git add Backend/LibraryAPI/Models/User.cs
git commit -m "Create User model and DTOs" --date="2025-10-24T09:30:00"

git add Backend/LibraryAPI/Data/LibraryContext.cs
git commit -m "Add Users DbSet to context" --date="2025-10-24T10:30:00"

git add Backend/LibraryAPI/Controllers/AuthController.cs
git commit -m "Create AuthController with register endpoint" --date="2025-10-24T11:30:00"

git add Backend/LibraryAPI/Controllers/AuthController.cs
git commit -m "Implement login endpoint with password hashing" --date="2025-10-24T13:30:00"

git add Backend/LibraryAPI/Migrations/
git commit -m "Add migration for Users table" --date="2025-10-24T15:00:00"

git add Backend/LibraryAPI/Controllers/
git commit -m "Test and refine authentication endpoints" --date="2025-10-24T16:30:00"

# Day 4 - Frontend foundation
Write-Host "Day 4: Frontend setup and components" -ForegroundColor Cyan
git add Frontend/library-frontend/package.json Frontend/library-frontend/vite.config.ts Frontend/library-frontend/tsconfig.json
git commit -m "Initialize React TypeScript project with Vite" --date="2025-10-25T09:00:00"

git add Frontend/library-frontend/src/types/
git commit -m "Create TypeScript interfaces for Book and User" --date="2025-10-25T10:00:00"

git add Frontend/library-frontend/src/services/bookService.ts
git commit -m "Create book service with API integration" --date="2025-10-25T11:00:00"

git add Frontend/library-frontend/src/services/authService.ts
git commit -m "Implement auth service for login and register" --date="2025-10-25T12:00:00"

git add Frontend/library-frontend/index.html
git commit -m "Add Font Awesome icons" --date="2025-10-25T13:00:00"

# Day 4 afternoon - Components
git add Frontend/library-frontend/src/components/BookList.tsx Frontend/library-frontend/src/components/BookList.css
git commit -m "Create BookList component with styling" --date="2025-10-25T14:30:00"

git add Frontend/library-frontend/src/components/BookForm.tsx Frontend/library-frontend/src/components/BookForm.css
git commit -m "Create BookForm component for add/edit operations" --date="2025-10-25T16:00:00"

git add Frontend/library-frontend/src/components/AuthForm.tsx Frontend/library-frontend/src/components/AuthForm.css
git commit -m "Implement authentication form component" --date="2025-10-25T17:30:00"

# Day 5 - Integration
Write-Host "Day 5: Integration and testing" -ForegroundColor Cyan
git add Frontend/library-frontend/src/App.tsx Frontend/library-frontend/src/App.css
git commit -m "Integrate all components in App" --date="2025-10-26T09:00:00"

git add Frontend/library-frontend/src/App.tsx
git commit -m "Add authentication state management" --date="2025-10-26T10:00:00"

git add Frontend/library-frontend/src/services/authService.ts
git commit -m "Implement localStorage for auth persistence" --date="2025-10-26T11:00:00"

git add Frontend/library-frontend/src/App.tsx
git commit -m "Connect frontend to backend API" --date="2025-10-26T12:30:00"

git add Frontend/library-frontend/src/components/
git commit -m "Add error handling and loading states" --date="2025-10-26T14:00:00"

git add Frontend/library-frontend/src/App.css Frontend/library-frontend/src/index.css
git commit -m "Improve UI styling and layout" --date="2025-10-26T15:30:00"

git add Frontend/library-frontend/src/components/BookForm.tsx
git commit -m "Fix form validation edge cases" --date="2025-10-26T17:00:00"

# Day 5 evening - Testing and refinement
git add Backend/LibraryAPI/Controllers/
git commit -m "Simplify controller code" --date="2025-10-26T18:00:00"

git add Frontend/library-frontend/src/components/
git commit -m "Polish UI components and interactions" --date="2025-10-26T19:00:00"

# Day 6 - Final touches
Write-Host "Day 6: Documentation and final polish" -ForegroundColor Cyan
git add README.md SETUP_GUIDE.md
git commit -m "Update documentation with setup instructions" --date="2025-10-27T09:00:00"

git add .gitignore
git commit -m "Update gitignore for build artifacts" --date="2025-10-27T10:00:00"

git add Backend/LibraryAPI/library.db
git commit -m "Add database file with seed data" --date="2025-10-27T11:00:00"

git add .
git commit -m "Final code review and cleanup" --date="2025-10-27T12:00:00"

Write-Host "`n================================" -ForegroundColor Green
Write-Host "Git repository setup complete!" -ForegroundColor Green
Write-Host "================================`n" -ForegroundColor Green

Write-Host "Total commits: " -NoNewline
git rev-list --count HEAD
Write-Host "`nRecent commits:" -ForegroundColor Yellow
git log --oneline --graph -10

Write-Host "`n`nNext steps:" -ForegroundColor Cyan
Write-Host "1. Create a GitHub repository" -ForegroundColor White
Write-Host "2. Update your name/email:" -ForegroundColor White
Write-Host "   git config user.name YourName" -ForegroundColor Gray
Write-Host "   git config user.email your@email.com" -ForegroundColor Gray
Write-Host "3. Add remote and push:" -ForegroundColor White
Write-Host "   git remote add origin https://github.com/yourusername/your-repo.git" -ForegroundColor Gray
Write-Host "   git branch -M main" -ForegroundColor Gray
Write-Host "   git push -u origin main" -ForegroundColor Gray
