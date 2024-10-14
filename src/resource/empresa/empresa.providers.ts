import { Connection } from 'mongoose';
import { EmpresaSchema } from './schemas/empresa.schemas';

export const EmpresaProviders = [
  {
    provide: 'EMPRESA_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('EMPRESA', EmpresaSchema),
    inject: ['DATA_SOURCE'],
  },
];
