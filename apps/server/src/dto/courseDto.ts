export class CreateCourseDto {
  title: string;
  description: string;
  createdById: string;
}

export type UpdateCourseDto = Partial<CreateCourseDto>;
