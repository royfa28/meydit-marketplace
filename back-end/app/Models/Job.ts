import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import User from './User'

export default class Job extends BaseModel {
    @column({ isPrimary: true })
    public id: number

    @column()
    public title: string

    @column()
    public category: string

    @column()
    public description: string

    @column({ serialize: (value: number | null) => value !== null ? value : 0, })
    public budget: string

    @column.dateTime({ autoCreate: true })
    public createdAt: DateTime

    @column.dateTime({ autoCreate: true, autoUpdate: true })
    public updatedAt: DateTime

    @column()
    public user_id: number

    @belongsTo(() => User)
    public user: BelongsTo<typeof User>
}
