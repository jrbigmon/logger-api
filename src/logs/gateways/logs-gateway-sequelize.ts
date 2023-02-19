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
    console.log(log);
    return;
    const logCreated = await this.logModel.create(log);
    log.id = logCreated.id;
    return logCreated;
  }
}
