namespace OnLineSparess.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Initial3 : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Sellers", "Price", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.Sellers", "Price");
        }
    }
}
