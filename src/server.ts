import express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const app = express()

app.get('/games', async (req, res) => {
  const games = await prisma.game.findMany({
    include: {
      _count: {
        select: {
          ads: true,
        }
      }
    }
  })
  return res.json(games)
})

app.post('/ads', (req, res) => {
  return res.status(201).json([])
})

app.get('/games/:id/ads', (req, res) => {
  return res.json([
    { id: 1, name: 'Anuncio 1' },
    { id: 2, name: 'Anuncio 2' },
    { id: 3, name: 'Anuncio 3' },
    { id: 4, name: 'Anuncio 4' },
  ])
})

app.get('/ads/:id/discord', (req, res) => {
  return res.json([])
})

app.listen(3333)