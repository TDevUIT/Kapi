import { IsEnum, IsNotEmpty, IsString, IsOptional } from 'class-validator';
import { NOTIFICATION_TYPE, NOTIFICATION_STATUS } from '@prisma/client';
import { PartialType } from '@nestjs/mapped-types';

export class CreateNotificationDto {
  @IsEnum(NOTIFICATION_TYPE)
  type: NOTIFICATION_TYPE;

  @IsString()
  @IsNotEmpty()
  message: string;

  @IsOptional()
  @IsString()
  sentAt?: string;

  @IsEnum(NOTIFICATION_STATUS)
  status: NOTIFICATION_STATUS;

  @IsString()
  userId: string;
}
export class UpdateNotificationDto extends PartialType(CreateNotificationDto) {}
