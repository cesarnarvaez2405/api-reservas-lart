import { Schema as MongooseSchema, Types } from 'mongoose';

export const reservaSchema = new MongooseSchema({
  tiempo: { type: Date, required: true },
  hora: { type: Number, required: true },
  servicio: { type: MongooseSchema.Types.ObjectId, ref: 'servicio' },
  duracion: { type: Number, require: true },
  capacidad: { type: Number, required: true },
  responsable: { type: MongooseSchema.Types.ObjectId, ref: 'usuarios' },
  observacion: { type: String, required: true },
  estaActiva: { type: Boolean, require: false, default: true },
});

export type ReservaDocument = Document & {
  tiempo: string;
  hora: number;
  servicio: Types.ObjectId;
  duracion: number;
  capacidad: number;
  responsable: Types.ObjectId;
  observacion: string;
  estaActiva: boolean;
};
