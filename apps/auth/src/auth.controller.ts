import { Controller, Post, Res, UseGuards } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { Response } from 'express';

import { AuthService } from './auth.service';
import { CurrentUser } from './decorators/current-user.decorator';

import JwtAuthGuard from './guards/jwt-auth.guard';
import { LocalAuthGuard } from './guards/local-auth.guard';

import { User } from './users/schemas/user.schema';

/*
  Swagger Imports
*/

import {
  ApiTags,
  ApiCreatedResponse,
  ApiUnauthorizedResponse,
  ApiOperation,
  ApiBody,
} from '@nestjs/swagger';

import { CreatedUser } from './users/swagger/user-swagger';
import { ErrorCreateUser } from './users/swagger/error-user-swagger';
import { LoginUserRequest } from './dto/user-login';

// http://localhost:3000/auth/login

@ApiTags('login')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({
    summary: 'Make the user login.',
    description:
      'After the login, the backend gonna do a cookie with the returned JWT. But the token is not gonna shown in JSON.',
  })
  @ApiBody({ type: LoginUserRequest })
  @ApiCreatedResponse({
    description:
      'The Login of the user has successfully returned the user info.',
    type: CreatedUser,
  })
  @ApiUnauthorizedResponse({
    description: 'Error of the UnauthorizedException.',
    type: ErrorCreateUser,
  })
  @UseGuards(LocalAuthGuard)
  // http://localhost:3000/auth/login
  @Post('login')
  async login(
    @CurrentUser() user: User,
    @Res({ passthrough: true }) response: Response,
  ) {
    await this.authService.login(user, response);
    response.send(user);
  }

  @UseGuards(JwtAuthGuard)
  @MessagePattern('validate_user')
  async validateUser(@CurrentUser() user: User) {
    return user;
  }
}
