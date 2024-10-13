import { IsNotEmpty, IsString } from 'class-validator';

export class loginDto {
  @IsString({ message: 'El campo usuario debe ser un string' })
  @IsNotEmpty({ message: 'El campo usuario es obligatorio' })
  readonly usuario: string;

  @IsString({ message: 'El campo password debe ser un string' })
  @IsNotEmpty({ message: 'El campo password es obligatorio' })
  password: string;
}
