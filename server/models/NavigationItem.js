const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const navigationItemSchema = new mongoose.Schema({
	createdAt: Date,
	updatedAt: Date,
	title: String,
	handle: String,
	thumbnailURI: String,
	parentId: {
		type: Schema.Types.ObjectId,
		ref: 'NavigationItem'
	},
	menuId: {
		type: Schema.Types.ObjectId,
		ref: 'NavigationMenu'
	},
	children: [ {
		type: Schema.Types.ObjectId,
		ref: 'NavigationItem'
	}],
	mainTagHandle:String,
	mainTagId: Schema.Types.ObjectId,
	tagHandles:[String],
	tagIds: [{
		type: Schema.Types.ObjectId,
		ref: 'ProductTags'
	}]
});

const NavigationItem = mongoose.model('NavigationItem', navigationItemSchema);
module.exports = NavigationItem;
