import { Router } from "express";
import shopModel from "../model/shopSchema";
import orderCancelModel from "../model/orderCancelSchema";

import axios from "axios";


const router = Router();

router.post('/orderCancel',async(req,res)=>{
    try {
        console.log("line 12",req.body);
        const { id, customer, line_items, shipping_address, shipping_lines, cancelled_at, cancel_reason, checkout_id, billing_address } = req.body;
        const newOrder = new orderCancelModel({
          orderCancelID:id,
          customer,
          line_items,
          shipping_address,
          shipping_lines,
          cancelled_at,
          cancel_reason,
          checkout_id,
          billing_address,
        });
        const savedOrder = await newOrder.save();
        res.status(200).json({ message: 'Order cancelled successfully', order: savedOrder });
      } catch (error) {
        console.error('Error cancelling order:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }

})


export default router;


