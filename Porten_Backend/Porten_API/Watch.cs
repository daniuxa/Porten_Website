using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Porten_API
{
    [Table("Watches")]
    public class Watch
    {
        [Key]
        public string Name { get; set; } = null!;
        public decimal Price { get; set; }
        public string img { get; set; } = null!;
    }
}
