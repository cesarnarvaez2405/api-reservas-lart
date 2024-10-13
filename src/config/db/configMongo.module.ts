import { Module } from '@nestjs/common';
import { databaseProviders } from './configMongo.providers';

// Se importa el modulo para la obtencion del typeOrmConfig
@Module({
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class DatabaseModule {}
