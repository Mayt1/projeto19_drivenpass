import { prisma } from "../database/database.js";
import { CreateCardData } from "../services/cardService.js";

export async function getAll(userId: number) {
  return prisma.card.findMany({
    where: { userId }
  })
}

export async function getCard(userId: number, cardId: number) {
  return prisma.card.findFirst({
    where: {
      userId,
      id: cardId
    }
  })
}

export async function getCardByTitle(userId: number, title: string) {
  return prisma.card.findFirst({
    where: { userId, title }
  })
}

export async function insertCard(userId: number, card: CreateCardData) {
  return prisma.card.create({
    data: {...card, userId }
  })
}
