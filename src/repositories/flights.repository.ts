import AddFlightsService from "../services/addFlights.service";
import findAllFlightsService from "../services/findAllFlights.service";
import findUniqueFlightService from "../services/findUniqueFlight.service";
import { FlightsType } from "../dtos/flights";
import RemoveFlightService from "../services/removeFlight.service";

class FlightRepository {
  async findAll() {
    const flights = await findAllFlightsService.findAll();
    return flights;
  }

  async add(dtoData: FlightsType) {
    const addFlights = await AddFlightsService.add(dtoData);
    return addFlights;
  }

  async findById(id: string) {
    const findUniqueFlight = await findUniqueFlightService.findById(id);
    return findUniqueFlight;
  }

  async remove(id: string) {
    const removeFlight = await RemoveFlightService.remove(id);
    return removeFlight;
  }
}

export default new FlightRepository;
