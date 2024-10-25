import {
  IsDateString,
  IsEmail,
  IsMongoId,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

export class CrearEmpresaDto {
  @IsString({ message: 'El campo Nombre debe ser un string' })
  @IsNotEmpty({ message: 'El campo nombre es obligatorio' })
  readonly nombre: string;

  @IsEmail()
  @IsNotEmpty({ message: 'El campo correo es obligatorio' })
  readonly correo: string;

  @IsString({ message: 'El campo logo debe ser un string' })
  @IsNotEmpty({ message: 'El campo logo es obligatorio' })
  readonly logo: string;

  @IsDateString()
  @IsNotEmpty({ message: 'El campo horaApertura es obligatorio' })
  readonly horaApertura: string;

  @IsDateString()
  @IsNotEmpty({ message: 'El campo horaCierre es obligatorio' })
  readonly horaCierre: string;

  @IsNumber()
  @IsNotEmpty({ message: 'El campo capacidad es obligatorio' })
  readonly capacidad: number;

  @IsMongoId({
    message: 'El campo usuarioCreacion debe ser un ID de Mongo válido',
  })
  @IsNotEmpty({ message: 'El campo usuarioCreacion es obligatorio' })
  readonly usuarioCreacion: string;

  @IsMongoId({
    message: 'El campo usuarioActualizacion debe ser un ID de Mongo válido',
  })
  @IsNotEmpty({ message: 'El campo usuarioActualizacion es obligatorio' })
  readonly usuarioActualizacion: string;
}
