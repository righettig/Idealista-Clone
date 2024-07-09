import * as dotenv from 'dotenv';

import express from 'express';
import cors, { CorsOptions } from 'cors';
import propertiesRouter from './routes/properties.router';

const environment = (process.env.NODE_ENV || '').trim();
console.log(`Running in ${environment} mode`);

dotenv.config({
    path: `.env.${environment || 'development'}`
});

const app = express();

const corsOptions: CorsOptions = {
    origin: process.env.CORS_ORIGIN,
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type,Authorization'
};

app.use(cors(corsOptions));
app.use(express.json());

app.use('/properties', propertiesRouter);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
