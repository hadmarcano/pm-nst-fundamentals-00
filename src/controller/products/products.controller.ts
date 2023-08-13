import { Controller, Get, Param, Query, Post, Body } from '@nestjs/common';
import { ProductsService } from 'src/service/products/products.service';

const service = new ProductsService();

@Controller('products')
export class ProductsController {
  @Get('')
  get(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return `products limit=> ${limit}`;
  }

  @Get('/:productId')
  getOne(@Param('productId') productId: string): string {
    const result = service.getOne(productId);
    return result;
  }

  @Post('')
  create(@Body() payload: any) {
    return {
      message: 'action create',
      payload,
    };
  }
}
