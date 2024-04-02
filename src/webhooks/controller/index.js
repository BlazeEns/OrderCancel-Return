import shopModel from '../../model/shopSchema';

export const appUninstall = async(req,res)=>{
    try {
        const {domain} = req.body
        console.log(">>>>>>>>>>>>6<<<<<<<<<<<<<",domain);
        const ds = await Promise.all([
            shopModel.findOneAndDelete({shopName:domain}),
        ])
console.log("data found and delete",ds);
res.status(200).json({
    msg:"data found and delete here ",
    status:200
})
    } catch (error) {
     console.log("app unistall error",error);
     res.status(200).json({
        status: 404,
        message: "error 404!"
    });   
    }
}
