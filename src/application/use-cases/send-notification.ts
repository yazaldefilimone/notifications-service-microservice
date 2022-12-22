import { Notification } from '../entities/notification';
import { Content } from '../entities/notification/content';
import { NotificationRepository } from '../repositories/notifications-repository';

type sendNotificationRequest = {
  recipientId: string;
  content: string;
  category: string;
};
type sendNotificationResponse = {
  notification: Notification;
};

export class SendNotification {
  private notificationRepository: NotificationRepository;

  constructor(notificationRepository: NotificationRepository) {
    this.notificationRepository = notificationRepository;
  }

  async execute(
    request: sendNotificationRequest,
  ): Promise<sendNotificationResponse> {
    const { recipientId, category, content } = request;

    const notification = new Notification({
      recipientId,
      content: new Content(content),
      category,
    });

    await this.notificationRepository.create(notification);

    return { notification };
  }
}
