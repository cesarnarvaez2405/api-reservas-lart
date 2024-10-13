import { ExecutionContext, createParamDecorator } from '@nestjs/common';

export const UsuarioActivo = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return request.usuario;
  },
);
