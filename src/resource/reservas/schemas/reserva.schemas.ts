import { Schema as MongooseSchema, Types } from 'mongoose';

export const reservaSchema = new MongooseSchema({
  tiempo: { type: Date, required: true },
  servicio: {
    id: { type: MongooseSchema.Types.ObjectId, ref: 'servicio' },
    nombre: { type: String, required: true },
    empresa: { type: MongooseSchema.Types.ObjectId, ref: 'usuarios' },
  },
  duracion: { type: Number, require: true },
  capacidad: { type: Number, required: true },
  responsable: { type: MongooseSchema.Types.ObjectId, ref: 'usuarios' },
  observacion: { type: String, required: true },
  estaActiva: { type: Boolean, require: false, default: true },
});

export type ReservaDocument = Document & {
  tiempo: string;
  servicio: {
    id: Types.ObjectId;
    nombre: string;
    empresa: Types.ObjectId;
  };
  duracion: number;
  capacidad: number;
  responsable: Types.ObjectId;
  observacion: string;
  estaActiva: boolean;
};
