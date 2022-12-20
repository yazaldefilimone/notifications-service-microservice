import { Content } from './content';

export type notificationProps = {
  recipientId: string;
  content: Content;
  category: string;
  readAt?: Date | null;
  createAt: Date;
};

export class Notification {
  private props: notificationProps;
  constructor(props: notificationProps) {
    this.props = props;
  }

  public set recipientId(recipientId: string) {
    this.props.recipientId = recipientId;
  }

  public get recipientId(): string {
    return this.props.recipientId;
  }

  public set content(content: Content) {
    this.props.content = content;
  }
  public get content(): Content {
    return this.content;
  }

  public get category(): string {
    return this.props.category;
  }

  public set category(category: string) {
    this.props.category = category;
  }

  public get readAt(): Date | null | undefined {
    return this.props.readAt;
  }
  public set readAt(readAt: Date | null | undefined) {
    this.props.readAt = readAt;
  }

  public get createdAt(): Date {
    return this.props.createAt;
  }
  public set createdAt(createAt: Date) {
    this.props.createAt = createAt;
  }
}
