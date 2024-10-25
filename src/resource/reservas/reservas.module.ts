import { forwardRef, Module } from '@nestjs/common';
import { ReservasService } from './reservas.service';
import { ReservasController } from './reservas.controller';
import { DatabaseModule } from 'src/config/db/configMongo.module';
import { AuthModule } from '../auth/auth.module';
import { ReservasProviders } from './reservas.providers';

@Module({
  imports: [DatabaseModule, forwardRef(() => AuthModule)],
  controllers: [ReservasController],
  providers: [ReservasService, ...ReservasProviders],
})
export class ReservasModule {}
