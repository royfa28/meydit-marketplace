import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
    protected tableName = 'jobs'

    public async up() {
        this.schema.alterTable(this.tableName, (table) => {
            table.decimal('budget', 8, 2).alter()
        })
    }

    public async down() {
        this.schema.table(this.tableName, (table) => {
            table.double('budget', 8, 2).alter()
        })
    }
}
