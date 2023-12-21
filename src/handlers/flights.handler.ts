import { AddFlightsDTO } from "../dtos/flights";
import flightsRepository from "../repositories/flights.repository";

export async function findAll() {
  const flights = await flightsRepository.findAll();
  return flights;
}

export async function add(data: AddFlightsDTO) {
  await flightsRepository.add(data);
}

export async function findById(id: string) {
  const flight = await flightsRepository.findById(id);
  return flight;
}

export async function remove(id: string) {
  await flightsRepository.remove(id);
}
