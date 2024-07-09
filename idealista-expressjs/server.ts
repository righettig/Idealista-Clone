import * as dotenv from 'dotenv';

import express from 'express';
import cors, { CorsOptions } from 'cors';

//import propertiesRouter from './routes/properties.router';
import propertiesRouter from './routes/properties_mongo.router';

import mongoose from 'mongoose';

const environment = (process.env.NODE_ENV || '').trim();
console.log(`Running in ${environment} mode`);

dotenv.config({
    path: `.env.${environment || 'development'}`
});

// TODO: this should only be needed when using the mongo db persistence layer
const mongoUri: string = process.env.MONGO_URI || 'mongodb://localhost:27017/idealista';
mongoose.connect(mongoUri).then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
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
