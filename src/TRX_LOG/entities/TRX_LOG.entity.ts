import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({tableName: 'TRX_LOG', createdAt: false, updatedAt:false})

export class TRX_LOG extends Model {
    
  @Column({primaryKey: true, autoIncrement:true})
  id: number;

  @Column(DataType.TEXT)
  json_TRX: string;

  @Column
  fecha_TRX: Date;
 
}