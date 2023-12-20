import { Elysia } from "elysia";
import { findAll } from "../handlers/flights.handler";

export const flighRoutes = (app: Elysia) => (
    app.get('/flights', async () => {
        const result = findAll();
        return result;
    })
)