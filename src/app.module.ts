import { Module } from '@nestjs/common';
import { UsuariosModule } from './resource/usuarios/usuarios.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './resource/auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    UsuariosModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
