import { ApiProperty } from '@nestjs/swagger';

export class CreatedUser {
  @ApiProperty({ description: 'Id of data after created on MongoDB.' })
  _id: string;

  @ApiProperty({ description: 'Email of the user.' })
  email: string;

  @ApiProperty({ description: 'Crypto password of the user.' })
  password: string;
}
