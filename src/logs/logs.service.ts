import { Log } from './entities/log/log.entity';
import { Inject, Injectable } from '@nestjs/common';
import { LogGatewaySequelize } from './gateways/logs-gateway-sequelize';

@Injectable()
export class LogsService {
  constructor(
    @Inject('logGatewaySequelize')
    private readonly logGatewayInternal: LogGatewaySequelize,
  ) {}

  create(createLogDto: Log) {
    return this.logGatewayInternal.create(createLogDto);
  }

  findAll() {
    return this.logGatewayInternal.findAll();
  }
}
