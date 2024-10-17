import { Module } from '@nestjs/common';
import { HealthController, HealthService } from './healthy.service';

@Module({
  controllers: [HealthController],
  providers: [HealthService],
})
export class HealthModule {}
