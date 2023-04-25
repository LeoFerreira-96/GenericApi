import mongoose, { Schema } from 'mongoose'

const CategorySchema = new Schema ({
    category: {
        type: String,
        required: true,
        uppercase: true
    }
})

export default mongoose.model ('Category', CategorySchema)