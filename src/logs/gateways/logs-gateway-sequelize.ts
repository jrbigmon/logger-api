import { OperationalSystem } from './../entities/operational-system/operational-system-entity';
import { ClientModel } from './../entities/client/client-model';
import { OperationalSystemModel } from './../entities/operational-system/operational-system-model';
import { DeviceModel } from './../entities/device/device.model';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Log } from '../entities/log/log.entity';
import { LogGatewayInterface } from './logs-gateways-interface';
import { LogModel } from '../entities/log/log.model';
import { Device } from '../entities/device/device.entity';
import { Transaction } from 'sequelize';
import { Client } from '../entities/client/client-entity';

@Injectable()
export class LogGatewaySequelize implements LogGatewayInterface {
  constructor(
    @InjectModel(LogModel)
    protected readonly logModel: typeof LogModel,
    @InjectModel(DeviceModel)
    protected readonly deviceModel: typeof DeviceModel,
    @InjectModel(OperationalSystemModel)
    protected readonly operationalSystemModel: typeof OperationalSystemModel,
    @InjectModel(ClientModel)
    protected readonly clientModel: typeof ClientModel,
  ) {}

  private async getOrCreateDevice(
    device: Device,
    transaction?: Transaction,
  ): Promise<DeviceModel> {
    if (!device) return;
    const deviceInDb = await this.deviceModel.findOne({
      where: {
        type: device.type,
        brand: device.brand,
        model: device.model,
      },
    });

    if (deviceInDb) return deviceInDb;

    const deviceCreated = await this.deviceModel.create(device, {
      transaction,
    });

    return deviceCreated;
  }

  private async getOrCreateOperationalSystem(
    os: OperationalSystem,
    transaction?: Transaction,
  ): Promise<OperationalSystem> {
    if (!os) return;
    const osInDb = await this.operationalSystemModel.findOne({
      where: {
        name: os.name,
        version: os.version,
        platform: os.platform,
      },
    });

    if (osInDb) return osInDb;

    const osCreated = await this.operationalSystemModel.create(os, {
      transaction,
    });

    return osCreated;
  }

  private async getOrCreateClient(
    client: Client,
    transaction?: Transaction,
  ): Promise<Client> {
    if (!client) return;
    const clientInDb = await this.clientModel.findOne({
      where: {
        type: client.type,
        name: client.name,
        version: client.version,
        engine: client.engine,
        engineVersion: client.engineVersion,
      },
    });

    if (clientInDb) return clientInDb;

    const clientCreated = await this.clientModel.create(client, {
      transaction,
    });

    return clientCreated;
  }

  async create(log: Log): Promise<Log> {
    const device = await this.getOrCreateDevice(log.device);
    const os = await this.getOrCreateOperationalSystem(log.os);
    const client = await this.getOrCreateClient(log.client);

    const logFormatted: Partial<Log> = {
      clientId: client?.id || null,
      deviceId: device?.id || null,
      osId: os?.id || null,
      message: log.message,
      ip: log.ip,
      params: log.params,
      router: log.router,
      method: log.method,
    };

    const logCreated = await this.logModel.create(logFormatted);

    return logCreated;
  }

  async findAll(): Promise<Log[]> {
    const logs = await this.logModel.findAll();

    return logs;
  }
}
