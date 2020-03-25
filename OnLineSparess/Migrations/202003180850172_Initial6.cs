namespace OnLineSparess.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Initial6 : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Users", "EmailAddress", c => c.String());
            DropColumn("dbo.Sellers", "EmailAddress");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Sellers", "EmailAddress", c => c.String());
            DropColumn("dbo.Users", "EmailAddress");
        }
    }
}
