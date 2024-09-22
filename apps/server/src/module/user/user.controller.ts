import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { ResponseMessage } from 'src/decorator/response-message.decorator';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @ResponseMessage('Get user')
  getUser() {
    return [
      {
        id: 1,
        name: 'John Doe',
        email: 'john.doe@example.com',
      },
      {
        id: 1,
        name: 'John Doe',
        email: 'john.doe@example.com',
      },
      {
        id: 1,
        name: 'John Doe',
        email: 'john.doe@example.com',
      },
    ];
  }
}
