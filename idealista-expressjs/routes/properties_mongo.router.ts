import express, { Request, Response } from 'express';
import Property, { IProperty } from '../models/property';

const router = express.Router();

// GET all properties
router.get('/', async (req: Request, res: Response) => {
    try {
        const properties = await Property.find();
        res.json(properties);
    } catch (error) {
        console.error('Error retrieving properties:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// POST a new property
router.post('/', async (req: Request, res: Response) => {
    try {
        const newProperty = new Property(req.body);
        const savedProperty = await newProperty.save();
        res.status(201).json(savedProperty);
    } catch (error) {
        console.error('Error adding property:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// DELETE a property by ID
router.delete('/:id', async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const deletedProperty = await Property.findByIdAndDelete(id);
        if (deletedProperty) {
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
