using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Porten_API.Migrations
{
    public partial class init : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Watches",
                columns: table => new
                {
                    Name = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Price = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    img = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Watches", x => x.Name);
                });

            migrationBuilder.InsertData(
                table: "Watches",
                columns: new[] { "Name", "Price", "img" },
                values: new object[,]
                {
                    { "Carl von Zeyten", 16500m, "img/goods/1.png" },
                    { "Emporio Armani Sportivo", 165000m, "img/goods/3.png" },
                    { "JORD AR5905", 65000m, "img/goods/2.png" },
                    { "Rolex Oyster Perpetual", 280000m, "img/goods/4.png" }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Watches");
        }
    }
}
