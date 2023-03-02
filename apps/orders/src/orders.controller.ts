import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '@app/common';

import { CreateOrderRequest } from './dto/CreateOrderRequest';
import { OrdersService } from './orders.service';

/*
    Swagger Imports
*/

import {
  ApiTags,
  ApiOperation,
  ApiCreatedResponse,
  ApiUnauthorizedResponse,
  ApiBody,
  ApiOkResponse,
} from '@nestjs/swagger';
import { CreatedProduct } from './swagger/product-swagger';

@ApiTags('orders')
// http://localhost:3000/orders
@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @ApiOperation({
    summary: 'Create a new Order',
    description:
      'WARNING! The user need do the login to create the order of product.',
  })
  @ApiBody({
    type: CreateOrderRequest,
  })
  @ApiCreatedResponse({
    description: 'The new order of some product has successfully created.',
    type: CreatedProduct,
  })
  @ApiUnauthorizedResponse({
    description: 'Product can not be created. User is not logged.',
  })
  @Post()
  @UseGuards(JwtAuthGuard)
  async createOrder(@Body() request: CreateOrderRequest, @Req() req: any) {
    return this.ordersService.createOrder(request, req.cookies?.Authentication);
  }

  @ApiOperation({
    summary: 'Get all the orders.',
  })
  @ApiOkResponse({
    description: 'Return a array of all product objects.',
    type: CreatedProduct,
    isArray: true,
  })
  @Get()
  async getOrders() {
    return this.ordersService.getOrders();
  }
}
