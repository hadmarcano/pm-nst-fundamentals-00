import { Controller, Get, Query, Param } from '@nestjs/common';
import { CategoriesService } from 'src/service/categories/categories.service';

const service = new CategoriesService();

@Controller('categories')
export class CategoriesController {
  @Get('')
  get(@Query() queries: any) {
    const { limit } = queries;
    return `category limit=> ${limit}`;
  }

  @Get('category/:categoryId')
  getOne(@Param() categoryId: string): string {
    const result = service.getOne(categoryId);
    return result;
  }
}
