import { PrismaClient } from "@prisma/client";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;
    console.log(data);
    const prisma = new PrismaClient();
    const result = await prisma.meetup.create({data: data});
    prisma.$disconnect();

    res.status(201).json({ data: result });
  }
};

export default handler;
