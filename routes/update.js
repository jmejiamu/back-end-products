const updateLike = async (req, res, db) => {
    try {
        const { item_id } = req.params;
        let increment = 1;
        const data = await db.select('likes').from('products').where({ item_id: item_id });
        let updatebyone = data[0].likes + increment;
        await db('products').update({ likes: updatebyone }).where({ item_id: item_id })
        res.status(200).send({ response: "update" })
    } catch (error) {
        console.error(error.message);
    }
}

module.exports = {
    updateLike
}