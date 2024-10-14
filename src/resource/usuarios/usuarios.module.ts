import { Module } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { UsuariosController } from './usuarios.controller';
import { DatabaseModule } from 'src/config/db/configMongo.module';
import { UsuariosProviders } from './usuarios.providers';
import { MongooseModule } from '@nestjs/mongoose';
import { usuarioSchema } from './schemas/usuario.schemas';

@Module({
  imports: [DatabaseModule],
  controllers: [UsuariosController],
  providers: [UsuariosService, ...UsuariosProviders],
  exports: [UsuariosService],
})
export class UsuariosModule {}
