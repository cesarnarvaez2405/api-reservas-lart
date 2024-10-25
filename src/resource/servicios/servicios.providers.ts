import { Connection } from 'mongoose';
import { ServicioSchema } from './schemas/servicio.schemas';

export const ServicioProviders = [
  {
    provide: 'SERVICIO_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('SERVICIOS', ServicioSchema),
    inject: ['DATA_SOURCE'],
  },
];
