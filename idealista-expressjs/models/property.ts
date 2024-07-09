import { Schema, model, Document } from 'mongoose';

interface IProperty extends Document {
    id: string;
    image: string;
    title: string;
    address: string;
    price: string;
    description: string;
}

// By adding toJSON and toObject transformations to your Mongoose schema, 
// you can ensure that the internal _id property is mapped to id whenever documents 
// are converted to JSON or plain objects. 
// This makes it easier to work with the data in your application without having 
// to manually rename _id every time you fetch data from MongoDB.
const PropertySchema = new Schema<IProperty>({
    image: { type: String, required: true },
    title: { type: String, required: true },
    address: { type: String, required: true },
    price: { type: String, required: true },
    description: { type: String, required: true },
}, {
    toJSON: {
        virtuals: true,
        transform: function (doc, ret, options) {
            ret.id = ret._id;
            delete ret._id;
            delete ret.__v;
        }
    },
    toObject: {
        virtuals: true,
        transform: function (doc, ret, options) {
            ret.id = ret._id;
            delete ret._id;
            delete ret.__v;
        }
    }
});

const Property = model<IProperty>('Property', PropertySchema);

export default Property;
export { IProperty };
