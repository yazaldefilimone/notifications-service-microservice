import { Notification } from '../../../src/application/entities/notification';
import { SendNotification } from '../../../src/application/use-cases/send-notification';

const notifications: Notification[] = [];
const notificationRepository = {
  async create(notification: Notification) {
    notifications.push(notification);
  },
};

describe('Send Notification', () => {
  it('should br able to send a  notification', async () => {
    const sendNotification = new SendNotification(notificationRepository);

    await sendNotification.execute({
      content: 'This is a notification',
      category: 'social',
      recipientId: 'exemple-recipient-id',
    });

    expect(notifications).toHaveLength(1);
  });
});
