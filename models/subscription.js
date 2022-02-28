import mongoose from 'mongoose'

const {Schema} = mongoose

const subscriptionSchema = new Schema({
    data: {
        type: String,
        trim: true,
        required: true,
    }
        

})

export default mongoose.model('Subscription', subscriptionSchema)