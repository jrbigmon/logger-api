import { Module } from '@nestjs/common';
import { LogsModule } from './logs/logs.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { ClientModel } from './logs/entities/client/client-model';
import { OperationalSystemModel } from './logs/entities/operational-system/operational-system-model';
import { DeviceModel } from './logs/entities/device/device.model';
import { LogModel } from './logs/entities/log/log.model';

const models = [ClientModel, OperationalSystemModel, DeviceModel, LogModel];

@Module({
  imports: [
    LogsModule,
    SequelizeModule.forRoot({
      dialect: 'sqlite',
      host: ':memory:',
      autoLoadModels: true,
      models,
    }),
  ],
})
export class AppModule {}
