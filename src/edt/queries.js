var str="\"EDT\"";

const getCours = "select * from " + str + ".cours";
const getCoursByID = "select * from " + str + ".cours where id_cours=$1";
const checkEns = "select s from " + str + ".cours s where s.heure_debut=$1";
const addCours = "insert into " + str + ".cours(id_ens, id_matiere, id_salle, id_groupe, heure_debut, heure_fin, id_cours) VALUES ($1, $2,$3, $4, $5, $6, $7)";
const removeCours = "delete from " + str + ".cours where id = $1";

module.exports = {
    getCours,
    getCoursByID,
    checkEns,
    addCours,
    removeCours,
};