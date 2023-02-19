import { LogGatewaySequelize } from './gateways/logs-gateway-sequelize';
import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';
import { LogsService } from './logs.service';
import { LogsController } from './logs.controller';
import { ClientModel } from './entities/client/client-model';
import { OperationalSystemModel } from './entities/operational-system/operational-system-model';
import { DeviceModel } from './entities/device/device.model';
import { LogModel } from './entities/log/log.model';

const models = SequelizeModule.forFeature([
  ClientModel,
  OperationalSystemModel,
  DeviceModel,
  LogModel,
]);

@Module({
  imports: [models],
  controllers: [LogsController],
  providers: [
    LogsService,
    LogGatewaySequelize,
    { provide: 'logGatewaySequelize', useExisting: LogGatewaySequelize },
  ],
})
export class LogsModule {}
