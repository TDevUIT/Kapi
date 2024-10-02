import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { format } from 'date-fns';
import { Reflector } from '@nestjs/core';
import { RESPONSE_MESSAGE_METADATA } from '../decorator/response-message.decorator';

export type Response<T> = {
  status: boolean;
  statusCode: number;
  path: string;
  message: string;
  data: T | T[];
  timestamp: string;
};

@Injectable()
export class ResponseInterceptor<T> implements NestInterceptor<T, Response<T>> {
  constructor(private reflector: Reflector) {}

  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<Response<T>> {
    return next.handle().pipe(
      map((res: T) => this.createResponse(res, context)),
      catchError((err: HttpException) =>
        throwError(() => this.createError(err, context)),
      ),
    );
  }

  private createError(exception: HttpException, context: ExecutionContext) {
    const { url } = context.switchToHttp().getRequest();
    const status = exception.getStatus
      ? exception.getStatus()
      : HttpStatus.INTERNAL_SERVER_ERROR;
    return {
      status: false,
      statusCode: status,
      path: url,
      message: exception.message,
      result: exception,
      timestamp: format(new Date(), 'yyyy-MM-dd HH:mm:ss'),
    };
  }

  private createResponse(res: T, context: ExecutionContext): Response<T> {
    const { url } = context.switchToHttp().getRequest();
    const { statusCode } = context.switchToHttp().getResponse();
    const message =
      this.reflector.get<string>(
        RESPONSE_MESSAGE_METADATA,
        context.getHandler(),
      ) || 'success';

    return {
      status: true,
      statusCode,
      path: url,
      message,
      data: res,
      timestamp: format(new Date(), 'yyyy-MM-dd HH:mm:ss'),
    };
  }
}
