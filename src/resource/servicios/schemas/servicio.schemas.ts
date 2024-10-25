import { Schema as MongooseSchema } from 'mongoose';

export const ServicioSchema = new MongooseSchema({
  nombre: { type: String, required: true },
});

export type ServicioDocument = Document & {
  nombre: string;
};
