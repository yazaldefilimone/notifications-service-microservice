import { SendNotification } from '../../../src/application/use-cases/send-notification';

describe('Send Notification', () => {
  it('should br able to send a  notification', async () => {
    const sendNotification = new SendNotification();

    const { notification } = await sendNotification.execute({
      content: 'This is a notification',
      category: 'social',
      recipientId: 'exemple-recipient-id',
    });

    expect(notification).toBeTruthy();
  });
});
