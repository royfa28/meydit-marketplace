import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Jobs from './Job'
export default class User extends BaseModel {
    @column({ isPrimary: true })
    public id: number

    @column()
    public first_name: string

    @column()
    public last_name: string

    @column()
    public email: string

    @column()
    public password: string

    @column()
    public phone_number: string

    @column()
    public user_type: string

    @column()
    public address: string

    @hasMany(() => Jobs)
    public jobs: HasMany<typeof Jobs>

    @column.dateTime({ autoCreate: true })
    public createdAt: DateTime

    @column.dateTime({ autoCreate: true, autoUpdate: true })
    public updatedAt: DateTime
}
