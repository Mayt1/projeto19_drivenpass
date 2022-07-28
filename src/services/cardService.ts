import { User, Card } from "@prisma/client";

import { decrypt, encrypt } from "../utils/criptrUtils.js";
import { conflictError, notFoundError } from "../utils/errorUtils.js";
import * as cardRepository from "./../repositories/cardRepository.js";

export type CreateCardData = Omit<Card, "id">;

async function getAll(userId: number) {
  const cards = await cardRepository.getAll(userId);
  return cards.map(card => {
    return {
      ...card, 
      password: decrypt(card.password),
      securityCode: decrypt(card.securityCode)
    }
  })
}

export async function getCard(userId: number, cardId: number) {
  const card = await cardRepository.getCard(userId, cardId);
  if(!card) throw notFoundError("Card doesn't exist");

  return {
    ...card,
    password: decrypt(card.password),
    securityCode: decrypt(card.securityCode)
  }
}

async function createCard(user: User, card: CreateCardData) {
  const existingCard = await cardRepository.getCardByTitle(user.id, card.title);
  if(existingCard) throw conflictError("Title already in use");

  const cardInfos: CreateCardData = {
    ...card, 
    password: encrypt(card.password),
    securityCode: encrypt(card.securityCode)
  }

  await cardRepository.insertCard(user.id, cardInfos);
}

const cardService = {
  getAll,
  getCard,
  createCard,
}

export default cardService;