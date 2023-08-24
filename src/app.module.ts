import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './controller/products/products.controller';
import { CategoriesController } from './controller/categories/categories.controller';
import { ProductsService } from './service/products/products.service';
import { CategoriesService } from './service/categories/categories.service';

@Module({
  imports: [],
  controllers: [
    AppController,
    ProductsController, // 👈
    CategoriesController, // 👈
    // BrandsController,  // 👈
    // CustomerController,  // 👈
    // UsersController,  // 👈
  ],
  providers: [
    AppService,
    ProductsService, // 👈
    CategoriesService, // 👈
    // BrandsService,  // 👈
    // CustomersService,  // 👈
    // UsersService,  // 👈
  ],
})
export class AppModule {}
