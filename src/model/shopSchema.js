import { Schema,model } from "mongoose";
const shopSchema = Schema({
    shopName:{
        type:String
    },
    access_token:{
        type:String
    }
},
{timestamps: true},
{
    createdAt:{
        type:Date,
        default:Date.now()
    }
}
)
const shopModel = model('shop',shopSchema)
export default shopModel