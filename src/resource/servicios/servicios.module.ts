import { forwardRef, Module } from '@nestjs/common';
import { ServiciosService } from './servicios.service';
import { ServiciosController } from './servicios.controller';
import { DatabaseModule } from 'src/config/db/configMongo.module';
import { AuthModule } from '../auth/auth.module';
import { ServicioProviders } from './servicios.providers';

@Module({
  imports: [DatabaseModule, forwardRef(() => AuthModule)],
  controllers: [ServiciosController],
  providers: [ServiciosService, ...ServicioProviders],
})
export class ServiciosModule {}
