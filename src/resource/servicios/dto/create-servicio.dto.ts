import { IsNotEmpty, IsString } from 'class-validator';

export class CreateServicioDto {
  @IsString({ message: 'El nombre debe ser un string' })
  @IsNotEmpty({ message: 'El nombre es obligatorio' })
  readonly nombre: string;
}
