const express = require('express')
const router = express.Router()

//get order
router.get("/", (req, res) => {
    res.json({
        msg : "get oder"
    })
})

//register order
router.post("/", (req, res) => {
    const order = {
        product : req.body.productId,
        quentity : req.body.qty
    }
    res.json({
        msg : "register order",
        orderInfo : order
    })
})

//update order
router.patch("/", (req, res) => {
    res.json({
        msg : "updated order"
    })
})

//delete order
router.delete("/", (req, res) => {
    res.json({
        msg : "deleted order"
    })
})

module.exports = router