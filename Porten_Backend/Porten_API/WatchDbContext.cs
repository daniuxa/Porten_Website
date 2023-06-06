using Microsoft.EntityFrameworkCore;

namespace Porten_API
{
    public class WatchDbContext : DbContext
    {
        public DbSet<Watch> Watches { get; set; } = null!;

        public WatchDbContext(DbContextOptions<WatchDbContext> options) : base(options)
        {

        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Watch>().HasData(
                new Watch { Name = "Carl von Zeyten", Price = 16500, img = "img/goods/1.png" },
                new Watch { Name = "JORD AR5905", Price = 65000, img = "img/goods/2.png" },
                new Watch { Name = "Emporio Armani Sportivo", Price = 165000, img = "img/goods/3.png" },
                new Watch { Name = "Rolex Oyster Perpetual", Price = 280000, img = "img/goods/4.png" }

                );
        }
    }
}
