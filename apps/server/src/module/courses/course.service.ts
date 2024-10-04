import { Injectable, NotFoundException } from '@nestjs/common';
import { Course, Lesson } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CourseService {
  constructor(private readonly prisma: PrismaService) {}
  async getCourses(userId: string): Promise<Course[]> {
    return this.prisma.course.findMany({
      where: {
        createdById: userId,
      },
      include: {
        lessons: true,
      },
    });
  }
  async getCourseDetails(id: number): Promise<Course> {
    const course = await this.prisma.course.findUnique({
      where: { id },
      include: {
        lessons: true,
        createdBy: true,
      },
    });

    if (!course) {
      throw new NotFoundException(`Course with ID ${id} not found`);
    }

    return course;
  }
  async getLessonsByCourseId(id: number): Promise<Lesson[]> {
    const course = await this.prisma.course.findUnique({
      where: { id },
      include: {
        lessons: true,
      },
    });

    if (!course) {
      throw new NotFoundException(`Course with ID ${id} not found`);
    }

    return course.lessons;
  }
}
