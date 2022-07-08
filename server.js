const express = require("express")
const edtRoutes = require("./src/edt/routes")

const app = express()
const port = 3000;

app.use(express.json());

app.use("/api/v1/edt", edtRoutes);

app.listen(port,() => console.log("app listening on port " + port));