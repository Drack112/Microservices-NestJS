import { Body, Controller, Post } from '@nestjs/common';

import { CreateUserRequest } from './dto/create-user.request';
import { UsersService } from './users.service';

/*
  Swagger Imports
*/

import {
  ApiTags,
  ApiOperation,
  ApiCreatedResponse,
  ApiUnprocessableEntityResponse,
} from '@nestjs/swagger';

import { CreatedUser } from './swagger/user-swagger';
import { ErrorCreateUser } from './swagger/error-user-swagger';

@ApiTags('users')
// http://localhost:3000/auth/users
@Controller('auth/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiOperation({
    summary: 'Create a user.',
    description:
      'After the login of user, the backend app gonna do a cookie with the returned JWT. But he is not gonna shown the token.',
  })
  @ApiCreatedResponse({
    description: 'The user has successfully created.',
    type: CreatedUser,
  })
  @ApiUnprocessableEntityResponse({
    description: 'Unprocessable Entity',
    type: ErrorCreateUser,
  })
  @Post()
  async createUser(@Body() request: CreateUserRequest) {
    return this.usersService.createUser(request);
  }
}
