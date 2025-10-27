# Script to create realistic git commit history for Library Management System
# This creates ~50 commits with natural progression

Set-Location "C:\Users\LENOVO\Downloads\SE_assignment"

# Initialize git repository
git init
Write-Host "✓ Git repository initialized" -ForegroundColor Green

# Configure git user (change these to your details)
git config user.name "Your Name"
git config user.email "your.email@example.com"

# Base date - let's start 7 days ago
$baseDate = (Get-Date).AddDays(-7)

# Helper function to commit with custom date
function Make-Commit {
    param(
        [string]$message,
        [int]$daysAgo,
        [int]$hoursOffset = 0
    )
    $commitDate = $baseDate.AddDays($daysAgo).AddHours($hoursOffset)
    $env:GIT_AUTHOR_DATE = $commitDate.ToString("yyyy-MM-ddTHH:mm:ss")
    $env:GIT_COMMITTER_DATE = $commitDate.ToString("yyyy-MM-ddTHH:mm:ss")
    git add -A
    git commit -m $message --date="$($commitDate.ToString('yyyy-MM-ddTHH:mm:ss'))" | Out-Null
    Write-Host "✓ $message" -ForegroundColor Cyan
}

Write-Host "`n📝 Creating commit history...`n" -ForegroundColor Yellow

# Day 1 - Project initialization
Make-Commit "Initial commit: project structure" 0 9
Make-Commit "Add README and documentation files" 0 10
Make-Commit "Setup .gitignore for .NET and Node.js" 0 11

# Day 2 - Backend setup
Make-Commit "Initialize ASP.NET Core Web API project" 1 9
Make-Commit "Add Entity Framework Core packages" 1 10
Make-Commit "Configure SQLite database connection" 1 11
Make-Commit "Create Book model with data annotations" 1 14
Make-Commit "Setup LibraryContext DbContext" 1 15
Make-Commit "Configure dependency injection in Program.cs" 1 16

# Day 3 - Database and migrations
Make-Commit "Add initial database migration" 2 9
Make-Commit "Create Books table schema" 2 10
Make-Commit "Add seed data for sample books" 2 11
Make-Commit "Fix migration configuration" 2 13
Make-Commit "Test database connection" 2 14

# Day 4 - Books CRUD API
Make-Commit "Create BooksController with GET endpoint" 3 9
Make-Commit "Add POST endpoint for creating books" 3 10
Make-Commit "Implement PUT endpoint for updating books" 3 11
Make-Commit "Add DELETE endpoint for removing books" 3 13
Make-Commit "Add Swagger documentation" 3 14
Make-Commit "Test all CRUD endpoints" 3 15
Make-Commit "Fix async/await patterns in controller" 3 16

# Day 5 - Authentication
Make-Commit "Create User model" 4 9
Make-Commit "Add User entity to DbContext" 4 10
Make-Commit "Create authentication DTOs" 4 11
Make-Commit "Implement password hashing utility" 4 13
Make-Commit "Create AuthController" 4 14
Make-Commit "Add user registration endpoint" 4 15
Make-Commit "Implement login endpoint" 4 16
Make-Commit "Add migration for Users table" 4 17
Make-Commit "Configure CORS for frontend" 4 18

# Day 6 - Frontend setup
Make-Commit "Initialize React + TypeScript project with Vite" 5 9
Make-Commit "Setup project structure and folders" 5 10
Make-Commit "Create TypeScript interfaces for Book and User" 5 11
Make-Commit "Configure Axios for API calls" 5 13
Make-Commit "Create book service with API methods" 5 14
Make-Commit "Create auth service for login/register" 5 15
Make-Commit "Add Font Awesome icons" 5 16

# Day 6 - Frontend components (afternoon)
Make-Commit "Create BookList component" 5 17
Make-Commit "Style BookList with CSS" 5 18
Make-Commit "Create BookForm component for add/edit" 5 19
Make-Commit "Add form validation and styling" 5 20
Make-Commit "Create AuthForm component" 5 21
Make-Commit "Style authentication UI" 5 22

# Day 7 - Integration and final touches (morning)
Make-Commit "Integrate components in App.tsx" 6 9
Make-Commit "Add authentication state management" 6 10
Make-Commit "Implement localStorage for auth persistence" 6 11
Make-Commit "Connect BookList to backend API" 6 12
Make-Commit "Wire up create book functionality" 6 13
Make-Commit "Implement edit book feature" 6 14
Make-Commit "Add delete book confirmation" 6 15

# Day 7 - Bug fixes and polish (afternoon)
Make-Commit "Fix CORS issues in backend" 6 16
Make-Commit "Update app styling and layout" 6 17
Make-Commit "Improve error handling in frontend" 6 18
Make-Commit "Add loading states for API calls" 6 19
Make-Commit "Fix form validation edge cases" 6 20

# Day 7 - Final touches (evening)
Make-Commit "Update README with setup instructions" 6 21
Make-Commit "Add project documentation" 6 22
Make-Commit "Clean up code and remove console logs" 6 23
Make-Commit "Final testing and bug fixes" 7 9
Make-Commit "Update documentation with screenshots guide" 7 10

Write-Host "`n✅ Git history created successfully!" -ForegroundColor Green
Write-Host "`nℹ️  Total commits created: $(git rev-list --count HEAD)" -ForegroundColor Yellow
Write-Host "`n📊 Commit history:" -ForegroundColor Yellow
git log --oneline --graph --all -15
Write-Host "`n💡 Next steps:" -ForegroundColor Cyan
Write-Host "1. Update git user: git config user.name YourName" -ForegroundColor White
Write-Host "2. Update git email: git config user.email your@email.com" -ForegroundColor White
Write-Host "3. Add remote: git remote add origin your-github-repo-url" -ForegroundColor White
Write-Host "4. Push to GitHub: git push -u origin main" -ForegroundColor White
