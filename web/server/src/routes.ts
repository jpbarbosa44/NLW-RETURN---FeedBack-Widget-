import express from 'express';
import nodemailer from 'nodemailer'
import { NodemailerMailAdapter } from './adapters/nodemailer/nodemailer-mail-adapter';
import { PrismaFeedbacksRepository } from './database/prisma/prisma-feedbacks-repository';
import { prisma } from './prisma';
import { SubmitFeedbackUseCase } from './services/submit-feedback-use-case';



export const routes = express.Router()

routes.post('/feedbacks', async (req, res) => {
    const {type, comment, screenshot} = req.body
    const prismaFeedbackRepository = new PrismaFeedbacksRepository()
    const nodemailerMailAdapter = new NodemailerMailAdapter()

    
    const submitFeedbackUseCase = new SubmitFeedbackUseCase(
      prismaFeedbackRepository,
      nodemailerMailAdapter
    )

    await submitFeedbackUseCase.execute({
      type,
      comment,
      screenshot
    })
})