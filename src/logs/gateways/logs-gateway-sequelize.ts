import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Log } from '../entities/log/log.entity';
import { LogGatewayInterface } from './logs-gateways-interface';
import { LogModel } from '../entities/log/log.model';

@Injectable()
export class LogGatewaySequelize implements LogGatewayInterface {
  constructor(
    @InjectModel(LogModel) protected readonly logModel: typeof LogModel,
  ) {}

  async create(log: Log): Promise<Log> {
    const logCreated = await this.logModel.create(log);
    log.id = logCreated.id;
    return logCreated;
  }

  async findAll(): Promise<Log[]> {
    const logs = await this.logModel.findAll();

    return logs;
  }
}
