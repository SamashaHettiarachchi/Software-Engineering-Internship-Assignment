using Microsoft.EntityFrameworkCore;
using LibraryAPI.Models;

namespace LibraryAPI.Data
{
    public class LibraryContext : DbContext
    {
        public LibraryContext(DbContextOptions<LibraryContext> options) : base(options)
        {
        }

        public DbSet<Book> Books { get; set; }
        public DbSet<User> Users { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>()
                .HasIndex(u => u.Username)
                .IsUnique();

            modelBuilder.Entity<User>()
                .HasIndex(u => u.Email)
                .IsUnique();

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
}
