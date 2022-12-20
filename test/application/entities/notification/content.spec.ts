import { Content } from '../../../../src/application/entities/notification/content';

describe('Notification Content', () => {
  it('it should be able to create a notification content', () => {
    const content = new Content('You receive a request friend');
    expect(content).toBeTruthy();
  });

  it('it should not be able to create a notification content with less than 5 characters', () => {
    expect(() => new Content('aaa')).toThrow();
  });
});
