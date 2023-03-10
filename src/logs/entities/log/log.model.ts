import {
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { ClientModel } from '../client/client-model';
import { OperationalSystemModel } from '../operational-system/operational-system-model';
import { DeviceModel } from '../device/device.model';

@Table
export class LogModel extends Model<LogModel> {
  @Column({ primaryKey: true, autoIncrement: true })
  id?: number;

  @Column({ field: 'client_id' })
  @ForeignKey(() => ClientModel)
  clientId?: number;

  @Column({ field: 'os_id' })
  @ForeignKey(() => OperationalSystemModel)
  osId?: number;

  @Column({ field: 'device_id' })
  @ForeignKey(() => DeviceModel)
  deviceId?: number;

  @Column
  params?: string;

  @Column
  method?: string;

  @Column
  message?: string;

  @Column
  router?: string;

  @Column
  ip?: string;

  @BelongsTo(() => ClientModel)
  client?: ClientModel;

  @BelongsTo(() => OperationalSystemModel)
  os?: OperationalSystemModel;

  @BelongsTo(() => DeviceModel)
  device?: DeviceModel;
}
