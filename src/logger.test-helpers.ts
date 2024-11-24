import { Logger } from 'pino';

export const mockLogger = {
  info: jest.fn(),
} as unknown as Logger;
