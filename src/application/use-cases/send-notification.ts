import { Notification } from '../entities/notification';
import { Content } from '../entities/notification/content';

type sendNotificationRequest = {
  recipientId: string;
  content: string;
  category: string;
};
type sendNotificationResponse = {
  notification: Notification;
};

export class SendNotification {
  async execute(
    request: sendNotificationRequest,
  ): Promise<sendNotificationResponse> {
    const { recipientId, category, content } = request;

    const notification = new Notification({
      recipientId,
      content: new Content(content),
      category,
    });

    return { notification };
  }
}
