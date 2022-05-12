import mongoose from 'mongoose'
import { connectionString } from "./credentials.js"

const { Schema } = mongoose;

console.log(connectionString)

mongoose.connect(connectionString, {
    dbName: 'sample_analytics',
    useNewUrlParser: true,
    useUnifiedTopology: true
});

let CustomerSchema = new Schema({
    name: String,
    email: {
        type: String, 
        required: true,
        Unique: true
    }
})

export const customer = mongoose.model('customer', CustomerSchema)

