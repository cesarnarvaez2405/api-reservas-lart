import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateServicioDto {
  @IsString({ message: 'El nombre debe ser un string' })
  @IsNotEmpty({ message: 'El nombre es obligatorio' })
  readonly nombre: string;

  @IsString({ message: 'El descripcion debe ser un string' })
  @IsNotEmpty({ message: 'El descripcion es obligatorio' })
  readonly descripcion: string;

  @IsNumber()
  @IsNotEmpty({ message: 'La horaInicio es obligatorio' })
  readonly horaInicio: number;

  @IsNumber()
  @IsNotEmpty({ message: 'La horaFinal es obligatorio' })
  readonly horaFinal: number;

  @IsNumber()
  @IsNotEmpty({ message: 'La cant_total_hora es obligatorio' })
  readonly cant_total_hora: number;
}
