const express = require('express')
const router = express.Router()

router.get("/", (req, res) => {
    res.json({ msg: "this is users route" })
})

module.exports = router