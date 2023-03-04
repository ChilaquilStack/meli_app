const express = require("express")
const cors = require('cors')

const app = express()

const itemsRoutes = require("./routes/items")

const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/api/v1/items", itemsRoutes)

app.listen(PORT, () => console.log(`server listen on port ${PORT}`))