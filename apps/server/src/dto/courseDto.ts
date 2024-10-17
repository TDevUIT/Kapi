import { PartialType } from '@nestjs/mapped-types';
export class CreateCourseDto {
  title: string;
  description: string;
  createdById: string;
}

export class UpdateCourseDto extends PartialType(CreateCourseDto) {}
