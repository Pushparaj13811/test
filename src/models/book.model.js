import mongoose, { Schema } from "mongoose";


const bookSchema = new Schema({
    name: {
        type: String,
    },
    address: {
        type: String,
    }
}, {
    timestamps: true
})

export const Book = mongoose.model("Book", bookSchema)

