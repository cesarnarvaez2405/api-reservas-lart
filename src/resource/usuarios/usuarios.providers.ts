import { Connection } from 'mongoose';
import { usuarioSchema } from './schemas/usuario.schemas';

export const UsuariosProviders = [
  {
    provide: 'USUARIOS_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('USUARIO', usuarioSchema),
    inject: ['DATA_SOURCE'],
  },
];
