import prisma from "../database/prisma";

class FindAllFlightService {
  async findAll() {
    return await prisma.flight.findMany({
      orderBy: { price: "desc" },
      include: { reservations: true },
    });
  }
}
export default new FindAllFlightService();
