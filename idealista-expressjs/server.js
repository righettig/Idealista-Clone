const environment = (process.env.NODE_ENV || '').trim();
console.log(`Running in ${environment} mode`);

require('dotenv').config({
    path: `.env.${environment || 'development'}`
});

const express = require('express');
const cors = require('cors');
const propertiesRouter = require('./routes/properties.router');
const app = express();

const corsOptions = {
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
