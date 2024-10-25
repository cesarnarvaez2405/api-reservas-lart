import { Schema as MongooseSchema, Document, Types } from 'mongoose'; // Importar Schema de mongoose correctamente

export const EmpresaSchema = new MongooseSchema({
  nombre: { type: String, required: true },
  correo: { type: String, required: true },
  logo: { type: String, required: false },
  horaApertura: { type: Date, required: true },
  horaCierre: { type: Date, required: true },
  capacidad: { type: Number, required: true },
  usuarioCreacion: {
    type: MongooseSchema.Types.ObjectId,
    ref: 'usuarios',
  }, // Referencia al usuario
  usuarioActualizacion: {
    type: MongooseSchema.Types.ObjectId,
    ref: 'usuarios',
  }, // Referencia al usuario
});

export type EmpresaDocument = Document & {
  nombre: string;
  correo: string;
  logo: string;
  horaApertura: Date;
  horaCierre: Date;
  capacidad: number;
  usuarioCreacion: Types.ObjectId;
  usuarioActualizacion: Types.ObjectId;
};
