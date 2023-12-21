import prisma from "../database/prisma";
import { AddFlightsDTO } from "../dtos/flights";

class AddFlightsService {
  async add(dtoData: AddFlightsDTO) {
    const { departure, ...rest } = dtoData;
    return await prisma.flight.create({
      data: { departure: new Date(departure), ...rest },
    });
  }
}
export default new AddFlightsService();
