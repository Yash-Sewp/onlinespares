namespace OnLineSparess.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Initial1 : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Sellers",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        FirstName = c.String(),
                        LastName = c.String(),
                        EmailAddress = c.String(),
                        CellNumber = c.Int(nullable: false),
                        Location = c.String(),
                        Title = c.String(),
                        Make = c.String(),
                        PartNumber = c.String(),
                        Description = c.String(),
                        ImageOne = c.String(),
                        ImageTwo = c.String(),
                        ImageThree = c.String(),
                        ImageFour = c.String(),
                        ImageFive = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Sellers");
        }
    }
}
