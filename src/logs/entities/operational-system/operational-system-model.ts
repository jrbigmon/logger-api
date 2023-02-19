import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class OperationalSystemModel extends Model<OperationalSystemModel> {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @Column
  name: string;

  @Column
  version: string;

  @Column
  platform: string;
}
