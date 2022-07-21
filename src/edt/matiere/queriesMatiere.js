var str="\"EDT\"";

const getMatiere = "select * from " + str + ".Matieres";
const getMatiereById = "select * from " + str + ".Matieres where id_matiere=$1";
const checkMatiere = "select * from " + str + ".Matieres where libelle=$1";
const addMatiere = "insert into " + str + ".Matieres (libelle, codeapogee) values ($1, $2)";
const updateMatiere = "update " + str +".Matieres set libelle=$1, codeapogee=$2 where id_matiere=$3";
const removeMatiere = "delete from " + str + ".Matieres where id_matiere = $1";

module.exports = {
    getMatiere,
    getMatiereById,
    checkMatiere,
    addMatiere,
    updateMatiere,
    removeMatiere,
};