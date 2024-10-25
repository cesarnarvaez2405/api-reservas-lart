import { Connection } from 'mongoose';
import { reservaSchema } from './schemas/reserva.schemas';

export const ReservasProviders = [
  {
    provide: 'RESERVA_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('RESERVA', reservaSchema),
    inject: ['DATA_SOURCE'],
  },
];
