import { Router } from "express";
import { authCallback ,shopify} from "./auth/controller";
// import ratingReviewModel from "../model/ratingreviewSchema"
const router = Router();
//routes authcallback  and shopify 
router.get('/auth/callback', authCallback)
router.get('/shopify',shopify)
//check health status
router.get('/health', (req, res) => {
    // console.log(process.env.SHOPIFY_API_KEY);
    res.status(200).json({
        message: "i am ok with my rating-reviewApp)"
    })
})




export default router;