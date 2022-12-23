import { Body, Controller, Post } from '@nestjs/common';
import { SendNotification } from '../../../application/use-cases/send-notification';
import { PrismaNotificationsRepository } from '../../../infrastructure/databases/prisma/repositories/prisma-notifications-repository';
import { CreateNotificationBody } from '../dtos/create-notificaion.body';

@Controller('notifications')
export class NotificationController {
  private readonly sendNotification: SendNotification;
  private readonly prismaNotificationRepository: PrismaNotificationsRepository;

  constructor(
    sendNotification: SendNotification,
    prismaNotificationRepository: PrismaNotificationsRepository,
  ) {
    this.sendNotification = sendNotification;
    this.prismaNotificationRepository = prismaNotificationRepository;
  }

  @Post()
  async create(@Body() body: CreateNotificationBody) {
    const { recipientId, content, category } = body;
    const { notification } = await this.sendNotification.execute({
      content,
      category,
      recipientId,
    });

    await this.prismaNotificationRepository.create(notification);

    return { notification };
  }
}
