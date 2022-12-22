import { SendNotification } from '../../../src/application/use-cases/send-notification';
import { InMemoryNotificationRepository } from '../repositories/in-memory-notification-repository';

describe('Send Notification', () => {
  it('should br able to send a  notification', async () => {
    const notificationRepository = new InMemoryNotificationRepository();
    const sendNotification = new SendNotification(notificationRepository);

    await sendNotification.execute({
      content: 'This is a notification',
      category: 'social',
      recipientId: 'exemple-recipient-id',
    });

    expect(notificationRepository.notifications).toHaveLength(1);
  });
});
