import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const orderCancelSchema = Schema({
    orderCancelID: { type: String },
    customer: { type: mongoose.Schema.Types.Mixed },
    line_items: [{ type: mongoose.Schema.Types.Mixed }], 
    shipping_address: { type: mongoose.Schema.Types.Mixed }, 
    shipping_lines: [{ type: mongoose.Schema.Types.Mixed }], 
    cancelled_at: { type: String },
    cancel_reason: { type: String },
    checkout_id: { type: String },
    billing_address: { type: mongoose.Schema.Types.Mixed }, 
  },
  { timestamps: true }
);

const OrderCancel = model('OrderCancel', orderCancelSchema);

export default OrderCancel;
