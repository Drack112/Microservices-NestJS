import { ApiProperty } from '@nestjs/swagger';

export class CreatedProduct {
  @ApiProperty({ description: 'Id of data after created on MongoDB.' })
  _id: string;

  @ApiProperty({})
  name: string;

  @ApiProperty({ description: 'Price of the product.' })
  price: number;

  @ApiProperty({
    description: 'PhoneNumber to contact the product seller.',
  })
  phoneNumber: string;
}
