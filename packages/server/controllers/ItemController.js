const fetch = require("node-fetch");

const baseUrl = "https://api.mercadolibre.com"

const ItemController = {

    getItems: async (req, res) => {
        let item, response
        const { q } = req.query
        const { id } = req.params
        try {
            if( q ) {
                response = await fetch(`${baseUrl}/sites/MLA/search?q=${q}&limit=4`)
                item = await response.json()
            }
            if( id ) {
                const [itemResponse, descriptionResponse] = await Promise.all([fetch(`${baseUrl}/items/${id}`), fetch(`${baseUrl}/items/${id}/description`)])
                const [itemData, descriptionData] = await Promise.all([itemResponse.json(), descriptionResponse.json()])
                item = itemData
                item.description = descriptionData;
            }
            return res.json(item).status(200)
        } catch (error) {
            return res.json({message: error.message}).status(500)
        }
    }

}

module.exports = ItemController