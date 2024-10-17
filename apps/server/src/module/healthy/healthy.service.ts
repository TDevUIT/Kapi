import { Injectable } from '@nestjs/common';
import { Controller, Get } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class HealthService {
  constructor(private readonly prisma: PrismaService) {}
  async checkHealth() {
    const dbStatus = await this.checkDatabase();
    return {
      status: 'ok',
      db: dbStatus ? 'up' : 'down',
      timestamp: new Date().toISOString(),
    };
  }

  async checkDatabase() {
    try {
      await this.prisma.$queryRaw`SELECT 1`;
      return true;
    } catch (error) {
      console.error('Database check failed:', error);
      return false;
    }
  }
}

@Controller('health')
export class HealthController {
  constructor(private readonly healthService: HealthService) {}

  @Get()
  async healthCheck() {
    return this.healthService.checkHealth();
  }
}
