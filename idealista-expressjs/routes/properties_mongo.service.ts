import Property, { IProperty } from '../models/property';

// Retrieve all properties
const getProperties = async () => await Property.find();

// Add a new property
const addProperty = async (_newProperty: any) => {
    const newProperty = new Property(_newProperty);
    const savedProperty = await newProperty.save();
    return savedProperty;
}

// Delete a property by id
const deleteProperty = async (id: number) => {
    const deletedProperty = await Property.findByIdAndDelete(id);
    if (deletedProperty) {
        return true;
    }
    return false;
}

export { getProperties, addProperty, deleteProperty };
