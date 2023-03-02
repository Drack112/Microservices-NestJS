import { ApiProperty } from '@nestjs/swagger';

export class ErrorCreateUser {
  @ApiProperty({ description: 'The status code of the request.' })
  statusCode: string;

  @ApiProperty({ description: 'Error message.' })
  message: string;

  @ApiProperty({ description: 'Type of the statusCode.' })
  error: string;
}
