import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  try {
    const messages = await prisma.contactMessage.findMany()
    console.log("Database connected successfully. Contact Messages:", messages.length)
  } catch (error) {
    console.error("Failed to connect to database:", error)
  } finally {
    await prisma.$disconnect()
  }
}

main()
