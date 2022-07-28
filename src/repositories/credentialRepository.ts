import { CreateCredentialData } from "../services/credentialService.js";
import { prisma } from "../database/database.js";

export async function insertCredential(userId: number, credential: CreateCredentialData) {
    return prisma.credential.create({
      data: {...credential, userId }
    })
  }

export async function getAll(userId: number) {
  return prisma.credential.findMany({
    where: { userId }
  })
}

export async function getCredential(userId: number, credencialId: number) {
  return prisma.credential.findFirst({
    where: {
      userId,
      id: credencialId
    }
  })
}

export async function getCredentialByTitle(userId: number, title: string) {
  return prisma.credential.findFirst({
    where: { userId, title }
  })
}

