import {
  IsDateString,
  IsMongoId,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

export class CrearReservaDto {
  @IsDateString()
  @IsNotEmpty({ message: 'El tiempo es un campo obligatorio' })
  readonly tiempo: string;

  @IsNumber()
  @IsNotEmpty({ message: 'La hora es obligatorio' })
  readonly hora: number;

  @IsMongoId({
    message: 'El campo empresa es un ID de mongo valido',
  })
  @IsNotEmpty({ message: 'El campo servicio es obligatorio' })
  readonly servicio: string;

  @IsNumber()
  @IsNotEmpty({ message: 'El campo duracion es obligatorio' })
  readonly duracion: number;

  @IsNumber()
  @IsNotEmpty({ message: 'El campo capacidad es obligatorio' })
  readonly capacidad: number;

  @IsMongoId({
    message: 'El campo responsable debe ser un ID de Mongo válido',
  })
  @IsNotEmpty({ message: 'El campo responsable es obligatorio' })
  readonly responsable: string;

  @IsString({ message: 'El campo observacion es un string' })
  @IsNotEmpty({ message: 'El campo observacion es obligatorio' })
  readonly observacion: string;
}
