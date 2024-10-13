export interface PerfilActivoInterface {
  usuario: string;
  rol: { nombre: string; permisos: string[] };
}
