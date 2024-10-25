import { Module } from '@nestjs/common';
import { UsuariosModule } from './resource/usuarios/usuarios.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './resource/auth/auth.module';
import { EmpresaModule } from './resource/empresa/empresa.module';
import { ReservasModule } from './resource/reservas/reservas.module';
import { ServiciosModule } from './resource/servicios/servicios.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    UsuariosModule,
    AuthModule,
    EmpresaModule,
    ReservasModule,
    ServiciosModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
