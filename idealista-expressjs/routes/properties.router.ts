import express, { Request, Response } from 'express';

import { getProperties, addProperty, deleteProperty } from './properties.service';

const router = express.Router();

// Get all properties
router.get('/', (req: Request, res: Response) => {
    console.log("Retrieving properties");
    try {
        const properties = getProperties();
        res.json(properties);
    } catch (error) {
        console.error('Error retrieving properties:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Add a new property
router.post('/', (req: Request, res: Response) => {
    console.log("Adding new property");
    try {
        const newProperty = req.body;

        // Validate property data
        if (!newProperty.title || !newProperty.address || !newProperty.price) {
            return res.status(400).json({ message: 'Missing required property fields' });
        }

        const addedProperty = addProperty(newProperty);
        res.status(201).json(addedProperty);
    } catch (error) {
        console.error('Error adding property:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Delete a property by id
router.delete('/:id', (req: Request, res: Response) => {
    console.log("Deleting property");
    try {
        const id = parseInt(req.params.id, 10);
        if (isNaN(id)) {
            return res.status(400).json({ message: 'Invalid property ID' });
        }

        const success = deleteProperty(id);
        if (success) {
            res.status(204).send(); // No content
        } else {
            res.status(404).json({ message: 'Property not found' });
        }
    } catch (error) {
        console.error('Error deleting property:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

export default router;