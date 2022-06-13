const app = require("./app")

const port = process.env.PORT ? process.env.PORT : 4000
app.listen(port, "0.0.0.0", () => {
    console.log(`server is running on: http://0.0.0.0:${port}`);
})