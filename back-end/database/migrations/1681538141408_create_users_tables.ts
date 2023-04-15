import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class Users extends BaseSchema {
    protected tableName = "users";

    public async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments("id");
            table.string("first_name").notNullable();
            table.string("last_name").notNullable();
            table.string("phone_number").notNullable();
            table.string("address");
            table.string("email").notNullable().unique();
            table.string("password").notNullable();
            table.string("user_type").notNullable();
            table.timestamps(true, true);
        });
    }

    public async down() {
        this.schema.dropTable(this.tableName);
    }
}
