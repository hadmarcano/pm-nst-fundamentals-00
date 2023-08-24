import {
  Controller,
  Get,
  Param,
  Query,
  Post,
  Body,
  Put,
  Delete,
  HttpCode,
  HttpStatus,
  UsePipes,
  Res,
  Req,
  ValidationPipe,
} from '@nestjs/common';
import { CreateProductDto } from 'src/dtos/product/create-product.dto';
import { UpdateProductDto } from 'src/dtos/product/update-product.dto';

// import { ValidationPipe } from 'src/pipes/validation.pipe';
import { JoiValidationPipe } from 'src/pipes/schemaValidation.pipe';
import { createProductSchema } from 'src/schemas/product/createProductSchema';

import { ProductsService } from 'src/service/products/products.service';

@Controller('products')
export class ProductsController {
  constructor(private productService: ProductsService) {}

  @Get('')
  async get(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    const response = this.productService.getAll();
    if (response) {
      return {
        message: 'action get all',
        result: response,
      };
    } else {
      return {
        message: 'action get all',
        result: 'ERROR',
      };
    }
  }

  @Post('')
  // @UsePipes(new JoiValidationPipe(createProductSchema))
  @HttpCode(HttpStatus.CREATED)
  async create(
    @Body(
      new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
      }),
    )
    payload: CreateProductDto,
  ) {
    const result = this.productService.createOne(payload);
    return {
      message: result,
      payload,
    };
  }

  @Get(':id')
  async getOne(@Param('id') id: string) {
    const result = this.productService.getOne(id);
    return {
      message: 'action get one',
      result,
    };
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body(
      new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
      }),
    )
    payload: UpdateProductDto,
  ) {
    const result = this.productService.updateOne(id, payload);
    return {
      message: result,
      payload,
    };
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return {
      message: `The productId: ${id} has been deleted`,
    };
  }
}
