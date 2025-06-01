import mongoose from "mongoose";
const Schema = mongoose.Schema;

const BrandSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	products: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Product",
		},
	],
});

const Brand = mongoose.model("Brand", BrandSchema);

export default Brand;
