import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import User from './User'

export default class Job extends BaseModel {
    @column({ isPrimary: true })
    public id: number

    @column()
    public jobTitle: string

    @column()
    public category: string

    @column({ serializeAs: null })
    public budget: number

    @column.dateTime({ autoCreate: true })
    public createdAt: DateTime

    @column.dateTime({ autoCreate: true, autoUpdate: true })
    public updatedAt: DateTime

    @column()
    public userId: number

    @belongsTo(() => User)
    public user: BelongsTo<typeof User>
}
