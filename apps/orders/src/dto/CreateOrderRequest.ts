import {
  IsNotEmpty,
  IsPhoneNumber,
  IsPositive,
  IsString,
} from 'class-validator';

/*
  Swagger Imports
*/

import { ApiProperty } from '@nestjs/swagger';

export class CreateOrderRequest {
  @ApiProperty({
    default: 'T-Shirt',
    description: 'Name of the product.',
    name: 'name',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    default: 45,
    description: 'Price of the product',
    name: 'price',
  })
  @IsPositive()
  price: number;

  @ApiProperty({
    default: '+5595386-4852',
    description: 'PhoneNumber to contact the product seller.',
    name: 'phoneNumber',
  })
  @IsPhoneNumber()
  phoneNumber: string;
}
