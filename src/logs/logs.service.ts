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
    return `This action returns all logs`;
  }

  findOne(id: number) {
    return `This action returns a #${id} log`;
  }

  update(id: number, updateLogDto: Partial<Log>) {
    return `This action updates a #${id} log`;
  }

  remove(id: number) {
    return `This action removes a #${id} log`;
  }
}
