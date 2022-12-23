import { Injectable } from '@nestjs/common';
import { Notification } from 'src/application/entities/notification';
import { NotificationRepository } from '../../../../application/repositories/notifications-repository';
import { PrismaService } from '../../prisma.service';

@Injectable()
export class PrismaNotificationsRepository implements NotificationRepository {
  private prismaService: PrismaService;
  constructor(prismaService: PrismaService) {
    this.prismaService = prismaService;
  }

  async create(notification: Notification): Promise<void> {
    await this.prismaService.notification.create({
      data: {
        id: notification.id,
        category: notification.category,
        content: notification.content.value,
        createdAt: notification.createdAt,
        recipientId: notification.recipientId,
        readAt: notification.readAt,
      },
    });
  }
}
