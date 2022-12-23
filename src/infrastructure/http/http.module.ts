import { Module } from '@nestjs/common';
import { SendNotification } from '../../application/use-cases/send-notification';
import { DatabaseModule } from '../databases/database.mudule';
import { NotificationController } from './controllers/notification.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationController],
  providers: [SendNotification],
})
export class HttpModule {}
