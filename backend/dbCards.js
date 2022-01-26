import mongoose from 'mongoose'
const cSchema= mongoose.Schema(
    {
        name: String,
        imgUrl: String
    }
);

export default mongoose.model('cards', cSchema);