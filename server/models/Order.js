const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new mongoose.Schema({
	anonymousAccessToken: String,
  sellerPayout: Number,
	billingAddress: {
    type: Schema.Types.ObjectId,
    ref: 'Address'
  },
  shippingAddressId: {
    type: Schema.Types.ObjectId,
    ref: 'Address'
  },
	userId: {
		type: Schema.Types.ObjectId,
		ref: 'User'
	},
	paymentMethod: {
		type: Schema.Types.ObjectId,
		ref: 'PaymentMethod'
	},
	storeId: {
		type: Schema.Types.ObjectId,
		ref: 'Store'
	},
	bundleId: {
		type: Schema.Types.ObjectId,
		ref: 'Bundle'
	},
	orderInvoiceId: {
		type: Schema.Types.ObjectId,
		ref: 'OrderInvoice'
	},
  status: String, // need-to-fulfill, shipped, delivered, paid-out
  deliveredAt: Date
}, {timestamps: true});

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;
