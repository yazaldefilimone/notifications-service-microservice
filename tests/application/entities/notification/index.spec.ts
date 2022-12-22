import { Notification } from '../../../../src/application/entities/notification';
import { Content } from '../../../../src/application/entities/notification/content';

describe('Notification', () => {
  it('should be able to create a notification', () => {
    const notificationProps = {
      content: new Content('You receive a request friend'),
      category: 'social',
      recipientId: 'any-recipient-id',
    };
    const notification = new Notification(notificationProps);

    expect(notification).toBeTruthy();
  });
});
