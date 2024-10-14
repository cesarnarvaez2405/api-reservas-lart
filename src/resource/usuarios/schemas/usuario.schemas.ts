import mongoose from 'mongoose';

export const usuarioSchema = new mongoose.Schema(
  {
    usuario: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    nombre: { type: String, required: true },
    email: { type: String, required: false, unique: true },
    estaActivo: { type: Boolean, default: true },
    rol: {
      nombre: { type: String, required: true },
      permisos: { type: [String], default: [] },
    },
  },
  { timestamps: true },
);

export type UsuarioDocument = Document & {
  usuario: string;
  password: string;
  nombre: string;
  email: string;
  estaActivo: boolean;
  rol: {
    nombre: string;
    permisos: string[];
  };
};
