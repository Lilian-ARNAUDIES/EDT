const express = require("express")

const edtRoutesCours = require("./src/edt/cours/routesCours")
const edtRoutesSalle = require("./src/edt/salle/routesSalle")
const edtRoutesEns = require("./src/edt/enseignant/routesEns")
const edtRoutesGroupe = require("./src/edt/groupe/routesGroupe")
const edtRoutesMatiere = require("./src/edt/matiere/routesMatiere")

const app = express()
const port = 3000;

app.use(express.json());

app.use("/api/v1/edt/cours", edtRoutesCours);
app.use("/api/v1/edt/salle", edtRoutesSalle);
app.use("/api/v1/edt/ens", edtRoutesEns);
app.use("/api/v1/edt/groupe", edtRoutesGroupe);
app.use("/api/v1/edt/matiere", edtRoutesMatiere);

app.listen(port,() => console.log("app listening on port " + port));