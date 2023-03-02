import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

/*
  Swagger Imports
*/

import { ApiProperty } from '@nestjs/swagger';

export class LoginUserRequest {
  @ApiProperty({
    type: String,
    description: 'Email of the user.',
    example: 'user@user.com',
    name: 'email',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    type: String,
    name: 'password',
    description: 'Password of the user.',
    example: '123',
  })
  @IsString()
  @IsNotEmpty()
  password: string;
}
