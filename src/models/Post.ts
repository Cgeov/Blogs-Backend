import {Schema,model} from 'mongoose';

const PostSchema = new Schema({
    title: {type: String, required: true},
    content: {type: String, required: true},
    image: {type: String},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date}
})


export default model('Blogs', PostSchema);