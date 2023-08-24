import { IsString, IsInt, IsNotEmpty, IsPositive } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  readonly id: string;

  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsInt()
  @IsNotEmpty()
  @IsPositive()
  readonly price: number;

  @IsInt()
  @IsNotEmpty()
  @IsPositive()
  readonly stock: number;

  @IsString()
  readonly description?: string;

  @IsString()
  readonly image?: string;
}
