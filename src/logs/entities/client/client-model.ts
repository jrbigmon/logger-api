import { Table, Model, Column } from 'sequelize-typescript';

@Table
export class ClientModel extends Model<ClientModel> {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @Column
  type: string;

  @Column
  name: string;

  @Column
  version: string;

  @Column
  engine: string;

  @Column({ field: 'engine_version' })
  engineVersion: string;
}
