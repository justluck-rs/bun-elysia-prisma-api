import { Elysia, t } from "elysia";
import { add, findAll, findById, remove } from "../handlers/flights.handler";

export const flighRoutes = (app: Elysia) => (
    app.get('/flights', async () => {
        const result = findAll();
        return result;
    }),
    app.post('/flight', async ({body}) => {
        await add(body)
    }, {
        body: t.Object({
            origin: t.String(),
            destination: t.String(),
            airline: t.String(),
            price: t.Number(),
            departure: t.String(),
        })
    }),
    app.get('/flight/:id', async ({params}) => {
        const flight = findById(params.id);
        return flight;
    }),
    app.delete('/flight/:id', async ({params}) => {
        await remove(params.id);
    })
)