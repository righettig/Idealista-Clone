const express = require('express');
const cors = require('cors');
const propertiesRouter = require('./routes/properties');
const app = express();

app.use(cors());

// const corsOptions = {
//     origin: 'http://localhost:3000', // Only allow requests from this origin
//     methods: 'GET,POST,PUT,DELETE', // Allowed methods
//     allowedHeaders: 'Content-Type,Authorization', // Allowed headers
// };

app.use(express.json());

app.use('/properties', propertiesRouter);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
