import Order from "../models/Order.js"

const getOrders = async (req, res) => {
    const orders = await Order.find()
    res.status(200).json({ results: orders })
}

const setOrder = async (req, res) => {
    const id = req.body.id
    const user_id = req.body.user_id
    const products = req.body.products
    await Order.create({
        _id: id,
        user_id: user_id,
        products: products
    })
    res.status(200).json({ message: "Order has been added" })
}

export {
    getOrders,
    setOrder
}