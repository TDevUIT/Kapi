import { SetMetadata } from '@nestjs/common';

export const RESPONSE_MESSAGE_METADATA = 'Message';

export const ResponseMessage = (message: string) =>
  SetMetadata(RESPONSE_MESSAGE_METADATA, message);
