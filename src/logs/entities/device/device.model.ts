import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class DeviceModel extends Model<DeviceModel> {
  @Column({ primaryKey: true, autoIncrement: true })
  id?: number;

  @Column
  type: string;

  @Column
  brand: string;

  @Column
  model: string;
}
