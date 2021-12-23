const app = require("./app")

const port = process.env.PORT ? process.env.PORT : 4000
app.listen(port)