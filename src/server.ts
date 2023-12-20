import { Elysia } from "elysia";
import { flighRoutes } from "./routes/flights.route";

const PORT = 3001;
new Elysia()
.use(flighRoutes)
.listen(PORT, () => console.log(`server started at http://localhost:${PORT}`));
