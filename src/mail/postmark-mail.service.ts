import { MailService } from './mail.service';

export class PostmarkMailService implements MailService {
    sendMail(): string {
        return "SMTP Mail!";
    }
}