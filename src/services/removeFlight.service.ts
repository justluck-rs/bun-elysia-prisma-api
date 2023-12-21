import prisma from "../database/prisma";

class RemoveFlightService {
  async remove(id: string) {
    return await prisma.flight.delete({
      where: { id },
    });
  }
}
export default new RemoveFlightService;
