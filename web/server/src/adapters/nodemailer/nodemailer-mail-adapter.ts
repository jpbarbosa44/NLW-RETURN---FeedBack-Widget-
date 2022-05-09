import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "56d4ea544f2c78",
      pass: "95a35b1a0a7d5f"
    }
  });

export class NodemailerMailAdapter implements MailAdapter{
  async sendMail({subject, body}: SendMailData){
    await transport.sendMail({
        from: 'Equipe de suporte <suporte@outlook.com>',
        to: 'Joao <jp445barbosa90@outlook.com>',
        subject,
        html: body,
    })
  };
}