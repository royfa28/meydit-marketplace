import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
    protected tableName = 'jobs'

    public async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id')
            table.string('title')
            table.string('description')
            table.string('category')
            table.double('budget', 2)
            table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE')
            table.timestamps()
        })
    }

    public async down() {
        this.schema.dropTable(this.tableName)
    }
}
