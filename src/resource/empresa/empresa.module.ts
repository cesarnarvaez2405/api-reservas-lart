import { forwardRef, Module } from '@nestjs/common';
import { EmpresaService } from './empresa.service';
import { EmpresaController } from './empresa.controller';
import { DatabaseModule } from 'src/config/db/configMongo.module';
import { EmpresaProviders } from './empresa.providers';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [DatabaseModule, forwardRef(() => AuthModule)],
  controllers: [EmpresaController],
  providers: [EmpresaService, ...EmpresaProviders],
})
export class EmpresaModule {}
