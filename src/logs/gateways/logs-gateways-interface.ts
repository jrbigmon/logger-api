import { Log } from '../entities/log/log.entity';

export interface LogGatewayInterface {
  create(log: Log): Promise<Log>;
  findAll?(): Promise<Log[]>;
}
