const showProducts = async (req, res, db) => {
	try {
		const data = await db.select('*').from('products').orderBy('item_id', 'desc');
		res.status(200).send(data);
	} catch (error) {
		console.error(error.message);
	}
};

const showSingleProduct = async (req, res, db) => {
	try {
		const { item_id } = req.params;
		const data = await db.select('*').from('products').where({ item_id: item_id });
		res.status(200).send(data);
	} catch (error) {
		console.error(error.message);
	}
};

module.exports = {
	showProducts,
	showSingleProduct
}