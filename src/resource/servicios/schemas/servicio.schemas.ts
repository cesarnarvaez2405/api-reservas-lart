import { Schema as MongooseSchema } from 'mongoose';

export const ServicioSchema = new MongooseSchema({
  nombre: { type: String, required: true },
  descripcion: { type: String, required: true },
  horaInicio: { type: Number, required: true },
  horaFinal: { type: Number, required: true },
  cant_total_hora: { type: Number, required: true },
});

export type ServicioDocument = Document & {
  nombre: string;
  descripcion: string;
  horaInicio: number;
  horaFinal: number;
  cant_total_hora: number;
};
