import { Controller, Get, Param, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { Course, Lesson } from '@prisma/client';
import { CourseService } from './course.service';
import { AuthGuard as JWTGuard } from '../auth/google.guard';
@Controller('course')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  @UseGuards(JWTGuard)
  @Get()
  async getCourses(@Req() req: Request): Promise<Course[]> {
    const userId = req['user'].id;
    if (!userId) {
      throw new Error('User ID not found');
    }
    return this.courseService.getCourses(userId);
  }
  @Get(':id')
  async getCourseDetails(@Param('id') id: number): Promise<Course> {
    return this.courseService.getCourseDetails(id);
  }
  @Get(':id/lessons')
  async getLessonsByCourseId(@Param('id') id: number): Promise<Lesson[]> {
    return this.courseService.getLessonsByCourseId(id);
  }
}
