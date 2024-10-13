import {
  IsArray,
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

class RolDto {
  @IsString({ message: 'El campo nombre del rol debe ser un string' })
  @IsNotEmpty({ message: 'El campo nombre del rol es obligatorio' })
  readonly nombre: string;

  @IsOptional()
  @IsArray({ message: 'El campo permisos debe ser un array de strings' })
  @IsString({ each: true, message: 'Cada permiso debe ser un string' })
  readonly permisos?: string[];
}

export class RegisterDto {
  @IsString({ message: 'El campo nombre debe ser un string' })
  @IsNotEmpty({ message: 'El campo nombre es obligatorio' })
  readonly nombre: string;

  @IsString({ message: 'El campo usuario debe ser un string' })
  @IsNotEmpty({ message: 'El campo usuario es obligatorio' })
  readonly usuario: string;

  @IsString({ message: 'El campo password debe ser un string' })
  @IsNotEmpty({ message: 'El campo password es obligatorio' })
  password: string;

  @IsOptional()
  @IsBoolean()
  readonly estaActivo: boolean;

  @IsOptional()
  @ValidateNested({ message: 'El campo rol debe ser un objeto válido' })
  @Type(() => RolDto)
  readonly rol?: RolDto;
}
