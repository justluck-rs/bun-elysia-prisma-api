import prisma from "../database/prisma";

class FindUniqueFlightService {
  async findById(id: string) {
    return prisma.flight.findUnique({
      where: { id },
      include: { reservations: true },
    });
  }
}
export default new FindUniqueFlightService();
