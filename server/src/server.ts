import express from 'express';
import cors from 'cors';
import { routes } from './routes';


import * as dotenv from 'dotenv'
dotenv.config({path: ".env"})

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT, () => console.log("Server running on port ", process.env.PORT));
