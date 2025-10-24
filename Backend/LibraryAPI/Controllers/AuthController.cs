using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using LibraryAPI.Data;
using LibraryAPI.Models;
using System.Security.Cryptography;
using System.Text;

namespace LibraryAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly LibraryContext _context;

        public AuthController(LibraryContext context)
        {
            _context = context;
        }

        [HttpPost("register")]
        public async Task<ActionResult<AuthResponse>> Register(RegisterDto registerDto)
        {
            if (await _context.Users.AnyAsync(u => u.Username == registerDto.Username))
            {
                return BadRequest(new { message = "Username already exists" });
            }

            if (await _context.Users.AnyAsync(u => u.Email == registerDto.Email))
            {
                return BadRequest(new { message = "Email already exists" });
            }

            var user = new User
            {
                Username = registerDto.Username,
                Email = registerDto.Email,
                PasswordHash = HashPassword(registerDto.Password),
                CreatedAt = DateTime.UtcNow
            };

            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            return Ok(new AuthResponse
            {
                Id = user.Id,
                Username = user.Username,
                Email = user.Email,
                Message = "Registration successful"
            });
        }

        [HttpPost("login")]
        public async Task<ActionResult<AuthResponse>> Login(LoginDto loginDto)
        {
            var user = await _context.Users
                .FirstOrDefaultAsync(u => u.Username == loginDto.UsernameOrEmail || 
                                         u.Email == loginDto.UsernameOrEmail);

            if (user == null || !VerifyPassword(loginDto.Password, user.PasswordHash))
            {
                return Unauthorized(new { message = "Invalid credentials" });
            }

            return Ok(new AuthResponse
            {
                Id = user.Id,
                Username = user.Username,
                Email = user.Email,
                Message = "Login successful"
            });
        }

        private string HashPassword(string password)
        {
            using var sha256 = SHA256.Create();
            var bytes = sha256.ComputeHash(Encoding.UTF8.GetBytes(password));
            return Convert.ToBase64String(bytes);
        }

        private bool VerifyPassword(string password, string hash)
        {
            return HashPassword(password) == hash;
        }
    }
}
