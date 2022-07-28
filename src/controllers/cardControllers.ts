import { Request, Response } from "express";

import cardService from "../services/cardService.js";


export async function createCard(req: Request, res: Response) {
    const {user} = res.locals;
    const card = req.body;
  
    await cardService.createCard(user, card);
    res.sendStatus(201); 
  }

export async function getAllCards(req: Request, res: Response) {
  const { user } = res.locals;
  const cards = await cardService.getAll(user.id);
  res.send(cards);
}

export async function getCard(req: Request, res: Response) {
  const { user } = res.locals;
  const cardId = parseInt(req.params.id);
  if(isNaN(cardId)) {
    res.sendStatus(422); 
  }

  const card = await cardService.getCard(user.id, cardId);
  res.send(card);
}
