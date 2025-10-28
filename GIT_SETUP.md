# Git Setup Instructions

## Initialize Git Repository

Follow these steps to set up Git version control for your project.

### Step 1: Initialize Git

Open PowerShell in the project root directory:

```powershell
cd C:\Users\LENOVO\Downloads\SE_assignment

# Initialize Git repository
git init

# Check status
git status
```

### Step 2: Add All Files

```powershell
# Add all files to staging
git add .

# Check what will be committed
git status
```

### Step 3: Create Initial Commit

```powershell
# Commit with a message
git commit -m "Initial commit: Complete Library Management System

- Backend: C# .NET Web API with SQLite database
- Frontend: React TypeScript with Vite
- Features: Complete CRUD operations for books
- Documentation: README, PROJECT_REPORT, and SETUP_GUIDE"
```

### Step 4: Create GitHub Repository

1. Go to https://github.com
2. Click "New repository" (+ icon in top right)
3. Repository name: `library-management-system`
4. Description: `Full-stack Library Management System with C# .NET and React TypeScript`
5. Choose: Public or Private (as per your preference)
6. **DO NOT** initialize with README (we already have one)
7. Click "Create repository"

### Step 5: Connect to GitHub

After creating the repository, GitHub will show you commands. Use these:

```powershell
# Add remote repository (replace YOUR-USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR-USERNAME/library-management-system.git

# Verify remote
git remote -v

# Push to GitHub (first time)
git branch -M main
git push -u origin main
```

### Step 6: Verify Upload

1. Refresh your GitHub repository page
2. You should see all files uploaded
3. README.md should display automatically

---

## Making Future Changes

### After making code changes:

```powershell
# Check what changed
git status

# Add specific files
git add Backend/LibraryAPI/Controllers/BooksController.cs

# Or add all changes
git add .

# Commit with descriptive message
git commit -m "Add validation for book title length"

# Push to GitHub
git push
```

---

## Useful Git Commands

```powershell
# View commit history
git log --oneline

# Create a new branch
git branch feature-name
git checkout feature-name

# Or create and switch in one command
git checkout -b feature-name

# Switch back to main
git checkout main

# Merge branch into main
git merge feature-name

# View current branch
git branch

# View differences
git diff
```

---

## Project Submission

Once your repository is ready:

1. **Make sure all files are pushed:**

   ```powershell
   git status
   # Should show: "nothing to commit, working tree clean"
   ```

2. **Verify on GitHub:**

   - Visit your repository URL
   - Check all folders are present
   - Verify README displays correctly

3. **Share your repository:**
   - Copy your repository URL (e.g., `https://github.com/YOUR-USERNAME/library-management-system`)
   - Email to: people@expernetic.com
   - Include: Repository link, your name, contact information

---

## Important: What NOT to Commit

The `.gitignore` file already excludes:

- `node_modules/` - Frontend dependencies (too large)
- `bin/` and `obj/` - Build files
- `*.db` - Database file (will be recreated)
- `.vs/` - IDE files
- Environment files

This keeps your repository clean and focused on source code!

---

## Troubleshooting

### "Git is not recognized"

**Solution:** Install Git from https://git-scm.com/downloads

### "Permission denied (publickey)"

**Solution:** Use HTTPS instead of SSH, or set up SSH keys

### "Failed to push"

**Solution:**

```powershell
# Pull latest changes first
git pull origin main --rebase

# Then push
git push
```

---

## Repository Structure on GitHub

Your repository will look like this:

```
library-management-system/
├── .gitignore
├── README.md
├── PROJECT_REPORT.md
├── SETUP_GUIDE.md
├── GIT_SETUP.md
├── Backend/
│   └── LibraryAPI/
│       ├── Controllers/
│       ├── Data/
│       ├── Models/
│       └── ...
└── Frontend/
    └── library-frontend/
        ├── src/
        ├── public/
        └── ...
```

---

**Ready to share your work with the world! 🚀**

Good luck with your submission!
