const mongoose = require('mongoose');

const productTagsSchema = new mongoose.Schema({
	createdAt: Date,
	updatedAt: Date,
	title: String,
	description: String,
	handle: String,
});

const ProductTags = mongoose.model('ProductTag', productTagsSchema);
module.exports = ProductTags;