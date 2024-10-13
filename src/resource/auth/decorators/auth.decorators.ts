import { applyDecorators, UseGuards } from '@nestjs/common';
import { Role } from 'src/common/enums/rol.enum';
import { Roles } from './roles.decorators';
import { AuthGuard } from '../guard/auth.guard';
import { RolesGuard } from '../guard/roles.guard';

export function Auth(rol?: Role) {
  return applyDecorators(Roles(rol), UseGuards(AuthGuard, RolesGuard));
}
