import { ClientModel } from '../client/client-model';
import { DeviceModel } from '../device/device.model';
import { OperationalSystemModel } from '../operational-system/operational-system-model';

export class Log {
  constructor(
    public id?: number,
    public clientId?: number,
    public osId?: number,
    public deviceId?: number,
    public params?: string,
    public method?: string,
    public message?: string,
    public router?: string,
    public ip?: string,
    public client?: ClientModel,
    public os?: OperationalSystemModel,
    public device?: DeviceModel,
  ) {}
}

export class LogTest {
  constructor(
    public id?: number,
    public client?: string,
    public os?: string,
    public device?: string,
  ) {}
}
